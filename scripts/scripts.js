var selectedClass;

$(function() {
  selectedClass = "education";
		$(".fil-cat").click(function(){
  		selectedClass = $(this).attr("data-rel");
      $(".menu-item").removeClass("active");
      $(this).addClass("active");
      $("#portfolio").fadeTo(100, 0.1);
  		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
      setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('scale-anm');
        $("#portfolio").fadeTo(300, 1);
      }, 300);

	});
});
