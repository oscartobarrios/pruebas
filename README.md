Requisitos para la ejecución de las pruebas

Ghost versión 4.44
node versión 16.14.2
Ambiente de pruebas en heroku URL: https://ghost-uniandes.herokuapp.com/ghost/
Clonar el repositorio con las fuentes de las pruebas de la siguiente URL: https://github.com/oscartobarrios/pruebasautomatizadas
Tener instalado Cypress en la siguiente URL: https://download.cypress.io/desktop



Para ejecutar las pruebas de Cypress

1. Abrir CMD en windows
2. Abrir Cypress.exe
3. Crear un directorio vacio para un nuevo proyecto
4. Importe en Cypress el directorio creado en el paso anterior
5. Importe los archivos clonados en el directorio Cypress, en la siguiente ruta cypress/integration
6. Ejecute las pruebas haciendo clic en cada uno de los arhivos listados en Cypress
	a. para las pruebas del numero 5 al 10 antes de iniciar cada prueba no deben exitir otros Post creados
	b. para las pruebas del 11 al 15 se deben ejecutar en orden ascendente


Para ejecutar las pruebas Kraken

1. Abrir CMD en windows
2. Installar Kraken con el comando npm install kraken-node –g 
3. Crear proyecto con kraken-node gen 
4. Instalar dependencias npm install kraken-node
5. Borre los archivos que se puedan encontrar en la siguientes rutas /features/web/step_definitions y /features
6. Ejecute las pruebas 1 a 5 de la siguiente forma:

	a. para los escenarios 1 al 5 tomar el archivo step_1-5.js renombrarlo a step.js y copiarlo al directorio /features/web/step_definitions 
	b. copiar el archivo N_escenario.feature (N es el numero de caso a ejecutar) y copiarlo al directorio /features
	c. ejecute la prueba con el siguiente comando ./node_modules/kraken-node/bin/kraken-node run
	d. finalizada la prueba borrar el archivo de prueba copiando anteriormente
	e. repita los pasos b, c y d con los archivos numerados hasta el 5

7. Borre los archivos que se puedan encontrar en la siguientes rutas /features/web/step_definitions y /features
8. Ejecute las pruebas 6 a 10 de la siguiente forma:

	a. para los escenarios 6 al 10 tomar el archivo step_6-10.js renombrarlo a step.js y copiarlo al directorio /features/web/step_definitions 
	b. copiar el archivo N_escenario.feature (N es el numero de caso a ejecutar) y copiarlo al directorio /features
	c. ejecute la prueba con el siguiente comando ./node_modules/kraken-node/bin/kraken-node run
	d. finalizada la prueba borrar el archivo  copiando anteriormente 
	e. repita los pasos b, c y d con los archivos numerados hasta el 10
	
9. Borre los archivos que se puedan encontrar en la siguientes rutas /features/web/step_definitions y /features
10. Ejecute las pruebas 11 a 15 de la siguiente forma:

	a. para los escenarios 11 al 15 tomar el archivo step_11-15.js renombrarlo a step.js y copiarlo al directorio /features/web/step_definitions 
	b. copiar el archivo N_escenario.feature (N es el numero de caso a ejecutar) y copiarlo al directorio /features
	c. ejecute la prueba con el siguiente comando ./node_modules/kraken-node/bin/kraken-node run
	d. finalizada la prueba borrar el archivo  copiando anteriormente 
	e. repita los pasos b, c y d con los archivos numerados hasta el 15
	
9. Borre los archivos que se puedan encontrar en la siguientes rutas /features/web/step_definitions y /features
10. Ejecute las pruebas 16 a 19 de la siguiente forma:

	a. para los escenarios 16 al 19 tomar el archivo step_16-19.js renombrarlo a step.js y copiarlo al directorio /features/web/step_definitions 
	b. copiar el archivo N_escenario.feature (N es el numero de caso a ejecutar) y copiarlo al directorio /features
	c. ejecute la prueba con el siguiente comando ./node_modules/kraken-node/bin/kraken-node run
	d. finalizada la prueba borrar el archivo  copiando anteriormente 
	e. repita los pasos b, c y d con los archivos numerados hasta el 15	

