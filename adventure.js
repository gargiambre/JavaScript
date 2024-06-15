// const prompt = require("prompt-sync")();

// const answer = prompt("Would you like to play (y/n)? ");

// if (answer.toLowerCase() === "y") 
// {
//     const answer2 = prompt("Would you like to go left or go right (left/right)? ");

//     if (answer2 === "left") 
//     {
//         console.log("Oops, you go left and fall of a bridge! You lost!");
//     } 
//     else 
//     {
//         // right
//         console.log("Nice! You go right and approach a bridge...");
//         const answer3 = prompt("Would you like to cross the bridge, or turn around and find another way (cross/turn)? ");

//         if (answer3 === "cross") 
//         {
//             console.log("You cross the bridge and reach the end of the game!");
//         } 
//         else 
//         {
//             console.log("You turn back and trip on a log and hurt your leg. You lose.");
//         }
//     }
// } 
// else 
// {
//   console.log("That's too bad!");
// }



const prompt =  require("prompt-sync")();

const a = prompt("would you like to play the game (y/n)?")

if(a === "y")
{
    const b = prompt("left or right?")
    if(b === "left")
    {
        console.log("oops you died");
        //continue;
    }
    else
    {
        const d = prompt("cross or turn?")
        
        if(d === "cross")
        {
            console.log("you won");
        }
        else
        {
            console.log("try again");
        }
    }
}
else
{
    console.log("untill next time");
}