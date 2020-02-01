![alt text](https://media2.giphy.com/media/12bRBPplSRZtBLLqLm/giphy.gif?cid=790b7611181cf8768b572aac85db1e5e98f294a4e9a48440&rid=giphy.gif)
# api-croquetas

## Instalación de NodeJs
Si eres usuario de MacOs o Windows utiliza el siguiente enlace y sigue los pasos: https://nodejs.org/es/

Si tienes alguna distribución de linux, puedes instalarlo a través de apt-get:

```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

#### Comprobemos que lo hemos instalado correctamente

Abre una consola y escribe:

```
node -v
npm -v
```

Si todo está correcto, al lanzar estos comandos, tienen que aparecer en la consola las versiones instaladas

## Instalemos api-croquetas

Abrimos una consola y nos dirigimos a la carpeta donde queramos clonar el proyecto

```
git clone https://github.com/EmanuelFontalba/api-croquetas.git
cd api-croquetas
npm i
```

Para comprobar que está bien instalado ejecutamos el siguiente comando en la consola desde la carpeta api-croquetas:

MACOS O LINUX:
```
npm run dev
```

WINDOWS
```
npm run dev-windows
```

Cuando aparezca en la consola Listening on 9000 podemos cerrar todo y ya tenemos el taller listo para comenzar :)
