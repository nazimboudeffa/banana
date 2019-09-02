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

Banana.Control = function(app){
  this.app = app;
};

Banana.Control.prototype = {
  text: function(text){
    var textNode = document.createTextNode(text);
    document.getElementById(this.app.target).appendChild(textNode);
  }
};

/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
*/

Banana.Page = function(app){
  this.app = app;
};

Banana.Page.prototype = {
  createComponents: function(){
  }
};

/**
* @author       Nazim Boudeffa <boudeffa@gmail.com>
* @copyright    2019 Nazim Boudeffa.
* @license      {@link https://github.com/nazimboudeffa/banana/blob/master/license.txt|MIT License}
*/

Banana.Application = function(config){
  console.log(config)
  if (config != null){
    this.target = config.target;
  } else {
    var target = document.createElement('div');
    target.setAttribute('id', 'target');
    var textNode = document.createTextNode("Hello Banana");
    document.getElementById('target').appendChild(textNode);
  }
};

Banana.Application.prototype = {
  run: function(){
    this.page = new Banana.Page(this);
    this.add = new Banana.Control(this);
  }
};
