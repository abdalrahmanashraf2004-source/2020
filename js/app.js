const title = $('#title');
const price = $('#price');
const discrabtion = $('#discrabtion');
const input = $("#input")
 const input = document.querySelector("#image");

$('.create-post').on('click', function (event) {
	const self = $(this)
	event.preventDefault();
   
	let validTitle = validate(title);
	let validPrice = validate(price);
	let validDiscrabtion = validate(discrabtion);
    let validInput = validateimg-(input);

	if (validTitle && validDiscrabtion && validPrice) {
		self.attr('disabled', true)
		self.html('Loading... <i class="fas fa-spinner fa-spin"></i>')

	
		
		setTimeout(function () {
			title.val('')
			price.val('')
			discrabtion.val('')
			title.removeClass('is-invalid').removeClass('is-valid')
			price.removeClass('is-invalid').removeClass('is-valid')
			discrabtion.removeClass('is-invalid').removeClass('is-valid')
			
			self.attr('disabled', false)
			self.html('Create Post')		

		}, 3000)
	}
});

function validate(input) {
	if (input.val() === '') {
		input.addClass('is-invalid').removeClass('is-valid')

		return false;
	}


	input.removeClass('is-invalid').addClass('is-valid')

	return true;
}


function validateimg(input image) {
	if (input.files.length ===0 ) {
		input.addClass('is-invalid').removeClass('is-valid')

		return false;
	}


	input.removeClass('is-invalid').addClass('is-valid')

	return true;
}