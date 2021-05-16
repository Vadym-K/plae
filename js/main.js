$(function(){
	$(".item_decor:first-child").on('click', function(){
		var $this = $(this).parents(".why_plae");

		if($this.hasClass("open_circle")){
			$this.removeClass("open_circle");
		} else {
			$this.addClass('open_circle');
		}
	});
	$("#wrapper").on('click', function(event) {
		if(!$(event.target).closest('.item_decor:first-child').length) {
			if($(".why_plae").hasClass('open_circle')) {
				$(".why_plae").removeClass('open_circle');
			}
		}
	});
	$(".item_decor:nth-child(2)").on('click', function(){
		var $this = $(this).parents(".why_plae");

		if($this.hasClass("open_circle2")){
			$this.removeClass("open_circle2");
		} else {
			$this.addClass('open_circle2');
		}
	});
	$("#wrapper").on('click', function(event) {
		if(!$(event.target).closest('.item_decor:nth-child(2)').length) {
			if($(".why_plae").hasClass('open_circle2')) {
				$(".why_plae").removeClass('open_circle2');
			}
		}
	});
		$(".item_decor:nth-child(3)").on('click', function(){
		var $this = $(this).parents(".why_plae");

		if($this.hasClass("open_circle3")){
			$this.removeClass("open_circle3");
		} else {
			$this.addClass('open_circle3');
		}
	});
	$("#wrapper").on('click', function(event) {
		if(!$(event.target).closest('.item_decor:nth-child(3)').length) {
			if($(".why_plae").hasClass('open_circle3')) {
				$(".why_plae").removeClass('open_circle3');
			}
		}
	});
		$(".item_decor:nth-child(4)").on('click', function(){
		var $this = $(this).parents(".why_plae");

		if($this.hasClass("open_circle4")){
			$this.removeClass("open_circle4");
		} else {
			$this.addClass('open_circle4');
		}
	});
	$("#wrapper").on('click', function(event) {
		if(!$(event.target).closest('.item_decor:nth-child(4)').length) {
			if($(".why_plae").hasClass('open_circle4')) {
				$(".why_plae").removeClass('open_circle4');
			}
		}
	});
		$(".item_decor:nth-child(5)").on('click', function(){
		var $this = $(this).parents(".why_plae");

		if($this.hasClass("open_circle5")){
			$this.removeClass("open_circle5");
		} else {
			$this.addClass('open_circle5');
		}
	});
	$("#wrapper").on('click', function(event) {
		if(!$(event.target).closest('.item_decor:nth-child(5)').length) {
			if($(".why_plae").hasClass('open_circle5')) {
				$(".why_plae").removeClass('open_circle5');
			}
		}
	});
		$(".item_decor:nth-child(6)").on('click', function(){
		var $this = $(this).parents(".why_plae");

		if($this.hasClass("open_circle6")){
			$this.removeClass("open_circle6");
		} else {
			$this.addClass('open_circle6');
		}
	});
	$("#wrapper").on('click', function(event) {
		if(!$(event.target).closest('.item_decor:nth-child(6)').length) {
			if($(".why_plae").hasClass('open_circle6')) {
				$(".why_plae").removeClass('open_circle6');
			}
		}
	});
		$(".item_decor:nth-child(7)").on('click', function(){
		var $this = $(this).parents(".why_plae");

		if($this.hasClass("open_circle7")){
			$this.removeClass("open_circle7");
		} else {
			$this.addClass('open_circle7');
		}
	});
	$("#wrapper").on('click', function(event) {
		if(!$(event.target).closest('.item_decor:nth-child(7)').length) {
			if($(".why_plae").hasClass('open_circle7')) {
				$(".why_plae").removeClass('open_circle7');
			}
		}
	});
		$(".item_decor:nth-child(8)").on('click', function(){
		var $this = $(this).parents(".why_plae");

		if($this.hasClass("open_circle8")){
			$this.removeClass("open_circle8");
		} else {
			$this.addClass('open_circle8');
		}
	});
	$("#wrapper").on('click', function(event) {
		if(!$(event.target).closest('.item_decor:nth-child(8)').length) {
			if($(".why_plae").hasClass('open_circle8')) {
				$(".why_plae").removeClass('open_circle8');
			}
		}
	});
		$(".item_decor:last-child").on('click', function(){
		var $this = $(this).parents(".why_plae");

		if($this.hasClass("open_circle9")){
			$this.removeClass("open_circle9");
		} else {
			$this.addClass('open_circle9');
		}
	});
	$("#wrapper").on('click', function(event) {
		if(!$(event.target).closest('.item_decor:last-child').length) {
			if($(".why_plae").hasClass('open_circle9')) {
				$(".why_plae").removeClass('open_circle9');
			}
		}
	});
	$(".carousel_slick").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		initialSlide: 1
	});
});