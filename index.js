#!/usr/bin/env node
//A comprehensive to-do list tailored for a programmer.
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("Creating a To-Do list for a Programmer"));
console.log("\n");
let to_do_list = []; //I/p values inserted in this empty value.
//------------------------------------data inserting part---------------------------
let condition = true; //This variable is initialized as true. It controls the while loop and determines whether the loop should continue prompting the user for more items or not.
while (condition) {
    //This starts a while loop that continues executing as long as the condition is true.
    //opening of while loop.
    let answers = await inquirer.prompt([
        {
            //object-1-----
            // Prompt for the item to add to the to-do list.
            name: "what_to_add",
            type: "input",
            message: chalk.blueBright("What do you want to add in programmer To Do List?"),
        },
        {
            //object-2-----
            //// Prompt to ask the user if they want to add more items to the to-do list.(confirmation prompt)
            name: "ask_to_add_more",
            type: "confirm",
            message: chalk.yellowBright("Do you want to add more in a To Do List?"),
            default: "false", // Default value for confirmation is false.
        },
    ]);
    to_do_list.push(answers.what_to_add); //means answer of what to add object is ultimately add in an array.
    console.log(to_do_list); //print array
    condition = answers.ask_to_add_more; //this shows,condition is true until ask_to_add remains true, as soon as condition false while loop stops to iterate.
    //-------------------------------------------------------delete part----------------------------------
    //This part of the code handles the deletion of items from the to-do list
    if (!condition) {
        //It checks if the user has finished adding items to the list by evaluating !condition. If the condition is false it means the user doesn't want to add more items so next step is to ask if the user wants to delete any item from an array of to do list.
        const deleteChoice = await inquirer.prompt([
            // inquirer for confirmation message of delete
            {
                name: "delete",
                type: "confirm",
                message: chalk.redBright("Do you want to delete any item from todo list?"),
                default: false,
            },
        ]);
        //If the user confirms they want to delete an item (deleteChoice.delete is true), it prompts the user to enter the index of the item they want to delete.
        if (deleteChoice.delete) {
            const deleteItem = await inquirer.prompt([
                //inquirer for find out value at index.
                {
                    name: "index",
                    type: "number",
                    message: chalk.grey("Enter the index of the item you want to delete:"),
                },
            ]);
            const index = deleteItem.index; // declare a variable named index,user provided index stored init.
            if (index >= 1 && index <= to_do_list.length) {
                //It verifies if the index is within the valid range
                to_do_list.splice(index, 1); //// Adjusted index - 1 to match array index, then remove item at that index
                //it adjusts the index to match the zero-based indexing used by JavaScript arrays (subtracting 1), and then removes the item at that index using splice().
                console.log(chalk.green("Item deleted successfully!"));
                console.log("Updated To-Do List:", to_do_list); // Log updated array
            }
            else {
                console.log(chalk.red("Invalid index....value at index is not found")); //if provided index is not available in an array.
            }
        }
        else {
            console.log(to_do_list);
        }
    } //closing of deletion scope
} //closing of while loop
//Author-Huma Mohsin.
