var React = require('react');

class Message extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      message: props.message
    }
  }
  fade() {
    console.log('works')
  }
  render() {
    return (
    	<div className='alert alert-successr'>
        {this.fade()}
        {this.state.message}
      </div>
    );
  }
}

module.exports = Message;