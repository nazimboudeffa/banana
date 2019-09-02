 /**
 * @author       Nazim Boudeffa <boudeffa@gmail.com>
 * @copyright    2019 Nazim Boudeffa.
 * @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
 */

 /**
 * @namespace Banana
 */
 var Banana = Banana || {

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
};

Banana.Application.prototype = {
  /**
  * Parses an Application configuration object.
  *
  * @method Banana.Application#parseConfig
  * @protected
  */
  parseConfig: function (config)
  {
    this.config = config;
    if (config.target != null){
      this.target = config.target;
    } else {
      this.target = 'target';
    }
    if (config.page) {
      this.page = new Banana.Page(this, config.page);
    }
  },
  run: function(){
    this.showDebugHeader();
    this.add = new Banana.BananaControlFactory(this);
    this.page.components.createComponents();
  },
  showDebugHeader: function (){
    console.log('Banana v1.0.0')
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

  this._pendingPage = pendingPage;
};

Banana.PageManager.prototype = {
  boot: function(){
    if (typeof this._pendingPage === 'object')
    {
      console.log("pending")
      console.log(this._pendingPage);
      newPage = this._pendingPage;
      //newPage.application = this.application;
    }
    return newPage;
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
  this.application = application;
  this.components = page;
};

Banana.Page.prototype = {
  createComponents: function(){
    this.page.createComponents();
  }
};

Banana.Page.prototype.constructor = Banana.Page;

/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
*/

Banana.BananaControlFactory = function(application){
  this.application = application;
};

Banana.BananaControlFactory.prototype = {
  text: function(text){
    if (text === 'undefined'){
      this.text = "Hello Banana"
    } else {
      this.text = text
    }
    new Banana.Text(this.application).text(this.text);
  }
};

Banana.BananaControlFactory.prototype.constructor = Banana.BananaControlFactory;

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
