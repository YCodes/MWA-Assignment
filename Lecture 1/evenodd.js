Array.prototype.even = function(){
	// let temp = new Array();
	// for(let item in this){
	// 	if(item%2===0){
	// 		temp.push(item);
	// 	}
	// }
	// return temp;

	this.forEach(function(item){
		console.log(item);
	});
}
Array.prototype.odd = function(){
	let temp = new Array();
	for(let item in this){
		if(item%2===1){
			temp.push(item);
		}
	}
	return temp;
}
// [1,2,3,4,5,6].even();
// [1,2,3,4,5,6].odd();