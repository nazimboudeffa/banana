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
