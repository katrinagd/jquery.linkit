/*
* name:    LinkIt
* author:  Katrina Guyduy
* version: 0.1.0
* License: MIT
*/

(function($) {
   $.fn.linkIt = function(options) {
   	  // Default Settings
   	  var settings = $.extend({
        href       :null,
        text       :null,
        target     :'_self'
   	  }, options);
     // Validation
     if(settings.href == null){
            console.log('You need an href option to LinkIt to work');
            return this;
     }
     return this.each(function(){
            var object = $(this);

            if(settings.text == null){
            	settingd.text = object.text();
            }
            object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
     });
   }
}(jQuery));
	
	