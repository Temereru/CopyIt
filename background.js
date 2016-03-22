$(document).ready(function(){
	console.log('start')
	console.log($('pre'))
	var btn = '<button class="copy">copy</button>';
	$('pre').append(btn);
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
