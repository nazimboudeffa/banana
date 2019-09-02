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
