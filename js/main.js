$(function() {

    // scrollTop
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1800);
        return false;
    });
    

    // Collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    // /* Slider */
    // $("[data-slider]").slick({
    //     infinite: true,
    //     fade: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

});
