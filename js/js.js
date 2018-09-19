//Timer    

$(function () {
        // countdownStart
        var storageCountdownReset = "countdownResetGoldenLift",
            storageCountdownTime = "countdownTimeGoldenLift",
            countdownResetTimeVal = 41,
            nowDateTime = new Date().getTime(),
            countdownReset = localStorage.getItem(storageCountdownReset);
        if (countdownReset == null) {
            localStorage.setItem(storageCountdownReset, nowDateTime)
        } else {
            if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
                var countdownTime = (new Date).getTime() + 24e5;
                localStorage.setItem(storageCountdownTime, countdownTime);
                localStorage.setItem(storageCountdownReset, nowDateTime);
            }
        }

        if (localStorage.getItem(storageCountdownTime)) {
            var countdownTime = localStorage.getItem(storageCountdownTime);
        } else {
            countdownTime = (new Date).getTime() + 24e5;
        }

        $(".countdown").countdown(countdownTime, function (s) {
            $(this).html(s.strftime('' +
                '<div class="countdown__item hour">%H</div>' +
                '<div class="countdown__item minute">%M</div>' +
                '<div class="countdown__item second">%S</div>'
            ));
        }).on('update.countdown', function (e) {
            countdownTime = e.finalDate.getTime();
            localStorage.setItem(storageCountdownTime, countdownTime);
        }).on('finish.countdown', function (e) {
            $('.countdown').countdown('stop');
        });
        // countdownEnd
    })







// плавная перемотка 

$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

// Загрузка gif 

$( document ).ready(function() {
        $('[data-src]').each(changeDataSrcToSrc);
});

function changeDataSrcToSrc(i, e) {
    e.src = $(e).data('src');
}

// Popup

        $(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e) {
        var targeted_popup = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e) {
        var targeted_popup = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup + '"]').fadeOut(350);

        e.preventDefault();
    });

    $(function($){
    $(document).mouseup(function (e){
        var popup = $(".popup");
        if (popup.is(e.target) 
            && popup.has(e.target).length === 0) { 
            popup.hide(); // скрываем его
        }
    });
});
});
