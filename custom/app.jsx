	var Login = React.createClass({
	render: function() {
		return (
			<a className = "btn btn-success btn-lg" href="#">Login</a>
		);
	}

});
	ReactDOM.render(
		<Login />,
		document.getElementById('login')
	);

var Signup = React.createClass({
	render: function() {
		return(
			<a className = "btn btn-primary btn-lg" href="#">Signup</a>
			);
	}

});

	ReactDOM.render(
		<Signup/>,
		document.getElementById('signup')
	);