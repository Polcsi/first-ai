const net = new brain.NeuralNetwork();

const data = [
  { input: { r: 0, g: 0, b: 0 }, output: [0] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.5403762826020777,
      g: 0.15229101092986652,
      b: 0.520115871703785,
    },
    output: [1],
  },
  {
    input: {
      r: 0.19287748016882889,
      g: 0.11885162171425656,
      b: 0.9309178299114538,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8610536066477483,
      g: 0.2851677514817794,
      b: 0.7012059869825027,
    },
    output: [1],
  },
  {
    input: {
      r: 0.20683274345444347,
      g: 0.8844993585336074,
      b: 0.441874582092477,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3716897723924981,
      g: 0.7672605413581979,
      b: 0.2170793623061975,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7498237248758519,
      g: 0.35937915202328297,
      b: 0.6322163651578332,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9019571669605273,
      g: 0.22002607557402531,
      b: 0.5203065106319056,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3541900998916607,
      g: 0.5135357812569488,
      b: 0.681205924470826,
    },
    output: [1],
  },
  {
    input: {
      r: 0.19305814638348395,
      g: 0.3632561880837446,
      b: 0.2814051087916962,
    },
    output: [1],
  },
  {
    input: {
      r: 0.02863729914086477,
      g: 0.7526528313520717,
      b: 0.1452840430577793,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9126001653436759,
      g: 0.7557913129759561,
      b: 0.7325567693103741,
    },
    output: [0],
  },
  {
    input: {
      r: 0.12351326897249226,
      g: 0.651484252335151,
      b: 0.695080641965762,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6237039010091414,
      g: 0.8892019754155993,
      b: 0.7014996780143801,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8404207858588906,
      g: 0.5746740064010756,
      b: 0.3294806556677867,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5441489573717524,
      g: 0.8004002663999983,
      b: 0.7345288971562713,
    },
    output: [0],
  },
  {
    input: {
      r: 0.005752854784314865,
      g: 0.7159885677022424,
      b: 0.41304283325615665,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4028170974511347,
      g: 0.8193081464196674,
      b: 0.22214693506234573,
    },
    output: [0],
  },
  {
    input: {
      r: 0.46343596268612774,
      g: 0.8620551316173541,
      b: 0.5445847666808661,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9619898356078371,
      g: 0.7645474367677765,
      b: 0.7643898680444259,
    },
    output: [0],
  },
  {
    input: {
      r: 0.1419280936298355,
      g: 0.32459899265622894,
      b: 0.055579599676550906,
    },
    output: [1],
  },
  {
    input: {
      r: 0.14639740825987224,
      g: 0.6224586610212324,
      b: 0.6032602937414631,
    },
    output: [1],
  },
  {
    input: {
      r: 0.22063079350749537,
      g: 0.36226093706766527,
      b: 0.42738008950000417,
    },
    output: [1],
  },
  {
    input: {
      r: 0.356948902228295,
      g: 0.2689465818993795,
      b: 0.7791199501603379,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4840557539257251,
      g: 0.0118571219904553,
      b: 0.7885210147337431,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6094694541894221,
      g: 0.33218216934526623,
      b: 0.19970285616007133,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6636591925998758,
      g: 0.8724011507289027,
      b: 0.6384980481900571,
    },
    output: [0],
  },
  {
    input: {
      r: 0.4082647658160652,
      g: 0.22938083917011554,
      b: 0.24982016430412557,
    },
    output: [1],
  },
  {
    input: {
      r: 0.46130781775857654,
      g: 0.02013484239404506,
      b: 0.7780667189810127,
    },
    output: [1],
  },
  {
    input: {
      r: 0.32233960207002976,
      g: 0.9763688353573081,
      b: 0.14295382049634053,
    },
    output: [0],
  },
  {
    input: {
      r: 0.47673531220229526,
      g: 0.560821153693003,
      b: 0.4343848948647717,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3857430826799362,
      g: 0.9813072638446785,
      b: 0.3444915720140902,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9268358118190987,
      g: 0.004243219452824132,
      b: 0.17000815637374211,
    },
    output: [1],
  },
  {
    input: {
      r: 0.34918838179111766,
      g: 0.6844777901862478,
      b: 0.46822744677818195,
    },
    output: [1],
  },
  {
    input: {
      r: 0.2195269916385958,
      g: 0.17513720841594682,
      b: 0.616983596740343,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9337302884955807,
      g: 0.898407410372668,
      b: 0.09032679996989335,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7869422713208256,
      g: 0.729179071614805,
      b: 0.30829742420402084,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7631423729960212,
      g: 0.28130409386737254,
      b: 0.5609232258901213,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9500310887908627,
      g: 0.28753807637565965,
      b: 0.9488704541005677,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5036157647148161,
      g: 0.4036411146242209,
      b: 0.17036435573660924,
    },
    output: [1],
  },
  {
    input: {
      r: 0.1905965190438872,
      g: 0.9197195694516802,
      b: 0.6661762526250079,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7816261695129239,
      g: 0.4311887086086199,
      b: 0.147882403633113,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3950520970901903,
      g: 0.8533156637776644,
      b: 0.02814837935900627,
    },
    output: [0],
  },
  {
    input: {
      r: 0.24554859269566354,
      g: 0.5931233979027657,
      b: 0.13028079658564562,
    },
    output: [1],
  },
  {
    input: {
      r: 0.12501175261493924,
      g: 0.5297833116586728,
      b: 0.33096587059363114,
    },
    output: [1],
  },
  {
    input: {
      r: 0.883507751408992,
      g: 0.7350429346481695,
      b: 0.058761753632069036,
    },
    output: [0],
  },
  {
    input: {
      r: 0.10604758934177339,
      g: 0.6385562081532934,
      b: 0.48711237541054464,
    },
    output: [1],
  },
  {
    input: {
      r: 0.16408895970899762,
      g: 0.8947320821459663,
      b: 0.9167953905415478,
    },
    output: [0],
  },
  {
    input: {
      r: 0.43058531057046445,
      g: 0.8665759979601431,
      b: 0.5987006624510647,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9123785109297828,
      g: 0.03879958075991152,
      b: 0.9147963571868978,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5430145751991935,
      g: 0.6755059724070938,
      b: 0.9962509688424115,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8327650459678388,
      g: 0.9667934017589499,
      b: 0.43173388242188926,
    },
    output: [0],
  },
  {
    input: {
      r: 0.692004342037134,
      g: 0.6584178764302624,
      b: 0.10360014586449218,
    },
    output: [1],
  },
  {
    input: {
      r: 0.25698851969035297,
      g: 0.3574167490950395,
      b: 0.5007254605185636,
    },
    output: [1],
  },
  {
    input: {
      r: 0.49175949706795974,
      g: 0.609374332336204,
      b: 0.09457290087011438,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8567272837247115,
      g: 0.6175985771642902,
      b: 0.006667169269974238,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8347314941324373,
      g: 0.26268918404085895,
      b: 0.9152279481118346,
    },
    output: [1],
  },
  {
    input: {
      r: 0.07066759252649124,
      g: 0.6708062085720954,
      b: 0.40227685837715343,
    },
    output: [1],
  },
  {
    input: {
      r: 0.20844328036496274,
      g: 0.43215551833875954,
      b: 0.7055885714297125,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9434867425344957,
      g: 0.6934639777878331,
      b: 0.3803393995973341,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7598894919851835,
      g: 0.26310740437226676,
      b: 0.7675644483756909,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5024284160381205,
      g: 0.4609978435981552,
      b: 0.16887746642013113,
    },
    output: [1],
  },
  {
    input: {
      r: 0.21418350000190567,
      g: 0.1359292562765113,
      b: 0.9545521588396852,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9221135650842365,
      g: 0.941891540449237,
      b: 0.33694389989538465,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7300163645926485,
      g: 0.8434754886217961,
      b: 0.7517087074876772,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8586038110307133,
      g: 0.11388719385505763,
      b: 0.07325539931933123,
    },
    output: [1],
  },
];

net.train(data);

const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");
const whiteBttn = document.getElementById("white-button");
const blackBttn = document.getElementById("black-button");
const printBttn = document.getElementById("print-button");
let color;
setRandomColor();

whiteBttn.addEventListener("click", () => {
  chooseColor(1);
});
blackBttn.addEventListener("click", () => {
  chooseColor(0);
});
printBttn.addEventListener("click", print);

function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });
  setRandomColor();
}

function print() {
  console.log(JSON.stringify(data));
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };
  const guess = net.run(color)[0];

  guessEl.style.color = guess > 0.5 ? "#FFF" : "#000";

  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
    color.b * 255
  })`;
}
