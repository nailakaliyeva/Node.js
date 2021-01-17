const EventEmitter = require("events");
const readlines = require("readline")
const rl = readlines.createInterface({input:process.stdin,
                                    output: process.stdout})
class Person extends EventEmitter{
    constructor(name, last, email){
        super();
        this.name = name;
        this.last = last;
        this.email = email;
    };
        test(){
            console.log("calling this method test")
        };

        test2(){
            console.log("calling this method test2")
        };

}

let naila = new Person("Naila", "Kaliyeva", "nailakaliyeva@gmail.com");
rl.question(`Is ${naila.name} your friend? \n`, 
            (userInput)=>{  if(userInput.trim()=="yes"){console.log("Great, she's my friend, too");
                                                        rl.close()}
                            else{console.log("Your loss");
                                 rl.close()}});
naila.test();
naila.test2();
naila.on("test", ()=> console.log("Method test has been caught by the listener"));
naila.on("test2", ()=> console.log("Method test2 has been caught by the listener"));
rl.on("close", ()=> console.log("rl has been closed"));
