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
