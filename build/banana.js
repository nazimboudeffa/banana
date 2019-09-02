 /**
 * @author       Nazim Boudeffa <boudeffa@gmail.com>
 * @copyright    2019 Nazim Boudeffa.
 * @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
 */

 /**
 * @namespace Banana
 */
 var Banana = Banana || {
   VERSION: '1.0.0',
 };

/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
*/

Banana.Application = function(config){
  /**
  * @property {string|HTMLElement} target - The Application's DOM parent.
  * @readonly
  * @default
  */
  this.target = null;

  this.page = null;

  this.parseConfig(config);

  return this;
};

Banana.Application.prototype = {
  /**
  * Parses an Application configuration object.
  *
  * @method Banana.Application#parseConfig
  * @protected
  */
  parseConfig: function(config){

    this.config = config;
    if (config.target != null){
      this.target = config.target;
    } else {
      this.target = 'target';
    }
    if (config.page != null) {
      this.page = new Banana.PageManager(this, config.page);
    } else {
      console.error("You have to code a banana page");
    }

  },

  run: function(){

    this.showDebugHeader();

    this.add = new Banana.ApplicationControlFactory(this);

    this.page.boot();

  },

  showDebugHeader: function (){

    var v = Banana.VERSION;
    console.log('Banana v' + v + ' | http://kawa-games.ovh/bananajs');

  }
};

Banana.Application.prototype.constructor = Banana.Application;

/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
*/

Banana.PageManager = function(application, pendingPage){

  /**
  * @property {Banana.Application} banana - This is a reference to the currently running Application
  */
  this.application = application;

  this.pages = [];
  
  this._pendingPage = pendingPage;

};

Banana.PageManager.prototype = {

  boot: function(){

    if (typeof this._pendingPage === 'object')
    {
      this.add('default', this._pendingPage)
    }

  },

  add: function(key, page){

    newPage = page;
    this.pages[key] = newPage;
    this.start(key);

    return newPage;

  },

  start: function (key){

    this.pages[key].createComponents.call();

  }

};

Banana.PageManager.prototype.constructor = Banana.PageManager;

/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
*/

Banana.Page = function(application, page){

  /**
  * @property {Banana.Application} banana - This is a reference to the currently running Application
  */
  this.application = null;

  this.page = null;

};

Banana.Page.prototype = {

  createComponents: function(){
    
  }

};

Banana.Page.prototype.constructor = Banana.Page;

/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
*/

Banana.ApplicationControlFactory = function(application){
  this.application = application;
};

Banana.ApplicationControlFactory.prototype = {
  text: function(text){
    if (text === 'undefined'){
      this.text = "Hello Banana"
    } else {
      this.text = text
    }
    new Banana.Text(this.application).text(this.text);
  }
};

Banana.ApplicationControlFactory.prototype.constructor = Banana.ApplicationControlFactory;

/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
*/

Banana.Text = function(application){
  this.application = application;
};

Banana.Text.prototype = {
  text: function(text){
    if (this.application.target != null){
      var textNode = document.createTextNode(text);
      document.getElementById(this.application.target).appendChild(textNode);
    } else {
      var target = document.createElement('div');
      target.setAttribute('id', 'target');
      var textNode = document.createTextNode(text);
      document.getElementById(this.application.target).appendChild(textNode);
    }
  }
};

Banana.Text.prototype.constructor = Banana.Text;
