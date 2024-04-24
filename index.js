import inquirer from "inquirer";
let randomnumber = Math.floor(Math.random() * 6 + 1);
let answers = await inquirer.prompt([
    {
        name: "userGuessnumber",
        type: "number",
        message: "Please Guess a Number between 1 to 6:",
    }
]);
if (answers.userGuessnumber === randomnumber) {
    console.log("Congratulation you guess a right Number");
}
else {
    console.log("You guess a wrong number");
}
