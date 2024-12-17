const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let isTrue = false
	for(let x in sampleObject){
		if(x==key){
			isTrue = true;
		}
	}
	 return isTrue
}

// Do not change the code below
const key = prompt("Enter Key."); 
alert(hasKey(key));
