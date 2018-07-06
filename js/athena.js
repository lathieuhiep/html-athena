"use strict";

jQuery(document).ready(function () {

    /* back-top */
    jQuery('#back-top').click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        },700);
    });
    /* End back-top */

    jQuery('.mobile_menu_btn').each(function () {

        jQuery(this).click(function(e){
            jQuery(this).toggleClass('mobile_menu_btn_active');
            jQuery('.menu_toogle').slideToggle("400");
        })

    });

    /* btn mobile Start*/
    var $menu_item_has_children =   jQuery('.menu-item-has-children');

    if ( $menu_item_has_children.length ) {

        jQuery('.menu-item-has-children > a').after( "<span class='icon_menu_item_mobile'></span>" );

        var $icon_menu_item_mobile  =   jQuery('.icon_menu_item_mobile');

        $icon_menu_item_mobile.each(function () {

            jQuery(this).click(function () {
                jQuery(this).toggleClass('icon_menu_item_mobile_active', 400);
                jQuery(this).parents('.menu-item-has-children').find('.sub-menu,.dropdown-mega').slideToggle("400");
            })
        })

    }
    /* btn mobile End */

    /* Quantity  */
    var $tzquantity =   jQuery( '.tzquantity' ),
        $quantity   =   0;

    if ( $tzquantity.length ) {

        var $input_qty      =   jQuery('.input-qty'),
            $tzbutton_plus  =   jQuery('.tzbutton-plus'),
            $tzbutton_minus =   jQuery('.tzbutton-minus');

        $tzbutton_plus.click(function(){

            var $quantity = parseInt(jQuery(this).parent().find('.input-qty').val());

            jQuery(this).parent().find('.input-qty').val($quantity + 1);

        });

        $tzbutton_minus.click(function(){

            var $quantity = parseInt(jQuery(this).parent().find('.input-qty').val());

            if ( $quantity > 0 ) {
                jQuery(this).parent().find('.input-qty').val($quantity - 1);
            }

        });

    }
    /* End Quantity  */

    /* Start Counter */
    function count($this,number_speed){

        var current = parseInt($this.html(), 10);
        current = current + number_speed; /* Where 50 is increment */

        $this.html(++current);
        if(current > $this.data('count')){
            $this.html($this.data('count'));
        } else {
            setTimeout(function(){count($this,number_speed)}, 50);
        }
    }

    jQuery(".stat-count").each(function() {
        var count_stop      =   jQuery(this).attr('data-stop-count'),
            number_speed    =   parseInt( jQuery(this).attr('data-number-speed') );

        jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
        if ( count_stop == 0 ) {
            jQuery(this).html('0');
            count(jQuery(this),number_speed);
        }

    });
    /* End Counter */

    jQuery('#athena-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    jQuery('.athena-product-slide').each(function () {
        jQuery(this).owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i><span>Prev</span>', '<span>Next</span><i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1140: {
                    items: 4
                }
            }

        });
    });
    jQuery('.athena-product-slide-3-col').each(function () {
        jQuery(this).owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i><span>Prev</span>', '<span>Next</span><i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }

        });
    });
    jQuery('.athena-review').each(function () {
        jQuery(this).owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i><span>Prev</span>', '<span>Next</span><i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }

        });
    });
    jQuery('.testimonials.owl-carousel').each(function () {
        jQuery(this).owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i><span>Prev</span>', '<span>Next</span><i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }

        });
    });
    jQuery('.slide-home-7').each(function () {
        jQuery(this).owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }

        });
    });
    jQuery('.slide-home-6').each(function () {
        jQuery(this).owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i><span>Prev</span>', '<span>Next</span><i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }

        });
    });

    jQuery('#athena-logo-brands .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
    jQuery('.athena-list-blogs.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i><span>Prev</span>', '<span>Next</span><i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    jQuery('.switchToList a').on('click', function () {
        jQuery('.athena-products-list').addClass('athena-view-list');
    });
    jQuery('.switchToGrid a').on('click', function () {
        jQuery('.athena-products-list').removeClass('athena-view-list');
    });


    var $widget_filter_price = jQuery('.widget_filter_price');

    if ($widget_filter_price.length) {

        var $slider_range = jQuery("#slider-range");

        $slider_range.slider({
            range: true,
            min: 0,
            max: 900,
            values: [25, 450],
            slide: function (event, ui) {
                jQuery("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        jQuery("#amount").val("$" + $slider_range.slider("values", 0) + " - $" + $slider_range.slider("values", 1));

    }

    jQuery('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
        e.preventDefault();
        var target = jQuery(jQuery(this).attr('data-tab'));
        jQuery('.tabs-box .tab-buttons .tab-btn').removeClass('active-btn');
        jQuery(this).addClass('active-btn');
        jQuery('.tabs-box .tabs-content .tab').hide(0);
        jQuery('.tabs-box .tabs-content .tab').removeClass('active-post');
        jQuery(target).fadeIn(500);
        jQuery(target).addClass('active-post');
        var windowWidth = jQuery(window).width();
        if (windowWidth < 600) {
            jQuery('html, body').animate({
                scrollTop: jQuery('.tabs-content').offset().top
            }, 1000);
        }
    });

    /* Method for Languages */
    var $icon_flag  =   jQuery( '.icon-flag' ),
        $icon_money =   jQuery( '.icon_money' );

    if ( $icon_flag.length ) {

        $icon_flag.each(function () {

            jQuery(this).click(function(e){
                e.preventDefault();
                jQuery('#sub_flag').slideToggle("400");
            })

        })

    }

    if ( $icon_money.length ) {

        $icon_money.each(function () {

            jQuery(this).click(function(e){
                e.preventDefault();
                jQuery('#sub_money').slideToggle("400");
            })

        })

    }
    /* Method for Languages */

    /* Method for Cart Start */
    var $icon_cart  =   jQuery( '.icon-cart' );
    if ( $icon_cart.length ) {

        $icon_cart.click(function(e){
            e.preventDefault();
            jQuery('#cart-content').slideToggle("400");
        })

    }
    /* Method for Cart End */

    /* Method for account Start */
    var $icon_account  =   jQuery( '.icon-account' );
    if ( $icon_account.length ) {

        $icon_account.click(function(e){
            e.preventDefault();
            jQuery('#login_account').slideToggle("400");
        })

    }
    /* Method for account End */

    /* Method for Search */
    var $icon_search    =   jQuery( '.icon-search' );

    if ( $icon_search.length ) {

        $icon_search.click(function(e){
            e.preventDefault();
            jQuery('#form_search').slideToggle("400");
        })
    }
    /* End Method for Search */


    //if ( $icon_money.length ) {

    jQuery('.athena-btn-filter').each(function () {

        jQuery(this).click(function (e) {
            e.preventDefault();
            jQuery('.athena_sidebar ').slideToggle();
        })

    });

    //}

    /*jCarousel Plugin*/
    var $product_image_slider = jQuery('.product_image_slider');

    if ($product_image_slider.length) {

        var $lightSlider_vertical = $product_image_slider.attr('data-vertical'),
            $vertical_slider = '';

        if ($lightSlider_vertical == 1) {
            $vertical_slider = true;
        } else if ($lightSlider_vertical == 0) {
            $vertical_slider = false;
        }

        var slider = jQuery("#lightSlider").lightSlider({
            gallery: true,
            controls: false,
            item: 1,
            thumbItem: 4,
            speed: 900,
            verticalHeight: 579,
            thumbMargin: 10,
            slideMargin: 0,
            auto: false,
            loop: true,
            vertical: $vertical_slider
        });
        jQuery('#goToPrevSlide').click(function () {
            slider.goToPrevSlide();
        });
        jQuery('#goToNextSlide').click(function () {
            slider.goToNextSlide();
        });

    }
    /* Product Image Slider End */
    if (jQuery('#tzcountdonw').length) {

        jQuery('#tzcountdonw').countDown({
            targetOffset: {
                'day': 110,
                'month': 0,
                'year': 0,
                'hour': 0,
                'min': 0,
                'sec': 0
            },
            omitWeeks: true
        });
    }


    /* Start special products */
    var $special_products_item = jQuery('.special_products_item');

    if ($special_products_item.length) {

        $special_products_item.each(function () {

            jQuery(this).owlCarousel({
                loop: true,
                items: 1,
                dots: false
            });

            jQuery('.product_prev').click(function () {
                $special_products_item.trigger('prev.owl.carousel', [300]);
            });
            jQuery('.product_next').click(function () {
                $special_products_item.trigger('next.owl.carousel');
            });

        })

    }
    /* End special products */

    /* Product Day Start */
    var $product_day = jQuery('.product_day');
    if ($product_day.length) {

        $product_day.each(function () {
            jQuery(this).owlCarousel({
                loop: true,
                items: 1,
                dots: false
            });
        })

        jQuery('[data-countdown]').each(function () {
            var $this = jQuery(this), finalDate = jQuery(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                $this.html(event.strftime(
                    '<span>' + '%D' + '</span>' + ':' +
                    '<span>' + '%H' + '</span>' + ':' +
                    '<span>' + '%M' + '</span>' + ':' +
                    '<span>' + '%S' + '</span>'
                ));
            });
        });

    }
    /* Product Day End */
});

jQuery(window).scroll(function () {
    var tz_timer;
    if (tz_timer) clearTimeout(tz_timer);
    tz_timer = setTimeout(function () {

        var $scrollTop = jQuery(this).scrollTop();

        if ($scrollTop > 400) {
            jQuery('#back-top').addClass('back_top_active');
        } else {
            jQuery('#back-top').removeClass('back_top_active');
        }

    }, 100);

    var $scrollTop = jQuery(this).scrollTop(),
        $height = jQuery('#athena_header').height();

    if ($scrollTop > $height) {
        jQuery('#athena_header').addClass('athena_header_fix');
    } else {
        jQuery('#athena_header').removeClass('athena_header_fix');
    }

});