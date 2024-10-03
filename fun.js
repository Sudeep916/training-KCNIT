function counter() {
	let n=3;
	function number() {
        ++n;
		console.log(n);
	}
	return number;
}
let number = counter();
number();