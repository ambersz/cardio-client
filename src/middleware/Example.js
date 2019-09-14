import {RED, GREEN, BLUE, YELLOW, WHITE} from "./constants.js"

let ExampleGameState1 = {
  deck: 40,
  hands:[
    [
      {
        id: "card-12",
      },
      {
        id: "card-13",
      },
      {
        id: "card-14",
      },
      {
        id: "card-15",
      },
      {
        id: "card-16",
      },
    ],
    [
      {
        id:"card-12345",
        number: 2,
        color: RED,
      },
      {
        id:"card-12346",
        number: 3,
        color: GREEN,
      },{
        id:"card-1237",
        number: 4,
        color: BLUE,
      },
      {
        id:"card-12348",
        number: 1,
        color: WHITE,
      },
      {
        id:"card-12349",
        number: 1,
        color: YELLOW,
      },
    ],
  ],
  discard:[],
  played:[[],[],[],[],[]],
}

export { ExampleGameState1 };
