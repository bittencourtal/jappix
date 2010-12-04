/*

Jappix - An open social platform
These are the bubble JS scripts for Jappix

-------------------------------------------------

License: AGPL
Author: Valérian Saliou
Contact: http://project.jappix.com/contact
Last revision: 04/12/10

*/

// Closes all the opened bubbles
function closeBubbles() {
	// Destroy all the elements
	$('.bubble.hidable:visible').hide();
	$('.bubble.removable:visible').remove();
	$('body').die('click');
	
	return false;
}

// Click function when a bubble is opened
function showBubble(selector) {
	// Hidable bubbles special things
	if($(selector).is('.hidable')) {
		// This bubble is yet displayed? So abort!
		if($(selector).is(':visible'))
			return closeBubbles();
		
		// Close all the bubbles
		closeBubbles();
		
		// Show the requested bubble
		$(selector).show();
	}
	
	// Removable bubbles special things
	if($(selector).is('.removable')) {
		// This bubble yet exists? So abort!
		if(exists(selector))
			return closeBubbles();
		
		// Close all the bubbles
		closeBubbles();
	}
	
	// Creates a new click event to close the bubble
	$('body').live('click', function(evt) {
		var target = evt.target;
		
		// If this is a click away from a bubble
		if(!$(target).parents('.ibubble').size())
			closeBubbles();
	});
	
	return false;
}
