const elem = document.querySelector('input');

output = document.getElementById("result");

const handleInput = function handleInput() {

	if (elem.value < 0) {
		output.className = 'text-danger';
		output.innerHTML = "Please Enter a possitive number!";
	}

	else {
		let elem_str = elem.value.toString();
		let reverse_elem = elem_str.split('').reverse().join('');
		console.log(reverse_elem);
		if (elem_str === reverse_elem) {
            output.className = 'text-success';
            output.innerHTML = "Yes. This is Pallindrome!";
		}
		else {
            output.className = 'text-danger';
			output.innerHTML = "No. Try again.";
		}
	}

}
elem.addEventListener('input', handleInput);