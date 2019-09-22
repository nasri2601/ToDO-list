const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");



function inputLength() {
	return input.value.length;
}


function createListElement() {

	var li = document.createElement("li");
	li.append(document.createTextNode(input.value));
	ul.append(li);
	input.value = "";

	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click", crossOut);

	const dBtn = document.createElement("button");
	dBtn.append(document.createTextNode("X"));
	li.append(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem() {
		li.classList.add("delete");
	}


}


function addListAfterClick() {

	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);