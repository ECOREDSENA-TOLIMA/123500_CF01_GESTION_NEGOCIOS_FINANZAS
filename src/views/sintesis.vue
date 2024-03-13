<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La empresa, como unidad de progreso económico y social, requiere constantemente de un análisis o diagnóstico organizacional que permita, a través de sus factores internos y externos, gestionar y dinamizar procesos administrativos coherentes, pertinentes y eficientes.  A continuación, se presentan gráficamente las temáticas desarrolladas en el componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La empresa y la gestión de la información. Se divide en dos aspectos donde se tratan los aspectos fundamentales de la organización hasta llegar el diagnóstico, y los instrumentos de recolección de información  donde se exponen los tipos, técnicas y grupos de interés.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
