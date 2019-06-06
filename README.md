# Burger Queen
## 1. Preámbulo

[React](https://reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una serie de convenciones e implementaciones _probadas_ y _documentadas_ para resolver un problema común a toda interfaz web. Esto nos permite concentrarnos mejor (dedicar más tiempo) en las caractrísticas _específicas_ de nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas **abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultar de gran ayuda para implementar rápidamente características de los proyectos en los que trabajes.

### 2. Definición del producto

Esta vez tenemos un proyecto 100% por encargo, un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos a la cocina para que se preparen ordenada y eficientemente.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Posteriormente nos dimos a la tarea de definir ¿Quiénes serían nuestros principales usuarios?, pensar en ¿Cuál sería el objetivo de nuestros usuarios al usar nuestra página?  y por último con base a las necesidades de los usuarios pensar en ¿Qué datos incluiría nuestra aplicación web?
Quedando de la siguiente forma:

#### ¿Quiénes son los principales usuarios de producto?

Esta es la información que tenemos del cliente:

> Somos **Burger Queen**, una cadena de comida 24hrs.

> Nuestra propuesta de servicio 24hrs ha sido muy bien recibido y, para seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de nuestros clientes.

> Tenemos 2 menús: uno muy sencillo para el desayuno:

> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sándwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |

> Y otro menú para el resto del día:

> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|

> **Importante:** Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana. Además, por $1 adicional, pueden agregarle queso o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_ agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

#### ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

* Principalmente optimizar los tiempos de la persona que se encarga de tomar los pedidos.

* Evitar lo mas que se pueda cometer errores a la hora de tomar los pedidos.