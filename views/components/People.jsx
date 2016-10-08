var React = require('react');
var Options = require('./Options');

class People extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		people: props.peopleArr  	
    }
  }
  render() {
    return (
    	<form method='POST' action='/addToQueue'>
        <label className='formLabel'>Choose your name and the number of bagel halfs you want</label><br />
        <div class="input-field col s12">
          <select name='user'>
            <option value="" disabled selected>Choose your option</option>
            {this.state.people.map(person =>
              <Options person={person} />
            )}
          </select>
        </div>
        <input type='text' name='bagleHalfs' />
        <input type='submit' name='Submit' />
      </form>
    );
  }
}

module.exports = People;