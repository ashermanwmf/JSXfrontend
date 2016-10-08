var React = require('react');

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			person: props.person,
      selectedFunc: props.selected
		};
	}
  render() {
    return (
    	<option value={this.state.person.name}>
        {this.state.person.name}
      </option>
    );
  }
}

module.exports = Options;