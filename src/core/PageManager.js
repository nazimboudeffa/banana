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
