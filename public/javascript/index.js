$(function() {

	//Create div with class container for bootstrap content
	$('<div>', {
								"class": "container",
								"id": "container"

	}).prependTo('body');

	var html = {};

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
				'<a class="navbar-brand" href="#index">AppointApp</a>',
			'</div>',

			'<!-- Collect the nav links, forms, and other content for toggling -->',
			'<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">',
				'<ul class="nav navbar-nav">',
					'<li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>',
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
			'<p>Register or click the relevant link below to login. Patients may schedule appointments remotely with a Doctor. Doctors can also view scheduled appointments or make appointments to see other physicians!</p>',
			'</div>',

			'<div class="well col-md-6">',
			'<a id="patbtn"class="btn btn-primary btn-md col-md-12 links " href="#patients" role="button">Patient Login</a>',
			'<br>',
			'</div>',

			'<div class="well col-md-6">',
			'<a id="docbtn"class="btn btn-warning btn-md col-md-12 links" href="#doctors" role="button">Doctor Login</a>',
			'<br>',
			'</div>',

			'<a class="links" href="#register" role="button">Register!</a>	',

		'</div>	<!-- /Index -->'
		],'');

		return indexString;

	}

	//Patient Login Template
	html.patLogTemplate = function(){
				 var patLogString = _.join([
				'<!-- Patient Login Section -->',
			'<div id="patients" class = "page">',

			'<div class="alert alert-dismissible alert-success">',
				'<button type="button" class="close" data-dismiss="alert"> &close; </button>',
				'<strong>Welcome </strong>to the <a href="#" class="alert-link">patients </a>login area!',
			'</div>',

				'<div class="form-group">',
					'<label for="inputUser" class="col-md-6 control-label">Username</label>',
					'<div class="col-md-6">',
						'<input type="text" class="col-md-6 form-control" id="inputUser" placeholder="Username">',
					'</div>',
				'</div>',

				'<div class="form-group">',
					'<label for="inputPassword" class="col-md-2 control-label">Password</label>',
						'<div class="col-md-10">',
							'<input type="password" class="form-control" id="inputPassword" placeholder="Password">',
							'<div class="col-md-4"></br>',
		          	'<button type="submit" class="btn btn-primary">Login</button>',
		          '</div></br>',
							'<div class="checkbox">',
								'<label>',
									'<input type="checkbox">Remember me!',
								'</label>',
							'</div>',
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

			'<div class="alert alert-dismissible alert-warning">',
				'<button type="button" class="close" data-dismiss="alert"> &close; </button>',
				'<strong>Welcome </strong>to the <a href="#" class="alert-link">doctors </a>login area!',
			'</div>',

				'<div class="form-group">',
					'<label for="inputUser" class="col-md-6 control-label">Username</label>',
					'<div class="col-md-6">',
						'<input type="text" class="col-md-6 form-control" id="inputUser" placeholder="Username">',
					'</div>',
				'</div>',

				'<div class="form-group">',
					'<label for="inputPassword" class="col-md-2 control-label">Password</label>',
						'<div class="col-md-10">',
							'<input type="password" class="form-control" id="inputPassword" placeholder="Password">',
							'<div class="col-md-4"></br>',
		          	'<button type="submit" class="btn btn-primary">Login</button>',
		          '</div></br>',
							'<div class="checkbox">',
								'<label>',
									'<input type="checkbox">Remember me!',
								'</label>',
							'</div>',
					'</div>',
				'</div>',
			'</div> <!-- /#doctors -->'
			],'');
		
		return docLogString;
	}

	//Append html templates to div tag created with container id

	$('#container')
			.append(html.headerTemplate())
			.append(html.indexTemplate())
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
