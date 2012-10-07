// JavaScript Document
// Simple Gallery 1.0
// Author: Ben Ratliff

var addString = "";
var counter = 0;
var indexNum = 0;
var dragging = false; 

$("document").ready(function(){
		
	$(function() {
		$( "ul" ).sortable({
			drag: function(event, ui) {
				dragging = true;
			},
			stop: function(event, ui) { 
			
				dragging = false;
				
				resetThumbs();
				
				indexNum = 0;
				
				$(ui.item).effect("pulsate", { times:1 }, 500);
			}
			
		}).click(function(event, ui) {
			var targetSrc = $(event.target).attr("id");
			$("#sortable").fadeTo('slow',0.3);
			$("#modal div").prepend("<img src=images/" + targetSrc + ">");
			$("#modal").fadeIn(300);
		});
		
		
	});
	
	for (i=0; i < imageFilenames.length-1; i++) {
		
		var listItem = document.createElement('li');
		var numberContainer = document.createElement('div');
		var numberField = document.createElement('div');
		$(numberContainer).append(numberField);
		
		$(numberField).addClass("numberField");
		$(numberContainer).addClass("numberBox");
		
		$(numberField).fadeTo('slow',0.7);
		
		for (n=0; n < imageFilenames.length; n++) {
			var numberDiv = document.createElement('div');
			$(numberDiv).html(n+1);
			$(numberField).append(numberDiv);
		}
	
		
		$(listItem).append(numberContainer);
		
		var bgImage = "url(images/" + imageFilenames[i] + ")";
		$(listItem).css({"background":bgImage, 'background-size' : '150px 100px'});
		$(listItem).attr('id',imageFilenames[i]);
		
		$("#sortable").append(listItem);
		
	}
	
	resetThumbs();
		
	$("#modal").click(function() {
		$("#modal div").empty();
    	$("#modal").fadeOut(300, function(){
			$("#sortable").fadeTo('slow',1);
			});
	});

function resetThumbs() {
	    $('.numberField').each(function(index) {
		   var nextDiv = $('.numberField div').get(index);
		   var posTop = (-$(nextDiv).position().top);
		   $(this).animate({"top":posTop}, 700);	
		});
			
};


	
});