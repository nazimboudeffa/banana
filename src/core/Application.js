/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
*/

Banana.Application = function(config){
  this.target = config.target || document.createElement('div');
};

Banana.Application.prototype = {
  run: function(){
    var textNode = document.createTextNode("Basic Example");
		document.getElementById(this.target).appendChild(textNode);
  }
};
