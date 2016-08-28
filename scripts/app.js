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
            var arr = [];
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
                    var flag = false;
                    for(var i = 0; i < arr.length; i ++){
                        if(arr[i] === (swiper.activeIndex+1)){
                            flag = true;
                        }
                    }
                    if(!flag){
                        eval('that.$$page'+(swiper.activeIndex+1)+'()');
                        arr.push(swiper.activeIndex+1);
                    }
                    
                    
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
            
        },
        $$page3: function(){
            
        },
        $$page4: function(){
            
        },
        $$page5: function(){
            
        }

    }

    app.init();
});