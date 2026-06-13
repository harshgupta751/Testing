import {sum} from './index'

if(sum(1,3)!=4){
    throw new Error("Sum function has error");
}

console.log("Success")