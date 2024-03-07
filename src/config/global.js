export default {
  global: {
    componenteFormativo: 'La empresa y la gestión de la información',
    descripcionCurso:
      'En este componente, se da el ingreso al mundo empresarial, iniciando con los fundamentos de conceptos de empresa y sus tipologías, describiendo los métodos o matrices diseñados para realizar diagnóstico organizacional, lo que sumado aporta a que la empresa se direccione a objetivos alcanzables y medibles de acuerdo con su realidad y sus capacidades, se busca además alcanzar nuevos retos convirtiendo debilidades en fortalezas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Empresas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Áreas funcionales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Diagnóstico organizacional',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Matrices diagnósticas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Instrumentos de recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Grupos de interés',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1. Clasificación',
      referencia:
        'Decreto 957 de 2019. [Ministerio de Industria, Comercio y Turismo]. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único del Sector Comercio, Industria y Turismo y se reglamenta el artículo 2° de la Ley 590 de 2000, modificado por el artículo 43 de la Ley 1450 de 2011. Junio 5 de 2019.',
      tipo: 'Documento legal - Decreto',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf',
    },
    {
      tema: '1.1. Clasificación',
      referencia:
        'Cámara de Comercio de Cúcuta. (s. f.). <em>Consolidado comparativo de sociedades.</em>',
      tipo: 'Documento - cuadro comparativo',
      link:
        'https://www.cccucuta.org.co/uploads_descarga/desc_49414aa27e2ee1132e863a9d4d1b8f09.pdf',
    },
    {
      tema: '1.3. Diagnóstico organizacional',
      referencia:
        'Hoyos, G. (2018). <em>El modelo de las cinco Fuerzas de Porter como instrumento para la adopción de decisiones estratégicas organizacionales: aplicación al sector de la Construcción Naval Militar.</em> [Trabajo de Grado]. Centro Universitario de la Defensa en la Escuela Naval Militar.',
      tipo: 'Documento - trabajo de grado',
      link:
        'http://calderon.cud.uvigo.es/bitstream/handle/123456789/232/Hoyos%20Perales%2c%20Guillermo%20memoria.pdf',
    },
    {
      tema: '2. Instrumentos de recolección de la información.',
      referencia:
        'Gallardo, Y. y Moreno, A. (1999). <em>Aprender a Investigar. Módulo 3. Recolección de la Información.</em> ICFES.',
      tipo: 'Libro',
      link:
        'https://www.unilibrebaq.edu.co/unilibrebaq/images/CEUL/mod3recoleccioninform.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'Ciencia que coordina recursos mediante procesos, procedimientos y métodos que permiten el logro de los objetivos organizacionales.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Análisis o investigación que se realiza con el fin de determinar una situación, tendencia o causa de un problema, reconocer su entorno y proponer posibles soluciones que probablemente causarán cambios en la organización.',
    },
    {
      termino: 'Matriz',
      significado:
        'Instrumento de gestión en la organización que permite recoger información acerca de un proceso, actividad o estrategia implementada en la organización, con el fin de consolidar la información, posteriormente analizarla, y finalmente, utilizarla para la toma de decisiones.',
    },
    {
      termino: 'Método',
      significado:
        'Modelos y procedimientos metodológicos y sistemáticos que aportan al estudio de un problema u objeto de una situación, para la construcción de conocimiento válido y comprobable de un fenómeno particular por medio de una observación, tesis, hipótesis, entre otros elementos.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'Grupos de interés o partes interesadas de la organización que influyen de manera directa e impactan a la organización en el logro de sus objetivos.',
    },
    {
      termino: 'Técnica',
      significado:
        'Conjunto de procedimientos cuyo objetivo es garantizar la operatividad del proceso investigativo con el fin de obtener suficiente información y conocimiento para resolver los interrogantes planteados orientados a la solución del problema u objeto de la investigación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amador, A. y Oviedo G. (2006). <em>Análisis de competitividad del biodiesel colombiano.</em> Instituto Tecnológico y de Estudios Superiores de Monterrey. ',
      link:
        'https://repository.unab.edu.co/bitstream/handle/20.500.12749/1973/2006_Tesis_Amador_Andrea.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Bravo, L., Ramos, P., Tejada, A. y Valenzuela, A. (2019). Perspectiva teórica del diagnóstico organizacional. <em>Revista Venezolana de Gerencia</em>, 24(88), p. 1316 - 1328. ',
      link: 'https://www.redalyc.org/journal/290/29062051021/html/',
    },
    {
      referencia:
        'Cardoso, M. y Poveda, N. (2021). <em>Diagnóstico Organizacional y Plan de Mejoramiento para la Microempresa Modas Milenio del municipio de La Mesa, Cundinamarca</em> [Trabajo de grado]. Universidad de Cundinamarca. ',
      link:
        'https://repositorio.ucundinamarca.edu.co/bitstream/handle/20.500.12558/3761/Diagn%c3%b3stico%20organizacional%20y%20plan%20de%20mejoramiento%20para%20la%20microempresa%20modas%20milenio%20del%20municipio%20de%20La%20Mesa-%20Cundinamarca.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Celaya, R., González, N., Ramírez, R. y Valenzuela, C. (2010). <em>Diagnóstico organizacional: una mirada hacia el futuro.</em> Instituto Tecnológico de Sonora [ITSON]. ',
      link:
        'https://www.itson.mx/publicaciones/pacioli/Documents/no70/43b-diagnostico_organizacional_una_mirada_hacia_el_futuro_noviembre_2010_corregido.pdf',
    },
    {
      referencia:
        'Código de Comercio. (2020). Artículo 461. <em>Definición de la sociedad de economía mixta.</em> ',
      link:
        'http://secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr014.html#:~:text=ART%C3%8DCULO%20461.,salvo%20disposici%C3%B3n%20legal%20en%20contrario',
    },
    {
      referencia:
        'Decreto 957 de 2019. [Ministerio de Industria, Comercio y Turismo]. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único del Sector Comercio, Industria y Turismo y se reglamenta el artículo 2° de la Ley 590 de 2000, modificado por el artículo 43 de la Ley 1450 de 2011. Junio 5 de 2019. ',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf',
    },
    {
      referencia:
        'Gallardo, Y. y Moreno, A. (1999). <em>Aprender a Investigar. Módulo 3. Recolección de la Información.</em> ICFES. ',
      link:
        'https://www.unilibrebaq.edu.co/unilibrebaq/images/CEUL/mod3recoleccioninform.pdf',
    },
    {
      referencia: 'Gerencie.com. (2022). <em>Sociedad Unipersonal.</em> ',
      link:
        'https://www.gerencie.com/las-sociedades-unipersonales-no-existen-en-colombia.html',
    },
    {
      referencia:
        'Matiz, F. y Pérez, A. (2009). <em>Planeando la Empresa I.</em> Editorial Universidad EAN. ',
      link:
        'https://editorial.universidadean.edu.co/acceso-abierto/planeando-la-empresa-i.pdf',
    },
    {
      referencia:
        'Münch, L. (2004). <em>Fundamentos de Administración. Casos y Prácticas.</em> Editorial Trillas. ',
      link: '',
    },
    {
      referencia:
        'Pedraza, M., Sastoque, J., Serrano, L. y Tarazona, D. (2015). <em>Diagnóstico organizacional a 100 Mipymes de Fusagasugá</em> [Trabajo de investigación]. Universidad de Cundinamarca. ',
      link:
        'https://repositorio.ucundinamarca.edu.co/bitstream/handle/20.500.12558/1349/DIAGNOSTICO%20ORGANIZACIONAL%20A%20100%20MIPYMES%20DE%20FUSAGASUGA.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Robichaud, F. (2018). <em>Mapeo de grupos de interés: Cuándo, por qué y cómo mapear los grupos de interés.</em> ',
      link:
        'https://www.boreal-is.com/es/blog/mapeo-partes-interesadas-grupos-interes/',
    },
    {
      referencia:
        'Ramírez, C. (2009) <em>Fundamentos de Administración.</em> Ecoe Ediciones. ',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=zXs5DwAAQBAJ&oi=fnd&pg=PP1&dq=Libros+acerca+de+administraci%C3%B3n+y+concepto+de+empresa&ots=sIinLGLTsA&sig=_LpcfRYwDoHZLbx5nry9LKpSYIA&redir_esc=y#v=onepage&q=Libros%20acerca%20de%20administraci%C3%B3n%20y%2',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
