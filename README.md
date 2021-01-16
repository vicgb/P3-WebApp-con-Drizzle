# Ejercicio Asignatura

Práctica de la asignatura Blockchain: Desarrollo de aplicaciones del Máster Universitario en Ingeniería de Redes y Servicios Telemáticos de la UPM. Consiste en una app web de evaluación en Blockchain realizada con Drizzle, Ganache y Truffle.


# Componentes

- Ganache: Red de pruebas de Ethereum (https://www.trufflesuite.com/ganache)
- Truffle: Permite la compilación, enlazado, despliegue y administración binaria de smart contracts.
- Drizzle: Basado en Redux. Sirve para desarrollo de apps descentralizadas (npm install drizzle --save)
- Metamask: Una extensión o plugin para navegadores web que permite interactuar fácilmente con las DApps de la blockchain.
de Ethereum



# Ejecución

1 . Descargar y ejecutar Ganache. Crear un nuevo workspace.
2 . Instalar Metamask como complemento de Google Chrome y conectarlo a la red de Ganache.  (Crear nueva red RPC > Rellenar con los datos que aparecen en la interfaz de Ganache)
3 . En el directorio /dapp/ : $npm start

# Funcionalidad

Funcionalidades añadidas: 
 - Crear un botón para que un alumno se pueda matricular.  La dirección seleccionada en Metamask identifica al alumno que se está matriculando.
 - Crear un formulario para que el profesor cree nuevas evaluaciones.
 - Permitir obtener un listado con las notas de todos los alumnos en una determinada evaluación.
