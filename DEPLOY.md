# Guía de Despliegue — Ubuntu 22.04 LTS

Instrucciones para levantar y construir el proyecto **Red Voluntarias** en un entorno Ubuntu 22.04 LTS desde cero.

---

## Requisitos del Sistema

| Dependencia | Versión mínima | Versión recomendada | Notas |
|---|---|---|---|
| **Ubuntu** | 22.04 LTS | 22.04 LTS | Jammy Jellyfish |
| **Node.js** | 18.17.1 | 22.12.0 | Ver `netlify.toml` y `package.json#engines` |
| **npm** | 9.x | 10.x | Incluido con Node.js |
| **Git** | 2.x | latest | Para clonar el repositorio |

> El proyecto **no requiere** base de datos, Docker ni ningún servicio de backend. Es un sitio estático generado con Astro.

---

## 1. Preparar el entorno

### 1.1 Actualizar el sistema

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Instalar Git

```bash
sudo apt install -y git
git --version   # verificar: git version 2.x
```

### 1.3 Instalar Node.js 22 (vía nvm — recomendado)

```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Recargar el shell
source ~/.bashrc

# Instalar la versión exacta usada en producción
nvm install 22.12.0
nvm use 22.12.0
nvm alias default 22.12.0

# Verificar
node --version   # debe mostrar v22.12.0
npm --version    # debe mostrar 10.x
```

> **Alternativa sin nvm:** usar el PPA oficial de NodeSource.
> ```bash
> curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
> sudo apt install -y nodejs
> ```

---

## 2. Obtener el código

```bash
# Clonar el repositorio
git clone <URL_DEL_REPO> red-voluntarias
cd red-voluntarias

# (opcional) Cambiar a la rama correcta si no es main
git checkout main
```

---

## 3. Instalar dependencias

```bash
# Instala las dependencias exactas del package-lock.json (reproducible)
npm ci
```

> Usar `npm ci` en lugar de `npm install` garantiza que se instalen exactamente las versiones del `package-lock.json` (lockfileVersion 3).

Dependencias que se instalan:

| Paquete | Versión |
|---|---|
| `astro` | ^5.0.0 |
| `tailwindcss` | ^4.2.1 |
| `@tailwindcss/vite` | ^4.2.1 |

---

## 4. Variables de entorno (si aplica)

El proyecto actualmente no usa un archivo `.env`. Si en el futuro se agregan claves (ej. para Netlify Identity o servicios externos), crear el archivo antes del build:

```bash
cp .env.example .env   # si existe el archivo de ejemplo
# editar .env con los valores correspondientes
```

---

## 5. Build del sitio estático

```bash
npm run build
```

Esto ejecuta `astro build` y genera el sitio estático en el directorio `./dist/`.

Para verificar que el build fue exitoso:

```bash
ls -lh dist/
# debe listar index.html, _astro/, images/, admin/, etc.
```

---

## 6. Previsualizar el build localmente (opcional)

```bash
npm run preview
# Disponible en http://localhost:4321
```

---

## 7. Servir en producción con Nginx

### 7.1 Instalar Nginx

```bash
sudo apt install -y nginx
```

### 7.2 Copiar el build al directorio web

```bash
sudo cp -r dist/* /var/www/html/red-voluntarias/
# (crear el directorio si no existe)
sudo mkdir -p /var/www/html/red-voluntarias
sudo cp -r dist/* /var/www/html/red-voluntarias/
sudo chown -R www-data:www-data /var/www/html/red-voluntarias
```

### 7.3 Configurar el virtual host

Crear el archivo `/etc/nginx/sites-available/red-voluntarias`:

```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;

    root /var/www/html/red-voluntarias;
    index index.html;

    # SPA fallback — necesario para las rutas de Astro
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # Cache de assets estáticos
    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /images/ {
        expires 30d;
        add_header Cache-Control "public";
    }

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
```

### 7.4 Activar el sitio

```bash
sudo ln -s /etc/nginx/sites-available/red-voluntarias /etc/nginx/sites-enabled/
sudo nginx -t          # verificar configuración
sudo systemctl reload nginx
```

---

## 8. Panel de administración (Decap CMS)

El CMS está disponible en `/admin/` y requiere autenticación con **Netlify Identity** (configurado en `public/admin/config.yml` con `backend: git-gateway`).

Para uso **local** durante el desarrollo:

```bash
# En una terminal separada, dentro del proyecto:
npx decap-server

# En otra terminal:
npm run dev
# CMS disponible en http://localhost:4321/admin/
```

> En producción el CMS funciona exclusivamente a través de Netlify. Si el deploy es en un servidor propio con Nginx, el panel CMS no estará operativo a menos que se configure un backend alternativo.

### Invitaciones y recuperación de contraseña (Identity)

Los mails de Netlify llevan un enlace con un token en el hash (`#invite_token=…`, `#recovery_token=…`, etc.). Ese token lo procesa el **Netlify Identity Widget**. En sitios con más JavaScript en la portada, a veces el modal solo “parpadea” y no se completa el flujo.

En este repo hay una página **mínima** solo para eso: **`/cuenta/`** (`public/cuenta/index.html`), sin otros scripts.

En **Netlify → Project configuration → Identity → Emails**, si podés **personalizar plantillas** (según tu plan), hacé que los enlaces apunten a `/cuenta/` en lugar de la raíz, usando las variables que documenta Netlify, por ejemplo:

- Invitación: `{{ .SiteURL }}/cuenta/#invite_token={{ .Token }}`
- Recuperar contraseña: `{{ .SiteURL }}/cuenta/#recovery_token={{ .Token }}`
- Confirmación de registro: `{{ .SiteURL }}/cuenta/#confirmation_token={{ .Token }}`
- Cambio de mail: `{{ .SiteURL }}/cuenta/#email_change_token={{ .Token }}`

Mientras tanto, el layout del sitio y `/admin/` intentan **abrir el modal a mano** si detectan esos tokens en la URL (`ni.open()` tras `init()`).

---

## 9. Resumen de comandos

```bash
# Clonar e instalar
git clone <URL_REPO> red-voluntarias && cd red-voluntarias
nvm use 22.12.0
npm ci

# Desarrollo local
npm run dev              # http://localhost:4321

# Build para producción
npm run build            # genera ./dist/

# Previsualizar build
npm run preview

# CMS local (requiere npm run dev corriendo)
npx decap-server
```

---

## 10. Solución de problemas comunes

| Problema | Causa probable | Solución |
|---|---|---|
| `EACCES` al instalar npm paquetes globales | Permisos de npm global | Usar nvm (evita este problema) |
| `Error: Cannot find module` al build | `node_modules` incompleto | Borrar `node_modules` y correr `npm ci` nuevamente |
| Nginx devuelve 404 en rutas internas | Falta la directiva `try_files` | Verificar la config del virtual host (sección 7.3) |
| Build falla con errores de Zod | JSON de contenido inválido | Revisar los archivos en `src/content/` contra los esquemas en `src/content.config.ts` |
| Puerto 4321 bloqueado | Firewall de Ubuntu | `sudo ufw allow 4321/tcp` (solo para dev) |
