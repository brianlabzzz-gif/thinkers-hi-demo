export const challenges = [
  // ==========================================
  // OBSERVACIÓN
  // ==========================================
  {
    id: 'OBS-01',
    title: 'El secreto del café',
    skill: 'Observación',
    difficulty: 'Fácil',
    template: 'A',
    scenario: 'Piensa en un vaso de café para llevar. Casi siempre le ponen una funda extra de cartón corrugado alrededor.',
    question: '¿Por qué crees que usan esa funda extra en lugar de hacer el vaso más grueso desde el principio?',
    correctOption: 'opt2',
    options: [
      { id: 'opt1', text: 'Para que no te quemes las manos con lo caliente.' },
      { id: 'opt2', text: 'Es mucho más barato hacer un vaso estándar y sumarle la funda.' },
      { id: 'opt3', text: 'Para tener más espacio donde imprimir el logo.' }
    ],
    feedback: {
      correct: { title: '¡Exacto! Todo es sobre el costo. 💡', text: 'Es más barato fabricar millones de vasos delgados iguales y agregar cartón solo a los que llevan bebidas calientes. Innovar muchas veces es resolver un problema sin rediseñar todo desde cero.' },
      incorrect: { title: '¡Casi! La verdadera razón es el costo. 💡', text: 'Es más barato fabricar millones de vasos delgados iguales y agregar cartón solo a los que llevan bebidas calientes. Innovar muchas veces es resolver un problema sin rediseñar todo desde cero.' }
    },
    deepen_prompt: '¿Qué otra cosa en tu día a día usa una "solución parche" o extra en lugar de cambiar todo el diseño original?',
    opportunity_blanks: ['el producto o proceso', 'lo que sobra o estorba', 'el resultado ideal'],
    opportunity_template: 'Podríamos mejorar ______ eliminando ______ y haciendo que ______.'
  },
  {
    id: 'OBS-02',
    title: 'Lo que nadie ve en el elevador',
    skill: 'Observación',
    difficulty: 'Medio',
    template: 'A',
    scenario: 'En casi todos los edificios de oficinas, hay un espejo grande dentro del elevador. La gente se mira, se arregla el pelo, revisa su ropa.',
    question: '¿Por qué crees que pusieron un espejo ahí en primer lugar?',
    correctOption: 'opt3',
    options: [
      { id: 'opt1', text: 'Para que la gente se arregle antes de llegar a su piso.' },
      { id: 'opt2', text: 'Para que el espacio se sienta más grande y menos claustrofóbico.' },
      { id: 'opt3', text: 'Para que la gente deje de quejarse de que el elevador es lento.' }
    ],
    feedback: {
      correct: { title: '¡Exacto! Las quejas bajaron un 70%. 🪞', text: 'Los espejos en elevadores se popularizaron porque la gente se quejaba de la espera. En lugar de hacer elevadores más rápidos (carísimo), pusieron espejos para que la gente se distrajera. A veces la mejor innovación no resuelve el problema técnico, sino el problema emocional.' },
      incorrect: { title: '¡Interesante idea, pero la respuesta es aún mejor! 🪞', text: 'La gente se quejaba de que los elevadores eran lentos. En lugar de hacerlos más rápidos (carísimo), pusieron espejos para que la gente se distrajera. Las quejas bajaron un 70%. A veces la mejor innovación no resuelve el problema técnico, sino el problema emocional.' }
    },
    deepen_prompt: '¿Conoces algún lugar o servicio donde la espera se siente eterna? ¿Qué "espejo" le pondrías para cambiar esa experiencia?',
    opportunity_blanks: ['lo que quieres mejorar', 'cómo quieres que se sienta la espera', 'qué podrías agregar'],
    opportunity_template: 'En lugar de hacer ______ más rápido, podríamos hacer que la espera se sienta ______ al agregar ______.'
  },
  {
    id: 'OBS-03',
    title: 'El misterio del carrito de supermercado',
    skill: 'Observación',
    difficulty: 'Difícil',
    template: 'A',
    scenario: 'Los carritos de supermercado fueron inventados en 1937. Al principio, la gente se negaba a usarlos. Los hombres decían que eran lo suficientemente fuertes para cargar sus compras. Las mujeres decían que ya estaban cansadas de empujar carriolas.',
    question: '¿Cómo logró el inventor que la gente empezara a usar los carritos?',
    correctOption: 'opt2',
    options: [
      { id: 'opt1', text: 'Hizo los carritos más bonitos y modernos.' },
      { id: 'opt2', text: 'Contrató actores para que pasearan por la tienda usándolos, como si fuera lo más normal.' },
      { id: 'opt3', text: 'Les dio un descuento a quienes usaran el carrito.' }
    ],
    feedback: {
      correct: { title: '¡Correcto! Contrató actores. 🎭', text: 'Sylvan Goldman contrató personas de todas las edades para que empujaran carritos por la tienda. Cuando los clientes reales vieron que "todo el mundo" los usaba, dejaron de resistirse. La prueba social es más fuerte que cualquier argumento lógico.' },
      incorrect: { title: '¡Buena idea, pero fue más creativo! 🎭', text: 'Sylvan Goldman contrató actores para que pasearan con los carritos por la tienda. Cuando los clientes vieron que "todo el mundo" los usaba, dejaron de resistirse. La prueba social es más fuerte que cualquier argumento lógico.' }
    },
    deepen_prompt: '¿Hay algo que tú no haces solo porque "nadie a tu alrededor lo hace"? ¿Qué pasaría si empezaras?',
    opportunity_blanks: ['lo que quieres que la gente adopte', 'quiénes podrían dar el ejemplo'],
    opportunity_template: 'Para que la gente adopte ______, podríamos mostrar que ______ ya lo usan.'
  },

  // ==========================================
  // CUESTIONAMIENTO
  // ==========================================
  {
    id: 'CUE-01',
    title: 'La regla invisible',
    skill: 'Cuestionamiento',
    difficulty: 'Fácil',
    template: 'B',
    scenario: 'En la mayoría de los trabajos, el horario es fijo (ej. de 9 AM a 5 PM), incluso si terminaste todas tus tareas a las 3 PM.',
    question: 'Si lo piensas bien, ¿qué estamos asumiendo realmente con este horario fijo?',
    correctOption: 'opt3',
    options: [
      { id: 'opt1', text: 'Que estar más horas sentado significa producir más.' },
      { id: 'opt2', text: 'Que todas las personas tienen más energía a la misma hora.' },
      { id: 'opt3', text: 'Que el trabajo se mide por tiempo y no por resultados.' }
    ],
    feedback: {
      correct: { title: '¡Diste en el clavo! 🎯', text: 'Casi siempre medimos el trabajo por "tiempo en la silla" y no por el resultado real. Cuestionar estas reglas invisibles es el primer paso para innovar en cómo trabajamos.' },
      incorrect: { title: '¡Buen punto! Pero hay algo más profundo. 🎯', text: 'Lo que realmente asumimos es que el trabajo se mide por tiempo y no por resultados. Casi siempre medimos productividad por "horas en la silla". Cuestionar estas reglas invisibles es el primer paso para innovar.' }
    },
    deepen_prompt: 'Si pudieras eliminar una "regla invisible" en tu trabajo o escuela hoy mismo, ¿cuál sería?',
    opportunity_blanks: ['lo que dejarías de medir', 'lo que empezarías a medir'],
    opportunity_template: '¿Qué pasaría si dejamos de medir ______ y empezamos a medir ______?'
  },
  {
    id: 'CUE-02',
    title: '¿Por qué los doctores usan bata blanca?',
    skill: 'Cuestionamiento',
    difficulty: 'Medio',
    template: 'B',
    scenario: 'Vas al doctor y siempre lleva bata blanca. En la mayoría de consultas no hace ningún procedimiento que la necesite. Solo habla contigo, te revisa y te receta algo.',
    question: 'Si la bata no es necesaria para la consulta, ¿por qué la sigue usando?',
    correctOption: 'opt2',
    options: [
      { id: 'opt1', text: 'Es una regla del hospital que no se puede cambiar.' },
      { id: 'opt2', text: 'Porque la bata genera confianza automática: "se ve como doctor, entonces sabe".' },
      { id: 'opt3', text: 'Para protegerse de gérmenes durante la consulta.' }
    ],
    feedback: {
      correct: { title: '¡Es pura confianza visual! 🧥', text: 'Estudios demuestran que los pacientes confían más en un doctor con bata blanca, aunque su diagnóstico sea exactamente el mismo. En innovación, la lección es clave: la forma en que presentas algo cambia cómo la gente lo percibe.' },
      incorrect: { title: '¡Tiene lógica, pero la razón real es más interesante! 🧥', text: 'Los pacientes confían más en un doctor con bata blanca, aunque su diagnóstico sea el mismo. Esto se llama "efecto bata blanca". La forma en que presentas algo cambia cómo la gente lo percibe, sin importar la calidad real.' }
    },
    deepen_prompt: '¿Qué "bata blanca" usas tú (o tu trabajo, producto o idea) para generar confianza? ¿Y si no la tuvieras?',
    opportunity_blanks: ['dónde quieres generar más confianza', 'qué cambiarías en la presentación'],
    opportunity_template: 'Podríamos generar más confianza en ______ si cambiamos la forma en que ______.'
  },
  {
    id: 'CUE-03',
    title: 'El menú de 3 opciones',
    skill: 'Cuestionamiento',
    difficulty: 'Difícil',
    template: 'B',
    scenario: 'Entras a un cine y ves las palomitas en tres tamaños: Chicas (\$3), Medianas (\$6.50) y Grandes (\$7). Las medianas son casi tan caras como las grandes.',
    question: '¿Por qué el cine pone las medianas a un precio tan cercano al de las grandes?',
    correctOption: 'opt2',
    options: [
      { id: 'opt1', text: 'Porque las medianas cuestan casi lo mismo de producir que las grandes.' },
      { id: 'opt2', text: 'Para que compres las grandes, porque al lado de las medianas parecen una ganga.' },
      { id: 'opt3', text: 'Porque nadie compra las medianas y así las van a sacar del menú.' }
    ],
    feedback: {
      correct: { title: '¡Es el "efecto señuelo"! 🍿', text: 'Las medianas existen para que las grandes parezcan la mejor oferta. Sin las medianas, compararías chicas vs. grandes y muchos elegirían las chicas. Innovar también es entender cómo las personas toman decisiones.' },
      incorrect: { title: '¡Buena teoría! Pero es un truco psicológico. 🍿', text: 'Se llama "efecto señuelo": las medianas existen solo para que las grandes parezcan una ganga. Sin esa opción intermedia, muchos comprarían las chicas. Innovar también es entender cómo la gente toma decisiones.' }
    },
    deepen_prompt: '¿Dónde has visto este truco de "3 opciones" en tu vida? ¿En planes de suscripción, menús, o precios de servicios?',
    opportunity_blanks: ['lo que ofreces', 'qué opción intermedia haría que la otra se vea mejor'],
    opportunity_template: 'Podríamos presentar ______ con una opción intermedia que haga que ______ parezca mejor.'
  },

  // ==========================================
  // ASOCIACIÓN
  // ==========================================
  {
    id: 'ASO-01',
    title: 'Robar como un artista',
    skill: 'Asociación',
    difficulty: 'Fácil',
    template: 'C',
    scenario: 'Imagina que tienes que estudiar un tema muy aburrido y sientes que nada se te queda en la cabeza.',
    question: 'Si quisieras hacer el estudio más adictivo, ¿a qué industria le "robarías" ideas?',
    correctOption: null, // All are valid
    options: [
      { id: 'opt1', text: 'A los videojuegos (niveles, recompensas, vidas).' },
      { id: 'opt2', text: 'A Netflix (dejar la intriga al final de cada capítulo).' },
      { id: 'opt3', text: 'A TikTok (contenido ultra corto y visual).' }
    ],
    feedback: {
      correct: { title: '¡Todas son conexiones válidas! 🧠', text: 'La innovación casi nunca es inventar algo de cero. Es tomar algo que funciona increíblemente bien en un lugar y aplicarlo en otro totalmente distinto. Duolingo hizo exactamente esto: le "robó" mecánicas a los videojuegos para enseñar idiomas.' },
      incorrect: { title: '¡Todas son conexiones válidas! 🧠', text: 'La innovación casi nunca es inventar algo de cero. Es tomar algo que funciona increíblemente bien en un lugar y aplicarlo en otro totalmente distinto. Duolingo hizo exactamente esto: le "robó" mecánicas a los videojuegos para enseñar idiomas.' }
    },
    deepen_prompt: 'Piensa en tu app favorita. ¿Qué pequeña función o detalle de esa app podrías aplicar a tu forma de organizar tus tareas?',
    opportunity_blanks: ['la idea que tomarías prestada', 'dónde la aplicarías'],
    opportunity_template: 'Podríamos usar la idea de ______ para mejorar cómo ______.'
  },
  {
    id: 'ASO-02',
    title: 'Lo que un hospital aprendió de la F1',
    skill: 'Asociación',
    difficulty: 'Medio',
    template: 'C',
    scenario: 'En un hospital de Londres, los doctores notaron que cometían errores cuando transferían pacientes de cirugía a cuidados intensivos. Muchos cables, muchos aparatos, mucho caos en poco tiempo.',
    question: '¿A quién le pidieron ayuda para resolver este problema?',
    correctOption: 'opt2',
    options: [
      { id: 'opt1', text: 'A otro hospital más moderno.' },
      { id: 'opt2', text: 'Al equipo de pit stop de una escudería de Fórmula 1.' },
      { id: 'opt3', text: 'A una empresa de logística como FedEx.' }
    ],
    feedback: {
      correct: { title: '¡Correcto! Fue el equipo de Fórmula 1. 🏎️', text: 'El Great Ormond Street Hospital vio una carrera de F1 y notó que los pit stops (cambiar llantas en 3 segundos) eran muy parecidos a sus transferencias de pacientes. Invitaron al equipo de Ferrari. Los errores bajaron un 42%. La innovación más potente viene de mirar fuera de tu industria.' },
      incorrect: { title: '¡Fue mucho más creativo! 🏎️', text: 'Le pidieron ayuda al equipo de pit stop de Ferrari. Notaron que cambiar llantas en 3 segundos se parece mucho a transferir un paciente: un equipo, muchas manos, poco tiempo, cero margen de error. Los errores bajaron un 42%. La innovación más potente viene de mirar fuera de tu industria.' }
    },
    deepen_prompt: '¿Qué problema tienes en tu trabajo o estudios que podría resolverse mirando cómo lo hace una industria completamente diferente?',
    opportunity_blanks: ['tu problema', 'qué industria diferente lo resuelve bien', 'cómo lo resuelven'],
    opportunity_template: 'El problema de ______ se parece mucho a cómo ______ resuelve ______.'
  },
  {
    id: 'ASO-03',
    title: 'La maleta que aprendió a caminar',
    skill: 'Asociación',
    difficulty: 'Difícil',
    template: 'C',
    scenario: 'Hasta 1970, todas las maletas se cargaban a mano. No tenían ruedas. Un piloto de avión llamado Robert Plath estaba harto de cargar su equipaje por los aeropuertos.',
    question: '¿Qué conexión tan obvia hizo que nadie más había hecho?',
    correctOption: 'opt1',
    options: [
      { id: 'opt1', text: 'Le puso ruedas y un mango largo a la maleta para poder jalarla.' },
      { id: 'opt2', text: 'Copió el diseño de las hieleras con ruedas que ya existían.' },
      { id: 'opt3', text: 'Se inspiró en los carritos del supermercado.' }
    ],
    feedback: {
      correct: { title: '¡Las ruedas existían hace 5,000 años! 🧳', text: 'Las ruedas se inventaron alrededor del 3,500 a.C. Las maletas modernas existen desde el siglo XIX. Pero nadie combinó las dos cosas hasta 1970. La innovación más poderosa muchas veces no es inventar algo nuevo, sino conectar dos cosas que ya existen.' },
      incorrect: { title: '¡Fue más simple de lo que piensas! 🧳', text: 'Simplemente le puso ruedas a la maleta. Las ruedas existían hace 5,000 años. Las maletas, desde el siglo XIX. Pero nadie las combinó hasta 1970. La innovación más poderosa muchas veces no es inventar algo nuevo, sino conectar dos cosas que ya existen.' }
    },
    deepen_prompt: '¿Qué dos cosas que ya existen podrías combinar para resolver algo que te molesta todos los días?',
    opportunity_blanks: ['primera cosa que ya existe', 'segunda cosa que ya existe', 'lo que crearías'],
    opportunity_template: 'Si combinamos ______ con ______, podríamos crear ______.'
  }
];
