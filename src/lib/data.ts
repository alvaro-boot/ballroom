import type {
  TimelineEvent,
  House,
  Category,
  Legend,
  Documentary,
  BlogPost,
  GlossaryTerm,
  CultureTerm,
} from "./types";

export const siteConfig = {
  name: "Vogue Society",
  slogan:
    "Preservando la historia, celebrando la cultura y documentando el legado del Ballroom.",
  quote:
    "Ballroom no es solo una competencia; es una familia, una protesta y una forma de sobrevivir.",
};

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1960",
    title: "Nacimiento del Ballroom",
    description:
      "En Harlem, Nueva York, la comunidad LGBTQ+ negra y latina crea un espacio propio lejos de la discriminación de los concursos drag blancos.",
  },
  {
    year: "1972",
    title: "Fundación de nuevas Houses",
    description:
      "Surgen casas icónicas como LaBeija y Xtravaganza, estableciendo la estructura familiar que define el movimiento.",
  },
  {
    year: "1980",
    title: "Expansión",
    description:
      "El Ballroom crece envir de Harlem. Nuevas categorías, nuevos estilos de vogue y una escena cada vez más sofisticada.",
  },
  {
    year: "1990",
    title: "Paris Is Burning",
    description:
      "El documental de Jennie Livingston lleva el Ballroom al mundo entero, inmortalizando a sus leyendas.",
  },
  {
    year: "1990",
    title: "Lanzamiento de Vogue",
    description:
      "Madonna lanza «Vogue», llevando el baile a la cultura pop global y abriendo conversaciones sobre apropiación y visibilidad.",
  },
  {
    year: "2000",
    title: "Expansión mundial",
    description:
      "El Ballroom se expande a Europa, Asia y más allá. Nuevas escenas locales adaptan la cultura a sus contextos.",
  },
  {
    year: "2010",
    title: "Latinoamérica",
    description:
      "Colombia, Brasil, México, Chile y Perú desarrollan escenas vibrantes con identidad propia dentro del movimiento global.",
  },
  {
    year: "2020",
    title: "Ballroom digital",
    description:
      "La pandemia impulsa balls virtuales y una nueva generación documenta la cultura en redes sociales.",
  },
];

export const houses: House[] = [
  {
    name: "House of LaBeija",
    slug: "labeija",
    description:
      "Fundada por Crystal LaBeija, pionera del movimiento. Una de las casas más antiguas e influyentes de la historia del Ballroom.",
  },
  {
    name: "House of Xtravaganza",
    slug: "xtravaganza",
    description:
      "Creada por Angie Xtravaganza, la primera House latina. Símbolo de la intersección entre identidad latina y cultura Ballroom.",
  },
  {
    name: "House of Ninja",
    slug: "ninja",
    description:
      "Fundada por Willi Ninja, el «Grandfather of Vogue». Revolucionó el baile y llevó el voguing a la moda y el mainstream.",
  },
  {
    name: "House of Mizrahi",
    slug: "mizrahi",
    description:
      "Una de las casas más respetadas, conocida por su excelencia en runway y su legado de madres y padres legendarios.",
  },
];

export const categories: Category[] = [
  {
    slug: "face",
    name: "Face",
    tagline: "La belleza que desafía los estándares",
    history:
      "Face es una de las categorías más antiguas del Ballroom. Evalúa la belleza facial y la presencia, desafiando los estándares eurocéntricos de belleza.",
    origin: "Harlem, década de 1970. Nace como respuesta a la exclusión de rostros negros y latinos en la moda y el entretenimiento.",
    judging:
      "Los jueces evalúan simetría facial, piel, estructura ósea, presentación y la capacidad de «servir» rostro bajo cualquier luz.",
    judgesLookFor:
      "Confianza, perfección en el maquillaje, piel impecable y una presencia que comande la pista sin decir una palabra.",
    icons: ["Octavia Saint Laurent", "Angie Xtravaganza", "Pepper LaBeija"],
    tips: "Menos es más. La piel perfecta y la confianza valen más que el exceso de maquillaje.",
  },
  {
    slug: "runway",
    name: "Runway",
    tagline: "La pasarela como manifestación",
    history:
      "Runway celebra la moda, el estilo personal y la capacidad de caminar con autoridad. Es una de las categorías más espectaculares del ball.",
    origin: "Inspirada en las pasarelas de alta costura, adaptada por la comunidad negra y latina como acto de reivindicación estética.",
    judging:
      "Se evalúa el walk, el outfit, la actitud, la originalidad y la capacidad de dominar la pista de principio a fin.",
    judgesLookFor:
      "Presencia escénica, outfit cohesivo, walk impecable y la habilidad de contar una historia con cada paso.",
    icons: ["Dorian Corey", "Pepper LaBeija", "Angie Xtravaganza"],
    subcategories: ["Old Way", "European", "All American"],
  },
  {
    slug: "vogue",
    name: "Vogue",
    tagline: "El baile que conquistó el mundo",
    history:
      "El voguing nació en las pistas de baile de Harlem como expresión de creatividad, competencia y supervivencia. Hoy es un lenguaje global.",
    origin: "Inspirado en las poses de las modelos de Vogue magazine, transformado en un arte de movimiento por la comunidad Ballroom.",
    judging:
      "Precisión de movimientos, musicalidad, creatividad, transiciones fluidas y la capacidad de «leer» al oponente.",
    judgesLookFor:
      "Técnica impecable, personalidad, innovación y el «tens» — esa tensión eléctrica que hace inolvidable una performance.",
    icons: ["Willi Ninja", "José Gutiérrez Xtravaganza", "Leiomy Maldonado"],
    subcategories: [
      "Old Way",
      "New Way",
      "Fem",
      "Soft & Cunt",
      "Dramatics",
    ],
  },
  {
    slug: "realness",
    name: "Realness",
    tagline: "Ser auténtico en un mundo que niega tu existencia",
    history:
      "Realness evalúa qué tan convincentemente una persona puede «pasar» en diferentes contextos sociales — ejecutivo, militar, school boy, etc.",
    origin:
      "Nace de la necesidad de la comunidad trans de demostrar que pueden existir y prosperar en espacios que los rechazan.",
    judging:
      "Autenticidad, atención al detalle, consistencia del personaje y la capacidad de convencer a los jueces.",
    judgesLookFor:
      "Realismo absoluto. Cada detalle — ropa, actitud, lenguaje corporal — debe ser creíble e impecable.",
    icons: ["Venus Xtravaganza", "Octavia Saint Laurent"],
  },
  {
    slug: "sex-siren",
    name: "Sex Siren",
    tagline: "Sensualidad como arte",
    history:
      "Sex Siren celebra la sensualidad y el erotismo como formas de expresión artística y empoderamiento dentro del Ballroom.",
    origin: "Emergió como categoría que permite a los participantes explorar y celebrar su sexualidad sin vergüenza.",
    judging:
      "Sensualidad, confianza, control del cuerpo, outfit y la capacidad de seducir la pista y a los jueces.",
    judgesLookFor:
      "Carisma sexual, movimientos fluidos, presencia magnética y la habilidad de mantener el control en todo momento.",
    icons: ["Angie Xtravaganza"],
  },
  {
    slug: "ota",
    name: "OTA",
    tagline: "Open To All — todos son bienvenidos",
    history:
      "OTA (Open To All) es una categoría inclusiva donde cualquier persona puede competir, independientemente de su identidad de género.",
    origin: "Creada para democratizar la competencia y abrir espacios a quienes no encajan en categorías binarias.",
    judging:
      "Se evalúa la presentación general, el estilo, la originalidad y la capacidad de destacar entre todos los competidores.",
    judgesLookFor:
      "Originalidad, presencia escénica, outfit memorable y la habilidad de dejar una impresión duradera.",
    icons: [],
  },
  {
    slug: "bizarre",
    name: "Bizarre",
    tagline: "Lo extraordinario como norma",
    history:
      "Bizarre premia la creatividad extrema, los outfits más audaces y las presentaciones que desafían toda convención.",
    origin: "Nace del espíritu avant-garde del Ballroom, donde lo «raro» es celebrado como lo más hermoso.",
    judging:
      "Originalidad, construcción del outfit, impacto visual y la capacidad de sorprender y asombrar.",
    judgesLookFor:
      "Creatividad sin límites, ejecución impecable y ese factor «wow» que hace que todos miren.",
    icons: ["Dorian Corey"],
  },
  {
    slug: "body",
    name: "Body",
    tagline: "El templo como manifestación",
    history:
      "Body evalúa la forma física, la musculatura y la presentación corporal como expresiones de disciplina y orgullo.",
    origin: "Surge de la cultura del fitness y la celebración de cuerpos que no encajan en estándares convencionales.",
    judging:
      "Proporción, definición muscular, presentación, outfit y la confianza con la que se muestra el cuerpo.",
    judgesLookFor:
      "Físico impecable, confianza absoluta y la capacidad de transformar el cuerpo en una obra de arte viviente.",
    icons: [],
  },
  {
    slug: "hands-performance",
    name: "Hands Performance",
    tagline: "Las manos cuentan historias",
    history:
      "Hands Performance se centra en el arte de las manos — gestos, precisión y expresividad que complementan el voguing.",
    origin: "Evolucionó del voguing Old Way, donde las manos eran tan importantes como el resto del cuerpo.",
    judging:
      "Precisión, fluidez, creatividad de movimientos, musicalidad y la capacidad de crear narrativas con las manos.",
    judgesLookFor:
      "Control total, movimientos limpios, innovación y esa conexión eléctrica entre manos y música.",
    icons: ["Willi Ninja"],
  },
  {
    slug: "best-dressed",
    name: "Best Dressed",
    tagline: "La moda como identidad",
    history:
      "Best Dressed celebra el estilo personal, la combinación de piezas y la capacidad de crear looks memorables.",
    origin: "Inspirada en la obsesión del Ballroom por la moda de lujo y el estilo personal como forma de expresión.",
    judging:
      "Cohesión del outfit, accesorios, originalidad, fit y la capacidad de crear un look completo e impactante.",
    judgesLookFor:
      "Estilo impecable, atención al detalle, accesorios perfectos y la confianza de quien sabe que se ve increíble.",
    icons: ["Dorian Corey"],
  },
  {
    slug: "labels",
    name: "Labels",
    tagline: "El lujo como reivindicación",
    history:
      "Labels evalúa la presencia de marcas de lujo y diseñador en el outfit — una categoría que celebra el acceso a la moda de alta gama.",
    origin: "Nace de la aspiración y el deseo de la comunidad de acceder a un mundo de moda que históricamente los excluía.",
    judging:
      "Autenticidad de las piezas, combinación de marcas, presentación general y el «mop» — lucir caro sin gastar una fortuna.",
    judgesLookFor:
      "Piezas auténticas o impecablemente recreadas, estilo cohesivo y la habilidad de lucir millonario.",
    icons: [],
  },
  {
    slug: "performance",
    name: "Performance",
    tagline: "El escenario es tuyo",
    history:
      "Performance es la categoría más display — una presentación escénica completa que puede incluir baile, lip sync, teatro y más.",
    origin: "La categoría más libre del Ballroom, donde la creatividad no tiene límites ni reglas fijas.",
    judging:
      "Impacto escénico, originalidad, ejecución técnica, conexión con la audiencia y memorabilidad.",
    judgesLookFor:
      "Una performance que nadie olvide — carisma, técnica, sorpresa y emoción genuina.",
    icons: [],
  },
];

export const legends: Legend[] = [
  {
    slug: "crystal-labeija",
    name: "Crystal LaBeija",
    house: "House of LaBeija",
    excerpt: "La madre fundadora que dijo «basta» y creó un movimiento.",
    biography:
      "Crystal LaBeija fue la fundadora de la House of LaBeija y una de las figuras más importantes en la historia del Ballroom. Tras sufrir discriminación racial en un concurso drag blanco, decidió crear un espacio propio para la comunidad negra y latina. Su legado incluye no solo la fundación de una de las casas más icónicas, sino también la articulación de una filosofía de resistencia, familia y orgullo que define el movimiento hasta hoy.",
  },
  {
    slug: "pepper-labeija",
    name: "Pepper LaBeija",
    house: "House of LaBeija",
    excerpt: "La madre que mantuvo viva la llama de LaBeija.",
    biography:
      "Pepper LaBeija fue madre de la House of LaBeija durante décadas, llevando el legado de Crystal al siglo XXI. Conocida por su presencia imponente en la pista y su capacidad de liderar con autoridad y cariño, Pepper representó la continuidad y la evolución del Ballroom. Su figura aparece en Paris Is Burning como testimonio viviente de una era.",
  },
  {
    slug: "dorian-corey",
    name: "Dorian Corey",
    house: "House of Corey",
    excerpt: "La filósofa del Ballroom cuyas palabras perduran.",
    biography:
      "Dorian Corey fue una drag queen legendaria, madre de la House of Corey y una de las voces más elocuentes del Ballroom. Famosa por sus reflexiones sobre la fama, la belleza y la mortalidad en Paris Is Burning, Dorian encarnaba la sabiduría y el humor ácido de la escena. Su famosa reflexión sobre las «pursued becoming the pursuer» es una de las citas más icónicas del documental.",
  },
  {
    slug: "willi-ninja",
    name: "Willi Ninja",
    house: "House of Ninja",
    excerpt: "El Grandfather of Vogue que llevó el baile al mundo.",
    biography:
      "Willi Ninja fundó la House of Ninja y es considerado el padre del voguing moderno. Su técnica, precisión y carisma llevaron el baile de las pistas de Harlem a las pasarelas de la moda internacional, trabajando con Madonna, Malcolm McLaren y diseñadores de todo el mundo. Su legado vive en cada performance de vogue que se da en cualquier rincón del planeta.",
  },
  {
    slug: "angie-xtravaganza",
    name: "Angie Xtravaganza",
    house: "House of Xtravaganza",
    excerpt: "La primera madre latina del Ballroom.",
    biography:
      "Angie Xtravaganza fundó la House of Xtravaganza, la primera House latina del Ballroom. Como madre, Angie acogió a decenas de jóvenes LGBTQ+ latinos y negros que habían sido rechazados por sus familias biológicas. Su historia, contada en Paris Is Burning, es un testimonio de amor, pérdida y la construcción de familias elegidas.",
  },
  {
    slug: "octavia-saint-laurent",
    name: "Octavia Saint Laurent",
    house: "House of Saint Laurent",
    excerpt: "La reina de Face que desafió todos los estándares.",
    biography:
      "Octavia Saint Laurent fue una competidora legendaria en la categoría Face y una figura central en Paris Is Burning. Conocida por su belleza deslumbrante y su ambición de triunfar en el mundo del modelaje convencional, Octavia representó las tensiones entre el Ballroom y el mainstream. Su historia es la de una mujer trans negra que luchó por ser vista en un mundo que la ignoraba.",
  },
  {
    slug: "jose-gutierrez-xtravaganza",
    name: "José Gutiérrez Xtravaganza",
    house: "House of Xtravaganza",
    excerpt: "El voguero que enseñó a Madonna a voguear.",
    biography:
      "José Gutiérrez Xtravaganza fue uno de los bailarines que enseñó a Madonna el voguing para su icónico video «Vogue». Miembro de la House of Xtravaganza, José llevó la técnica del New Way a la cultura pop global, demostrando que el talento del Ballroom podía brillar en cualquier escenario del mundo.",
  },
];

export const documentaries: Documentary[] = [
  {
    slug: "paris-is-burning",
    title: "Paris Is Burning",
    year: "1990",
    description:
      "El documental definitivo sobre el Ballroom de Harlem, dirigido por Jennie Livingston.",
    history:
      "Filmado entre 1985 y 1989, Paris Is Burning capturó la escena Ballroom en su momento más vibrante. El documental sigue a competidores, madres de casas y leyendas mientras compiten en balls, comparten sus historias y reflexionan sobre identidad, familia y supervivencia. Se convirtió en un hito cultural y en la ventana principal al Ballroom para el mundo.",
    whereToWatch: "Disponible en Criterion Channel y plataformas de streaming selectas.",
    influence:
      "Inspiró generaciones de artistas, activistas y creadores. Referenciado en Pose, RuPaul's Drag Race y countless obras de arte.",
  },
  {
    slug: "pose",
    title: "Pose",
    year: "2018–2021",
    description:
      "La serie de FX que llevó el Ballroom a la televisión con el elenco trans más grande de la historia.",
    history:
      "Creada por Ryan Murphy, Brad Falchuk y Steven Canals, Pose ambienta su narrativa en la escena Ballroom de los años 80 y 90 en Nueva York. Con un elenco mayoritariamente trans y personas de color, la serie fue pionera en representación y narró con respeto la historia de la comunidad.",
    whereToWatch: "Disponible en Netflix y Disney+ (Star).",
    influence:
      "Revolucionó la representación trans en televisión y reintrodujo el Ballroom a una nueva generación.",
  },
  {
    slug: "how-do-i-look",
    title: "How Do I Look",
    year: "2006",
    description:
      "Un documental hecho por y para la comunidad Ballroom, como respuesta a Paris Is Burning.",
    history:
      "Dirigido por Wolfgang Busch, How Do I Look fue creado con la participación activa de la comunidad Ballroom como alternativa y complemento a Paris Is Burning. El documental aborda temas de apropiación cultural, derechos de imagen y la evolución del movimiento.",
    whereToWatch: "Disponible para compra y alquiler digital.",
    influence:
      "Amplió la conversación sobre quién cuenta las historias del Ballroom y cómo se documenta la cultura.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "como-nacio-el-voguing",
    title: "¿Cómo nació el Voguing?",
    excerpt:
      "Un recorrido por los orígenes del baile que conquistó el mundo, desde las pistas de Harlem hasta Madonna.",
    date: "2026-03-15",
  },
  {
    slug: "que-significa-ser-007",
    title: "¿Qué significa ser 007?",
    excerpt:
      "La historia detrás del título que indica independencia, maestría y respeto dentro de una House.",
    date: "2026-03-01",
  },
  {
    slug: "historia-house-of-ninja",
    title: "Historia de House of Ninja",
    excerpt:
      "Desde Willi Ninja hasta hoy: la casa que llevó el voguing a las pasarelas del mundo.",
    date: "2026-02-18",
  },
  {
    slug: "como-prepararse-para-un-ball",
    title: "Cómo prepararse para un Ball",
    excerpt:
      "Consejos prácticos para quienes compiten por primera vez: categoría, outfit, presencia y más.",
    date: "2026-02-05",
  },
  {
    slug: "que-es-una-kiki-house",
    title: "¿Qué es una Kiki House?",
    excerpt:
      "Las casas informales donde se practica, se aprende y se construye comunidad sin la presión de la competencia.",
    date: "2026-01-22",
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  { term: "Chop", definition: "Derrotar a un oponente en la pista de forma contundente e indiscutible." },
  { term: "Tens", definition: "La tensión eléctrica y la intensidad que un competidor transmite en su performance." },
  { term: "Mop", definition: "Lucir caro y elegante sin haber gastado mucho dinero. Creatividad sobre presupuesto." },
  { term: "Legend", definition: "Título honorífico otorgado a quienes han dedicado décadas al Ballroom y son referentes." },
  { term: "Icon", definition: "Reconocimiento a figuras que han trascendido el Ballroom y son referentes culturales globales." },
  { term: "Statement", definition: "Una frase impactante, a menudo humorística o provocadora, que se lanza durante un ball." },
  { term: "Shade", definition: "Crítica sutil, elegante y a menudo devastadora disfrazada de cumplido." },
  { term: "Reading", definition: "El arte de señalar las fallas de alguien con ingenio, humor y precisión." },
  { term: "Mother", definition: "La líder femenina de una House. Acoge, guía y representa a sus hijos en la pista." },
  { term: "Father", definition: "La figura paterna de una House. Proporciona estructura, protección y liderazgo." },
  { term: "House", definition: "Familia elegida dentro del Ballroom. Unidad de pertenencia, apoyo y competencia." },
  { term: "007", definition: "Miembro independiente de una House, con estatus especial por mérito y maestría." },
];

export const cultureTerms: CultureTerm[] = [
  { term: "Elegir una House", definition: "Proceso de unirse a una familia Ballroom. Implica compromiso, lealtad y representación." },
  { term: "Mother", definition: "Líder femenina que acoge, entrena y guía a los miembros de la casa." },
  { term: "Father", definition: "Figura paterna que aporta estructura y protección dentro de la House." },
  { term: "Prince / Princess", definition: "Jóvenes promesas de una House, en formación bajo la guía de la madre o el padre." },
  { term: "Statement", definition: "Frase memorable lanzada para provocar, divertir o marcar presencia en la pista." },
  { term: "Shade", definition: "Desprecio velado expresado con elegancia y humor ácido." },
  { term: "Reading", definition: "Arte verbal de señalar verdades incómodas con ingenio y precisión." },
  { term: "Serving", definition: "Entregar una performance impecable; «servir» rostro, cuerpo o look." },
  { term: "Legend", definition: "Máximo reconocimiento honorífico por décadas de dedicación al Ballroom." },
  { term: "Icon", definition: "Figura que trasciende el Ballroom y es referente en la cultura global." },
  { term: "Grand Prize", definition: "Premio máximo de un ball, otorgado al competidor más destacado de la noche." },
  { term: "Tens", definition: "Intensidad eléctrica y presencia magnética en la pista." },
  { term: "Chops", definition: "Habilidades, talento y credenciales demostradas en la pista." },
];

export const ballroomRegions = [
  { region: "Estados Unidos", description: "Harlem sigue siendo el corazón espiritual, con escenas activas en Atlanta, Chicago, Los Ángeles y más." },
  { region: "Europa", description: "París, Berlín, Londres y Madrid tienen escenas vibrantes con balls regulares y casas establecidas." },
  { region: "Colombia", description: "Bogotá y Medellín lideran una escena en crecimiento con eventos como el Bogotá Ball y casas locales pioneras." },
  { region: "Brasil", description: "São Paulo y Rio de Janeiro tienen una de las escenas más activas de Latinoamérica." },
  { region: "México", description: "Ciudad de México y Guadalajara desarrollan una escena con identidad propia y eventos regulares." },
  { region: "Chile", description: "Santiago cuenta con una comunidad activa que organiza balls y talleres de voguing." },
  { region: "Perú", description: "Lima emerge como nuevo centro del Ballroom andino con eventos y casas en formación." },
];

export const historySections = [
  {
    title: "Antes del Ballroom",
    content:
      "En la década de 1960, Harlem era el epicentro de la vida negra en América. Pero dentro de la comunidad LGBTQ+, el racismo era omnipresente — incluso en los espacios queer. Los concursos drag blancos excluían sistemáticamente a participantes negros y latinos, imponiendo estándares de belleza eurocéntricos que negaban la existencia y el valor de las personas de color.",
  },
  {
    title: "El nacimiento",
    content:
      "Fue Crystal LaBeija quien dijo «basta». Tras ser marginada en un concurso drag blanco, fundó la House of LaBeija y organizó los primeros balls exclusivamente para la comunidad negra y latina. Estos eventos no eran solo competencias: eran espacios de supervivencia, expresión y construcción de familia en un mundo hostil.",
  },
  {
    title: "La revolución",
    content:
      "Las décadas de 1970 y 1980 vieron la explosión del Ballroom. Nacieron casas legendarias, se crearon categorías icónicas y surgieron figuras como Pepper LaBeija, Dorian Corey, Angie Xtravaganza y Willi Ninja. El voguing se convirtió en un lenguaje de resistencia, y los balls pasaron de reuniones clandestinas a eventos que definirían una cultura global.",
  },
];

export const historyFigures = [
  { slug: "crystal-labeija", name: "Crystal LaBeija" },
  { slug: "pepper-labeija", name: "Pepper LaBeija" },
  { slug: "dorian-corey", name: "Dorian Corey" },
  { slug: "angie-xtravaganza", name: "Angie Xtravaganza" },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getLegendBySlug(slug: string) {
  return legends.find((l) => l.slug === slug);
}
