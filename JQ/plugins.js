/*global $ window document*/
$(function(){
    
    //calculate body height depend on navebar height 
    $('body').css('paddingTop',$('.navbar').innerHeight())
    
    
//smoothly scroll to elelment
    $('.navbar li a').click(function(e){
        e.preventDefault()
        $(' body, html').animate({
            scrollTop: $("#"+ $(this).data('scroll')).offset().top +1
        })
        })
    
    
//change color on selctor element and remove class from other siblings. 

$('.navbar li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
})

    /**Window Events**/
    
    $(window).scroll(function(){
        
            // select element when scroll to element and remove class from other siblings. 

        $('.block').each(function(){
            
            
            if($(window).scrollTop() > $(this).offset().top){
                
                var abc = $(this).attr('id');
                $('.navbar li a').removeClass()
                $('.navbar li a[data-scroll="'+ abc +'"]').addClass('active');
             
            }
       
        });
        //scrollUp Button

        var scrollToTop= $('.scroll-to-top')
    if($(window).scrollTop()>= 1000){
        if(scrollToTop.is(":hidden")){  //check if the button are hidden or not
        
        scrollToTop.fadeIn(3000)}
    }else{
        scrollToTop.fadeOut()
  
        }

   
    });
            //Function Move Up by hitting button 

    $('.scroll-to-top').click(function(k){
            
            k.preventDefault()
        $(' body, html').animate({
            scrollTop:0
        }, 2000);

    });
    
    
    
    
/*Start Gallery*/
    var numbthumbnails = $('.thumbnails').children().length,
        marginforeach= '.5',
        totalmargine= (numbthumbnails -1)*marginforeach,
        thumbnailswidth= (100-totalmargine)/numbthumbnails;
    
     $('.thumbnails img').css({
         
         "width":thumbnailswidth +'%',
         
         'margin-right': marginforeach + '%'
     })
    
 
    
    $('.thumbnails img').on('click', function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.selector img').hide().attr('src',$(this).attr('src')).fadeIn(500)
        
    })
    

    
    
    $(".selector .fa-chevron-left").on('click', function(){
        
if($('.selected').is(":first-child")){
        $('.thumbnails img:last').click();
    }else{
                $(".thumbnails .selected").prev().click();
  }
    })   
    
     $(".selector .fa-chevron-right").on('click', function(){
           
    if($(' .selected').is(":last-child")){
        $('.thumbnails img').eq(0).click();
    }else{
                $(".thumbnails .selected").next().click();
  }
    })
/*start type machine*/
   var theText = $('.typer').data('text'),
       textLength = theText.length,
       n =0,
 
 machine = setInterval(function(){
     $('.typer').each(function(){
      $(this).html($(this).html()+theText[n])   
     n= n+1;
     })
    
     if(n>= textLength){
         clearInterval(machine)
     }
 },100)
/*end type machine*/
/*End Gallery*/
    
    
    
/*Start about me */
    
    
// start PopUp
        $('.run-popup').click(function(){
            $($(this).data('popup')).fadeIn()
        })
        $('.popup').click(function(){
            $(this).fadeOut()
        })

         $('.popup .inner').click(function(e){
            e.stopPropagation()
        })
        $('.inner .close').click(function(e){ //only close parent
            e.preventDefault()                //secure for sql and some forums codes 
            $(this).parentsUntil('.popup').parent().fadeOut()
        })

        $(document).keydown(function(s){              //cancel popup using (ESC button)    
            if(s.keyCode === 27){
                $('.popup').fadeOut();
            }
        })
    
//End PopUp

    //Start shuffling cards 
    var zindexvar = 0;
    $('.cards .card').on('click', function repeat(){
        $(this).animate({
            left: '50%',
            marginTop: 150
        },700, function(){
            zindexvar--;
            $(this).css('z-index',zindexvar)
        }).animate({
            
            left: "-26%",                    //left: $(this).css('left'),
          marginTop: 70
        })
    }); 

/*Start TASKS*/
    var newTask = $('.tasks-input');
    $('.add-task').on('submit', function(e){
        e.preventDefault()
        if(newTask.val() !=""){
            $('<li>'+ newTask.val()+'</li>').appendTo('.tasks')
        }
        newTask.val('')
    })
    $('.tasks').on('click','li',function(){
        $(this).css('text-decoration', 'line-through').fadeOut(2000, function(){
            $(this).remove()
        })
    })
    
/*End TASKS*/
    
/*Start Dynamic-List*/
  $('.tabs-list li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active')
      $('.content-list > div').hide()
      $($(this).data('content')).fadeIn()
  })  
    
    
    $('.switch-tabs').on('click', function(){
        $('.dynamic-tabs').toggleClass("left-tabs")
    })
/*End Dynamic-List*/    
/*End about me */    

    
    
//Start Error MSG
    
    $('.error-msg').each(function(){
        $(this).slideDown(2000)                 /*temporary turned off*/
    })
    $('i, html').on('click',function(){
        $('.error-msg').fadeOut(200)    
    })
//End Error MSG
    
    
    
    
    
    
//Start effect hover on button using Jquery with function lag
    
    $('.from-left').hover(function(){
        $(this).find('span').eq(0).animate({
width:"100%"
        },200)
        
    }, function(){
        
          $(this).find('span').eq(0).animate({
width:"0%"
        },200)
        
        
    })

    
        
    $('.from-top').hover(function(){
        $(this).find('span').eq(0).animate({
height:"100%"
        },200)
        
    }, function(){
        
          $(this).find('span').eq(0).animate({
height:"0%"
        },200)      
    })
    
    
    
        $('.slid-left').hover(function(){
        $(this).find('span').eq(0).animate({
width:"100%"
        },200)
        
    }, function(){
        
          $(this).find('span').eq(0).animate({
width:"0%"
        },200)
   })

    /*bounce function.. add animate to elelment*/ 
    

    //Dynamic Method:   function(selector, times, distance, speed){}
    
    function bouncefunc(selector, times, distance, speed){
       for(var i = 0; i<times; i=i+1) {
             $(selector).animate({
            top:"+="+distance
        },speed).animate({
           top:"-="+distance
  
        },speed)
       
       }
    }
    
    
     $(' .slid-left').on('click', function(){
      bouncefunc($(this),10,700,550)
    })
    
    
    
    
    
    
/*Start progress*/
      $('.animated-progress span').each(function(){
        $(this).animate({
            width:$(this).attr('data-progress')
        },5000, function(){
            $(this).text($(this).attr('data-progress'))
        })
    })
            

/*end progress*/
    
/*Start Notes Function*/
    
$(function neoAuto(){
       $(".ticker-list .active").each(function(){
            if(!$(this).is(":last-child")){
                $(this).delay(1000).fadeOut(1000, function(){
                    $(this).removeClass('active').next('li').addClass('active').fadeIn()
                neoAuto()
                })
            }else{
                $(this).delay(1000).fadeOut(1000, function(){
                    $(this).removeClass('active')
                    $('.ticker-list li').eq(0).addClass('active').fadeIn()
                 neoAuto()
                })
            }
          })
}());
/*End Notes Function*/    
    
    
    
    
/*Start Side bar*/
    $('.fixed-menu .fa-gear').on('click', function(){
        $(this).parent('.fixed-menu').toggleClass('is-visible');
        
        if($(this).parent('.fixed-menu').hasClass('is-visible')){
            $(this).parent('.fixed-menu').animate({
                left: 0
            },500)
            $('body').animate({                         //you can delete that code to make slideBar cover 240px from body
                paddingLeft: '220px'
            })
        }else{
            $(this).parent('.fixed-menu').animate({
                left: '-220px'
            },500)
        
         $('body').animate({
                paddingLeft: '0'
            })
        }
        
        
    })
    
/*End Side bar*/
    

/*Start Product*/

    $('.products .product i, .items .item i').on('click',function(){
        $(this).toggleClass('fa-minus fa-plus') //nice idea for toggle class save much codes
        $(this).next('p').slideToggle()
    })
/*End product*/
    
    
/*Start form*/
    /*
    ** Hide placeholder when Focus & blur 
    */
var Storage = '';                                //* step to store placeholder for blur
    $('[placeholder]').focus(function(){
        Storage = $(this).attr('placeholder')  //* step to store placeholder for blur
        $(this).attr('placeholder','')
    }).blur(function(){
        $(this).attr('placeholder', Storage)
        
    })
    
    $('[required]').blur(function(){
    
        if($(this).val()==''){

    $(this).next('span').fadeIn().delay(2000).fadeOut()
        }
    })
    
    //Add Asterisk 
    $('<span class="asterisk"> * </span>').insertBefore(':input[required]');
    
    $('.asterisk').parent('div').css('position','relative');
    
    $('.asterisk').each(function(){
        $(this).css({
            'position':'absolute',
            'top':13,
            'left':$(this).parent('div').find(':input').innerWidth()-20,
            "color":"#F00",
            "font-weight":'bold'
        })
    })
    
    // customize upload Fill.
    
    $('.o-form input[type="file"]').wrap("<div class='custom-upload'></div>")
    $('.custom-upload').prepend('<span>Upload required files</span>')
     $('.custom-upload').append('<i class="fa fa-upload fa-larg"></i>')
    
     $('.o-form input[type="file"]').change(function(){
         $(this).prev('span').text($(this).val())
     })
    
    //Detect the Keyboard .. Key Unicode
    $('.detect-unicode').on('keyup',function(event){

    var key = event.which || event.keyCode;
    $('.unicode').html(key)
    });
    
    //Change typing direction Automatically depend on the Language LTR RTL
    $('.auto-direction').on('keyup',function(){
        if($(this).val().charCodeAt(0)<200){
            $(this).css(
                "direction","ltr"
            )}else{
                 $(this).css(
                "direction","rtl")
            }
    })
    
    /*Tags*/
       
    //Detect the Keyboard .. Key Unicode
    $('.add-tag').on('keyup',function(event){

    var key = event.which || event.keyCode;

        if(key ===188){
            var storevalue = $(this).val().slice(0,-1);
$(".tags").append("<span class='tag-span'><i class='fa fa-times'></i>"+storevalue +"</span>")
        $(this).val("")
        }
    });
    
    //remove created Tags from List 
    
$('.tags').on('click','.tag-span i',function(){
    $(this).parent().fadeOut(200)
})
/*End form*/
    
    
    
});













