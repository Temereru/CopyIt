$(document).ready(function(){
	var btn = '<button class="copy">copy</button>';
	var create = function(){$('pre').append(btn);}
	setTimeout(create,500);
	$(document).on('click','.copy',function(e){
		e.preventDefault();
		var pre = $(this).parent().text();
		pre = pre.substring(0, pre.length - 5);
  	chrome.runtime.sendMessage({
    type: 'copy',
    text: pre
		});
	});
});
