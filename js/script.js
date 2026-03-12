document.querySelectorAll('footer h3').forEach(function (item) {
    item.addEventListener('click', function () {

        if (window.innerWidth >= 768) return;
        const content = item.nextElementSibling;

        if (content.classList.contains('open')) {
            content.style.maxHeight = null;
            content.classList.remove('open');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('open');
        }
    });
});
$(document).ready(function() {
    $('.slider').slick({
        autoplay: true,
        dots: true,          // ドットを表示
        arrows: false,         // 矢印（Prev/Next）を非表示
        infinite: true,
        speed: 500,
        slidesToShow: 1,      // 1枚ずつ表示
        variableWidth: false,
        pauseOnHover: false
    });

    // リサイズ時の処理
    $(window).on('resize', function () {
        if (window.innerWidth >= 768) {
            $('.contents').css('max-height', '').removeClass('open');
        }
    });
});

$(document).ready(function() {
    $('.option-list li').on('click', function() {
        $(this).closest('ul').find('li').removeClass('active');
        $(this).addClass('active');
    });

    $('.colors li').on('click', function() {
        if($(this).data('processing')) return;

        let nextSrc = "../img/0302.png";
        if ($(this).hasClass('color-gunmetal')) nextSrc = "../img/0202.png";
        if ($(this).hasClass('color-chrome'))   nextSrc = "../img/0102.png";
        if ($(this).hasClass('color-green'))    nextSrc = "../img/0402.png";

        const $gallery = $('.product-gallery');
        const $currentImg = $gallery.find('img').last();

        const $nextImg = $('<img src="' + nextSrc + '">').css('opacity', 0);
        $gallery.append($nextImg);

        $(this).data('processing', true);

        setTimeout(function() {
            $nextImg.css('opacity', 1);
            $currentImg.addClass('is-old'); 
            
            setTimeout(function() {
                $currentImg.remove();
                $('.colors li').data('processing', false);
            }, 1000);
        }, 50);
    });
});