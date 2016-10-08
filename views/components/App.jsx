var React = require('react');
var Head = require('./Head');
var Nav = require('./Nav');
var Counter = require('./Count');
var People = require('./People');
var Queue = require('./Queue');
var Dequeued = require('./Dequeued');
var Message = require('./Message');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: props.people,
      message: props.message
		};
	}

  enqueue() {
    console.log('enqueue');
  }

  render() {
    console.log(this.state.message, 'message')
    let message;
    if(this.state.message) {
        let message = <Message message={this.state.message}/>;
    }

    return (
    	<html>
        <Head />
      <body >
        <Nav />
        {message}
    		<People peopleArr={this.state.people}/>
        <Dequeued />
        <Queue func={this.enqueue.bind(this)}/>
        <script src="select_materialize.js"></script>
    	</body>
    	</html>
    );
  }
}

module.exports = App;