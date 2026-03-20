# Guía del panel de administración (CMS)

Esta guía es para quienes **actualizan el contenido del sitio** (perros, ventas, eventos, etc.) **sin programar**. El sistema se llama **Sveltia CMS** y el “panel” es una página web con formularios.

---

## Dónde entrar al panel

### Opción A — Sitio ya publicado en internet (recomendado para el día a día)

1. Abrí el navegador (Chrome, Safari, etc.).
2. Entrá a la dirección del sitio y agregá **`/admin`** al final.  
   **Ejemplo:** si el sitio es `https://red-voluntarias.netlify.app`, el panel es  
   `https://red-voluntarias.netlify.app/admin`
3. Si pide **iniciar sesión**, ingresá con el método configurado en Sveltia (habitualmente **GitHub**, por token u OAuth).

### Opción B — En la computadora de casa (solo si alguien técnico lo deja listo)

Hace falta tener el proyecto en la PC y dos ventanas de terminal:

1. En una carpeta del proyecto, ejecutar: `npm run dev`
2. En el navegador: **`http://localhost:4321/admin`**

Los cambios se publican a tu repositorio (GitHub). La actualización suele verse al rato.

---

## Cómo está organizado el panel

A la izquierda (o en el menú) vas a ver **colecciones**. Cada una es un tipo de contenido:

| Nombre en el panel        | Para qué sirve |
|---------------------------|----------------|
| **Perros en Adopción**    | Perros del catálogo “Adoptar” |
| **En familia (ya adoptados)** | Perros adoptados, solo nombre y foto |
| **Campañas**              | Campañas de donación |
| **Ventas (productos)**    | Productos de la sección Ventas |
| **Eventos realizados**    | Eventos pasados con fotos |
| **Urgencias**             | Casos urgentes (se pueden “apagar” cuando se resuelvan) |

Tocá la colección que quieras y vas a ver la lista de ítems. Ahí podés **editar** uno que ya existe o **crear uno nuevo**.

---

## Agregar un perro nuevo

1. Entrá a **Perros en Adopción**.
2. Tocá **New Perros en Adopción** (o “Nuevo…” / el botón de crear).
3. Completá los campos (nombre, sexo, edad, salud, carácter, tamaño, observaciones si hace falta).
4. **Foto:** tocá para subir una imagen desde tu computadora. Se guarda en las imágenes del sitio.
5. **Adoptado:** dejalo en “no” mientras esté en adopción. Cuando ya tenga familia, marcá **Adoptado** (y si querés mostrarlo en “En familia”, cargá también una entrada ahí).
6. Guardá / publicá según lo que muestre el botón (a veces dice **Publish** o **Guardar**).

**Nombre del archivo (slug):** el sistema suele pedir o generar un nombre corto sin espacios, por ejemplo `lola-2025`. Sirve para el archivo interno; no es lo que ve el visitante (el visitante ve el **Nombre** que cargaste).

---

## Agregar un artículo a Ventas

1. Colección **Ventas (productos)** → **Nuevo**.
2. Nombre del producto, descripción, precio (como texto, ej. `$ 12.000`), foto.
3. Guardá / publicá.

La compra **no** se hace por la web: el botón “Comprar” del sitio lleva a **Instagram**.

---

## Agregar un evento realizado

1. Colección **Eventos realizados** → **Nuevo**.
2. Título, subtítulo, descripción.
3. **Fecha (orden):** si podés, usá formato **AAAA-MM-DD** (ej. `2025-03-20`) para que los más nuevos queden arriba.
4. **Fotos:** tocá **Add** / **Agregar** en la lista de fotos y subí cada imagen.
5. Guardá / publicá.

---

## Urgencias

1. Colección **Urgencias** → **Nuevo**: título, descripción, foto.
2. **Mostrar en el sitio:** dejalo en **sí** mientras el caso esté vigente.
3. Cuando ya **no** haga falta ayuda urgente, **editá** la entrada y poné **Mostrar en el sitio** en **no** (así desaparece del sitio sin borrar el registro).

---

## En familia (adoptados)

Solo **nombre** y **foto**. Es independiente del perro “en adopción”: cuando alguien adopta, podés **crear** acá una entrada nueva con la foto que quieran mostrar.

---

## Después de guardar

- **En internet (Pages + GitHub):** al publicar, el CMS suele **mandar los cambios al repositorio**. El sitio se **vuelve a generar** solo en unos minutos y ya se ve lo nuevo.
- Si algo no se ve al instante: esperá 2–5 minutos y recargá la página con **Ctrl+F5** (o borrar caché).

---

## Si algo sale mal

- Revisá que todas las **fotos** hayan subido bien (a veces falla el tamaño o la conexión).
- Si un campo es obligatorio y está vacío, el panel puede no dejar guardar.
- Para dudas técnicas (login, deploy, errores raros), quien mantiene el código o la configuración del CMS puede revisar.

---

## Resumen en una frase para compartir

> *“Entrás a **[tu-sitio]/admin**, iniciás sesión (habitualmente con GitHub), elegís la sección (Perros, Ventas, Eventos…), tocás crear nuevo, completás el formulario, subís la foto y guardás. Al rato el sitio se actualiza solo.”*
