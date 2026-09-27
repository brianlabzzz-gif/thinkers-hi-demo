export const challenges = [
  {
    id: 'OBS-01',
    title: 'El secreto del café',
    skill: 'Observación',
    difficulty: 'Fácil',
    template: 'A',
    scenario: 'Piensa en un vaso de café para llevar. Casi siempre le ponen una funda extra de cartón alrededor.',
    question: 'Si miras con atención, ¿qué problema crees que están resolviendo con esa funda?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'Que el vaso queme las manos.' },
      { id: 'opt2', text: 'Que fabricar un vaso grueso para todo el mundo saldría más caro.' },
      { id: 'opt3', text: 'Que necesitan un lugar extra para el logo o el mensaje.' }
    ],
    feedback: {
      correct: {
        title: 'Buena mirada.',
        text: 'En la práctica, la funda existe sobre todo por costo: un vaso delgado estándar + cartón solo cuando la bebida va caliente. Observar bien es notar qué se agregó después, no solo lo que se ve primero.'
      },
      incorrect: {
        title: 'Buena mirada.',
        text: 'En la práctica, la funda existe sobre todo por costo: un vaso delgado estándar + cartón solo cuando la bebida va caliente. Observar bien es notar qué se agregó después, no solo lo que se ve primero.'
      }
    },
    deepen_prompt: 'En tu casa, trabajo o camino de todos los días, ¿qué cosa usa un “parche extra” en vez de estar bien diseñada desde el inicio?',
    opportunity_blanks: ['el producto o proceso', 'lo que sobra o estorba', 'el resultado ideal'],
    opportunity_template: 'Podríamos mejorar ______ eliminando ______ y haciendo que ______.',
    help_examples: [
      'El cargador del celular con un adaptador extra porque el enchufe no calza.',
      'La contraseña escrita en un papel pegado al monitor.',
      'La tapa que no cierra y le ponen cinta.'
    ],
    close_feedback: 'Observaste un parche. El siguiente paso es preguntarte si se puede diseñar sin ese extra.'
  },
  {
    id: 'OBS-02',
    title: 'Lo que nadie ve en el elevador',
    skill: 'Observación',
    difficulty: 'Medio',
    template: 'A',
    scenario: 'En muchos edificios hay un espejo grande dentro del elevador. La gente se mira, se arregla el pelo, revisa la ropa.',
    question: 'Más allá de verse, ¿qué otra cosa podría estar pasando mientras la gente espera?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'La gente se distrae y la espera se siente más corta.' },
      { id: 'opt2', text: 'El espacio se siente más grande.' },
      { id: 'opt3', text: 'La gente llega más arreglada a su piso.' }
    ],
    feedback: {
      correct: {
        title: 'Eso es observar el problema emocional.',
        text: 'Una historia clásica: las quejas por elevadores lentos bajaron cuando pusieron espejos. No hicieron el elevador más rápido. Cambiaron lo que la gente hace mientras espera. A veces el problema real no es la velocidad: es cómo se siente el tiempo.'
      },
      incorrect: {
        title: 'Eso es observar el problema emocional.',
        text: 'Una historia clásica: las quejas por elevadores lentos bajaron cuando pusieron espejos. No hicieron el elevador más rápido. Cambiaron lo que la gente hace mientras espera. A veces el problema real no es la velocidad: es cómo se siente el tiempo.'
      }
    },
    deepen_prompt: '¿Dónde en tu día la espera se siente eterna? ¿Qué “espejo” le pondrías para cambiar esa experiencia sin hacer el proceso más rápido?',
    opportunity_blanks: ['lo que quieres mejorar', 'cómo quieres que se sienta la espera', 'qué podrías agregar'],
    opportunity_template: 'En lugar de hacer ______ más rápido, podríamos hacer que la espera se sienta ______ al agregar ______.',
    help_examples: [
      'La fila del banco: un pantallazo que explique en qué van, no solo un número.',
      'Esperar el bus: un mapa en vivo de cuántos minutos faltan.',
      'La sala de espera del doctor: una tarea corta en vez de solo sillas.'
    ],
    close_feedback: 'Cambiaste el problema: no era solo velocidad, era cómo se siente el tiempo.'
  },
  {
    id: 'CUE-01',
    title: 'La regla invisible',
    skill: 'Cuestionamiento',
    difficulty: 'Fácil',
    template: 'B',
    scenario: 'En muchos trabajos el horario es fijo (por ejemplo, 9 a 5), aunque hayas terminado tus tareas a las 3.',
    question: 'Si cuestionas esa regla, ¿qué estamos asumiendo de verdad?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'Que más horas sentado = más trabajo hecho.' },
      { id: 'opt2', text: 'Que todas las personas rinden a la misma hora.' },
      { id: 'opt3', text: 'Que el trabajo se mide por tiempo, no por resultado.' }
    ],
    feedback: {
      correct: {
        title: 'Ahí hay una regla invisible.',
        text: 'Las tres apuntan a lo mismo: medimos presencia, no valor. Cuestionar no es quejarse. Es nombrar la suposición que nadie discute y preguntar qué pasaría si no fuera cierta.'
      },
      incorrect: {
        title: 'Ahí hay una regla invisible.',
        text: 'Las tres apuntan a lo mismo: medimos presencia, no valor. Cuestionar no es quejarse. Es nombrar la suposición que nadie discute y preguntar qué pasaría si no fuera cierta.'
      }
    },
    deepen_prompt: 'En tu trabajo, estudio o casa, ¿cuál es una regla que todos siguen y nadie cuestiona? Escríbela en una frase.',
    opportunity_blanks: ['lo que dejarías de medir', 'lo que empezarías a medir'],
    opportunity_template: '¿Qué pasaría si dejamos de medir ______ y empezamos a medir ______?',
    help_examples: [
      'Hay que quedarse hasta las 5 aunque el trabajo ya esté listo.',
      'Hay que entregar el informe en PDF aunque nadie lo lea.',
      'Hay que pedir permiso para una idea antes de probarla.'
    ],
    close_feedback: 'Nombraste una regla invisible. Eso ya es cuestionar: ahora se puede medir otra cosa.'
  },
  {
    id: 'CUE-02',
    title: 'La bata blanca',
    skill: 'Cuestionamiento',
    difficulty: 'Medio',
    template: 'B',
    scenario: 'Vas al doctor y casi siempre lleva bata blanca. En muchas consultas no hace ningún procedimiento: habla, revisa y receta.',
    question: 'Si la bata no es necesaria para hablar contigo, ¿para qué sigue ahí?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'Por costumbre del hospital.' },
      { id: 'opt2', text: 'Porque se ve “como doctor” y eso genera confianza.' },
      { id: 'opt3', text: 'Por higiene, aunque en esa consulta no se use.' }
    ],
    feedback: {
      correct: {
        title: 'Cuestionaste la forma, no solo la función.',
        text: 'La bata también es una señal: “esto es un profesional”. En innovación importa tanto lo que algo hace como lo que algo comunica. Si quitas la señal, a veces el valor percibido se cae aunque el servicio sea el mismo.'
      },
      incorrect: {
        title: 'Cuestionaste la forma, no solo la función.',
        text: 'La bata también es una señal: “esto es un profesional”. En innovación importa tanto lo que algo hace como lo que algo comunica. Si quitas la señal, a veces el valor percibido se cae aunque el servicio sea el mismo.'
      }
    },
    deepen_prompt: '¿Qué “bata blanca” usas tú, tu producto o tu trabajo para que la gente confíe? ¿Qué pasaría si no la tuvieras?',
    opportunity_blanks: ['dónde quieres generar más confianza', 'qué cambiarías en cómo se presenta'],
    opportunity_template: 'Podríamos generar más confianza en ______ si cambiamos la forma en que ______.',
    help_examples: [
      'El título en la firma del correo.',
      'El logo o el uniforme que “se ve profesional”.',
      'Hablar con palabras difíciles para parecer experto.'
    ],
    close_feedback: 'Viste que la forma también vende confianza. Cuidado: si quitas la señal, el valor tiene que sostenerse solo.'
  },
  {
    id: 'ASO-01',
    title: 'Robar como un artista',
    skill: 'Asociación',
    difficulty: 'Fácil',
    template: 'C',
    scenario: 'Tienes que aprender algo aburrido y sientes que nada se te queda.',
    question: 'Si quisieras hacerlo más adictivo, ¿a qué mundo le “robarías” una idea?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'A los videojuegos: niveles, recompensas, vidas.' },
      { id: 'opt2', text: 'A las series: dejar la intriga al final de cada bloque.' },
      { id: 'opt3', text: 'A los videos cortos: poco texto, mucho ritmo.' }
    ],
    feedback: {
      correct: {
        title: 'Esa es una asociación.',
        text: 'Innovar casi nunca es inventar desde cero. Es tomar algo que ya funciona en un mundo y moverlo a otro. Duolingo hizo eso con mecánicas de juego para enseñar idiomas. Tu trabajo ahora es elegir un préstamo y aterrizarlo.'
      },
      incorrect: {
        title: 'Esa es una asociación.',
        text: 'Innovar casi nunca es inventar desde cero. Es tomar algo que ya funciona en un mundo y moverlo a otro. Duolingo hizo eso con mecánicas de juego para enseñar idiomas. Tu trabajo ahora es elegir un préstamo y aterrizarlo.'
      }
    },
    deepen_prompt: 'Piensa en tu app, juego o lugar favorito. ¿Qué detalle pequeño de ahí podrías aplicar a una tarea tuya de esta semana?',
    opportunity_blanks: ['la idea que tomarías prestada', 'dónde la aplicarías'],
    opportunity_template: 'Podríamos usar la idea de ______ para mejorar cómo ______.',
    help_examples: [
      'La racha de Duolingo para no saltarme una hora de estudio.',
      'El “continuar viendo” de Netflix para retomar una tarea a medias.',
      'Los niveles de un juego para partir un proyecto grande.'
    ],
    close_feedback: 'Pediste prestada una idea de otro mundo. Eso es asociación: no inventaste desde cero.'
  },
  {
    id: 'ASO-02',
    title: 'El hospital y la F1',
    skill: 'Asociación',
    difficulty: 'Medio',
    template: 'C',
    scenario: 'En un hospital, al pasar un paciente de cirugía a cuidados intensivos había caos: cables, aparatos, poco tiempo, varios errores.',
    question: 'Si no miras otros hospitales, ¿a qué otro mundo se parece ese momento?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'A un pit stop: un equipo, muchas manos, segundos, cero margen.' },
      { id: 'opt2', text: 'A una cocina en hora pico.' },
      { id: 'opt3', text: 'A una mudanza expres: sacar, mover, reconectar.' }
    ],
    feedback: {
      correct: {
        title: 'La conexión buena casi nunca está “adentro”.',
        text: 'El caso real fue con un equipo de Fórmula 1: vieron el pit stop y rediseñaron la transferencia. Los errores bajaron. Asociación es forzar un parecido con un mundo que no es el tuyo y robar el método, no la estética.'
      },
      incorrect: {
        title: 'La conexión buena casi nunca está “adentro”.',
        text: 'El caso real fue con un equipo de Fórmula 1: vieron el pit stop y rediseñaron la transferencia. Los errores bajaron. Asociación es forzar un parecido con un mundo que no es el tuyo y robar el método, no la estética.'
      }
    },
    deepen_prompt: 'Elige un problema tuyo de esta semana. ¿A qué oficio o industria que no es la tuya se parece? Nombra el parecido en una frase.',
    opportunity_blanks: ['tu problema', 'el mundo distinto que lo resuelve bien', 'cómo lo resuelven'],
    opportunity_template: 'El problema de ______ se parece a cómo ______ resuelve ______.',
    help_examples: [
      'Las reuniones eternas se parecen a un restaurante sin comandas: nadie sabe el orden.',
      'Entregar un trabajo a última hora se parece a una cocina en hora pico.',
      'Pasar un proyecto de una persona a otra se parece a un relevo en atletismo.'
    ],
    close_feedback: 'Conectaste tu problema con otro oficio. El valor está en robar el método, no la estética.'
  }
];

export function getNextChallenge(completedIds = [], currentId = null) {
  return challenges.find(c => c.id !== currentId && !completedIds.includes(c.id)) || null;
}

export function fillOpportunityTemplate(template = '', blanks = []) {
  let i = 0;
  return template.replace(/______/g, () => {
    const value = (blanks[i] || '').trim();
    i += 1;
    return value || '______';
  });
}

export function recommendedChallengeId(interest) {
  if (interest === 'opt2') return 'CUE-01';
  if (interest === 'opt3') return 'ASO-01';
  return 'OBS-01';
}

export function skillForInterest(interest) {
  if (interest === 'opt2') return 'Cuestionamiento';
  if (interest === 'opt3') return 'Asociación';
  return 'Observación';
}
