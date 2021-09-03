// Knock knock jokes 
const knockKnockObject = {
    knockMessage : "Knock-knock. Who's There?",
    punchLine : [
                    ["Says","Says me, that's who!"],
                    ["Gouda","Gouda knock knock jokes, don't you think?"],
                    ["Honeydew","Honeydew you wanna dance?"],
                    ["Europe","No, YOU'RE a poo!"],
                    ["Omelette","Omelette you finish."],
                    ["Weekend","Weekend do anything we want!"],
                    ["Taco","Taco to you later. It's taking too long for you to open the door."],
                    ["Hawaii","I'm fine, Hawaii you?"],
                    ["Voodoo","Voodoo you think you are, asking me so many questions?"],
                    ["Mustache","Mustache you a question, but I'll shave it for later"]
                ]   
}

const randomNum = (num) => Math.floor(Math.random() * num)

const punchLine = knockKnockObject.punchLine[randomNum(knockKnockObject.punchLine.length)]

console.log(`${knockKnockObject.knockMessage} \n${punchLine[0]}.\n${punchLine[0]} who?\n${punchLine[1]}`)
