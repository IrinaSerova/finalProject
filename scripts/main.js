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
});