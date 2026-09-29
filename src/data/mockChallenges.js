export const challenges = [
  {
    id: 'OBS-01',
    title: 'El vaso de café',
    skill: 'Observación',
    difficulty: 'Fácil',
    template: 'A',
    scenario: 'En muchos lugares, el café para llevar viene en un vaso delgado y le ponen un cartón alrededor.',
    question: '¿Para qué crees que le ponen ese cartón?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'Para que el vaso no queme las manos.' },
      { id: 'opt2', text: 'Para no tener que hacer todos los vasos más gruesos.' },
      { id: 'opt3', text: 'Para poner el logo o un mensaje.' }
    ],
    feedback: {
      correct: {
        title: 'Buena mirada.',
        text: 'Las tres pueden ser ciertas. Alguien vio un problema en algo tan simple como un vaso y le puso una pieza de más. Observar es notar esos extras que casi nadie se pregunta.'
      },
      incorrect: {
        title: 'Buena mirada.',
        text: 'Las tres pueden ser ciertas. Alguien vio un problema en algo tan simple como un vaso y le puso una pieza de más. Observar es notar esos extras que casi nadie se pregunta.'
      }
    },
    deepen_prompt: 'Mira a tu alrededor. ¿Qué cosa de tu día tiene un extra que no venía así de origen? Escríbelo en una frase.',
    opportunity_blanks: ['el objeto', 'el extra que le ponen'],
    opportunity_template: 'En ______ le ponen ______ porque así, de origen, no alcanza.',
    help_examples: [
      'En el enchufe le ponen un adaptador porque no entra.',
      'En la tapa le ponen cinta porque no cierra.',
      'En la silla le ponen un cojín porque lastima.'
    ],
    close_feedback: 'Ya viste un extra. Ahora pregúntate si se puede hacer bien desde el inicio.'
  },
  {
    id: 'OBS-02',
    title: 'El espejo del elevador',
    skill: 'Observación',
    difficulty: 'Fácil',
    template: 'A',
    scenario: 'En muchos edificios hay un espejo grande dentro del elevador. La gente se mira mientras sube.',
    question: 'Además de verse, ¿qué otra cosa puede estar pasando?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'La espera se siente más corta.' },
      { id: 'opt2', text: 'El elevador se siente más grande.' },
      { id: 'opt3', text: 'La gente llega más arreglada a su piso.' }
    ],
    feedback: {
      correct: {
        title: 'Eso también es observar.',
        text: 'En varios edificios pusieron espejos y bajaron las quejas de que el elevador estaba lento. No lo hicieron más rápido. Cambiaron lo que haces mientras esperas.'
      },
      incorrect: {
        title: 'Eso también es observar.',
        text: 'En varios edificios pusieron espejos y bajaron las quejas de que el elevador estaba lento. No lo hicieron más rápido. Cambiaron lo que haces mientras esperas.'
      }
    },
    deepen_prompt: '¿Dónde te toca esperar mucho en la semana (fila, bus, consulta, comida)? Escríbelo y di qué pondrías para que la espera se sienta distinta.',
    opportunity_blanks: ['dónde esperas', 'qué agregarías'],
    opportunity_template: 'En ______ la espera se sentiría mejor si hubiera ______.',
    help_examples: [
      'En la fila del banco, un letrero que diga cuántos faltan.',
      'En la parada del bus, cuántos minutos faltan.',
      'En la sala de espera, algo corto para leer o hacer.'
    ],
    close_feedback: 'Viste que a veces el problema no es la velocidad: es cómo se siente el tiempo.'
  },
  {
    id: 'CUE-01',
    title: 'La regla que nadie pregunta',
    skill: 'Cuestionamiento',
    difficulty: 'Fácil',
    template: 'B',
    scenario: 'Hay reglas que todos siguen aunque ya no tengan sentido. Ejemplo: quedarse hasta cierta hora aunque el trabajo ya esté listo.',
    question: 'Si cuestionas esa regla, ¿qué estamos dando por hecho?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'Que estar más tiempo es trabajar más.' },
      { id: 'opt2', text: 'Que todos rinden a la misma hora.' },
      { id: 'opt3', text: 'Que lo que cuenta es el reloj, no el resultado.' }
    ],
    feedback: {
      correct: {
        title: 'Ahí hay una regla escondida.',
        text: 'Cuestionar no es pelear. Es decir en voz alta lo que todos dan por hecho y preguntar: ¿y si no fuera cierto?'
      },
      incorrect: {
        title: 'Ahí hay una regla escondida.',
        text: 'Cuestionar no es pelear. Es decir en voz alta lo que todos dan por hecho y preguntar: ¿y si no fuera cierto?'
      }
    },
    deepen_prompt: 'En tu casa, estudio o trabajo, ¿qué regla se sigue “porque siempre se ha hecho así”? Escríbela en una frase.',
    opportunity_blanks: ['la regla', 'lo que medirías en su lugar'],
    opportunity_template: '¿Qué pasaría si dejamos la regla de ______ y en su lugar medimos ______?',
    help_examples: [
      'Hay que quedarse hasta las 5 aunque ya terminaste.',
      'Hay que entregar el informe en un formato que nadie lee.',
      'Hay que pedir permiso para probar una idea pequeña.'
    ],
    close_feedback: 'Nombraste una regla que nadie discute. Eso ya es cuestionar.'
  },
  {
    id: 'CUE-02',
    title: 'Por qué se ve serio',
    skill: 'Cuestionamiento',
    difficulty: 'Fácil',
    template: 'B',
    scenario: 'El doctor casi siempre usa bata blanca. En muchas consultas solo habla, revisa y escribe la receta. No opera.',
    question: 'Si no la necesita para hablarte, ¿para qué sigue usándola?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'Por costumbre del lugar.' },
      { id: 'opt2', text: 'Para que se note que es el doctor y genere confianza.' },
      { id: 'opt3', text: 'Por higiene, aunque en esa consulta no se use.' }
    ],
    feedback: {
      correct: {
        title: 'Buena pregunta.',
        text: 'A veces la ropa, el logo o el título no hacen el trabajo: hacen que la gente confíe. Cuestionar es separar lo que sirve de lo que solo se ve bien.'
      },
      incorrect: {
        title: 'Buena pregunta.',
        text: 'A veces la ropa, el logo o el título no hacen el trabajo: hacen que la gente confíe. Cuestionar es separar lo que sirve de lo que solo se ve bien.'
      }
    },
    deepen_prompt: '¿Qué usas tú o tu trabajo para que la gente confíe? Un título, un uniforme, un logo, una forma de hablar. ¿Qué pasaría si no lo tuvieras?',
    opportunity_blanks: ['con quién quieres más confianza', 'qué cambiarías'],
    opportunity_template: 'Podríamos generar más confianza con ______ si cambiamos ______.',
    help_examples: [
      'El título largo en la firma del correo.',
      'El uniforme o el logo que se ve profesional.',
      'Hablar difícil para parecer experto.'
    ],
    close_feedback: 'Separaste lo que sirve de lo que solo se ve. Si quitas esa apariencia, el trabajo tiene que valer solo.'
  },
  {
    id: 'ASO-01',
    title: 'Pedir prestado',
    skill: 'Asociación',
    difficulty: 'Fácil',
    template: 'C',
    scenario: 'Tienes que aprender o hacer algo que se te hace pesado. Casi no avanzas.',
    question: 'Si quisieras que se sienta más fácil, ¿de dónde tomarías una idea?',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'De un juego: niveles, puntos, no romper la racha.' },
      { id: 'opt2', text: 'De una serie: terminar cada bloque con ganas de seguir.' },
      { id: 'opt3', text: 'De un video corto: poco texto, ritmo rápido.' }
    ],
    feedback: {
      correct: {
        title: 'Eso es asociar.',
        text: 'Casi nadie inventa desde cero. Toma algo que ya funciona en un lado y lo pasa al otro. Duolingo tomó ideas de los juegos para enseñar idiomas.'
      },
      incorrect: {
        title: 'Eso es asociar.',
        text: 'Casi nadie inventa desde cero. Toma algo que ya funciona en un lado y lo pasa al otro. Duolingo tomó ideas de los juegos para enseñar idiomas.'
      }
    },
    deepen_prompt: 'Piensa en tu app, juego, tienda o lugar favorito. ¿Qué detalle pequeño de ahí usarías esta semana en una tarea tuya?',
    opportunity_blanks: ['la idea prestada', 'dónde la usarías'],
    opportunity_template: 'Podríamos usar la idea de ______ para mejorar cómo ______.',
    help_examples: [
      'La racha de una app para no saltarme el estudio.',
      'El “seguir viendo” para retomar una tarea a medias.',
      'Los niveles de un juego para partir un trabajo grande.'
    ],
    close_feedback: 'Pediste prestada una idea de otro mundo. No tuviste que inventar desde cero.'
  },
  {
    id: 'ASO-02',
    title: 'Dos mundos, un truco',
    skill: 'Asociación',
    difficulty: 'Fácil',
    template: 'C',
    scenario: 'Cuando un paciente sale de cirugía, hay que pasarlo rápido a otra cama: cables, aparatos, varias personas, poco tiempo. Fácil equivocarse.',
    question: 'Ese momento se parece más a:',
    correctOption: null,
    options: [
      { id: 'opt1', text: 'Cambiar las llantas de un carro en segundos, en equipo.' },
      { id: 'opt2', text: 'Una cocina llena en la hora de almuerzo.' },
      { id: 'opt3', text: 'Una mudanza rápida: sacar, mover y volver a conectar.' }
    ],
    feedback: {
      correct: {
        title: 'Buena conexión.',
        text: 'Un hospital real miró cómo un equipo de carreras cambia las llantas en segundos y copió la forma de trabajar: cada quien sabe qué tocar. Bajaron los errores. Asociar es copiar cómo lo hacen, no cómo se ve.'
      },
      incorrect: {
        title: 'Buena conexión.',
        text: 'Un hospital real miró cómo un equipo de carreras cambia las llantas en segundos y copió la forma de trabajar: cada quien sabe qué tocar. Bajaron los errores. Asociar es copiar cómo lo hacen, no cómo se ve.'
      }
    },
    deepen_prompt: 'Elige un problema de tu semana. ¿A qué otro oficio se parece? Escríbelo en una frase.',
    opportunity_blanks: ['tu problema', 'el otro oficio', 'cómo lo resuelven'],
    opportunity_template: 'El problema de ______ se parece a cómo ______ resuelve ______.',
    help_examples: [
      'Las reuniones largas se parecen a un restaurante donde nadie anota el pedido.',
      'Entregar a última hora se parece a una cocina en hora pico.',
      'Pasar un trabajo de una persona a otra se parece a un relevo.'
    ],
    close_feedback: 'Conectaste tu problema con otro oficio. Lo útil es copiar cómo lo hacen, no cómo se ve.'
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
