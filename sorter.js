function sort(array) {
	let sortedArray = [];
  array.forEach(function(elem) { 							//goes over every element in the initial array
  	console.log("Here's the element: " + elem);
  	for (i = 0; i <= (sortedArray.length); i++) { 			//will go through every element in the sorted array to compare
    	let compared = (sortedArray[i] || 0); 				//identifies which part of the sorted array you're comparing to, if it's empty then it uses 0
      console.log("Here's the compared one: " + compared);
    	if (elem >= compared) { 							//if the element from initial array is greater than or equal to the part of sorted array you're comparing to
      	sortedArray.splice(i, 0, elem); 					//then put it in at that index
        break; 												//end for loop
      }
    }
  });  
  return sortedArray;
}