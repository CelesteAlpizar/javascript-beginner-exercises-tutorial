// Your code here:



function bottlesnumber()
{ 
    let bottles = 100;
    
	while(bottles >= 0)
	{
        bottles --;
        let bottlesOneLess = parseInt(bottles - 1);

        if(bottles > 1){
            console.log(bottles + " bottles of milk on the wall, " + bottles + " bottles of milk. Take one down and pass it around, " + bottlesOneLess + "bottles of milk on the wall.")
        }
        else if(bottles === 1){
            console.log(bottles + " bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.")
        }
        else{
            console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")
        }
        

	}
	
	return bottles;
}

bottlesnumber();
