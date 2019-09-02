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
