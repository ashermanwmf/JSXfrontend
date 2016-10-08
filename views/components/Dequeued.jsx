var React = require('react');

class Dequeued extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      people: props.people
    }
  }
  render() {
    return (
    	<div className='z-depth-3 dequeued'>
        <p>Users making bagels </p>
      </div>
    );
  }
}

module.exports = Dequeued;