// Your code here:

var bottles = 99;

function bottlesnumber()
{
	
	while(bottles > 2)
	{
		bottles --;
		console.log(bottles);
	}
	
	return bottles;
}

var bottlesOneLess = parseInt(bottles - 1);

console.log(bottlesnumber() + "bottles of milk on the wall, " + bottlesnumber() + "bottles of milk. Take one down and pass it around, " + bottlesOneLess + "bottles of milk on the wall.");
console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.")
console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")