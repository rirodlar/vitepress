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
                    { text: "Crear Set de datos", link: "/build" },
                    { text: "Publicar Set de datos", link: "/build" },
                    { text: "Eliminar Set de datos", link: "/build" },
                ],
            },
            {
                text: "Descarga",
                collapsible: true,
                items: [
                    { text: "Guia de Usuario", link: "https://datos.usach.cl/static/guide-user.pdf" },
                    { text: "Guia Academico", link: "https://datos.usach.cl/static/guide-user.pdf" },
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