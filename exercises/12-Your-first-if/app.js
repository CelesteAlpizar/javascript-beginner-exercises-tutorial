var total = prompt('How many km are left to go?');

// Your code below:
function faltante(){
    if (total > 100) {
        return "Are we there yet?"
    }
    else if (total > 50) {
        return "We'll be there in 5 minutes"
    }
    else{
        return "I'm parking, I see you right now"
    }
}
console.log(faltante());