function color(id){

	for (var i=0; i< id; i++){

		var element = document.getElementById(id+"."+row);
		element.classList.remove("empty");
		element.classList.add(player);
		
	}

}