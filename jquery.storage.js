/*!
 * jQuery Storage plugin v1.0.2
 * 		v1.0.1 - Fix bug when jQuery try read value to radio or checkbox;
 *		v1.0.2 - Change for Array the return value
 *      v1.0.3 - Change the way to call the function
 * 
 * Copyright 2012, Thyago Quintas (dev@thyagoquintas.com.br)
 * https://github.com/thyagoquintas/jquery-storage/
 * 
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0 
 */

(function ($, document, undefined) {

  var methods = {
  
    init : function(content) {
	    if(content == undefined) $.error('Content is empty on jQuery.storage');
	    if(content['key'] == undefined) $.error('You need the key value');
	    
	    var contents = $.extend({
			    'location' : $.storage('support') ? 'localStorage':'cookies'
		}, content);

		if(contents['location'] == 'localStorage'){
			return localStorage[contents['key']];
	    }else if(contents['location'] == 'cookie') {
			return $.cookie(contents['key']);
	    }else {
			$.error('Location not accepted.');
	    }
    },//Close return
    
    // Remove the values in stored
    remove : function(content) {
	    if(content == undefined) $.error('Content is empty on jQuery.storage');
	    if(content['key'] == undefined) $.error('You need the key value');
		    
		var contents = $.extend({
			'location' : $.storage('support') ? 'localStorage':'cookies'
		}, content);

		if(contents['location'] == 'localStorage'){
			localStorage.removeItem(contents['key']);
	    }else if(contents['location'] == 'cookie') {
			$.removeCookie((contents['key']));
	    }else {
			$.error('Location not accepted.');
	    }
    },//Close remove
    
    // Update the values in stored
    update : function(content) {
		if(content == undefined) $.error('Content is empty on jQuery.storage');
	    if(content['key'] == undefined) $.error('You need the key value');
		
		var contents = $.extend( {
	    	'location' : $.storage('support') ? 'localStorage':'cookies'
	    }, content);
	    
	    if(contents['location'] == 'localStorage'){
		    localStorage[contents['key']] = JSON.stringify(contents['value']);
	    }else if(contents['location'] == 'cookie') {
		     $.cookie(contents['key'], JSON.stringify(contents['value']));
	    }else {
		    $.error('Location not accepted.');
	    }
    },//Close update
    
    // Verify the compatibility with localStorage
    support : function(){
	    return ('localStorage' in window) && window['localStorage'] !== null;
    }
  };

  $.storage = function(method) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.storage');
    }
  };
})(jQuery, document);