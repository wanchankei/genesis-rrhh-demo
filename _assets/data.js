// Contenido común de los 3 prototipos. Lo marcado tbd:true falta confirmarlo con el cliente.
window.DATA = {
  wa: "https://wa.me/5491100000000?text=Hola%20Genesis%2C%20quiero%20hacer%20una%20consulta",
  mail: "info@genesisrrhh.com.ar",
  li: "#", // [COMPLETAR] LinkedIn de Genesis / Catriel
  ig: "#", // [COMPLETAR] Instagram de Genesis
  servicios: [
    { n: "2", s: "Ap", nm: "Asesoramiento", slug: "asesoramiento", img: "s-asesoramiento.jpg",
      d: "Convenios, contratos, sanciones y desvinculaciones. Te decimos qué dice la ley antes de que decidas, no después.",
      def: "Acompañamiento en las decisiones que tocan a las personas de tu empresa: qué convenio aplica, cómo se documenta una sanción, cuánto cuesta una desvinculación y cómo se hace bien.",
      t: ["Convenios colectivos", "Políticas internas", "Desvinculaciones"] },
    { n: "3", s: "Sp", nm: "Selección de personal", slug: "seleccion", img: "s-seleccion.jpg",
      d: "Buscamos, entrevistamos y evaluamos. Te presentamos una terna, no una pila de CV. También búsquedas masivas para un proyecto nuevo o una apertura de planta.",
      def: "Búsqueda completa de un puesto: armamos el perfil con vos, publicamos, filtramos, entrevistamos por competencias y te presentamos a los tres mejores.",
      t: ["Perfil del puesto", "Entrevistas por competencias", "Terna final"] },
    { n: "4", s: "Ls", nm: "Liquidación de sueldos", slug: "liquidacion", img: "s-liquidacion.jpg",
      d: "Recibos al día y según tu convenio. SAC, vacaciones, horas extra y finales, sin sorpresas a fin de mes.",
      def: "Proceso mensual por el que las novedades del mes se convierten en recibos correctos: básico, adicionales, horas extra, SAC, vacaciones y liquidaciones finales.",
      t: ["Recibos", "SAC y vacaciones", "Ganancias 4.ª categoría", "Libro de sueldos digital"] },
    { n: "5", s: "Cs", nm: "Cargas sociales", slug: "cargas-sociales", img: "s-cargas.jpg",
      d: "F.931, sindicatos, obra social y ART. Presentado y pagado en fecha, todos los meses, y con alguien al lado cuando llega una inspección.",
      def: "Declaración y pago de los aportes y contribuciones que genera cada sueldo: F.931 ante ARCA, cuotas sindicales, obra social y ART.",
      t: ["F.931 · ARCA", "Sindicatos", "ART y obra social", "Inspecciones"] },
    { n: "6", s: "Cd", nm: "Capacitación y desarrollo", slug: "capacitacion", img: "s-capacitacion.jpg",
      d: "Programas a medida para mandos medios y equipos: liderazgo, comunicación e inducción de ingresos.",
      def: "Formación diseñada para tu empresa y no sacada de un catálogo: detectamos qué falta, lo dictamos y medimos si cambió algo.",
      t: ["Liderazgo", "Inducción", "Planes de desarrollo"] },
    { n: "7", s: "Sh", nm: "Seguridad e higiene", slug: "seguridad-e-higiene", img: "s-seguridad.jpg",
      d: "Relevamientos, RGRL, capacitaciones obligatorias y planes de evacuación según la Ley 19.587.",
      def: "Todo lo que la ley y la ART piden para que el lugar de trabajo sea seguro: relevamiento de riesgos, RGRL, capacitaciones obligatorias y plan de evacuación.",
      t: ["Relevamiento de riesgos", "RGRL", "Plan de evacuación"] },
    { n: "8", s: "Cb", nm: "Compensaciones y beneficios", slug: "compensaciones", img: "s-asesoramiento.jpg",
      d: "Escalas salariales, beneficios, evaluaciones de desempeño e indicadores de RRHH para decidir con números y no a ojo.",
      def: "Ordenamos cuánto y cómo se paga en tu empresa: estructura y política salarial, beneficios, evaluaciones de desempeño e indicadores (ausentismo, rotación, costo laboral) con presupuesto anual.",
      t: ["Política salarial", "Evaluación de desempeño", "Indicadores de RRHH"] }
  ],
  pasos: [
    ["Diagnóstico", "Una reunión para entender tu empresa: cuántas personas son, qué convenio aplica y qué ya funciona."],
    ["Propuesta", "Te mandamos por escrito qué hacemos, cómo y cuánto cuesta. Sin letra chica."],
    ["Puesta en marcha", "Tomamos la información, ordenamos lo pendiente y hacemos el primer cierre con vos."],
    ["Todos los meses", "Un calendario fijo y una persona de referencia que conoce tu empresa por su nombre."]
  ],
  numeros: [
    ["Años en RRHH", "25+", false],
    ["Empresas que confían", "40", true],
    ["Recibos por mes", "1.200", true],
    ["Cobertura", "CABA + GBA", false]
  ],
  faq: [
    ["¿Trabajan con empresas que ya tienen área de RRHH?", "Sí. Muchas nos tercerizan solo la liquidación, una búsqueda puntual o seguridad e higiene, y el área interna se queda con lo demás."],
    ["¿Puedo contratar un solo servicio?", "Sí. Cada servicio funciona solo. Si después sumás otro, ya conocemos tu empresa y arrancamos más rápido."],
    ["¿Qué necesitan para empezar a liquidar?", "Legajos, el convenio que aplica, la última liquidación y las novedades del mes. Si algo falta, lo reconstruimos con vos."],
    ["¿Atienden solo en CABA?", "Trabajamos con empresas de CABA y GBA. Vamos en persona cuando hace falta, por ejemplo en un relevamiento de seguridad e higiene; el resto se resuelve a distancia."],
    ["¿Cuánto cuesta?", "Depende de cuántas personas son y qué servicios necesitás. Después del diagnóstico te pasamos una propuesta cerrada, por escrito."]
  ]
};
