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
  parseConfig: function (config)
  {
    this.config = config;
    if (config.target != null){
      this.target = config.target;
    } else {
      this.target = 'target';
    }
    if (config.page) {
      this.page = new Banana.PageManager(this, config.page);
    }
  },

  run: function(){
    this.showDebugHeader();

    this.add = new Banana.BananaControlFactory(this);
    
    this.page.boot();
  },

  showDebugHeader: function (){
    console.log('Banana v1.0.0')
  }
};

Banana.Application.prototype.constructor = Banana.Application;
