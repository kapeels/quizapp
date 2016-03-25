var questions = new Array();

/**
 *
 * question_no: start with 1 and assign incremented value for each question
 *
 * type:
     * 1 - "string" answers
     * 'answer' has the string for the answer
     * 2 - multiple choice!
     * 'choice' has array of all the choices possible
     * 'answer' has the value of the correct choice
 *
 * statement:
     * this should be the text of the question
 *
 * image:
     * image to be displayed for this question, if any
 *
 * correct_points:
     * # of points to be awarded if user submits correct answer
 *
 * incorrect_points:
     * # of points to be deducted from main score if user submits incorrect answer
 *
 * multiple_responses: (bool)
     * should multiple responses be allowed for this question?
 *
 * answer:  the answer for this question.
     * for type = 1, put the actual string of the answer in lowercase..
     * for type = 2, put the value of the choice
 *
 * additional_text:
     * hint for this question?
 *
 */

questions.push( {
    question_no: 1,
    type: 2,
    statement: 'A particle at rest is moved along a straight line by a machine giving constant power. The distance moved by the particle in time ‘t’ is proportional to',
    //image: '/images/q1.jpg',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: '1',
	choice: new Array(
        { text: "t", value: 1 },
        { text: "t⅔", value: 2 },
        { text: "t½", value: 3 },
        { text: "t3/2", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 2,
    type: 2,
    statement: 'In insulators (C.B. is conduction band and V.B. is valence band)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "V.B. is partially filled with electrons", value: 1 },
        { text: "C.B. is partially filled with electrons", value: 2 },
        { text: "C.B. is empty and V.B. is filled with electrons", value: 3 },
        { text: "C.B. is filled with electrons and V.B. is empty", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 3,
    type: 2,
    statement: 'An object of radius ‘R’ and mass ‘M’ is rolling horizontally without slipping with speed ‘V’. It then rolls up the hill to a maximum height h = 3v² / 4g . The moment of inertia of the object is (g = acceleration due to gravity)',
    correct_points: 1,
    incorrect_points:0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "(2/5) MR²", value: 1 },
        { text: "MR²/2", value: 2 },
        { text: "MR²", value: 3 },
        { text: "(3/2)MR²", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 4,
    type: 2,
    statement: 'In common base circuit of a transistor, current amplification factor is 0.95. Calculate the emitter current if base current is 0.2 mA',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 4,
    choice: new Array(
        { text: "2 mA", value: 1 },
        { text: "4 mA", value: 2 },
        { text: "6 mA", value: 3 },
        { text: "8 mA", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 5,
    type: 2,
    statement: ' The ratio of magnetic dipole moment of an electron of charge ‘e’ and mass ‘m’ in Bohr’s orbit in hydrogen atom to its angular momentum is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "e/m", value: 1 },
        { text: "m/e", value: 2 },
        { text: "2m / e ", value: 3 },
        { text: "e / 2m", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 6,
    type: 2,
    statement: 'Gases exert pressure on the walls of the container because the gas molecules',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "have finite volume", value: 1 },
        { text: "obey Boyle’s law", value: 2 },
        { text: "possess momentum", value: 3 },
        { text: "collide with one another", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 7,
    type: 2,
    statement: 'Light of wavelength λA and λB falls on two identical metal plates A and B respectively .The maximum kinetic energy of photo electrons in KA and KB respectively, then which one of the',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 4,
    choice: new Array(
        { text: "KA < KB / 2", value: 1 },
        { text: "2 K S = KB", value: 2 },
        { text: "KA = 2KB", value: 3 },
        { text: "KA > 2 KB", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 8,
    type: 2,
    statement: 'If an electron in hydrogen atom jumps from an orbit of level n = 3 to an orbit of level n = 2,emitted radiation has a frequency (R = Rydberg’s constant, C = velocity of light)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "3RC/27", value: 1 },
        { text: "RC/25", value: 2 },
        { text: "8RC/9", value: 3 },
        { text: "5RC/36", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 9,
    type: 2,
    statement: 'In electromagnetic wave, according to Maxwell, changing electric field gives ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "stationary magnetic field", value: 1 },
        { text: "conduction current", value: 2 },
        { text: "eddy current", value: 3 },
        { text: "displacement current", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 10,
    type: 2,
    statement: 'The de-brogli wavelength of an electron in 4th orbit is (r = radius of 1st orbit) ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "2 πr", value: 1 },
        { text: "4 πr", value: 2 },
        { text: "8 πr", value: 3 },
        { text: "16 πr", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 11,
    type: 2,
    statement: 'A string of length ‘L’ and force constant ‘K’ is stretched to obtain extension ‘l’. It is further stretched to obtain extension ‘l₁’. The work done in second stretching is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "1 / Kl₁ (2l + l₁ )", value: 1 },
        { text: "1 / 2Kl₁²", value: 2 },
        { text: "1 / 2K (l² + l₁² )", value: 3 },
        { text: "1/2 K (l₁² – l²)", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 12,
    type: 2,
    statement: 'The equiconvex lens has focal length ‘f’. If it is cut perpendicular to the principal axis passing through optical center then focal length of each half is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "f /2", value: 1 },
        { text: "f", value: 2 },
        { text: "3f /2", value: 3 },
        { text: "2f", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 13,
    type: 2,
    statement: 'If ‘N’ is the number of turns in a circular coil then the value of self inductance varies as',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "N°", value: 1 },
        { text: "N", value: 2 },
        { text: "N²", value: 3 },
        { text: "N⁻²", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 14,
    type: 2,
    statement: 'Surface density of charge on a sphere of radius ‘R’ in terms of electric intensity ‘E’ at a distance ‘r’ in free space is ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "∈₀E(R/r)²", value: 1 },
        { text: "∈₀ER / r²", value: 2 },
        { text: "∈₀ E/ (r/R)²", value: 3 },
        { text: "∈₀Er / R²", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 15,
    type: 2,
    statement: 'A body at rest starts sliding from top of a smooth inclined plane and requires 4 second to reach bottom. How much time does it take, starting from rest at top, to cover one-fourth of a distance ?',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 4,
	choice: new Array(
        { text: "1 second", value: 1 },
        { text: "2 second", value: 2 },
        { text: "3 second", value: 3 },
        { text: "4 second", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 16,
    type: 2,
    statement: 'In vacuum, to travel distance ‘d’, light takes time ‘t’ and in medium to travel distance ‘5d’, it takes time ‘T’. The critical angle of the medium is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "A.	sin⁻ ¹ (5T / t)", value: 1 },
        { text: "B.	sin⁻ ¹ (5T / 3t)", value: 2 },
        { text: "C.	sin⁻ ¹(5t / T)", value: 3 },
        { text: "D.	sin⁻ ¹ (3t /5T)", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 17,
    type: 2,
    statement: 'In electromagnetic spectrum, the frequencies of γ-rays, X-rays and ultraviolet rays are denoted by n₁, n₂ and n₃ respectively then',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "1 > n2 > n3", value: 1 },
        { text: "n1 < n2 < n3", value: 2 },
        { text: "n1 n 2 < n3", value: 3 },
        { text: "n1 < n 2 > n 3", value: 4 }

    ),
    additional_text: null
} );


questions.push( {
    question_no: 18,
    type: 2,
    statement: 'In LCR series circuit, an alternating e .m. f. ‘e’ and current ‘i’ are given by the equations <Br /> \
e = 100 sin (100 t) volt, <br /> \
The average power dissipated in the circuit will be',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "100W", value: 1 },
        { text: "10W", value: 2 },
        { text: "5W", value: 3 },
        { text: "2.5W", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 19,
    type: 2,
    statement: 'A plane sound wave traveling with velocity ‘v’ in a medium A reaches a point on the interface of medium A and medium B. If velocity of sound in medium B is 2v, the angle of incidence for total internal reflection of the wave will be greater than (sin 30° = 0.5 and sin 90° = 1)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "15°", value: 1 },
        { text: "30°", value: 2 },
        { text: "45°", value: 3 },
        { text: "90°", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 20,
    type: 2,
    statement: 'A gas is compressed isothermally . The r .m.s. velocity of its molecules',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "increases", value: 1 },
        { text: "decreases", value: 2 },
        { text: "first increases and then decreases", value: 3 },
        { text: "remains the same", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 21,
    type: 2,
    statement: 'Two concentric spheres kept in air have radii ‘R’ and ‘r’. They have similar charge and equal surface charge density ‘ σ ’. The electric potential at their common center is(∈₀ = permitivity of free space)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "σ(R + r) / ∈₀ ", value: 1 },
        { text: "σ(R – r ) / ∈₀ ", value: 2 },
        { text: "σ (R + r) / 2∈₀ ", value: 3 },
        { text: "σ(R + r) / 4∈₀ ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 22,
    type: 2,
    statement: 'The velocity of water in river is 9 km/hr of the upper surface. The river is 10 m deep. If the coefficient of viscosity of water is 10⁻² poise then the shearing stress between horizontal layers of water is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "0.25 × 10⁻² N/m² ", value: 1 },
        { text: "0.25 × 10⁻³ N/m² ", value: 2 },
        { text: "0.5 × 10⁻³ N/m² ", value: 3 },
        { text: "0.75 × 10⁻³ N/m² ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 23,
    type: 2,
    statement: 'A sphere ‘P’ of mass ‘m’ moving with velocity ‘u’ collides head-on with another sphere ‘Q’ of mass ‘m’ which is at rest. The ratio of final velocity of ‘Q’ to initial velocity of ‘P’ is(e = coefficient of restitution)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "e – 1 /2", value: 1 },
        { text: "[e + 1/ 2]½", value: 2 },
        { text: "e + 1 / 2", value: 3 },
        { text: "[e + 1 /2] ²", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 24,
    type: 2,
    statement: 'Magnetic induction produced at the center of a circular loop carrying current is ‘B’. The magnetic moment of the loop of radius ‘R’ is(μ₀= permeability of free space)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "BR³ / 2πµ₀", value: 1 },
        { text: "2πBR³ / µ₀", value: 2 },
        { text: "BR² / 2πµ₀", value: 3 },
        { text: "2πBR² / µ₀", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 25,
    type: 2,
    statement: 'A block is pushed momentarily on a horizontal surface with initial velocity ‘v’. If ‘ μ ’ is the coefficient of sliding friction between the block and surface, the block will come to rest after time (‘g’ = acceleration due to gravity) time (‘g’ = acceleration due to gravity)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "V/µg", value: 1 },
        { text: "Vg/µ", value: 2 },
        { text: "Vµ g", value: 3 },
        { text: "µg/ v", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 26,
    type: 2,
    statement: 'Two charges of equal magnitude ‘q’ are placed in air at a distance ‘2a’ apart and third charge‘–2q’ is placed at midpoint. The potential energy of the system is (∈₀ = permittivity of free space)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "q²/8π ∈₀a ", value: 1 },
        { text: "-3q²/8π ∈₀a", value: 2 },
        { text: "-5q²/8π ∈₀a ", value: 3 },
        { text: "-7q²/8π ∈₀a ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 27,
    type: 2,
    statement: 'Electron in potentiometer wire experiences a force 2.4 × 10–19 N. The length of potentiometer wire is 6m. The e. m. f . of the battery connected across the wire is (electronic charge = 1.6 ×10 –19',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 4,
    choice: new Array(
        { text: "6 V", value: 1 },
        { text: "9 V", value: 2 },
        { text: "12 V", value: 3 },
        { text: "15 V", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 28,
    type: 2,
    statement: 'dimensional formula for Reynold’s number is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "[L⁰ M⁰ T⁰]", value: 1 },
        { text: "[L¹ M¹ T¹]", value: 2 },
        { text: "[L–¹ M¹ T¹]", value: 3 },
        { text: "[L¹ M¹ T–¹]", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 29,
    type: 2,
    statement: 'Calculate angular velocity of earth so that acceleration due to gravity at 60° latitude becomes <br />\
zero. (Radius of earth = 6400 km, gravitational acceleration at poles = 10 m /s² Cos 60° = 0.5)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "7.8 × 10⁻ ² rad/s", value: 1 },
        { text: "0.5 × 10⁻ ³ rad/s", value: 2 },
        { text: "1 × 10⁻ ³ rad/s", value: 3 },
        { text: "2.5 × 10⁻ ³ rad/s", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 30,
    type: 2,
    statement: 'stationary object explodes into masses m₁ and m₂. They move in opposite directions with velocities V₁ and V₂. The ratio of kinetic energy E₁ to kinetic energy E₂ is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "m2/m1", value: 1 },
        { text: "m1 /m2 ", value: 2 },
        { text: "2m2/m1 ", value: 3 },
        { text: "2m1/m2 ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 31,
    type: 2,
    statement: 'The moment of inertia of a thin uniform rod rotating about the perpendicular axis passing through one end is ‘I’. The same rod is bent into a ring and its moment of inertia about the diameter is ‘I₁’. The ratio I₁ / I is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "4π/3", value: 1 },
        { text: "8π²/3 ", value: 2 },
        { text: "5π/3", value: 3 },
        { text: "8π² /5", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 32,
    type: 2,
    statement: 'A wooden block of mass 8 kg slides down an inclined plane of inclination 30° to the horizontal with constant acceleration 0.4 m/s². The force of friction between the block and inclined plane is (g = 10 m/s²)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "12.2 N", value: 1 },
        { text: "24.4 N", value: 2 },
        { text: "36.8 N", value: 3 },
        { text: "48.8 N", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 33,
    type: 2,
    statement:' A small metal ball of mass ‘m’ is dropped in a liquid contained in a vessel, attains a terminal velocity ‘v’. If a metal ball of same material but of mass ‘8m’ is dropped in same liquid then the terminal velocity will be',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "V ", value: 1 },
        { text: "2V", value: 2 },
        { text: "4V", value: 3 },
        { text: "8V", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 34,
    type: 2,
    statement: 'A body of mass ‘m’ is raised to a height ‘10 R’ from the surface of earth, where ‘R’ is the radius of earth. The increase in potential energy is (G = universal constant of gravitation, M = mass of earth and g = acceleration due to gravity)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "GMm/11R", value: 1 },
        { text: "GMm/10R ", value: 2 },
        { text: "mgR/11 G", value: 3 },
        { text: "10GMm/11 R", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 35,
    type: 2,
    statement: 'The masses of three copper wires are in the ratio 1 : 3 : 5 and their lengths are in the ratio5 : 3 : 1. The ratio of their resistance is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "25 : 1: 125", value: 1 },
        { text: "1 : 125 : 25", value: 2 },
        { text: "125 : 1 : 25", value: 3 },
        { text: "125 : 25 : 1", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 36,
    type: 2,
    statement: 'Electromagnets are made of soft iron because soft iron has',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 4,
    choice: new Array(
        { text: "high susceptibility and low retentivity ", value: 1 },
        { text: "low susceptibility and high retentivity", value: 2 },
        { text: "low susceptibility and low retentivity", value: 3 },
        { text: "high susceptibility and high retentivity", value: 4 }
    ),
    additional_text: null
} );





questions.push( {
    question_no: 37,
    type: 2,
    statement: 'When a wave travels in a medium, displacement of a particle is given by y = a sin 2π (b t – c x)where ‘a’, ‘b’, ‘c’ are constants. The maximum particle velocity will be twice the wave velocity if',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "b = ac", value: 1 },
        { text: "b = 1 / ac", value: 2 },
        { text: "c = π a", value: 3 },
        { text: "C = 1 / πa", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 38,
    type: 2,
    statement: 'Relation between force ‘F’ and density ‘d’ is <br />\
F = x√d . The dimensions of x are ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "A.	[L⁻½M³/² T ⁻² ]", value: 1 },
        { text: "B.	[L⁻½M½ T ⁻² ]", value: 2 },
        { text: "C.	[L ⁻¹ M³/² T ⁻² ]", value: 3 },
        { text: "D.	[L ⁻¹ M¹/² T ⁻² ]", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 39,
    type: 2,
    statement: 'Three identical spheres each of mass 1 kg are placed touching one another with their centers in a straight line. Their centers are marked as A, B, C respectively. The distance of center of mass of the system from',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 4,
    choice: new Array(
        { text: "A.	AB+ AC/2", value: 1 },
        { text: "B.	AB+BC/2", value: 2 },
        { text: "C.	AC−AB/3", value: 3 },
        { text: "D.	AB+AC/3", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 40,
    type: 2,
    statement: 'A satellite of mass ‘m’ revolves around the earth of radius ‘R’ at a height ‘x’ from its surface. <br />\
If ‘g’ is the acceleration due to gravity on the surface of the earth, the orbital speed of the <br /> \
satellite is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "gx", value: 1 },
        { text: "gr/R-x", value: 2 },
        { text: "gr2/R+x", value: 3 },
        { text: "gr2/R+x", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 41,
    type: 2,
    statement: 'A coil and a bar magnet move in the same direction with same high speed then',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "high emf is induced across the coil", value: 1 },
        { text: "no emf is induced across the coil", value: 2 },
        { text: "low emf is induced across the coil", value: 3 },
        { text: "magnetic flux linked with the coil changes fast", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 42,
    type: 2,
    statement: 'Plate characteristics of a triode valve are the curves obtained on plotting a graph between',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "plateplate voltage and plate current at constant grid voltage", value: 1 },
        { text: " grid voltage and plate current at constant plate voltage", value: 2 },
        { text: "grid voltage and plate voltage at constant plate current", value: 3 },
        { text: "filament current and plate current at constant plate voltage", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 43,
    type: 2,
    statement: 'To use a transistor as an amplifier',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer:4 ,
    choice: new Array(
        { text: "emitter−base junction is forward biased and collector−base junction is reverse biased", value: 1 },
        { text: "both junctions are forward biased", value: 2 },
        { text: "both junctions are reverse biased", value: 3 },
        { text: "it does not matter how the transistor is biased, it always works as an amplifier", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 44,
    type: 2,
    statement: 'A glass tube of internal diameter 3.5 cm and thickness 0.5 cm is held vertically with its lower end immersed in water. The downward pull on the tube due to surface tension (S.T. of water = 0.074 N/m) is ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "1.86 N", value: 1 },
        { text: "1.86 x 10-1 N", value: 2 },
        { text: "1.86 x10-2 N", value: 3 },
        { text: "1.86 x 10-3 N", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 45,
    type: 2,
    statement: 'The gas equation PV/T = constant is true for a constant mass of an ideal gas undergoing ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 1,
    choice: new Array(
        { text: "Isothermal change ", value: 1 },
        { text: "Adiabatic change ", value: 2 },
        { text: "Isobaric change ", value: 3 },
        { text: "Any type of change ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 46,
    type: 2,
    statement: 'A 10 ohm resistance, 5 mH coil and 10 µF capacitor are joined in series. When a suitable frequency alternating current source is joined to this combination, the circuit resonates. If the resistance is halved, the resonance frequency ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 4,
    choice: new Array(
        { text: "is halved", value: 1 },
        { text: "is doubled. ", value: 2 },
        { text: "remains unchanged. ", value: 3 },
        { text: "is quadrupled", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 47,
    type: 2,
    statement: 'The buckling of a beam is found to be more if ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "the breadth of the beam is large. ", value: 1 },
        { text: "the beam material has large value of Young’s modulus. ", value: 2 },
        { text: "the length of the beam is small. ", value: 3 },
        { text: "the depth of the beam is small. ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 48,
    type: 2,
    statement: 'In AM, the centpercent modulation is achieved when',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 4,
    choice: new Array(
        { text: "carrier amplitude = signal amplitude ", value: 1 },
        { text: "carrier amplitude ≠ signal amplitude ", value: 2 },
        { text: "carrier frequency = signal frequency ", value: 3 },
        { text: "carrier frequency ≠ signal frequency ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 49,
    type: 2,
    statement: 'A potentiometer wire of length 100 cm has a resistance of 10 Ω. It is connected in series with a resistance and an accumulator of e.m.f 2 V and of negligible internal resistance. A source of e.m.f 10 mV is balanced against a 40 cm length of the potentiometer wire. The value of the external resistance is ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 3,
    choice: new Array(
        { text: "395 Ω", value: 1 },
        { text: "790 Ω", value: 2 },
        { text: "405 Ω", value: 3 },
        { text: "810 Ω", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 50,
    type: 2,
    statement: 'For stationary waves in the medium,',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 0,
    answer: 2,
    choice: new Array(
        { text: "phase of SHM of particles at any time is same, between two successive nodes. ", value: 1 },
        { text: "phase of SHM of particles increases as path increases. ", value: 2 },
        { text: "the amplitude of vibration is same for each point. ", value: 3 },
        { text: "phase of all points between two successive antinodes is same. ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 51,
    type: 2,
    statement: 'To increase the range of voltmeter the series resistance should be _______.',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 3,
    choice: new Array(
        { text: "25 kg-m2", value: 1 },
        { text: "50 kg-m2", value: 2 },
        { text: "70 kg-m2", value: 3 },
        { text: "80 kg-m2", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 52,
    type: 2,
    statement: 'The limit of resolution of 100 cm telescope for λ = 5000 Å is approximately equal to',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 2,
    choice: new Array(
        { text: "0.13′′", value: 1 },
        { text: "0.3′′", value: 2 },
        { text: "1′′", value: 3 },
        { text: "1.4′′", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 53,
    type: 2,
    statement: 'Half-life of a radioactive substance accounts for ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 1,
    choice: new Array(
        { text: "time required for complete disintegration of radioactive substance. ", value: 1 },
        { text: "time required for two-third disintegration of radioactive substance. ", value: 2 },
        { text: "required for the disintegration of half the radioactive substance", value: 3 },
        { text: "time required for one-third disintegration of radioactive substance", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 54,
    type: 2,
    statement: 'According to Huygen’s principle',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 3,
    choice: new Array(
        { text: "each point on the wavefront is in different phase. ", value: 1 },
        { text: "each point on the wavefront is centre of a new disturbance and emits secondary waves", value: 2 },
        { text: "the tangent to wavefront is the direction of the propagation of the wave. ", value: 3 },
        { text: "the wave is transverse.", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no:55 ,
    type: 2,
    statement: 'Gyromagnetic ratio is a ratio of magnetic dipole moment to ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 2,
    choice: new Array(
        { text: "mass of electron", value: 1 },
        { text: "momentum of electron. ", value: 2 },
        { text: "radius of electron. ", value: 3 },
        { text: "angular momentum of electron. ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 56,
    type: 2,
    statement: 'An air column, closed at one end and open at the other resonates with a tuning fork of frequency ν, when its length is 45 cm, 99 cm and at two other lengths in between these values. The wavelength of sound in air column is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 2,
    choice: new Array(
        { text: "180 cm", value: 1 },
        { text: "108cm", value: 2 },
        { text: "54 cm", value: 3 },
        { text: "36 cm", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 57,
    type: 2,
    statement: 'The angle of incidence at which reflected light is totally polarized for reflection from air to glass (refraction index n) is ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 4,
    choice: new Array(
        { text: "58sin -1 (n)", value: 1 },
        { text: "sin -1 1/(n)", value: 2 },
        { text: "tan59-1 (n)", value: 3 },
        { text: "tan-1 1/(n)", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 58,
    type: 2,
    statement: 'Due to propagation of longitudinal wave in a medium, the following quantities also propagate in the same direction',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 1,
    choice: new Array(
        { text: "Energy, momentum and mass ", value: 1 },
        { text: "Energy ", value: 2 },
        { text: "Energy and mass ", value: 3 },
        { text: "Energy and linear momentum", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 59,
    type: 2,
    statement: 'In a potentiometer experiment, a balance point is obtained, when',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 3,
    choice: new Array(
        { text: "The e.m.f of the battery becomes equal to the e.m.f of the experimental cell. ", value: 1 },
        { text: "The potential difference of the wire between the +ve end to jockey becomes equal to the e.m.f of the experimental cell. ", value: 2 },
        { text: "The potential difference of the wire between +ve point and jockey becomes equal to the e.m.f of the battery. ", value: 3 },
        { text: "The potential difference across the potentiometer wire becomes equal to the e.m.f of the battery", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 60,
    type: 2,
    statement: 'A gas in an enclosure has a pressure P and the temperature T K. Another gas enclosed in a container of the same volume has a pressure 2P and the temperature T/2 K. The ratio of the average kinetic energy per molecule of the two gases is ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 2,
    choice: new Array(
        { text: "4:1", value: 1 },
        { text: "2:1", value: 2 },
        { text: "1:2", value: 3 },
        { text: "1:4", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 61,
    type: 2,
    statement: 'Lenz’s law gives',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 1,
    choice: new Array(
        { text: "the magnitude of the induced e.m.f. ", value: 1 },
        { text: "the direction of the induced current. ", value: 2 },
        { text: "both the magnitude and direction of the induced current. ", value: 3 },
        { text: "the magnitude of the induced current", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 62,
    type: 2,
    statement: 'A transverse wave is described by the equation, y  = yo sin 2π (ft – x/λvelocity is equal to four times the wave velocity if',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 2,
    choice: new Array(
        { text: "λ= π yo/4", value: 1 },
        { text: "λ= π yo/2", value: 2 },
        { text: "λ= π yo", value: 3 },
        { text: "λ=2 π yo", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 63,
    type: 2,
    statement: 'The earth moves around the sun in an elliptical orbit as shown in the figure. The ratio,OA/OB=xThe ratio of the speed of the earth at B and at A is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 4,
    choice: new Array(
        { text: "√x", value: 1 },
        { text: "x", value: 2 },
        { text: "x√x", value: 3 },
        { text: "x^2", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 64,
    type: 2,
    statement: 'When a body moves with a constant speed along a circle',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 2,
    choice: new Array(
        { text: "no work is done on it. ", value: 1 },
        { text: "no acceleration is produced in the body.", value: 2 },
        { text: "no force acts on the body.", value: 3 },
        { text: "its velocity remains constant.", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 65,
    type: 2,
    statement: 'The graph between restoring force and time in case of S.H.M is ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 1,
    choice: new Array(
        { text: "a straight line", value: 1 },
        { text: "a circle", value: 2 },
        { text: "a parabola", value: 3 },
        { text: "a sine curve", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 66,
    type: 2,
    statement: 'A capacitor of capacitance 2 µF is charged to a potential of 100 V and another capacitance 6 µF is charged to a potential of 300 V. These capacitors are joined, with plates of like charges connected together, the total charge is ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 3,
    choice: new Array(
        { text: "16 × 10−4  C", value: 1 },
        { text: "18 × 10−4 C", value: 2 },
        { text: "24 × 10−4 C", value: 3 },
        { text: "20 × 10−4 C", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 67,
    type: 2,
    statement: 'According to de Broglie, wave is associated with matter ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 2,
    choice: new Array(
        { text: "when it is stationary. ", value: 1 },
        { text: "when it is in motion with the velocity of light only. ", value: 2},
        { text: "when it is in motion with any velocity. ", value: 3 },
        { text: "none of the above ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 68,
    type: 2,
    statement: 'The moment of inertia of a body does not depend upon ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 2,
    choice: new Array(
        { text: "the mass of the body. ", value: 1 },
        { text: "the distribution of the mass in the body. ", value: 2 },
        { text: "the axis of rotation of the body ", value: 3 },
        { text: "the angular velocity of the body.", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 69,
    type: 2,
    statement: 'In insulators',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 3,
    choice: new Array(
        { text: "The valence band is partially filled with electrons. ", value: 1 },
        { text: "The conduction band is partially filled with electrons. ", value: 2 },
        { text: "The conduction band is filled with electrons and valence band is empty. ", value: 3 },
        { text: "The conduction band is empty and valence band is filled with electrons", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 70,
    type: 2,
    statement: 'Which one of the following graphs represents the variation of photoelectric current (i) with intensity (I) of the incident light? ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 2,
    choice: new Array(
        { text: "gx", value: 1 },
        { text: "gr/R-x", value: 2 },
        { text: "gr2/R+x", value: 3 },
        { text: "gr2/R+x", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 71,
    type: 2,
    statement: 'To produce constructive interference at a point the path difference between two waves superposing at a point should be',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 3,
    choice: new Array(
        { text: "x = 0, λ, 2λ, 3λ, …., nλ ", value: 1 },
        { text: "x = λ, 3λ, 5λ ,…., (2n – 1)λ ", value: 2 },
        { text: "x = 0, λ2 , λ, 32λ ", value: 3 },
        { text: "x = λ2 , 32λ , 52λ , …., (2n – 1) λ2 ", value: 4 }
    ),
    additional_text: null
} );
questions.push( {
    question_no: 72,
    type: 2,
    statement: 'If a body weighing 40 kg-wt is taken inside the earth to a depth to 12 th radius of the earth, then the weight of the body at that point is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 4,
    choice: new Array(
        { text: "40 kg-wt", value: 1 },
        { text: "20 kg-wt", value: 2 },
        { text: "30 kg-wt", value: 3 },
        { text: "zero", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 73,
    type: 2,
    statement: 'Two similar wires A and B are made of different materials. A is twice more elastic than B. When same force is applied, the ratio of elongation of B to A is ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 1,
    choice: new Array(
        { text: "1:1", value: 1 },
        { text: "1:4", value: 2 },
        { text: "4:1", value: 3 },
        { text: "2:1", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 74,
    type: 2,
    statement: 'f two identical mercury drops are combined to form a single drop, then its temperature will ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 2,
    choice: new Array(
        { text: "decrease. ", value: 1 },
        { text: "increase. ", value: 2 },
        { text: "remain the same. ", value: 3 },
        { text: "depend upon surrounding temperature", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 75,
    type: 2,
    statement: 'If temperature of a black body increases from 7 ºC to 287 ºC, then the rate of energy radiation increases by',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 1,
    answer: 3,
    choice: new Array(
        { text: "(287/4)4", value: 1 },
        { text: "16", value: 2 },
        { text: "4", value: 3 },
        { text: "2", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 76,
    type: 2,
    statement: 'Gaussian surface cannot pass through discrete charge because ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 4,
    choice: new Array(
        { text: "its an imaginary surface. ", value: 1 },
        { text: "electric field is not defined at the location of charge. ", value: 2 },
        { text: "electric field is normal at that point. ", value: 3 },
        { text: "electric field is tangential at that point", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 77,
    type: 2,
    statement: 'q1, q2, q3 and q4 are point charges located at points as shown in the figure and S is a spherical gaussian surface of radius R. Which of the following is true according to the Guass law?',

    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 2,
    choice: new Array(
        { text: "T.N.E.I = q1 + q 2 + q3 /2ε0", value: 1 },
        { text: "T.N.E.I = (q1 + q 2 + q 3 ) ", value: 2 },
        { text: "T.N.E.I = (q1 + q 2 + q 3 + q 4 ) ", value: 3 },
        { text: "T.N.E.I = q1 + q 2 + q 3 + q4 ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 78,
    type: 2,
    statement: 'In an npn transistor circuit, the collector current is 10 mA. If 90% of the electrons emitted reach the collector, the emitter current (IE) and base current (IB) are given by ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 4,
    choice: new Array(
        { text: "IE = – 1 mA, IB = 9 mA ", value: 1 },
        { text: "IE = 9 mA, IB = – 1 mA ", value: 2 },
        { text: "IE = 1 mA, IB = 11 mA ", value: 3 },
        { text: "IE = 11 mA, IB = 1 mA ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 79,
    type: 2,
    statement: 'A small sphere is attached to a cord and rotates in a vertical circle about a point O. If the average speed of the sphere is increased, the cord is most likely to break at the orientation when the mass is at',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 1,
    choice: new Array(
        { text: "Bottom point B", value: 1 },
        { text: "The top point C", value: 2 },
        { text: "The point D", value: 3 },
        { text: "Top point A ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 80,
    type: 2,
    statement: 'An alternating e.m.f, e = 300 sin (100πt) volt is applied to a pure resistance of 100 ohm. Calculate r.m.s current through the circuit. ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 3,
    choice: new Array(
        { text: "2.121 A", value: 1 },
        { text: "3.121 A", value: 2 },
        { text: "4.121 A", value: 3 },
        { text: "1.121 A ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 81,
    type: 2,
    statement: 'When equal forces are applied at different points of objects of same material but of different shapes, the same strain is not produced because ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 4,
    choice: new Array(
        { text: "the external force causes different strains. ", value: 1 },
        { text: "the property of matter at every point is not same. ", value: 2 },
        { text: "the coefficient of elasticity of the same material is not constant. ", value: 3 },
        { text: "the nature of external force changes ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 82,
    type: 2,
    statement: 'In Bohr’s model of hydrogen atom, which of the following pairs of quantities are quantized? ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 1,
    choice: new Array(
        { text: "Energy and linear momentum. ", value: 1 },
        { text: "Linear and angular momentum. ", value: 2 },
        { text: "Energy and angular momentum. ", value: 3 },
        { text: "Energy but not the angular momentum ", value: 4 }
    ),
    additional_text: null
} );

questions.push( {
    question_no: 83,
    type: 2,
    statement: 'φ1 and φ2 (φ1 > φ2) are the work functions of metals A and B. When light of same wavelength is incident on A and B, the fastest emitted electrons from A are _____ those emitted from B.',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 2,
    choice: new Array(
        { text: "more energetic than", value: 1 },
        { text: "less energetic than", value: 2 },
        { text: "of the same energy as", value: 3 },
        { text: "data insufficient ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 84,
    type: 2,
    statement: 'Out of following, the only correct statement about satellites ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 3,
    choice: new Array(
        { text: "A satellite cannot move in a stable orbit in a plane passing through the earth’s centre. ", value: 1 },
        { text: "Geostationary satellites are launched in the equatorial plane. ", value: 2 },
        { text: "We can use just one geostationary satellite for global communication around the globe. ", value: 3 },
        { text: "The speed of satellite increases with an increase in the radius of its orbit. ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 85,
    type: 2,
    statement: 'The first line of Balmer series has wavelength 6563 Å. What will be the wavelength of the first member of Lyman series? ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 1,
    choice: new Array(
        { text: "1215.4 Å", value: 1 },
        { text: "2500 Å", value: 2 },
        { text: "7500 Å", value: 3 },
        { text: "600 Å ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 86,
    type: 2,
    statement: 'In Young’s experiment, monochromatic light is used to illuminate the two slits A and B. Interference fringes are observed on a screen placed in front of the slits. Now if a thin glass plate is placed normally in the path of the beam coming from the slit ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 4,
    choice: new Array(
        { text: "the fringes will disappear. ", value: 1 },
        { text: "the fringe width will increase. ", value: 2 },
        { text: "the fringe width will decrease. ", value: 3 },
        { text: "there will be no change in the fringe width but the pattern shifts  ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 87,
    type: 2,
    statement: 'f I1 is the moment of inertia of a thin rod about an axis perpendicular to its length and passing through its centre of mass and I2 is the moment of inertia of the ring formed by bending the rod about an axis perpendicular to the plane, the ratio of I1 and I2 is ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 3,
    choice: new Array(
        { text: "I1 : I2 = 1 : 1 ", value: 1 },
        { text: "I1 : I2 = π2 : 3 ", value: 2 },
        { text: "I1 : I2 = π : 4 ", value: 3 },
        { text: "I1 : I2 = 3 : 5  ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 88,
    type: 2,
    statement: 'In remote controlled receivers, the sensor are,',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 2,
    choice: new Array(
        { text: "LEDs", value: 1 },
        { text: "Solar cells ", value: 2 },
        { text: "Photodiodes ", value: 3 },
        { text: "Zener diodes  ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 89,
    type: 2,
    statement: 'The potential energy of a particle executing S.H.M is 2.5 J, when its displacement is half of amplitude. The total energy of the particle is ',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 4,
    choice: new Array(
        { text: "2.5 J", value: 1 },
        { text: "10 J", value: 2 },
        { text: "12 J", value: 3 },
        { text: "20 J", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 90,
    type: 2,
    statement: 'A	long  straight	wire  carries	a	current	of  π A. The magnetic field	due	to it will	be 5 × 10−5 weber/m2 at what distance from the 5 × 10−5 weber/m2 at what distance from the wire? [µ0 = permeability of air]',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 1,
    choice: new Array(
        { text: "104 µ0", value: 1 },
        { text: "104 /µ0", value: 2 },
        { text: "106 µ0", value: 3 },
        { text: "106 /µ0 ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 91,
    type: 2,
    statement: 'In the expression for Boyle’s law, the product ‘PV’ has dimensions of',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 3,
    choice: new Array(
        { text: "force", value: 1 },
        { text: "impulse ", value: 2 },
        { text: "energy ", value: 3 },
        { text: "momentum ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 92,
    type: 2,
    statement: 'The difference between angular speed of minute hand and second hand of a clock is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 2,
    choice: new Array(
        { text: "59π/900 rad / s", value: 1 },
        { text: "59π/1800 rad / s", value: 2 },
        { text: "59π/2400 rad / s", value: 3 },
        { text: "59π/3600 rad / s ", value: 4 }
    ),
    additional_text: null
} );



questions.push( {
    question_no: 93,
    type: 2,
    statement: 'A metal rod of length ‘L’, cross-sectional area ‘A’, Young’s modulus ‘Y’ and coefficient of linear expansion ‘α’ is heated to ‘t’ °C. The work that can be performed by the rod when heated is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 4,
    choice: new Array(
        { text: "YALt2/ 2 ", value: 1 },
        { text: "YA2Lt2/ 2 ", value: 2 },
        { text: "YA2L2t2/ 2 ", value: 3 },
        { text: "YALt/ 2 ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no:94,
    type: 2,
    statement: 'In sonometer experiment, the bridges are separated by a fixed distance. The wire which is slightly <br /> \
elastic, emits a tone of frequency ‘n’ when held by tension ‘T’. If the tension is increased to ‘4T’, the <br /> \
tone emitted by the wire will be of frequency',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 4,
    choice: new Array(
        { text: "c", value: 1 },
        { text: "2n", value: 2 },
        { text: "Slightly greater than 2n ", value: 3 },
        { text: "Slightly less than 2n ", value: 4 }
    ),
    additional_text: null
} );



questions.push( {
    question_no: 95,
    type: 2,
    statement: 'A particle performs S.H.M. with amplitude 25 cm and period 3 s. The minimum time required for it <br /> \
to move between two points 12.5 cm on either side of the mean position is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 1,
    choice: new Array(
        { text: "0.6 s ", value: 1 },
        { text: "0.5 s ", value: 2 },
        { text: "0.4 s ", value: 3 },
        { text: "0.2 s ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 96,
    type: 2,
    statement: 'The pitch of the whistle of an engine appears to drop to (5/6)th of original value <br />\
when it passes a stationary observer. If the speed of sound in air is 350 m/s then the speed of engine is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 3,
    choice: new Array(
        { text: "35 m/s ", value: 1 },
        { text: "70 m/s", value: 2 },
        { text: "105 m/s ", value: 3 },
        { text: "140 m/s ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 97,
    type: 2,
    statement: 'A solid cylinder has mass ‘M’, radius ‘R’ and length ‘l’. Its moment of inertia about an axis passing through its centre and perpendicular to its own axis is',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 4,
    choice: new Array(
        { text: "(2MR^2)/3+ (Ml^2)/12", value: 1 },
        { text: "(MR^2)/3+ (Ml^2)/12", value: 2 },
        { text: "3MR^2)/4+ (Ml^2)/12", value: 3 },
        { text: "(MR^2)/4+ (Ml^2)/12", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 98,
    type: 2,
    statement: 'A particle is executing S.H.M. of periodic time ‘T’. The time taken by a particle in moving from <br />\
mean position to half the maximum displacement is (sin30°= 0.5)',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 1,
    choice: new Array(
        { text: "T/2", value: 1 },
        { text: "T/4", value: 2 },
        { text: "T/8", value: 3 },
        { text: "T/12 ", value: 4 }
    ),
    additional_text: null
} );


questions.push( {
    question_no: 99,
    type: 2,
    statement: 'The dimensions of Stefan’s constant are',
    correct_points: 1,
    incorrect_points: 0,
    multiple_responses: false,
section: 2,
    answer: 4,
    choice: new Array(
        { text: "[M0 L1 T–3 K–4] ", value: 1 },
        { text: "[M1 L1 T–3 K–3]", value: 2 },
        { text: "[M1 L2 T–3 K–4] ", value: 3 },
        { text: "[M1 L0 T–3 K–4]", value: 4 }
    ),
    additional_text: null
} );





/*

questions.push( {
    question_no: 2,
    type: 1,
    statement: 'Sample question 2 with image.',
    image: 'http://placehold.it/200x150',
    correct_points: 10,
    incorrect_points: 0,
    answer: 'sample2',
    multiple_responses: true,
    additional_text: 'The answer for this question is sample2.'
} );

questions.push( {
    question_no: 3,
    type: 1,
    statement: 'Sample question 3 -- multiple_responses disabled',
    image: null,
    correct_points: 10,
    incorrect_points: 0,
    answer: 'sample3',
    multiple_responses: false,
section: 0,
    additional_text: 'The answer for this question is sample3.'
} );

questions.push( {
    question_no: 4,
    type: 1,
    statement: 'Sample question 4 -- 10 negative points if incorrect',
    image: null,
    correct_points: 10,
    incorrect_points: 10,
    answer: 'sample4',
    multiple_responses: true,
    additional_text: 'The answer for this question is sample4.'
} );

questions.push( {
    question_no: 5,
    type: 2,
    statement: 'Sample question 5 -- multiple choice question?',
    image: null,
    correct_points: 10,
    incorrect_points: 0,
    answer: 3,
    multiple_responses: true,
    additional_text: 'The answer for this question is Choice C.',
    choice: new Array(
        { text: "Choice A", value: 1 },
        { text: "Choice B", value: 2 },
        { text: "Choice C", value: 3 },
        { text: "Choice D", value: 4 }
    )
} );*/

module.exports = questions;
