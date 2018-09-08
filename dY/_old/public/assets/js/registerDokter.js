$(document).ready(function(){
	initMaterialWizard();
});

function initMaterialWizard() {
	// Code for the Validator
	var $validator = $('.card-wizard form').validate({
		rules: {
			passwordRepeat: {
				equalTo: "#password"
			}
		},
		
		highlight: function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
		},
		success: function(element) {
			$(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
		},
		errorPlacement : function(error, element) {
			$(element).append(error);
		}
	});

	// Wizard Initialization
	$('.card-wizard').bootstrapWizard({
		'tabClass': 'nav nav-pills',
		'nextSelector': '.btn-next',
		'previousSelector': '.btn-previous',

		onNext: function(tab, navigation, index) {
			var $valid = $('.card-wizard form').valid();
			if (!$valid) {
				$validator.focusInvalid();
				return false;
			}
		},

		onInit: function(tab, navigation, index) {
			//check number of tabs and fill the entire row
			var $total = navigation.find('li').length;
			var $wizard = navigation.closest('.card-wizard');
		},

		onTabClick: function(tab, navigation, index) {
			var $valid = $('.card-wizard form').valid();

			if (!$valid) {
				return false;
			} else {
				return true;
			}
		},

		onTabShow: function(tab, navigation, index) {
			var $total = navigation.find('li').length;
			var $current = index + 1;

			var $wizard = navigation.closest('.card-wizard');

			// If it's the last tab then hide the last button and show the finish instead
			if ($current >= $total) {
				$($wizard).find('.btn-next').hide();
				$($wizard).find('.btn-finish').show();
			} else {
				$($wizard).find('.btn-next').show();
				$($wizard).find('.btn-finish').hide();
			}
		}
	});
}




