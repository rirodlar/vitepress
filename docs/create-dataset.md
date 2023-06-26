# Introducción

En Dataverse, un dataset funciona como un contenedor para sus datos, documentación, código y los metadatos que describen ese dataset.

![dataset.png](public%2Facademic%2Fdataset.png)

## Crear Dataset

En la página principal del repositorio de datos (http://datos.usach.cl/dataverse/usach), haga clic en “Iniciar sesión” en la esquina superior derecha de la página	 

![login.png](public%2Facademic%2Flogin.png)

## Ingresar correo y contraseña de Ldap

![logIn2.png](public%2Facademic%2FlogIn2.png)

Una vez iniciado sesión busque el Dataverse que le corresponde (facultad a la que pertenece)    

![home.png](public%2Facademic%2Fhome.png)

::: info
Para diferenciar un Dataverse  de un Dataset,  hay que fijase por el color de borde  del contorno  o mirando el icono la parte superior derecha 
:::

![dataset_dataverse.png](public%2Facademic%2Fdataset_dataverse.png)

Seleccione la facultad (Dataverse), luego en el botón "Nuevo dataset" en el lado derecho de la página y luego en “Nuevo dataset”

![newDataset.png](public%2Facademic%2FnewDataset.png)

## Ingrese los metadados del Dataset

![form_create_dataset.png](public%2Facademic%2Fform_create_dataset.png)

## MetaDatos Generales


**Titulo**
- Título completo por el que se conoce al dataset.

**Autor**
- `Nombre`  Inserte su nombre como lo usa en sus publicaciones. Para insertar coautores, haga clic en el botón “+”. Este campo se completa automáticamente
- `Afiliación` Nombre de la organización responsable de este Dataset. Este campo se completa automáticamente.
- `Esquema de identificadores` Nombre del esquema identificador (ORCID, ISNI, LCNA, VIAF, GND, ResearcherID, etc.).
- `Identificador` Identifica de manera única a un autor u organización individual, de acuerdo con varios esquemas.

**Contacto**
- `Nombre` El apellido del autor, el nombre de pila o el nombre de la organización responsable de este Dataset. Este campo se completa automáticamente
- `Afiliación` La organización a la que está afiliado el autor. Este campo se completa automáticamente.
- `E-mail` Ingrese mail de contacto. Este campo completa automáticamente.

***Descripción***
- `Texto` Los datos en esta sección se refieren a un resumen que describe el propósito, la naturaleza y el alcance del Dataset.
- `Fecha` Debe estar en el formato YYYY-MM-DD y separada por guion.

**Materia**
- Categorías de temas específicos del dominio que son relevantes para el dataset. 

**Palabra clave**
- `Término` Cada palabra clave se debe ingresar por separado. Haga clic en el botón "+" para ingresar más palabras claves.
- `Vocabulario` Para la especificación del vocabulario controlado por palabra clave en uso.  ej.: LCSH, LCNA, MeSH.
- `Url del Vocabulario` La URL del vocabulario de palabras clave apunta a la web que describe el vocabulario de palabras clave.

**Publicación relacionada**
- `Cita` Insertar la referencia del artículo al que se relacionan los datos.
- `Tipo de ID` El tipo de identificador digital utilizado para esta publicación (ej., Identificador de objeto digital (DOI)).
- `Numero de ID` El identificador para el tipo de ID seleccionado.
- `URL` Enlace a la página web de la publicación. 

**Notas**
- Información adicional importante.


**Depositante**
- Persona (apellido, nombre) o nombre de la organización que depositó este dataset en el repositorio. Este campo se completa automáticamente.

**Fecha de Deposito**
- Fecha en que se depositó el dataset en el repositorio. Este campo se completa automáticamente.


**Fecha de recolección**
- Los datos de esta sección se refieren a las fechas en que se recolectaron los datos.


**Periodo de tiempo cubierto**
- Fecha de Inicio y fin del Dataset.

**Fecha de producción**
- Los datos de esta sección se refieren a la organización o persona responsable de recolectar, gestionar o contribuir de alguna forma al desarrollo del recurso. 

## Upload Archivo

En la sección “Archivo” haga clic en “Seleccione los archivos que quiere añadir” para agregar los archivos de datos  

![fichero1.png](public%2Facademic%2Ffichero1.png)

Para datos sensibles es posible restringir el acceso a archivos seleccionados. Al hacerlo, no se podrá acceder al archivo ni descargar, pero los metadatos del dataset serán visibles.  Para restringir el acceso, después de cargar los archivos, seleccione los archivos cuyo acceso debe restringirse haciendo clic en la casilla de verificación a la izquierda del nombre del archivo, haga clic en “Editar Archivo” y luego en “Restringido”. 

![fichero2.png](public%2Facademic%2Ffichero2.png)

Aparecerá una ventana emergente (modal). Describa los términos de acceso, que informarán a los usuarios cómo y si pueden obtener acceso a los archivos restringidos. 

![fichero3.png](public%2Facademic%2Ffichero3.png)

Si desea que los usuarios puedan solicitar acceso, seleccione la casilla de verificación Habilitar solicitud de acceso. Haga clic en Continuar. 

![fichero4.png](public%2Facademic%2Ffichero4.png)

Sus archivos de datos seleccionados ahora están restringidos. 

![fichero5.png](public%2Facademic%2Ffichero5.png)

## Anadir Etiquetas

Las “etiquetas” proporciona una forma para mejorar la organización de los archivos de una dataset. Por ejemplo, ciertos archivos pueden requerir unas notas específicas como documentación, datos, código, también es posible crear etiquetas personalizadas 