'use stict';

require('./assets/scss');
// require('./assets/images') // Not Needed
// require('./assets/svgs'); // Not Needed
import library from './lib/ping.js';

/* Main entrypoint for API */

/****************************************/
/* This must stay here for HMR support! */
/****************************************/
if (module.hot) {
  if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development') {
    window.Library = library;
  }
  module.hot.accept();
}

export default library;
