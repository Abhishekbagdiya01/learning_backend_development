
//print
// console.log("Glory to hanuman")



//variable
let x: number = 10;
let y: number = 20;
let sum = x + y;
// console.log("total sum is " + sum);

let message = "Hello there";
// console.log(message);

//array
let a: string[] = ["abhishek", "bagdiya"];
// console.log(a)

//object

let obj = { name: "Abhishek", lastname: "Bagdiya", phno: "12345678" }

// console.log(obj)


//function

function getData(obj: any): string {
    return obj.name
}

let f = getData(obj)
// console.log(f)


function getUid(uid: string | number): string {

    if (typeof uid == "string") {


        return uid.toUpperCase()
    }
    else

        return "number"
}

console.log(getUid("13eveex007@"))


