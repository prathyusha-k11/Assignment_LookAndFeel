// Script for side navigation
function w3_open() {
	var x = document.getElementById("mySidebar");
	x.style.width = "300px";
	x.style.paddingTop = "10%";
	x.style.display = "block";
}
// Close side navigation
function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
}
// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
	var x = document.getElementById("navDemo");
	if(x.className.indexOf("show") == -1) {
		x.className += " show";
	} else {
		x.className = x.className.replace(" show", "");
	}
}

function myFunction() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function createformvalidation() {
	var x, x1, x2, x3, text, text1, unit, value, nutrient, food, check;

	// Get the value of the input field with id="numb"
	x = document.getElementById("numb").value;
	x1 = document.getElementById("unit").value;
	x2 = document.getElementById("nutrient").value;
	x3 = document.getElementById("food").value;
	// If x is Not a Number or less than one or greater than 10
	if (isNaN(x) || x < 0 || x > 1000000 || !(x1) || !(x2) || !(x3) || !(x)) {
		text = "Record not Created";
		text1 = "Please provide input for all fields and make sure the Value field is numeric";
	} else {
		text = "Record Created Successfully";
		text1 = ""
	}
	document.getElementById("demo").innerHTML = text;
	document.getElementById("demo1").innerHTML = text1;

}

function deleteformvalidation() {
	var x, text, text1;

	// Get the value of the input field with id="numb"
	x = document.getElementById("numb").value;

	// If x is Not a Number or less than one or greater than 10
	if (x != "Yes") {
		text = "Record not Deleted";
		text1 = "Please input Yes as shown above";
	} else {
		text = "Record Deleted Successfully";
		text1 = ""
	}
	document.getElementById("demo").innerHTML = text;
	document.getElementById("demo1").innerHTML = text1;
}
function updateformvalidation() {
	var x, text, text1;

	// Get the value of the input field with id="numb"
	x = document.getElementById("numb").value;

	// If x is Not a Number or less than one or greater than 10
	if (isNaN(x) || x < 0 || x > 1000000 || !(x)) {
		text = "Record not Updated";
		text1 = "Please make sure the Value field is numeric";
	} else {
		text = "Record Updated Successfully";
		text1 = ""
	}
	document.getElementById("demo").innerHTML = text;
	document.getElementById("demo1").innerHTML = text1;

}


function togetvalue(ele) {
	var food, nutr, unit, value;
	localStorage.setItem("food", ele.parentNode.parentNode.children[0].innerHTML);
	localStorage.setItem("nutr", ele.parentNode.parentNode.children[1].innerHTML);
	localStorage.setItem("unit", ele.parentNode.parentNode.children[2].innerHTML);
	localStorage.setItem("value", ele.parentNode.parentNode.children[3].innerHTML);
}

function todeletevalue(ele) {
	var food, nutr, unit, value;
	localStorage.setItem("food", ele.parentNode.parentNode.children[0].innerHTML);
	localStorage.setItem("nutr", ele.parentNode.parentNode.children[1].innerHTML);
	localStorage.setItem("unit", ele.parentNode.parentNode.children[2].innerHTML);
	localStorage.setItem("value", ele.parentNode.parentNode.children[3].innerHTML);
}


//chart js --- chart for analyze tab
var dataObjects = [{
	food: ["Beverages, Protein powder whey based", "Egg, white, dried", "Egg, white, dried, powder, stabilized, glucose reduced", "Egg, white, dried, stabilized, glucose reduced", "Egg, whole, dried", "Gelatins, dry powder, unsweetened", "Seal, bearded (Oogruk), meat, dried", "Soy protein isolate", "Soy protein isolate, potassium type", "Steelhead trout, dried, flesh (Shoshone Bannock)"],
	label: "Protein(G)",
	data: [161, 96.15, 88.32, 88.32, 85.6, 84.08, 82.4, 82.4, 78.13, 77.27]
}, {
	food: ["Sugars, granulated", "Figs, dried, uncooked", "Sweetener, herbal extract powder from Stevia leaf", "Sweeteners, tabletop, fructose, dry, powder", "Sugar, turbinado", "Sugars, powdered", "CAPUTO, POTATO GNOCCHI", "Sweeteners, for baking, contains sugar and sucralose", "Strawberry-flavor beverage mix, powder", "Desserts, rennin, vanilla, dry mix"],
	label: "Carbohydrate(G)",
	data: [199.58, 127.77, 100, 100, 99.8, 99.77, 99.6, 99.53, 99.1, 99]
}, {
	food: ["Sugars, granulated", "Sugar, turbinado", "Sugars, powdered", "Beverages, Whiskey sour mix, powder", "Beverages, lemonade-flavor drink, powder", "Sugars, brown", "Strawberry-flavor beverage mix, powder", "Beverages, tea, instant, decaffeinated, lemon, sweetened", "Beverages, tea, instant, lemon, sweetened, powder", "Beverages, Lemonade, powder"],
	label: "Sugars(G)",
	data: [99.8, 99.19, 97.81, 97.3, 97.15, 97.02, 95.45, 95.29, 95.29, 94.7]
}]
/* data */
var data = {
	labels: dataObjects[0].food,
	datasets: [{
		label: dataObjects[0].label,
		data: dataObjects[0].data,
		/* global setting */
		backgroundColor: 'rgba(54, 162, 235, 0.2)',
		borderColor: 'rgba(54, 162, 235, 1)',
		borderWidth: 1,
	}]
};
var options = {
	legend: {
		display: true,
		fillStyle: "red",
		labels: {
			boxWidth: 0,
			fontSize: 24,
			fontColor: "black",
			fontStyle: "bold",
		},
		responsive: true,
		maintainAspectRatio: false,
	},
	scales: {
		xAxes: [{
			ticks: {
				callback: function (food) {
					if (/\s/.test(food)) {
						return food.split(" ");
					} else {
						return food;
					}
				}
			}
		}],
		yAxes: [{
			stacked: true,
			scaleLabel: {
				display: true,
				labelString: 'Grams'
			}
		}]
	},
	/*end scales */
	plugins: {
		datalabels: {
			color: 'black',
			font: {
				size: 25,
				style: "bold",
			}
		}
	}
};
var chart = new Chart('chart-0', {
	plugins: [ChartDataLabels],
	type: 'bar',
	data: data,
	options: options
});

function changeData(index) {
	chart.data.datasets.forEach(function (dataset) {
		data.labels = dataObjects[index].food;
		dataset.label = dataObjects[index].label;
		dataset.data = dataObjects[index].data;
		//dataset.backgroundColor = dataObjects[index].backgroundColor;
	});
	chart.update();
}
/* add active class on click */
// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}