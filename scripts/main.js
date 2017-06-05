jQuery(document).ready(function ($) {

	// counter
	$('.counter').each(function () {
		var $this = $(this),
			countTo = $this.attr('data-count');

		$({
			countNum: $this.text()
		}).animate({
				countNum: countTo
			},

			{

				duration: 8000,
				easing: 'linear',
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
					//alert('finished');
				}

			});



	});

	// end counter
	// tabs



	var contentDiv = '<div id="content"></div>';
	$(contentDiv).appendTo('dl.tabs');
	$('dl.tabs dd').hide();
	var content = $('dl.tabs dt.active').next('dd').html();
	$('#content').html(content);

	$('dl.tabs dt').on('click', function () {
		$('dl.tabs dt').removeClass('active');
		content = $(this).addClass('active').next('dd').html();
		$('#content').html(content);
	});



	// end tabs
	// accordion




	var accItem = document.getElementsByClassName('accordionItem');
	var accHD = document.getElementsByClassName('accordionItemHeading');
	for (i = 0; i < accHD.length; i++) {
		accHD[i].addEventListener('click', toggleItem, false);
	}

	function toggleItem() {
		var itemClass = this.parentNode.className;
		for (i = 0; i < accItem.length; i++) {
			accItem[i].className = 'accordionItem close';
		}
		if (itemClass == 'accordionItem close') {
			this.parentNode.className = 'accordionItem open';
		}
	}



	// end accordion





	// vertical tabs 

	$(document).on("click", ".tabsAside .menu div", function () {
		var numberIndex = $(this).index();

		if (!$(this).is("active")) {
			$(".tabsAside .menu div").removeClass("active");
			$(".tabsAside ul li").removeClass("active");

			$(this).addClass("active");
			$(".tabsAside ul").find("li:eq(" + numberIndex + ")").addClass("active");

			var listItemHeight = $(".tabsAside ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".tabsAside ul").height(listItemHeight + "px");
		}
	});


	// vertical tabs

	// forms

	function simpleSelect() {
		"use strict";
		var selectHolder,
			selectClass;
		//Setup
		$('select').each(function () {
			selectClass = $(this).attr('class');
			selectHolder = '<dl class="simpleSelect ' + selectClass + '">';
			selectHolder += '<dt>' + $('option', this).first().text() + '</dt><dd><ul>';
			$('option', this).each(function () {
				selectHolder += '<li data="' + $(this).val() + '">' + $(this).text() + '</li>';
			});
			selectHolder += '</ul></dd></dl>';
			$(this).after(selectHolder);
			$('.' + selectClass).wrapAll('<div class="selectContainer"></div>');
		});

		//Clicks
		$('.simpleSelect dd ul li').on("click", function () {
			$(this).parents().eq(3).find('select').val($(this).attr('data'));
		});

		$('.simpleSelect dt').on("click", function () {
			if ($(this).next('dd').hasClass("open")) {
				$(this).removeClass("open").next('dd').removeClass("open");
			} else {
				$(this).addClass("open").next('dd').addClass("open");
			}
		});

		$('.simpleSelect dd ul li').on("click", function () {
			$(this).parents().eq(1).removeClass("open");
			$(this).parents().eq(2).find('dt').removeClass("open");
			$(this).parents().eq(4).find('dt').text($(this).text());
		});
	}

});