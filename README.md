# MotorProyect
## Flujo Básico de las ramas.
Este es el flujo básico de las ramas en el repositorio de MotorProyect:

- **main:** Esta es la rama principal, siempre estará estable.
- **desarrollo:** En esta rama trabajamos los bugs, llevamos a cabo los testeos y mejoras del código.

Inicialmente se clonó el repositorio para trabajarlo con un git local y se trabajó de la siguiente forma:
```bash
$ git clone https://github.com/J0nathanr0jas18/MotorProyect.git
$ git remote add origin https://github.com/J0nathanr0jas18/MotorProyect.git
$ git status
$ git add .
$ git checkout -b desarrollo
$ git commit -m "Creación de branch desarrollo (close #1)"
$ git push -u origin desarrollo
