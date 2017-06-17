var React = require('react')
var ReactDOM = require('react-dom')

var MyComponentClass = React.createClass({
	render: function() {
		return <h1>Hello</h1>;
		}
});

ReactDOM.render(<MyComponentClass />, document.getElementById('app'));
