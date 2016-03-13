$(function() {

	//Create div with class container for bootstrap content
	$('<div>', {
								"class": "container",
								"id": "container"

	}).prependTo('body');

	var html = {};

	var Doctor = function(){
		//Grab variables from form
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.dob = dob;
		this.sex = sex;
		this.title = title;
		this.specialty = specialty;
		this.appointCount = appointCount; //Bind this count to a badge displayed on doctor dashboard
	};

	//==========================================View Templates=================================================

	//Header template
	html.headerTemplate = function(){

	//Use lodash join method to join html strings in Array
	var headerString = _.join([
	'<nav class="navbar navbar-inverse">',
		'<div class="container-fluid">',
			'<!-- Brand and toggle get grouped for better mobile display -->',
			'<div class="navbar-header">',
				'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">',
				'<span class="sr-only">Toggle navigation</span>',
				'<span class="icon-bar"></span>',
				'<span class="icon-bar"></span>',
				'<span class="icon-bar"></span>',
				'</button>',
				'<a class="navbar-brand links" href="#index">AppointApp</a>',
			'</div>',

			'<!-- Collect the nav links, forms, and other content for toggling -->',
			'<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">',
				'<ul class="nav navbar-nav">',
					'<li class="active"><a class="links" href="#index">Home <span class="sr-only">(current)</span></a></li>',
					'<li><a href="#">Calendar</a></li>',
				'</ul>',

				'<ul class="nav navbar-nav navbar-right">',
					'<form class="navbar-form navbar-left" role="search">',
						'<div class="form-group">',
							'<input type="text" class="form-control" placeholder="Search Doctors">',
						'</div>',
						'<button type="submit" class="btn btn-default">Submit</button>',
					'</form>',
				'</ul>',
			'</div><!-- /.navbar-collapse -->',
		'</div><!-- /.container-fluid -->',
	'</nav>' 
	],'');//.join method will use a comma separator if no separator is used

	return headerString;
				
	};

	//Index Template
	html.indexTemplate = function(){

		var indexString = _.join([
		'<!-- Index Page -->',
		'<div id="index" class="page" >',

			'<div class="jumbotron">',
			'<h1>Welcome to AppointApp!!</h1>',
			'<p>Click the relevant link below to login or register. Patients may schedule appointments remotely with a Doctor. Doctors can also view scheduled appointments or make appointments to see other physicians!</p>',
			'</div>',

			'<div class="well col-md-6">',
			'<a id="patbtn"class="btn btn-primary btn-md col-md-12 links " href="#patients" role="button">Patients</a>',
			'<br>',
			'</div>',

			'<div class="well col-md-6">',
			'<a id="docbtn" class="btn btn-warning btn-md col-md-12 links" href="#doctors" role="button">Doctors</a>',
			'<br>',
			'</div>',

			

		'</div>	<!-- /Index -->'
		],'');

		return indexString;

	}

	//Patient Login Template
	html.patLogTemplate = function(){
				 var patLogString = _.join([
				'<!-- Patient Login Section -->',
			'<div id="patients" class = "page">',

			'<br>',
			'<br>',

			'<div class="alert alert-dismissible alert-success col-md-6 col-md-offset-3">',
				'<button type="button" class="close" data-dismiss="alert"></button>',
				'<center><strong>Welcome </strong>to the patients login area! New patients register <a href="#" class="alert-link">here </a></center>',
			'</div>',

			'<br>',
			'<br>',
			'<br>',
			'<br>',
			
			
			'<div class="form-group">',
				'<div class="row">',
					'<div class="col-md-6 col-md-offset-3">',
						'<input type="text" class="form-control" id="inputUser" placeholder="Username">',
					'</div>',
				'</div>',

				'<div class="row">',
					'<div class="col-md-4 col-md-offset-3">',
						'<label for="inputUser" class="control-label ">Username</label>',
					'</div>',
				'</div>',

				'<div class="row">',
					'<div class="col-md-6 col-md-offset-3">',
						'<input type="password" class="form-control" id="inputPassword" placeholder="Password">',
					'</div>',
				'</div>',	

				'<div class="row">',
					'<div class="col-md-6 col-md-offset-3">',
						'<label for="inputPassword" class="control-label">Password</label>',
					'</div>',
				'</div>',	
			'</div>',

			'<br>',

			'<div class="row">',

				'<div class="col-md-1 col-md-offset-3">',
					'<button type="submit" class="btn btn-primary">Login</button>',
				'</div>',

				'<div class="checkbox col-md-2 move-checkbox">',
					'<label>',
						'<input type="checkbox">Remember me!',
					'</label>',
				'</div>',

				'<div class="col-md-1 col-md-offset-1 move-register">',
					'<button type="submit" class="btn btn-primary links" href="#register">Register</button>',
				'</div>',

			'</div>',

			'</div> <!-- /#patients -->'
			],'');

		return patLogString;
	}

	//Doctor Login Template
	html.docLogTemplate = function(){

		var docLogString = _.join([
		'<!-- Doctor Login Section -->',
		'<div id="doctors" class = "page">',

			'<br>',
			'<br>',

			'<div class="alert alert-dismissible alert-warning col-md-6 col-md-offset-3">',
				'<button type="button" class="close" data-dismiss="alert"></button>',
				'<center><strong>Welcome </strong>to the doctors login area! New doctors register <a href="#" class="alert-link">here </a></center>',
			'</div>',

			'<br>',
			'<br>',
			'<br>',
			'<br>',
			
			
			'<div class="form-group">',
				'<div class="row">',
					'<div class="col-md-6 col-md-offset-3">',
						'<input type="text" class="form-control" id="inputUser" placeholder="Username">',
					'</div>',
				'</div>',

				'<div class="row">',
					'<div class="col-md-4 col-md-offset-3">',
						'<label for="inputUser" class="control-label ">Username</label>',
					'</div>',
				'</div>',

				'<div class="row">',
					'<div class="col-md-6 col-md-offset-3">',
						'<input type="password" class="form-control" id="inputPassword" placeholder="Password">',
					'</div>',
				'</div>',	

				'<div class="row">',
					'<div class="col-md-6 col-md-offset-3">',
						'<label for="inputPassword" class="control-label">Password</label>',
					'</div>',
				'</div>',	
			'</div>',

			'<br>',

			'<div class="row">',

				'<div class="col-md-1 col-md-offset-3">',
					'<button type="submit" class="btn btn-primary">Login</button>',
				'</div>',

				'<div class="checkbox col-md-2 move-checkbox">',
					'<label>',
						'<input type="checkbox">Remember me!',
					'</label>',
				'</div>',

				'<div class="col-md-1 col-md-offset-1 move-register">',
					'<button type="submit" class="btn btn-primary links" href="#register">Register</button>',
				'</div>',
			'</div>',

		'</div> <!-- /#doctors -->'
			],'');
		
		return docLogString;
	}

	//Registration Form Template
	html.registerTemplate = function(){

	}

//===================================End of Template Section==========================================


	//Append html templates to div tag created with container id

	$('#container')
			.append(html.headerTemplate())
			.append(html.indexTemplate())
			//.append(html.registerTemplate())
			.append(html.patLogTemplate())
			.append(html.docLogTemplate());

	//Initialize View
	$('.page').hide();//Hide all content on the page initially
	$('#index').show();//Load Index view first

	var links = $('.links');

	links.on("click", function(event){

		event.preventDefault();

		//Hide current view
		$('.page').hide();

		var $this = $(this),
				pageId = $this.attr('href');
				console.log($this);
				$(pageId).show();

	})

});
