# Movies Project

Este es un proyecto web con Django rest framework para el backend y React para el frontend, 
las funcionalidades se describen en el requerimiento descrito en el archivo README.md  

# Instalación y ejecución del proyecto

## Con Docker

Para la ejecución con **Docker**, se debe:

- Instalar:
    * Docker
    * docker compose
- Clonar el repositorio git
- Ejecutar los siguientes comandos
    
        docker-compose up --build

Si todo está ok, recibirá un mensaje en consola como este:

        Starting development server at http://0.0.0.0:8000/
        Quit the server with CONTROL-C.

Continuar con el apartado [Revision app](#revision-app)

## Local
### Backend
Para la ejecución en entorno **local**, se debe:
- Instalar:
    * python 3.5 o superior con el gestor de paquetes pip
    * nodejs 14 o superior con el gestor de paquetes npm

- Clonar el repositorio git
- Si lo prefiere crear el entorno virtual de python:

        python -m venv env
        env\Scripts\activate.bat ó source env/bin/activate

- Estando en la carpeta movies_backend ejecutar los siguientes comandos:

        pip install -r requirements.txt
        python manage.py runserver

- Si desea ejecutar los test de Django antes de correr el servidor de django:

        python manage.py tests

- Si desea ejecutar los test con pytest:

        pytest

### Frontend
- Estando en la carpeta movies_frontend ejecutar los siguientes comandos:

        npm install
        npm start

# Revision app

Sé que se requería que para la creación de actores o de movies se retornara un estado 200,
sin embargo, los endpoints de creación retornan 201, ya que es el estándar para dar respuesta 
a una petición de creación.

- Adjunto al correo enviado a Sandra Gonzalez encontrarán un video demo de la aplicación funcionando.

Si el proyecto se levanta en el servidor local la url de la aplicación es:

- para el backend

        http://localhost:8000/
- para el frontend

        http://localhost:3000/

# Mejoras
Muchas!
Pero todo depende del requerimiento, de la UI definida y de la definición de infraestructura.
Bueno, y también falta que se vea bonito, sorry!

# Nota
Los datos y contraseñas en este repositorio no son reales y no son utilizados por mí en ningún sistema disponible al público.
Se aconseja que estos datos y contraseñas sean cambiados a su gusto y necesidad, ya que no son seguros.
