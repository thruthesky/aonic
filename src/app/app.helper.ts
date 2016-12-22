/**
 * Helper functions for Aonic app development.
 * 
 * 
 */




/**
 * @warning This may return false if this is called before 'deviceready'event fired.
 *  so, be sure you call it after 'deviceready' event.
 */
export function isCordova () { 
  //if ( window['device'] !== void 0 && window['device'] ) return true;
  if ( !! window['cordova'] ) return true;
  if ( document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1 ) return true;
  return false;
}
