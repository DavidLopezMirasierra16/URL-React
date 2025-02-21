# URL-React
Ejercicios de React básicos con react-router-dom
1. Crear un Enrutador Básico
Enunciado: Crea una aplicación React con varias páginas
simples utilizando react-router-dom. Define rutas como
/home, /about, y /contact, y muestra diferentes componentes
para cada una.
Requisitos:
- Implementa un menú de navegación para cambiar entre
rutas.
- Usa el componente BrowserRouter para manejar las
rutas.
- Agrega un componente "404" para manejar rutas no
definidas.

2. Parámetros en la URL
Enunciado: Crea una aplicación que permita navegar a
detalles de usuarios basados en un parámetro de la URL. Por
ejemplo: /user/1 debe mostrar información sobre el usuario
con ID 1.
Requisitos:
- Usa useParams para capturar el ID desde la URL.
- Genera enlaces dinámicos para cada usuario.
- Muestra la información del usuario basado en el ID.

3. Redirección Condicional
Enunciado: Crea una aplicación que redirija a la página de
inicio (/home) si el usuario intenta acceder a una página
restringida como /admin sin estar autenticado.
Requisitos:
- Simula un estado de autenticación con useState.
- Usa el componente Navigate para redirigir.
- Muestra un mensaje en /admin si el usuario está
autenticado.
