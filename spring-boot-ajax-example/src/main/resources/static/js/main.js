$(document).ready(function() {

	$("#search-form").submit(function(event) {

		// stop submit the form, we will post it manually.
		event.preventDefault();

		fire_ajax_submit();

	});

});

function fire_ajax_submit() {

	var search = {}
	search["username"] = $("#username").val();
	// search["email"] = $("#email").val();

	$("#btn-search").prop("disabled", true);

	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "/api/search",
		data : JSON.stringify(search),
		dataType : 'json',
		cache : false,
		timeout : 600000,
		success : function(data) {
			if (data.result.length != 0) {
				console.log(data.result)
				$('#feedback').text(JSON.stringify(data.result));
				$('#feedback').val(JSON.stringify(data.result));

			}

		},
		error : function(e) {
			alert("error");
		}
	});

	$('#btn_print').click(function() {
		var url = window.location.host + '/printdata';
		redirect_blank(url);
	});

	function redirect_blank(url) {
		var dataSession = $('#feedback').val();
		sessionStorage.setItem('datafromsearch', dataSession);
		var a = document.createElement('a');
		a.target = "_blank";
		a.href = url;
		a.click();
	}
}