import inquirer from "inquirer";
const answers:{sentence:string
}= await inquirer.prompt([{

    name: "sentence",
    type:"input",
    message:"enter your sentence to count the word "
}])

const words = answers.sentence.trim().split(" ")
console.log(`your sentences word  count is ${words.length}`)