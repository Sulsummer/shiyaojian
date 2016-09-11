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
                    $('.i-music > a > img').attr('src', 'src/off.png')
                        .removeClass('jump');
                }
                else if($switch.hasClass('pause')){
                    $('#musicfx').get(0).play();
                    $switch.removeClass('pause').addClass('on');
                    $('.i-music > a > img').attr('src', 'src/on.png')
                        .addClass('jump');
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
                },
                onSlideNextEnd: function(swiper){
                    if(swiper.activeIndex+1 === 6){
                        $('#blackboard').removeClass('boardps');
                    }

                },
                onSlidePrevStart: function(swiper){
                    if(swiper.activeIndex+1 === 4){
                        $('#blackboard').removeClass('boardps');
                    }

                }
            });
        },
        $$page1: function(flag){
            if($('#down')){
                $('#down').removeClass('animated fadeIn');
            }
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
                setTimeout(function(){
                    $('#down').addClass('animated fadeIn');
                }, 3000);
                
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
                }, 200);
                

                setTimeout(function(){
                    var count = 0, $ulChildren = $ul.children();
                    var interval = setInterval(function(){
                        $($ulChildren[count]).height($($ulChildren[count]).width());
                        $($ulChildren[count]).addClass('animated bounceInDown');
                        count ++;
                        if(count >= 5){
                            clearInterval(interval);
                        }
                    }, 500);
                }, 500);
                

            }, 800);
        },
        $$page3: function(){
            var r = window.innerHeight/window.innerWidth;
            
            var $bubbleDiv = $('#bubbleDiv');
            $bubbleDiv.empty();
            if( $('#seal')){
                 $('#seal').remove();
            }
            clearInterval(window.interval0);
            var marginTop = $bubbleDiv.height()/10;
            var count = 0;
            window.interval0 = setInterval(function(){
                $bubbleDiv.append('<div class="d d'+count+'"></div>');
                if(count === 0){
                    $bubbleDiv.append('<div class="text text'+count+'">研制</div>');
                }
                if(count === 1){
                    $bubbleDiv.append('<div class="text text'+count+'">生产</div>');
                }
                if(count === 2){
                    $bubbleDiv.append('<div class="text text'+count+'">经营</div>');
                }
                if(count === 3){
                    $bubbleDiv.append('<div class="text text'+count+'">使用</div>');
                }
                
                $('.d'+count).css('height', $('.d'+count).width()/r);
                new ProgressBar.Circle('#bubbleDiv', {
                    color: '#ecf0f1',
                    strokeWidth: 5,
                    duration: 500,
                    easing: 'easeInOut',
                    svgStyle: {
                        display: 'block',
                        width: '15%',
                        marginLeft: '15%',
                        marginTop: (function(){
                            return count === 0 ? '5%' : 0;
                        })()
                    }
                }).animate(1);
                if(count < 3){
                    setTimeout(function(){
                        new ProgressBar.Line('#bubbleDiv', {
                            color: '#ecf0f1',
                            strokeWidth: 1,
                            duration: 5000,
                            easing: 'easeInOut',
                            svgStyle: {
                                display: 'block',
                                width: '100%',
                                height:'10%',
                                marginLeft: '22.2%',
                                marginTop:0
                            },
                            step: function(state, line, attachment) {
                                line.path.setAttribute('d', 'M 0,0 L0,'+marginTop);
                            }
                        }).animate(1);
                    }, 150); 
                }
                count ++;
                if(count >= 4){
                    clearInterval(window.interval0);
                    $('#page3').append('<div id="seal"></div>');
                }
            }, 800);
        },
        $$page4: function(){
            var $page4 = $('#page4');

            var $loudspeaker = $('#loudspeaker'),
                $p = $('#board>p');
            $loudspeaker.height($loudspeaker.width()*0.8);
            var count = 0;
            var interval = setInterval(function(){
                    $($p[count]).addClass('animated fadeInUp');
                    count ++;
                    if(count >= 4){
                        clearInterval(interval);
                    }
                }, 200);
        },
        $$page5: function(){
            var $blackboard = $('#blackboard');
            $blackboard.addClass('boardps');
        },
        $$page6: function(){
            clearInterval(window.interval1);
            var $is = $('#flag>p>i'),
                count = 0;
            $is.each(function(){
                $(this).removeClass('animated fadeInUp');
            })
            window.interval1 = setInterval(function(){
                $($is[count]).addClass('animated fadeInUp');
                count ++;
                if(count >= 12){
                    clearInterval(window.interval1);
                }
            }, 150);
        }

    }

    app.init();
});