import React, { Component } from 'react';
import { Background } from './App_style';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import ReallySmoothSroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';
import Particles from 'react-particles-js';

hashHistory.listen(() => {
	window.scrollTo(0, 0);
});
ReallySmoothSroll.shim();

class App extends Component {
  render() {
    return (

      <div>
       <Particles 
              params={{
                particles: {
                  number: {
                  value: 50
                  },
                  line_linked:
                   {
                    shadow: {
                      enable: true,
                      color: "#13293D",
                      blur: 3
                    }
                  },
                   interactivity: {
                    detectOn: 'canvas',
                    events: {
                      onHover: {
                        enable: false,
                        mode: 'repulse',
                      },
                    }
                   },
                }
              }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
        />
        <Background/>
        <NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;