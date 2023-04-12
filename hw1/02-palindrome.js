const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);
output = document.getElementById("result")

function handleInput() {

	if (elem.value < 0) {
		output.style.color = "red"
		output.innerHTML = "Please Enter a possitive number!"
	}

	else {
		let elem_str = elem.value.toString()
		let reverse_elem = elem_str.split('').reverse().join('')
		console.log(reverse_elem)
		if (elem_str == reverse_elem) {
			output.style.color = "green"
			output.innerHTML = "Yes. This is Pallindrome!";
		}
		else {
			output.style.color = "red"
			output.innerHTML = "No. Try again.";
		}
	}

}