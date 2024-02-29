// Name: Alexa Gwen M. Cabral
// SN: 2022-03085

import { appendFileSync } from 'node:fs';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

function generateUniqueID(fname, lname){ // generates uniqueID
    let uniqueID = fname[0].toLowerCase() + lname.toLowerCase() + uuidv4().slice(0,8).toLowerCase();
    return uniqueID;
}

function addAccount(array){ // appends new created user in users.txt file
    if(array.length == 4){
        for(let i = 0; i < array.length; i++){
            if(!array[i]){ // to check an empty string
                return false;
            }
        }

        if(!validator.isEmail(array[2])){ // to check if email is valid
            return false;
        }

        if(array[3] > 17){ // to check if age is at least 18

            let account = "";

            for(let i = 0; i < array.length; i++){
                if(i == 3){
                    account = account + array[i] + "," + generateUniqueID(array[0], array[1]) + "\n"; // end of string next line
                }else{
                    account = account + array[i] + ","; // add ","
                }
            }

            

            try { // try to save the newly created user account
                appendFileSync('users.txt', account);
                console.log('New user was appended to file!');
                
                return true;
              } catch (err) {
                /* Handle the error / returns false if failed */
                return false;
              } 

        }else{
            return false;
        }
    }else{
        return false;
    }
}

export { addAccount, generateUniqueID } // exports functions