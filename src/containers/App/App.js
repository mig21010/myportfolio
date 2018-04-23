import React, { Component } from 'react';
import { Background } from './App_style';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import ReallySmoothSroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router'; 

hashHistory.listen(() => {
	window.scrollTo(0, 0);
});
ReallySmoothSroll.shim();

class App extends Component {
  render() {
    return (
      <div>
      	<Background/>
      	<NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;