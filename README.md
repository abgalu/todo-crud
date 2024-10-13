# Todo CRUD

## Descripción

Esta es una aplicación de gestión de tareas (Todo App) construida usando **React** con **Vite**, **fetch API** para la gestión de datos y solicitudes HTTP, y **styled-components** para los estilos. La aplicación permite a los usuarios ver, agregar y eliminar tareas. Además, implementa paginación para navegar a través de las tareas.

## Características

- **Visualización de tareas**: Muestra una lista de tareas desde un API.
- **Paginación**: Navega entre diferentes páginas de tareas.
- **Agregar tareas**: Permite agregar una nueva tarea usando un modal.
- **Eliminar tareas**: Los usuarios pueden eliminar tareas existentes.
- **Fetch API**: Gestiona las solicitudes HTTP.
- **Styled-components**: Separa los estilos por componentes.

## Requisitos

- **Node.js**: Asegúrate de tener Node.js instalado en tu sistema.
- **npm o yarn**: Para la gestión de dependencias y ejecución de scripts.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/abgalu/todo-crud.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd todo-crud
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## API

Utilizamos un API dummy (https://jsonplaceholder.typicode.com/todos) para simular la funcionalidad de la lista de tareas:

- **GET** `/todos`: Obtiene una lista de tareas con soporte de paginación (limitado a 6 tareas por página).
- **POST** `/todos`: Añade una tarea nueva.
- **DELETE** `/todos/:id`: Elimina una tarea específica.

## Dependencias

- **React**: Biblioteca JavaScript para la creación de interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para proyectos React.
- **styled-components**: Biblioteca para la creación de componentes con estilos.
- **React-icons**: Para agregar iconos (ej. icono de eliminar).

## Uso

1. **Visualizar Tareas**: Las primeras 3 tareas se cargan al inicio.
2. **Paginar**: Usa los botones de paginación para navegar entre las diferentes tareas.
3. **Agregar Tarea**: Haz clic en "Añadir tarea" para abrir el modal. Ingresa un título y una descripción, luego guarda.
4. **Eliminar Tarea**: Haz clic en el ícono de eliminar en una tarea para borrarla.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación de producción localmente.

## Mejoras Futuras

- Validación de formularios al agregar una nueva tarea.
- Implementación de un backend real para persistir las tareas.
- Manejo de errores más robusto y notificaciones al usuario.

## Licencia

Este proyecto está bajo la licencia MIT.
