import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { AppContainer } from 'react-hot-loader'
import './theme/globalStyles';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<AppContainer>
    	{routes}
    </AppContainer>,
	document.getElementById('root')
	);
 registerServiceWorker();

 // Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    // if you are using harmony modules ({modules:false})
    const routes = require ('./routes').default;
    ReactDOM.render(
    	<AppContainer>
    	{routes}
    	</AppContainer>,
	document.getElementById('root')
	);
  });
}
