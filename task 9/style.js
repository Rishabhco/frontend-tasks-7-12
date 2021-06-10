$("#del").click(function(){
	var divisor = document.getElementById("divisor").value;
	var div = document.getElementById("q2buttons");
	var buttons = div.getElementsByTagName("button");
	for (var i = 0; i < buttons.length; i++) {
		var number = buttons[i].innerHTML;
		if (number % divisor == 0) {
			div.removeChild(buttons[i]);
			i--;
		}
	}
})