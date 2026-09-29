export const challenges = [
  {
    id: 'OBS-01',
    title: 'El vaso de café',
    skill: 'Observación',
    difficulty: 'Fácil',
    template: 'A',
    scenario: 'En muchos lugares, el café para llevar viene en un vaso delgado y le ponen un cartón alrededor.',
    question: '¿Para qué crees que le ponen ese cartón?',
    correctOption: 'opt2',
    options: [
      { id: 'opt1', text: 'Para que el vaso no queme las manos.' },
      { id: 'opt2', text: 'Para no tener que hacer todos los vasos más gruesos.' },
      { id: 'opt3', text: 'Para poner el logo o un mensaje.' }
    ],
    feedback: {
      correct: {
        title: 'Eso casi nadie lo ve primero.',
        text: 'Sí, el cartón evita que queme. Pero si solo vieras el calor, la respuesta sería “haz el vaso más grueso”. No lo hacen: fabrican un vaso barato y delgado para todo, y solo agregan el cartón cuando la bebida va caliente. Observar bien es notar el extra que se puso después, no solo el problema obvio.'
      },
      incorrect: {
        title: 'Eso se ve de una vez. Falta la segunda mirada.',
        text: 'El calor y el logo se notan al primer vistazo. La pregunta de observación es otra: ¿por qué no hicieron un solo vaso grueso y listo? Porque sale más caro. El cartón es un agregado barato encima de un vaso delgado. Cuando algo se puso después, casi siempre hay un costo o un atajo escondido.'
      }
    },
    deepen_prompt: 'Ahora aplícalo a tu día. ¿Qué cosa ves que le pusieron un extra porque de origen no alcanza? Escríbelo en una frase completa: qué es y qué le agregaron.',
    opportunity_blanks: ['el objeto', 'el extra que le ponen'],
    opportunity_template: 'En ______ le ponen ______ porque así, de origen, no alcanza.',
    help_examples: [
      'En el enchufe del celular le ponen un adaptador porque el cargador no entra en el tomacorriente.',
      'En la tapa del envase le ponen cinta porque no cierra y se sale el líquido.',
      'En la silla de la oficina le ponen un cojín porque el asiento lastima a las dos horas.'
    ],
    close_feedback: 'Ya viste un extra. El siguiente paso es preguntarte si se puede diseñar bien desde el inicio, sin ese agregado.'
  },
  {
    id: 'OBS-02',
    title: 'El espejo del elevador',
    skill: 'Observación',
    difficulty: 'Fácil',
    template: 'A',
    scenario: 'En muchos edificios hay un espejo grande dentro del elevador. La gente se mira mientras sube.',
    question: 'Además de verse, ¿qué otra cosa puede estar pasando?',
    correctOption: 'opt1',
    options: [
      { id: 'opt1', text: 'La espera se siente más corta.' },
      { id: 'opt2', text: 'El elevador se siente más grande.' },
      { id: 'opt3', text: 'La gente llega más arreglada a su piso.' }
    ],
    feedback: {
      correct: {
        title: 'Ahí está el problema de verdad.',
        text: 'En varios edificios las quejas eran “el elevador está lento”. Pusieron espejos y bajaron las quejas. No lo hicieron más rápido. Cambiaron lo que haces mientras esperas, y el tiempo se siente distinto. Observar es separar el problema técnico (velocidad) del problema que la gente siente (aburrirse parada).'
      },
      incorrect: {
        title: 'Puede ser, pero no era el problema que estaban resolviendo.',
        text: 'Un espejo sí puede hacer que el espacio se sienta más grande o que alguien se arregle. En la práctica, lo que bajó fueron las quejas de “esto está lento”. No movieron el motor. Ocuparon la espera. Si solo ves el objeto, te pierdes el problema que la gente estaba gritando.'
      }
    },
    deepen_prompt: '¿Dónde te toca esperar mucho en la semana (fila, bus, consulta, comida)? Escríbelo y di qué pondrías para que la espera se sienta distinta, sin hacer el proceso más rápido.',
    opportunity_blanks: ['dónde esperas', 'qué pondrías'],
    opportunity_template: 'En ______ la espera se sentiría mejor si hubiera ______.',
    help_examples: [
      'En la fila del banco pondría un letrero que diga cuántas personas faltan y cuántos minutos son.',
      'En la parada del bus pondría el minuto real de llegada, no solo la ruta.',
      'En la sala de espera del doctor pondría una tarea corta para hacer, no solo sillas y silencio.'
    ],
    close_feedback: 'A veces el problema no es la velocidad: es cómo se siente el tiempo. Eso también se puede diseñar.'
  },
  {
    id: 'CUE-01',
    title: 'La regla que nadie pregunta',
    skill: 'Cuestionamiento',
    difficulty: 'Fácil',
    template: 'B',
    scenario: 'Hay reglas que todos siguen aunque ya no tengan sentido. Ejemplo: quedarse hasta cierta hora aunque el trabajo ya esté listo.',
    question: 'Si cuestionas esa regla, ¿qué estamos dando por hecho?',
    correctOption: 'opt3',
    options: [
      { id: 'opt1', text: 'Que estar más tiempo es trabajar más.' },
      { id: 'opt2', text: 'Que todos rinden a la misma hora.' },
      { id: 'opt3', text: 'Que lo que cuenta es el reloj, no el resultado.' }
    ],
    feedback: {
      correct: {
        title: 'Nombraste la regla de fondo.',
        text: 'Las otras dos son pedazos de lo mismo. La regla escondida es: medimos presencia, no valor. Cuestionar no es pelear. Es decir en voz alta lo que todos dan por hecho y preguntar: ¿y si midiera otra cosa?'
      },
      incorrect: {
        title: 'Vas bien, pero te quedaste en un pedazo.',
        text: 'Sí, mucha gente cree que más horas es más trabajo, o que todos rinden igual. Esas son consecuencias. La regla de fondo es una sola: el reloj vale más que el resultado. Si no nombras esa, la regla sigue viva aunque cambies el horario.'
      }
    },
    deepen_prompt: 'En tu casa, estudio o trabajo, ¿qué regla se sigue “porque siempre se ha hecho así”? Escríbela en una frase y di qué medirías en su lugar.',
    opportunity_blanks: ['la regla', 'lo que medirías en su lugar'],
    opportunity_template: '¿Qué pasaría si dejamos la regla de ______ y en su lugar medimos ______?',
    help_examples: [
      'La regla es quedarse hasta las 5 aunque ya terminaste. En su lugar mediría si el trabajo quedó bien hecho.',
      'La regla es entregar el informe en un formato que nadie lee. En su lugar mediría si la gente usó la información.',
      'La regla es pedir permiso para probar una idea pequeña. En su lugar mediría si la prueba duró poco y enseñó algo.'
    ],
    close_feedback: 'Ya nombraste una regla que nadie discute. El siguiente paso es medir otra cosa y ver qué pasa.'
  },
  {
    id: 'CUE-02',
    title: 'Por qué se ve serio',
    skill: 'Cuestionamiento',
    difficulty: 'Fácil',
    template: 'B',
    scenario: 'El doctor casi siempre usa bata blanca. En muchas consultas solo habla, revisa y escribe la receta. No opera.',
    question: 'Si no la necesita para hablarte, ¿para qué sigue usándola?',
    correctOption: 'opt2',
    options: [
      { id: 'opt1', text: 'Por costumbre del lugar.' },
      { id: 'opt2', text: 'Para que se note que es el doctor y genere confianza.' },
      { id: 'opt3', text: 'Por higiene, aunque en esa consulta no se use.' }
    ],
    feedback: {
      correct: {
        title: 'Separaste lo que hace de lo que comunica.',
        text: 'La bata a veces no opera ni revisa: avisa “aquí hay un profesional”. Por eso da confianza. Cuestionar es preguntar qué parte sirve de verdad y qué parte solo se ve bien. Si quitas la bata y la confianza se cae, el servicio no se estaba sosteniendo solo.'
      },
      incorrect: {
        title: 'Puede ser parte, no es el centro.',
        text: 'Costumbre e higiene existen. En una consulta que es solo conversación, la bata sigue ahí sobre todo como aviso: “este es el doctor”. Si te quedas en la costumbre, no cuestionas nada. La pregunta útil es: ¿qué pasaría si no la usara y el trabajo fuera el mismo?'
      }
    },
    deepen_prompt: '¿Qué usas tú o tu trabajo para que la gente confíe? Un título, un uniforme, un logo, una forma de hablar. Escríbelo y di qué pasaría si no lo tuvieras.',
    opportunity_blanks: ['con quién quieres más confianza', 'qué cambiarías'],
    opportunity_template: 'Podríamos generar más confianza con ______ si cambiamos ______.',
    help_examples: [
      'Uso un título largo en la firma del correo. Si lo quito, a lo mejor dejan de abrirlo.',
      'Uso un uniforme o un logo que se ve profesional. Si no está, la gente duda aunque el servicio sea igual.',
      'Hablo difícil para parecer experto. Si hablo simple, algunos creen que sé menos.'
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
    question: 'Si quisieras que se sienta más fácil, ¿de dónde tomarías una idea que ya funciona?',
    correctOption: 'opt1',
    options: [
      { id: 'opt1', text: 'De un juego: niveles, puntos, no romper la racha.' },
      { id: 'opt2', text: 'De una serie: terminar cada bloque con ganas de seguir.' },
      { id: 'opt3', text: 'De un video corto: poco texto, ritmo rápido.' }
    ],
    feedback: {
      correct: {
        title: 'Esa es una asociación clara.',
        text: 'Los juegos ya resolvieron cómo hacer que alguien vuelva mañana: racha, nivel, premio chico. Mover eso a estudiar o trabajar no es copiar el juego: es copiar la regla que hace que no sueltes. Duolingo hizo exactamente eso con los idiomas.'
      },
      incorrect: {
        title: 'También es asociar, pero esa idea es más débil para volver mañana.',
        text: 'Una serie o un video corto ayudan con el ritmo de una sesión. El problema que planteamos era otro: que no avanzas y se te hace pesado día tras día. Los juegos resolvieron la repetición (racha, nivel). Si tomas prestado del lugar equivocado, copias la forma y no el problema que ya tenían resuelto.'
      }
    },
    deepen_prompt: 'Piensa en tu app, juego, tienda o lugar favorito. ¿Qué detalle pequeño de ahí usarías esta semana en una tarea tuya? Escríbelo así: de dónde lo sacas y en qué lo vas a usar.',
    opportunity_blanks: ['la idea prestada', 'dónde la usarías'],
    opportunity_template: 'Podríamos usar la idea de ______ para mejorar cómo ______.',
    help_examples: [
      'De una app de idiomas tomo la racha de días seguidos para no saltarme el estudio.',
      'De una plataforma de series tomo el “seguir viendo” para retomar una tarea que dejé a medias.',
      'De un juego tomo los niveles para partir un trabajo grande en pedazos que sí puedo terminar hoy.'
    ],
    close_feedback: 'Pediste prestada una idea de otro mundo. No tuviste que inventar desde cero. El truco es copiar la regla, no la decoración.'
  },
  {
    id: 'ASO-02',
    title: 'Dos mundos, un truco',
    skill: 'Asociación',
    difficulty: 'Fácil',
    template: 'C',
    scenario: 'Cuando un paciente sale de cirugía, hay que pasarlo rápido a otra cama: cables, aparatos, varias personas, poco tiempo. Fácil equivocarse.',
    question: 'Ese momento se parece más a:',
    correctOption: 'opt1',
    options: [
      { id: 'opt1', text: 'Cambiar las llantas de un carro en segundos, en equipo.' },
      { id: 'opt2', text: 'Una cocina llena en la hora de almuerzo.' },
      { id: 'opt3', text: 'Una mudanza rápida: sacar, mover y volver a conectar.' }
    ],
    feedback: {
      correct: {
        title: 'Esa es la conexión que ya funcionó en la vida real.',
        text: 'Un hospital miró cómo un equipo de carreras cambia las llantas: cada persona tiene un solo movimiento, ensayan, y en segundos queda listo. Copiaron esa forma de trabajar, no el carro. Bajaron los errores. Asociar es buscar quién ya resolvió el mismo tipo de caos en otro oficio.'
      },
      incorrect: {
        title: 'Hay parecido, pero no es el mejor préstamo.',
        text: 'Una cocina o una mudanza también son caos con mucha gente. La diferencia: en las carreras el equipo ensaya el mismo movimiento hasta que no falla, y cada quien toca una sola cosa. Si asocias con un mundo que también está desordenado, copias el desorden. Hay que buscar quién ya lo resolvió.'
      }
    },
    deepen_prompt: 'Elige un problema de tu semana. ¿A qué otro oficio se parece, y cómo lo resuelven ellos? Escríbelo en una frase completa.',
    opportunity_blanks: ['tu problema', 'el otro oficio', 'cómo lo resuelven'],
    opportunity_template: 'El problema de ______ se parece a cómo ______ resuelve ______.',
    help_examples: [
      'Las reuniones largas se parecen a un restaurante donde nadie anota el pedido: por eso se pierde el orden.',
      'Entregar todo a última hora se parece a una cocina en hora pico: todos gritan y se quema algo.',
      'Pasar un trabajo de una persona a otra se parece a un relevo: si no hay un punto claro de entrega, se cae lo que ibas cargando.'
    ],
    close_feedback: 'Conectaste tu problema con otro oficio. Lo útil es copiar cómo lo hacen cuando les sale bien, no cómo se ve.'
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
