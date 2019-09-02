/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
*/

Banana.Control = function(app){
  this.app = app;
};

Banana.Control.prototype = {
  text: function(text){
    var textNode = document.createTextNode(text);
    document.getElementById(this.app.target).appendChild(textNode);
  }
};
