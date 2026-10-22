\# SISMEDIC — Backend



API REST para el Sistema de Gestión de Citas Médicas (SISMEDIC), desarrollada como parte de un proyecto formativo del programa Tecnólogo en Análisis y Desarrollo de Software (ADSO) del SENA.



\## Descripción



El backend permite gestionar la información del sistema de citas médicas y facilita la comunicación entre el frontend y la base de datos.



\## Tecnologías utilizadas



\- \*\*Node.js:\*\* entorno de ejecución de JavaScript.

\- \*\*Express:\*\* framework para desarrollar la API REST.

\- \*\*MySQL:\*\* sistema de gestión de bases de datos relacionales.

\- \*\*mysql2:\*\* conexión entre Node.js y MySQL.

\- \*\*dotenv:\*\* gestión de variables de entorno.

\- \*\*CORS:\*\* configuración del acceso entre frontend y backend.



\## Funcionalidades



\- Gestión de pacientes.

\- Gestión de médicos.

\- Gestión de consultorios.

\- Gestión de citas médicas.

\- Conexión con base de datos MySQL.



\## Requisitos



\- Node.js y npm.

\- MySQL Server.

\- Git.



\## Instalación



1\. Clonar el repositorio:



&#x20;  ```bash

&#x20;  git clone https://github.com/maicol21-sma/backend-citas.git

&#x20;  ```



2\. Entrar en la carpeta:



&#x20;  ```bash

&#x20;  cd backend-citas

&#x20;  ```



3\. Instalar las dependencias:



&#x20;  ```bash

&#x20;  npm install

&#x20;  ```



4\. Crear un archivo `.env` en la raíz del proyecto con las variables de conexión a MySQL:



&#x20;  ```dotenv

&#x20;  DB\_HOST=localhost

&#x20;  DB\_USER=root

&#x20;  DB\_PASSWORD=TU\_CLAVE\_LOCAL

&#x20;  DB\_NAME=gestion\_citas

&#x20;  ```



&#x20;  Reemplaza `TU\_CLAVE\_LOCAL` por la contraseña de tu entorno local. No publiques este archivo ni compartas sus credenciales.



5\. Iniciar el servidor:



&#x20;  ```bash

&#x20;  node server.js

&#x20;  ```



El servidor utiliza el puerto 3000, según la configuración actual del proyecto.



\## Seguridad



Las credenciales de la base de datos se configuran mediante variables de entorno. El archivo `.env` debe permanecer excluido del control de versiones.



\## Autor



Proyecto formativo desarrollado en el programa Tecnólogo en Análisis y Desarrollo de Software (ADSO) del SENA.



\## Repositorio



\[GitHub — backend-citas](https://github.com/maicol21-sma/backend-citas)



