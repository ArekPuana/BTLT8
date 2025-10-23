    $(document).ready(function(){

	// datepicker
	$("#datepicker").datepicker({
		dateFormat: "dd/mm/yy",
		changeMonth: true,
		changeYear: true,
		yearRange: "1900:2025"
	});

	//add row
	$(".add-row").click(function(){
		let name = $("#name").val().trim();
		let email = $("#email").val().trim();
		let birthdate = $("#datepicker").val().trim();

		//ktra da nhap du cac o chua
		if(name === "" || email === "" || birthdate === ""){
			alert("Vui lòng nhập đầy đủ thông tin!");
			return;
		}

		//ktra dinh dang email
		let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
		if(!emailPattern.test(email)){
			alert("Email không hợp lệ!");
			return;
		}

		//add row field
		let row = "<tr>" +
			"<td><input type='checkbox' class='select-row'></td>" +
			"<td>"+ name +"</td>" +
			"<td>"+ email +"</td>" +
			"<td>"+ birthdate +"</td>" +
			"</tr>";

		$("table tbody").append(row);

		//reset text field
		$("#name, #email, #datepicker").val("");
	});

	// delete row
	$(".delete-row").click(function(){
		$("table tbody").find('input[type="checkbox"]:checked').each(function(){
			$(this).closest("tr").remove();
		});
	});
});