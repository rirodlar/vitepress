export default {

    base:'/static/dist',
    title: "Guia Usuario",
    description: "Documentación Repositorio Datos USACH",
    themeConfig: {
        logo: "/logo.svg",
        siteTitle: "Guia Usuario",

    // ...
    // nav: [
    //
    //     { text: "Guía Usuario", link: "https://datos.usach.cl/static/guide-user.pdf" },
    //     { text: "Guía Academico", link: "https://datos.usach.cl/static/guide-user.pdf" },
    // ],


        // Sidebar
        sidebar: [
            {
                text: "Introducción",
                collapsible: true,
                items: [
                    { text: "Repositorio de datos", link: "/introduction" },
                    { text: "Glosario", link: "/glosario" },
                    { text: "Buenas práctica", link: "/good-practices" },
                    { text: "Políticas", link: "/politics" },
                ],
            },
            {
                text: "Guia Básica",
                collapsible: false,
                items: [
                    { text: "Buscar Datos", link: "/search" },
                    { text: "Navegar En Dataverse", link: "/navigate" },
                    { text: "Archivos", link: "/file" },
                    { text: "Citar Datos", link: "/cite" },

                ],
            },
            {
                text: "Guia  Academica",
                collapsible: true,
                items: [
                    { text: "Crear Set de datos", link: "/create-dataset" },
                    { text: "Manejo de Licencias", link: "/licencia" },
                    { text: "Subir ficheros", link: "/upload-file" },
                    { text: "Etiquetar ficheros", link: "/licencia" },
                    { text: "Restringir ficheros", link: "/licencia" },
                    { text: "Publicar Set de datos", link: "/publish" },
                    { text: "Manejo De versiones", link: "/version" },
                    { text: "Compartir Archivos privados", link: "/version" },
                    { text: "Eliminar Set de datos", link: "/delete" },
                ],
            },
            {
                text: "Guia  Curacion datos",
                collapsible: true,
                items: [
                    { text: "Curación", link: "/curation" },
                ],
            },
            {
                text: "Descarga",
                collapsible: true,
                items: [
                    { text: "Guia de Usuario", link: "https://datos.usach.cl/static/guide-user.pdf" },
                    { text: "Guia Academico", link: "https://datos.usach.cl/static/guide-user.pdf" },
                    { text: "Guia Curación", link: "https://datos.usach.cl/static/guide-user.pdf" },
                ],
            },
        ],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-present Adocs",
        },



    // ...
}
};