# Proyecto de Prueba Técnica: Aplicación de Podcasts

Este proyecto es una prueba técnica que consiste en la creación de una mini-aplicación para escuchar podcasts musicales.

## Contenido

- [Descripción General](#descripcion-general)
- [Instalación](#instalacion)
- [Vistas de la Aplicación](#vistas-de-la-aplicacion)
- [Recursos](#recursos)

## Descripción General

El proyecto tiene tres vistas: Vista principal, Detalles de un podcast y Detalles de un capítulo de un podcast. Se debe adherir al diseño mostrado junto a la descripción del detalle de las mismas. El proyecto está construido en React y se implementa como una Single Page Application, con dos modos, development y production. El objetivo es presentar un repositorio de código público con la solución desarrollada, donde el progreso puede ser seguido a través de tags.

[DEMO](https://pascui89.github.io/inditex-podcast/)

## Instalación

Para descargar y poner en marcha el proyecto, siga los siguientes pasos:

1. Clonar el repositorio:

```bash
git clone https://github.com/pascui89/inditex-podcast.git
```

2. Navegar hasta el directorio del proyecto:

```bash
cd inditex-podcast
npm install
npm run build
npm start
```

3. Los tests de la aplicación funcionan y podrán ejecutarse ejecutando la siguiente instrucción:

```bash
npm run test
```

**Por falta de tiempo no todos los componentes de la aplicación tendrán tests asociados, soy consciente de que es una mejora pendiente del aplicativo.**

## Vistas de la Aplicación

1. **Vista Principal**:

   - URL: /
   - Mostrar el listado de los 100 podcasts más populares según el listado de Apple.

2. **Detalles de un Podcast**:

   - URL: /podcast/{podcastId}
   - Mostrar una barra lateral con la imagen del podcast, su título, su autor y su descripción.

3. **Detalles de un Capítulo de un Podcast**:
   - URL: /podcast/{podcastId}/episode/{episodeId}
   - Mostrar la misma barra lateral que en la vista anterior.

## Recursos

1. URL para obtener el listado de los 100 podcasts más populares: [Enlace](https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json)
2. URL para obtener el detalle de un podcast: [Enlace](https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20)
3. Servicio para poder acceder a recursos externos que no proveen JSONP ni cabeceras CORS: [Enlace](https://allorigins.win)
