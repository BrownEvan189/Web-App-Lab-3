var prev_x="catalogue"; 
var prev_desc="0";
const cart_list = [];

function display(x) {
	el = document.getElementsByClassName(x);
	for(var i = 0; i < el.length; i++) {
		el[i].style.display="block";
	}
	el = document.getElementsByClassName(prev_x);
	for(var i = 0; i < el.length; i++) {
		el[i].style.display="none";
	}
	if(prev_x == x)
		prev_x='0';
	else
		prev_x = x;
}

function display_desc(desc) {
	document.getElementById("product-desc-" + desc).style.display = "block";
	document.getElementById("product-desc-" + prev_desc).style.display = "none";
	
	if(prev_desc == desc)
		prev_desc = '0';
	else
		prev_desc = desc;
}

function add_to_cart(x) {
	document.getElementById("notification").style.display = "block";
	cart_list[cart_list.length] = x;
}