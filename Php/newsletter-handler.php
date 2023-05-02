<!DOCTYPE html>
<html>
<head>
	<title>Digital Safe | Subscribed</title>
	<link rel="stylesheet" href="D:/Website/CSS/styles.css">
	<script defer src="D:/Website/Javascript/main.js"></script>
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
</head>

<style type="text/css">
	.thank-message h1 {
		color: #fff;
		text-align: center;
		font-size: 35px;
		font-weight: lighter;
		font-family: 'IBM Plex Mono';
	}

	section {
		color: #fff;
		background-color: darkblue;
		text-align: center;
		align-items: center;
		font-size: 30px;
		font-family: 'IBM Plex Mono';
	}

	@media only screen and (max-width: 1496px) {
		.thank-message h1 {
	    	font-size: 30px;
	    }
	}

	@media only screen and (min-width: 1024px) {
		.thank-message h1 {
	    	font-size: 30px;
	    }
	}

	@media only screen and (max-width: 1025px) {
		.thank-message h1 {
	    	font-size: 30px;
	    }
	}

	@media only screen and (max-width: 1159px) {
		.thank-message h1 {
	    	font-size: 24px;
	    	margin-top: 70px;
	    	text-align: center;
	    }
	}

	@media only screen and (max-width: 991px) {
		.thank-message h1 {
	    	font-size: 24px;
	    	margin-top: 90px;
	    }
	}

	@media only screen and (max-width: 560px) {
		.thank-message h1 {
	    	font-size: 24px;
	    	margin-top: 70px;
	    	text-align: center;
	    }
	}

	@media only screen and (max-width: 515px) {
		.thank-message h1 {
	    	font-size: 20px;
	    	text-align: center;
	    	margin-top: 80px;
	    }
	}

	@media only screen and (max-width: 446px) {
		.thank-message h1 {
	    	font-size: 20px;
	    	padding-left: 14px;
	    	margin-top: 80px;
	    	text-align: center;
	    }
	}

	@media only screen and (max-width: 325px) {
		.thank-message h1 {
	    	font-size: 18px;
	    	padding-left: 10px;
	    	margin-top: 60px;
	    	text-align: center;
	    	color: #fff;
	    }
	}
</style>

<body>
	<header>
		<nav class="navbar">
				<span class="navbar-toggle" id="navbar-toggle">
					<i class="fa fa-bars"></i>
				</span>
			<a href="index.html" class="site-logo">
				<img src="Images/logo1.png" width="160" height="160">
			</a>
			<ul class="main-nav" id="main-nav">
				<li><a href="index.html" class="nav-links">Home</a></li>
				<li><a href="youngpeople.html" class="nav-links" target="_blank">Young People</a></li>
				<li><a href="parents.html" class="nav-links" target="_blank">Parents/Carers</a></li>
				<li><a href="signup.html" class="nav-links" target="_blank">Sign Up</a></li>
				<li><a href="about.html" class="nav-links" target="_blank">About</a></li>
			</ul>
		</nav>

		<div class="main-content-container">
			<div class="main-content-box">
				<div class="thank-message">
					<h1>Thank you for subscribing to our newsletter!<br>
					<br>The details you entered can be found below.<br></h1>
				</div>
			</div>
		</div>
	</header>

	<section>
		<?php
		$user_name = $_POST['name'];
    	$user_email = $_POST['email'];
		echo "<h1>You Entered:</h1>";
		echo "<br>";
		echo "<h1> Name:  </h1>";
		echo $user_name;
		echo "<br>";
		echo "<h1> Email:  </h1>";
		echo $user_email;
		echo "<br>";

		$email_from = 'DigitalSafe@parisha.com';

    	$email_subject = "New Form Submission";

    	$email_body = "Name: $user_name.\n".
    					"User Email: $user_email.\n".

    	$to = "parishab112@gmail.com";

    	$headers = "From: $email_from \r\n";

    	$headers = "Reply-To: $user_email \r\n";

    	$mail_sent = mail($to,$email_subject,$email_body,$headers);
		?>
	</section>

	<button id="btnScrollToTop">
		<i class="fa fa-arrow-circle-up"></i>
	</button>

	<footer id="footer-items">
		<div id="footer-logo"> 	
			<img src="Images/logo1.png" alt="sitelogo">
		</div>

		<div id="footer-content">
			<p>&copy;Digital Safe 2020</p>
			<p><br>This site is only for demonstrational purposes and has been developed for an educational exercise. The site contains text and media from external sources which have been referenced in the documentation  created for this site.</p><br>
		</div>

		<div id="footer-social-links">
			<a href="https://www.facebook.com" target="_blank" class="fa fa-facebook"></a>
			<a href="https://www.twitter.com" target="_blank" class="fa fa-twitter"></a>
			<a href="https://www.instagram.com" target="_blank" class="fa fa-instagram"></a>
		</div>
	</footer>
</body>
</html>