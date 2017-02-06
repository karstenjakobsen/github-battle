var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program {this.props.name} !</div>
    )
  }
});

ReactDOM.render(<Hello name="Jonas 2" />, document.getElementById('app'));