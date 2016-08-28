$(document).ready(function(){
    'use strict';
    
    var app = {
        init: function(){
            this.$$initSpinner();
            
            this.$$initSwiper();  
            
            this.$$initMusic();
        },
        $$initMusic: function(){
            $('.i-music > a').on('click', function(){
                var $switch = $('.i-music');
                if($switch.hasClass('on')){
                    $('#musicfx').get(0).pause();
                    $switch.removeClass('on').addClass('pause');
                    $('.i-music > a > img').attr('src', 'src/close.png');
                }
                else if($switch.hasClass('pause')){
                    $('#musicfx').get(0).play();
                    $switch.removeClass('pause').addClass('on');
                    $('.i-music > a > img').attr('src', 'src/indicate.png');
                } 
                else return false;
                event.stopPropagation();
            });
        },
        $$initSpinner: function(){
            var opts = {
                lines:17,
                length:0,
                width:5,
                radius:26,
                corners:1.0,
                rotate:0,
                trail:19,
                speed:0.8,
                color: 'white',
                shadow:'on'
            };
            var iProgress = document.getElementById('i-progress');
            var spinner = new Spinner(opts).spin(iProgress);

            setTimeout(function(){
                var interval = setInterval(function(){
                    var opacity = $(iProgress).css('opacity')-0.05;
                    $(iProgress).css('opacity',opacity);
                    if(opacity <= 0){
                        spinner.stop();
                        clearInterval(interval);
                        $(iProgress).css('display', 'none');
                    }
                }, 10);

            }, 1500);
        },
        $$initSwiper: function(){
            var that = this;
            return new Swiper('#i-container', {
                direction: 'vertical',
                effect : 'fade',
                fade: {
                  crossFade: true,
                },
                onInit: function(swiper){
                    setTimeout(function(){
                        that.$$page1(true);
                    }, 1300);
                },
                onTouchMove: function(swiper, event){
                    
                },
                onTransitionStart: function(swiper){
                    eval('that.$$page'+(swiper.activeIndex+1)+'()');
                }
            });
        },
        $$page1: function(flag){
            if(flag){
                $('#female').addClass('animated bounceInLeft');
                
                var psIn$p1 = $('#p1').addClass('animated bounceInLeft').children();

                var count = 0;
                var interval = setInterval(function(){
                    $(psIn$p1[count]).css('display', 'block').addClass('animated fadeInUp');
                    count ++;
                    if(count >= 3){
                        clearInterval(interval);
                        setTimeout(function(){

                            $('#p2').css('display', 'block').addClass('animated fadeInUp');

                            $('#p2>p').css('display', 'block').addClass('animated fadeInUp');
                            
                            
                                setTimeout(function(){
                                    $('#p2>p').removeClass('fadeInUp').addClass('pulse');
                                }, 1000);
                        }, 800);
                    }
                }, 1000);
                
            }
        },
        $$page2: function(){
            var $page2 = $('#page2');

            $page2.empty();

            var $female = $('<div id="female2"></div>'),
                $ul = $('<ul></ul>');

            
                
            $page2.append($female).append($ul);
            $female.width($female.height()*9/16);

            setTimeout(function(){

                var $ulItem1 = $('<li class="item item1"></li>'),
                    $ulItem2 = $('<li class="item item2"></li>'),
                    $ulItem3 = $('<li class="item item3"></li>'),
                    $ulItem4 = $('<li class="item item4"></li>'),
                    $ulItem5 = $('<li class="item item5"></li>');

                var $cloud = $('<div id="cloud"></div>'),
                    $birds = $('<div id="birds"></div>');
                
                
                $ul.append($ulItem1).append($ulItem2)
                .append($ulItem3).append($ulItem4)
                .append($ulItem5);

                $page2.append($cloud).append($birds);

                $birds.css({
                    'animation': 'birds 7s linear infinite',
                    '-webkit-animation': 'birds 7s linear infinite'
                });

                $cloud.addClass('animated bounceInDown');

                var $dialogBlank = $('<div id="dialog-blank"></div>'),
                    $p = $('<p></p>');
                $p.html('我们负责监管</br><strong>食品、药品、化妆品、保健品、医疗器械</strong>');
                $dialogBlank.append($p);
                setTimeout(function(){
                    $page2.append($dialogBlank);
                    $dialogBlank.addClass('animated fadeInUp');
                    $p.addClass('animated pulse');
                }, 300);
                

                setTimeout(function(){
                    var count = 0, $ulChildren = $ul.children();
                    var interval = setInterval(function(){
                        $($ulChildren[count]).height($($ulChildren[count]).width());
                        $($ulChildren[count]).addClass('animated bounceInDown');
                        count ++;
                        if(count >= 5){
                            clearInterval(interval);
                        }
                    }, 1000);
                }, 500);
                

            }, 800);
        },
        $$page3: function(){
            var $page3 = $('#page3');
            $page3.empty();

            var $lightLarge1 = $('<div class="i-light i-large-light-1"><div></div><span></span></div>'),
                $lightLarge2 = $('<div class="i-light i-large-light-2"><div></div><span></span></div>'),
                $lightLarge3 = $('<div class="i-light i-large-light-3"><div></div><span></span></div>'),
                $lightLarge4 = $('<div class="i-light i-large-light-4"><div></div></div>');

            var count = 0, $lights = [$lightLarge1, $lightLarge2, $lightLarge3, $lightLarge4];
            var interval = setInterval(function(){
                $page3.append($lights[count]);
                $lights[count].height($lights[count].width());
                $($lights[count].children()[0]).width($lights[count].width());
                $($lights[count].children()[0]).height($lights[count].width());
                $($lights[count].children()[1]).css('top', $lights[count].height());
                
                $lights[count].animate({
                    opacity: 1
                }, 300);

                count ++;
                if(count >= 4){
                    clearInterval(interval);
                }
            }, 700);
        },
        $$page4: function(){
            
        },
        $$page5: function(){
            
        }

    }

    app.init();
});