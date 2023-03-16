/** @format */

var obj = [];

var docRequest = new XMLHttpRequest();
docRequest.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		const data = this.responseText;
		obj = JSON.parse(data);
		//console.log(obj)
		buildTable(obj);
	}
};
docRequest.open("GET", "https://dummyjson.com/products", true);

docRequest.send();

function buildTable(data) {
	// console.log(data.products.length)
	// console.log(data.products[0].title)
	var table = document.getElementById("myTable");

	for (var i = 0; i < data.products.length; i++) {
		var row = `<tr>
              <td>${data.products[i].id}</td>
							<td>${data.products[i].title}</td>
							<td>${data.products[i].description}</td>
              <td>${data.products[i].price}</td>
							<td>${data.products[i].discountPercentage}</td>
              <td>${data.products[i].rating}</td>
							<td>${data.products[i].stock}</td>
              <td>${data.products[i].brand}</td>
							<td>${data.products[i].category}</td>
              
              <td><img src="${data.products[i].images[0]}" alt="productImg" width="75px"></td>
					  </tr>`;
		table.innerHTML += row;
	}
}
