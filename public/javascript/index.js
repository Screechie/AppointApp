$(function() {
	$('a#patbtn').on("click", function(event){
		event.preventDefault();
		//Load Sign in page for patients
		console.log("You clicked the patient sign in button!");

		var form = "<div class='input-group input-group-lg'>"+
		  "<span class='input-group-addon' id='sizing-addon1'>Username</span>"+
		  "<input type='text' class='form-control' placeholder='Username' aria-describedby='sizing-addon1'>"+
		  "<span class='input-group-addon' id='sizing-addon1'>Password</span>"+
		  "<input type='password' class='form-control' placeholder='Password' aria-describedby='sizing-addon1'>"+
			"</div>";

	$('div.main').html(form);

	});


	$('a#docbtn').on("click", function(event){
		event.preventDefault();
		//Load Sign in page for doctors
		console.log("You clicked the doctor sign in button!");

		var form = "<div class='input-group input-group-lg'>"+
		  "<span class='input-group-addon' id='sizing-addon1'>Username</span>"+
		  "<input type='text' class='form-control' placeholder='Username' aria-describedby='sizing-addon1'>"+
		  "<span class='input-group-addon' id='sizing-addon1'>Password</span>"+
		  "<input type='password' class='form-control' placeholder='Password' aria-describedby='sizing-addon1'>"+
			"</div>";

	$('div.main').html(form);

	});
});
