function getFormvalue() {
    //Write your code here
const form = document.getElementById('form1');
	const name=form.elements['fname'].value;
	const lastname=form.elements['lname'].value;
	
	alert(name + lastname);
	
}
