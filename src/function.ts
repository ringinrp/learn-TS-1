// function create(): number {
//     return 2;
// } 

//arrow function
const  create2 = (): string => "hello world"

function add(x: number , y: number){
    const z: number = x+y;
    console.log("hasil adalah " + z);
}

type Pria = string;
type Wanita = string;

type Gender = Pria | Wanita;

let ringin: Pria;
ringin = "adalah pria"

let sayaManusia : Gender;
sayaManusia ="Ringin Restu Pati"


// console.log(create());

const result = create2();
console.log(result);

add(10,20);

console.log(ringin);
console.log(sayaManusia);