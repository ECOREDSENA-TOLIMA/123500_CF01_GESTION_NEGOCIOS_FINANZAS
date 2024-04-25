<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-right") La empresa como ente económico y unidad productiva se configura como centro de los negocios, sin ella no existirían las operaciones comerciales, al nivel de avance que se conoce hoy. El siguiente video presenta su historia y configuración hasta la actualidad.
    
    figure.mb-5(data-aos="fade-down-left")
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dzyn4eofi6c" title="La empresa y la gestión de la información" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      figcaption La empresa y la gestión de la información

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-lg-10.col-12
        //- .bloque-texto-c.color-custom.p-4
        //-   i.fas.fa-quote-right
        //-   p.mb-3 #[b La empresa siempre ha estado sujeta o influida por el entorno, lo cual hace que esté en permanente cambio, reconociendo los nuevos retos, adaptándose a los últimos procesos y tecnologías, apropiando esas actualizaciones para vincularlas y evaluando su implementación con el fin de elegir lo que es más conveniente y productivo para ella; es decir, generando una identidad organizacional propia que la diferencie de las demás.]
        //-   span - (Gerencia.com, 2022).

        //- .bloque-texto-f.color-custom.p-4.p-lg-5
        //-   .bloque-texto-f__comillas.mt-4
        //-     i.fas.fa-quote-left.mt-4.mt-lg-5.mx-md-4
        //-     i.fas.fa-quote-right
        //-   p.mb-3 #[b La empresa siempre ha estado sujeta o influida por el entorno, lo cual hace que esté en permanente cambio, reconociendo los nuevos retos, adaptándose a los últimos procesos y tecnologías, apropiando esas actualizaciones para vincularlas y evaluando su implementación con el fin de elegir lo que es más conveniente y productivo para ella; es decir, generando una identidad organizacional propia que la diferencie de las demás.]
        //-   .bloque-texto-f__autor.mb-3.text-start
        //-     span - (Gerencia.com, 2022).

        .bloque-texto-d.color-acento-contenido.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular La empresa siempre ha estado sujeta o influida por el entorno, lo cual hace que esté en permanente cambio, reconociendo los nuevos retos, adaptándose a los últimos procesos y tecnologías, apropiando esas actualizaciones para vincularlas y evaluando su implementación con el fin de elegir lo que es más conveniente y productivo para ella; es decir, generando una identidad organizacional propia que la diferencie de las demás.
            i.fas.fa-quote-right(style="display:none")
          .bloque-texto-d__autor 
            .h5.mb-0 (Gerencia.com, 2022).
              i.fas.fa-quote-right

    .row.align-items-center.justify-content-center.mb-5
      .col-md-6.col-lg-6.col-12(data-aos="fade-right") 
          p.mb-3 En la actualidad, se reconoce la empresa en diferentes tipos existentes de acuerdo con: su tamaño, actividad, origen de capital y/o tipo de sociedad, lo cual conlleva unas responsabilidades específicas que se deben asumir. Para comprender la dimensión y complejidad de la empresa u organización, es necesario reconocer las áreas funcionales, las cuales le dan vida propia a la organización, conocer cómo se identifican, si por departamento, área o función, según el tipo de organización constituida y cómo cada tipo de organización define un estilo propio de administrar los recursos y alcanzar los objetivos.
          p.mb-0 Todo esto se construye desde el diseño o planeación, para luego ponerlo en marcha en la operación o funcionamiento operacional de la misma, fase en la que se hace necesario realizar el diagnóstico organizacional con el fin de evaluar el desempeño de la empresa para hacer los ajustes requeridos y adaptarse al cambio, fidelizar los clientes y captar nuevos, lo que es posible solo si la organización se mantiene a la vanguardia a través de estratégicas decisiones gerenciales.
      .col-md-6.col-lg-6(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/temas/intro/img-1.png')

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10.col-12(data-aos="zoom-in-down")
        .cajon.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-lg-11.col-12
              p.mb-0 Este componente formativo, además de desarrollar las temáticas descritas anteriormente, cerrará exponiendo cada uno de los instrumentos de recolección de información que son fundamentales para realizar diagnósticos o investigaciones orientadas a la implementación de un nuevo proyecto. 


    p.mb-0(data-aos="fade-right")  Todo lo anterior permite aportar al mejoramiento de la empresa desde su función, con el fin de agilizar procesos, dar respuestas oportunas y tener a la mano información de primera mano de los diferentes departamentos, así como de los clientes, lo cual es crucial para la toma de decisiones y definir el futuro inmediato, si se han presentado imprevistos, o a mediano y largo plazo, si el entorno así lo permite.
  
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
