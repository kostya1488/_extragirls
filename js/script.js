// ------------------------------ scroll
$(function() {
    $('a').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
        e.preventDefault();
    });
});
// ------------------------------ scroll
$('.menu_item_link').click(function(e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass('active')) {
        $this.parent().parent().find('.menu_item_link').removeClass('active');
        $this.addClass('active');
    }
});
// ------------------------------ swiper
var Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
// ------------------------------- accordion toggle
$('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);
    $this.addClass('toggle_active');

    if ($this.next().hasClass('show') && $this.hasClass('toggle_active')) {
        $this.removeClass('toggle_active');

        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('.toggle').removeClass('toggle_active');
        $this.addClass('toggle_active');


        $this.parent().parent().find('.inner').removeClass('show');
        $this.parent().parent().find('.inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

// -------------------------------------------------------------------
function ajaxFormRequest(form_id, resp_id) {
    let forma = $('#' + form_id)
    let respounse = $('#' + resp_id)

    forma.submit(function() {
        $.ajax({
            type: "POST",
            url: "php/feedback.php",
            data: $(this).serialize()
        }).done(function() {
            forma.hide();
            respounse.show();
        });
        return false;
    })
}
// -------------------------------------------------------------------

$('.social_panel').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active')
});