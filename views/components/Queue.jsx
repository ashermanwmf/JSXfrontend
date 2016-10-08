var React = require('react');

class Queue extends React.Component {
  constructor(props) {
  	super(props);
    console.log(props.func, 'func on queue')
    this.state = {
      people: props.people,
      func: props.func
    }
  }
  render() {
    return (
    	<div className='z-depth-3 queue' onClick={this.func}>
        <p>Users in a queue</p>
      </div>
    );
  }
}

module.exports = Queue;