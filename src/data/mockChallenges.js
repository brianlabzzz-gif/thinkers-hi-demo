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
      {
        id: 'opt1',
        text: 'Para que el vaso no queme las manos.',
        feedback: {
          title: 'Eso se ve de una vez. Falta la segunda mirada.',
          text: 'Sí: el cartón evita que te quemes. Esa es la primera función, la que cualquiera nota. La pregunta de observación es la de atrás: si el problema fuera solo el calor, harían un vaso grueso y listo. No lo hacen. Fabrican un vaso delgado para todo y solo agregan el cartón cuando va caliente. Elegiste el problema visible. Ahora mira el atajo de costo que lo sostiene.'
        }
      },
      {
        id: 'opt2',
        text: 'Para no tener que hacer todos los vasos más gruesos.',
        feedback: {
          title: 'Eso casi nadie lo ve primero.',
          text: 'Exacto. El calor se nota solo. Lo que suele quedar atrás es el sistema: un solo vaso barato y delgado para frío y caliente, y un cartón nada más cuando hace falta. Observar bien es notar el extra que se puso después, no solo lo que toca la mano.'
        }
      },
      {
        id: 'opt3',
        text: 'Para poner el logo o un mensaje.',
        feedback: {
          title: 'Puede pasar. No es por lo que nació el cartón.',
          text: 'Algunas marcas sí imprimen en el cartón. Eso es un uso de segundo piso. Si quitas logos, el cartón sigue existiendo: el vaso delgado quema. Elegiste un efecto lateral. La observación más fuerte es el agregado de costo encima de un vaso que, de origen, no da abasto.'
        }
      }
    ],
    deepen_prompt: 'Ahora aplícalo a tu día. ¿Qué cosa ves que le pusieron un extra porque de origen no alcanza? Escríbelo en una frase completa: qué es y qué le agregaron.',
    opportunity_blanks: ['qué cosa', 'qué le agregan'],
    opportunity_hints: ['el enchufe del celular', 'un adaptador'],
    opportunity_template: 'En mi día, a ______ le ponen ______ porque solo no funciona bien.',
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
      {
        id: 'opt1',
        text: 'La espera se siente más corta.',
        feedback: {
          title: 'Ahí está el problema que la gente sentía.',
          text: 'En varios edificios las quejas eran “el elevador está lento”. Pusieron espejos y bajaron las quejas. No movieron el motor. Ocuparon la espera. Elegiste el problema que se siente, no el técnico. Esa es la segunda mirada: a veces no hay que hacer el proceso más rápido, hay que cambiar lo que pasa mientras tanto.'
        }
      },
      {
        id: 'opt2',
        text: 'El elevador se siente más grande.',
        feedback: {
          title: 'Puede sentirse así. No era la queja que estaban resolviendo.',
          text: 'Un espejo sí puede abrir el espacio. En la práctica, lo que bajó no fueron quejas de “está apretado”: fueron quejas de “está lento”. Elegiste un efecto de diseño. El problema que la gente gritaba era el tiempo parado. Observar es escuchar de qué se quejan, no solo qué hace el objeto.'
        }
      },
      {
        id: 'opt3',
        text: 'La gente llega más arreglada a su piso.',
        feedback: {
          title: 'Eso pasa. Es un efecto, no el problema.',
          text: 'Sí, alguien se peina. Eso no explica por qué un edificio pone el espejo después de quejas. Elegiste lo que ves hacer a las personas. La observación más fuerte es lo que dejan de sentir: que la espera se come. El espejo no arregla el pelo del edificio; ocupa el aburrimiento.'
        }
      }
    ],
    deepen_prompt: '¿Dónde te toca esperar mucho en la semana (fila, bus, consulta, comida)? Escríbelo y di qué pondrías para que la espera se sienta distinta, sin hacer el proceso más rápido.',
    opportunity_blanks: ['dónde esperas', 'qué pondrías'],
    opportunity_hints: ['la fila del banco', 'un letrero con los minutos que faltan'],
    opportunity_template: 'Cuando espero en ______, se sentiría mejor si hubiera ______.',
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
      {
        id: 'opt1',
        text: 'Que estar más tiempo es trabajar más.',
        feedback: {
          title: 'Vas bien, pero es una consecuencia, no la regla de fondo.',
          text: 'Sí, mucha gente cree que más horas es más trabajo. Eso nace de algo más hondo: el reloj vale más que el resultado. Si solo atacas “estar sentado”, puedes cambiar el horario y seguir midiendo presencia. Elegiste el síntoma. Nombra lo que se mide y la regla se cae.'
        }
      },
      {
        id: 'opt2',
        text: 'Que todos rinden a la misma hora.',
        feedback: {
          title: 'También se asume eso. No es el centro de la regla.',
          text: 'Es cierto que el 9 a 5 trata a todos como si rindieran igual. Aun así, podrías tener horarios distintos y seguir premiando quién se queda más. Elegiste una injusticia real. La regla de fondo es otra: cuenta el reloj, no lo que quedó hecho.'
        }
      },
      {
        id: 'opt3',
        text: 'Que lo que cuenta es el reloj, no el resultado.',
        feedback: {
          title: 'Nombraste la regla de fondo.',
          text: 'Las otras dos son pedazos de lo mismo. Aquí está el supuesto que nadie discute: presencia vale más que valor. Cuestionar no es pelear. Es decir eso en voz alta y preguntar qué pasaría si midieras otra cosa.'
        }
      }
    ],
    deepen_prompt: 'En tu casa, estudio o trabajo, ¿qué regla se sigue “porque siempre se ha hecho así”? Escríbela en una frase y di qué medirías en su lugar.',
    opportunity_blanks: ['la regla de hoy', 'lo que medirías en su lugar'],
    opportunity_hints: ['quedarse hasta las 5 aunque ya terminaste', 'si el trabajo quedó bien hecho'],
    opportunity_template: 'Si dejamos la regla de ______, en su lugar podríamos medir ______.',
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
      {
        id: 'opt1',
        text: 'Por costumbre del lugar.',
        feedback: {
          title: 'La costumbre explica que siga. No explica para qué sirve.',
          text: '“Siempre se ha usado” es cómo sobrevive una regla, no para qué está. Si te quedas ahí, no cuestionas nada: solo describes inercia. En una consulta que es conversación, la bata sigue sobre todo como aviso: este es el doctor. Pregunta qué pasaría si no la usara y el trabajo fuera el mismo.'
        }
      },
      {
        id: 'opt2',
        text: 'Para que se note que es el doctor y genere confianza.',
        feedback: {
          title: 'Separaste lo que hace de lo que comunica.',
          text: 'La bata a veces no opera ni revisa: avisa “aquí hay un profesional”. Por eso da confianza. Cuestionar es preguntar qué parte sirve de verdad y qué parte solo se ve bien. Si la quitas y la confianza se cae, el servicio no se estaba sosteniendo solo.'
        }
      },
      {
        id: 'opt3',
        text: 'Por higiene, aunque en esa consulta no se use.',
        feedback: {
          title: 'En otra consulta sí. En esta, se queda corta.',
          text: 'La higiene justifica la bata cuando hay contacto o procedimiento. Elegiste una razón real para otro momento. Aquí el doctor habla y escribe. Si la higiene no está en juego y la bata sigue, está haciendo otro trabajo: verse como doctor. Esa es la pregunta que faltaba.'
        }
      }
    ],
    deepen_prompt: '¿Qué usas tú o tu trabajo para que la gente confíe? Un título, un uniforme, un logo, una forma de hablar. Escríbelo y di qué pasaría si no lo tuvieras.',
    opportunity_blanks: ['con quién', 'qué cambiarías'],
    opportunity_hints: ['mis clientes', 'el título largo del correo'],
    opportunity_template: 'La gente confiaría más en ______ si cambiáramos ______.',
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
      {
        id: 'opt1',
        text: 'De un juego: niveles, puntos, no romper la racha.',
        feedback: {
          title: 'Esa es la asociación más justa con este problema.',
          text: 'El problema no era “esta sesión es aburrida”. Era que no avanzas día tras día. Los juegos ya resolvieron la repetición: racha, nivel, premio chico. Mover eso a estudiar o trabajar no es copiar el juego: es copiar la regla que hace que no sueltes. Duolingo hizo eso con los idiomas.'
        }
      },
      {
        id: 'opt2',
        text: 'De una serie: terminar cada bloque con ganas de seguir.',
        feedback: {
          title: 'Sirve para una sesión. Se queda corta para volver mañana.',
          text: 'Terminar con ganas de seguir ayuda a no apagar hoy. El escenario era otro: se te hace pesado y casi no avanzas en los días. Elegiste ritmo de un capítulo. La asociación más fuerte para volver mañana está en los juegos: racha y nivel. Copia la regla que resuelve tu problema, no la que resuelve otro.'
        }
      },
      {
        id: 'opt3',
        text: 'De un video corto: poco texto, ritmo rápido.',
        feedback: {
          title: 'Eso aligera el formato. No resuelve el hábito.',
          text: 'Cortar en pedazos chicos ayuda a empezar. No explica por qué mañana lo vuelves a dejar. Elegiste una idea de empaque. El problema era constancia. Los juegos ya tenían respuesta para eso. Si tomas prestado del lugar equivocado, copias la forma y dejas el problema intacto.'
        }
      }
    ],
    deepen_prompt: 'Piensa en tu app, juego, tienda o lugar favorito. ¿Qué detalle pequeño de ahí usarías esta semana en una tarea tuya? Escríbelo así: de dónde lo sacas y en qué lo vas a usar.',
    opportunity_blanks: ['de dónde la sacas', 'en qué la usarías'],
    opportunity_hints: ['la racha de una app', 'no saltarme el estudio'],
    opportunity_template: 'Podría tomar la idea de ______ y usarla para ______.',
    help_examples: [
      'De una app de idiomas tomo la racha de días seguidos para no saltarme el estudio.',
      'De una plataforma de series tomo el “seguir viendo” para retomar una tarea que dejé a medias.',
      'De un juego tomo los niveles para partir un trabajo grande en pedazos que sí puedo terminar hoy.'
    ],
    close_feedback: 'Pediste prestada una idea de otro mundo. El truco es copiar la regla que ya resolvió tu problema, no la decoración.'
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
      {
        id: 'opt1',
        text: 'Cambiar las llantas de un carro en segundos, en equipo.',
        feedback: {
          title: 'Esa es la conexión que ya funcionó en la vida real.',
          text: 'Un hospital miró un cambio de llantas en carreras: cada persona un solo movimiento, se ensaya, en segundos queda listo. Copiaron esa forma de trabajar, no el carro. Bajaron los errores. Elegiste un mundo que ya había resuelto el mismo tipo de caos.'
        }
      },
      {
        id: 'opt2',
        text: 'Una cocina llena en la hora de almuerzo.',
        feedback: {
          title: 'Hay parecido. Ese mundo todavía está desordenado.',
          text: 'Sí: mucha gente, poco tiempo, fácil equivocarse. El problema es que una cocina en hora pico también falla. Si asocias con un oficio que comparte el caos, copias el caos. El préstamo útil es un equipo de carreras: ensayan el mismo movimiento hasta que no falla, y cada quien toca una sola cosa.'
        }
      },
      {
        id: 'opt3',
        text: 'Una mudanza rápida: sacar, mover y volver a conectar.',
        feedback: {
          title: 'Se parece en los cables. No en el método.',
          text: 'Una mudanza también desarma y reconecta. Casi nunca está ensayada ni tiene un rol por persona. Elegiste la imagen de los objetos. La asociación fuerte es la del equipo que ya midió los segundos y partió el trabajo. Copia cómo lo hacen cuando les sale bien, no cuando también improvisan.'
        }
      }
    ],
    deepen_prompt: 'Elige un problema de tu semana. ¿A qué otro oficio se parece, y cómo lo resuelven ellos? Escríbelo en una frase completa.',
    opportunity_blanks: ['tu problema', 'el otro oficio', 'cómo lo resuelven'],
    opportunity_hints: ['las reuniones largas', 'un restaurante', 'anotar cada pedido'],
    opportunity_template: 'Mi problema de ______ se parece a cómo ______ resuelve ______.',
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
