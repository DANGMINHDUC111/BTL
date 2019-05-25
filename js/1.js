   
jQuery(document).ready(function($) {
	$('.counter').counterUp({
                delay: 10,
                time: 2000,
            });

	$('.img1').hover(function() {
		$(this).css('cursor','pointer');
		$(this).hide();
		$(this).siblings('.img2').show();
		$(this).siblings('.text').css('color','white');
	}, function() {
		$(this).show();
		$(this).siblings('.img2').hide();
		$(this).siblings('.text').css('color','black');
	});
	$('.img2').hover(function() {
		$(this).css('cursor','pointer');
		$(this).show();
		$(this).siblings('.img1').hide();
		$(this).siblings('.text').css('color','white');
	}, function() {
		$(this).hide();
		$(this).siblings('.img1').show();
		$(this).siblings('.text').css('color','black');
	});
	$('.text').hover(function() {
		$(this).css('cursor','pointer');
		$(this).css('color','white');
		$(this).siblings('.img1').hide();
		$(this).siblings('.img2').show();
	}, function() {
		$(this).css('color','black');
		$(this).siblings('.img1').show();
		$(this).siblings('.img2').hide();
	});
	$('.iconbg1').hover(function() {
		$(this).next().css('display','block');
		$(this).next().css('cursor','pointer');
		$(this).siblings('i').css('color','white');
	}, function() {
		$(this).next().css('display','none');
		$(this).siblings('i').css('color','black');
	});
	$('.iconbg1h').hover(function() {
		$(this).css('display','block');
		$(this).css('cursor','pointer');
		$(this).siblings('i').css('color','white');
	}, function() {
		$(this).css('display','none');
		$(this).siblings('i').css('color','black');
	});
	
	$('.imgrow i').hover(function() {
		$(this).prev().css('display','block');
		$(this).prev().css('cursor','pointer');
		$(this).css('cursor','pointer');
		$(this).css('color','white');
	}, function() {
		$(this).prev().css('display','none');
		$(this).css('color','black');
	});
	$('.imgbox9 i').hover(function() {
		$(this).prev().css('display','block');
		$(this).prev().css('cursor','pointer');
		$(this).css('cursor','pointer');
		$(this).css('color','white');
	}, function() {
		$(this).prev().css('display','none');
		$(this).css('color','black');
	});
	
	$('.img7_1').hover(function() {
		$(this).siblings('.img7_2 ').css('display','block');
		$(this).siblings('.box7caption ').css('color','white');
		$(this).siblings('.img7_2 ').css('cursor','pointer');
	}, function() {
		$(this).siblings('.img7_2 ').css('display','none');
		$(this).siblings('.box7caption ').css('color','black');
	});
	$('.img7_2').hover(function() {
		$(this).css('display','block');
		$(this).siblings('.box7caption ').css('color','white');
		$(this).css('cursor','pointer');
	}, function() {
		$(this).css('display','none');
		$(this).siblings('.box7caption ').css('color','black');
	});
	$('.box7caption').hover(function() {
		$(this).siblings('.img7_2 ').css('display','block');
		$(this).css('color','white');
		$(this).css('cursor','pointer');
	}, function() {
		$(this).siblings('.img7_2 ').css('display','none');
		$(this).css('color','black');
	});
	 $('.iconbg2').hover(function() {
		$(this).next().css('display','block');
		$(this).next().css('cursor','pointer');
		$(this).siblings('i').css('color','white');
	}, function() {
		$(this).next().css('display','none');
		$(this).siblings('i').css('color','black');
	});
	$('.iconbg2h').hover(function() {
		$(this).css('display','block');
		$(this).css('cursor','pointer');
		$(this).siblings('i').css('color','white');
	}, function() {
		$(this).css('display','none');
		$(this).siblings('i').css('color','black');
	});
	$('.imgbox10').hover(function() {
		$(this).siblings('.hover').css('left','15%')
		$(this).css('transform','translateZ(50px)');
		$(this).css('cursor','pointer');
	}, function() {
		$(this).siblings('.hover').css('left','-80%');
		$(this).css('transform','translateZ(0px)');
	});
	$('.hover').hover(function() {
		$(this).css('left','15%');
		$(this).siblings('.imgbox10').css('transform','translateZ(50px)')
	}, function() {
		$(this).css('left','-80%');
		$(this).siblings('.imgbox10').css('transform','translateZ(0px)')
	});
	$('.btn-link').hover(function() {
		$(this).find('.ch_col_icn_h').css('display','block');
		$(this).find('i').css('color','white');
	}, function() {
		$(this).find('.ch_col_icn_h').css('display','none');
		$(this).find('i').css('color','black');
	});
	$('.imgbox14_1').hover(function() {
		$(this).siblings('.imgbox14_2').css('display','block');
		$(this).siblings('i').css('color','white');
	}, function() {
		$(this).siblings('.imgbox14_2').css('display','none');
		$(this).siblings('i').css('color','black');
	});
	$('.imgbox14_2').hover(function() {
		$(this).css('display','block');
		$(this).siblings('i').css('color','white');
	}, function() {
		$(this).css('display','none');
		$(this).siblings('i').css('color','black');
	});
	$('.imgbox14 i').hover(function() {
		$(this).siblings('.imgbox14_2').css('display','block');
		$(this).css('color','white');
	}, function() {
		$(this).siblings('.imgbox14_2').css('display','none');
		$(this).css('color','black');
	});
	$('.bgmap').click(function(event) {
		$(this).remove();
	});
	$('.link1').click(function(event) {
		$(this).parent().siblings().removeClass('active1');
		$(this).parent().addClass('active1');
		$('html,body').animate({
			scrollTop: 0},
			1000, function() {
			/* stuff to do after animation is complete */
		});
	});
	$('.link2').click(function(event) {
		$(this).parent().siblings().removeClass('active1');
		$(this).parent().addClass('active1');
		$('html,body').animate({
			scrollTop: 670},
			1000, function() {
			/* stuff to do after animation is complete */
		});
	});
	$('.link3').click(function(event) {
		$(this).parent().siblings().removeClass('active1');
		$(this).parent().addClass('active1');
		$('html,body').animate({
			scrollTop: 4960},
			1000, function() {
			/* stuff to do after animation is complete */
		});
	});
	$('.link4').click(function(event) {
		$(this).parent().siblings().removeClass('active1');
		$(this).parent().addClass('active1');
		$('html,body').animate({
			scrollTop: 6460},
			1000, function() {
			/* stuff to do after animation is complete */
		});
	});
	$('.link5').click(function(event) {
		$(this).parent().siblings().removeClass('active1');
		$(this).parent().addClass('active1');
		$('html,body').animate({
			scrollTop: 7200},
			1000, function() {
			/* stuff to do after animation is complete */
		});
	});
	$('.link6').click(function(event) {
		$(this).parent().siblings().removeClass('active1');
		$(this).parent().addClass('active1');
		$('html,body').animate({
			scrollTop: 8000},
			1000, function() {
			/* stuff to do after animation is complete */
		});
	});
	$(window).scroll(function(event) {
		var scroll=$('html,body').scrollTop();
		if(scroll>=0)
		{
			$('.link1').parent().addClass('active1');
			$('.link1').parent().siblings().removeClass('active1');
			$('.navbar').css('background','transparent');
		}
		else 
		{
			$('.link1').parent().removeClass('active1');
		}
		if(scroll>=670)
		{
			$('.link2').parent().addClass('active1');
			$('.link2').parent().siblings().removeClass('active1');
			$('.navbar').css('background','#00000059');
		}
		else 
		{
			$('.link2').parent().removeClass('active1');
		}
		if(scroll>=4960)
		{
			$('.link3').parent().addClass('active1');
			$('.link3').parent().siblings().removeClass('active1');
			$('.navbar').css('background','#00000059');
		}
		else 
		{
			$('.link3').parent().removeClass('active1');
		}
		if(scroll>=6460)
		{
			$('.link4').parent().addClass('active1');
			$('.link4').parent().siblings().removeClass('active1');
			$('.navbar').css('background','#00000059');
		}
		else 
		{
			$('.link4').parent().removeClass('active1');
		}
		if(scroll>=7200)
		{
			$('.link5').parent().addClass('active1');
			$('.link5').parent().siblings().removeClass('active1');
			$('.navbar').css('background','#00000059');
		}
		else 
		{
			$('.link5').parent().removeClass('active1');
		}
		if(scroll>=8000)
		{
			$('.link6').parent().addClass('active1');
			$('.link6').parent().siblings().removeClass('active1');
			$('.navbar').css('background','#00000059');
		}
		else 
		{
			$('.link6').parent().removeClass('active1');
		}
	});
	$('.nav-link .fa-search').click(function(event) {
		$(this).hide();
		$(this).next().show();
		$('.form-inline').show();
	});
	$('.nav-link .fa-times').click(function(event) {
		$(this).hide();
		$(this).prev().show();
		$('.form-inline').hide();
	});
	$('.fltr-controls').click(function(event) {
		$(this).css('color','#f16f06');
		$(this).siblings().css('color','black');
	});
	
	function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
     }

	$('.box14 .btn-warning').click(function(event) {
		var firstname=$('#Firstname').val();
		if(firstname=='')
	      {
		      $('#err1').text('Mời bạn nhập firstname');
	      }
	    else {
	    	$('#err1')=tetx();
	    }
	    var Lastname=$('#Lastname').val();
	    if(Lastname=='')
	      {
		      $('#err2').text('Mời bạn nhập lastname');
	      }
	      else {
	    	$('#err2').text();
	    }
	    var inputEmail=$('#inputEmail').val();
	    if(inputEmail=='')
	      {
		      $('#err3').text('Mời bạn nhập email');
	      }
	      else {

	    	if(validateEmail(inputEmail)){
	    		 $('#err3').text();
	    	}
	    	else {
	    		 $('#err3').text('Không đúng định dạng email');
	    	}
	    }

	    var Subject=$('#Subject').val();
	      if(Subject=='')
	      {
		      $('#err4').text('Mời bạn nhập subject');
	      }
	      else {
	    	$('#err4').text();
	    }
	     var Message=$('#Message').val();
	    if(Message=='')
	      {
		      $('#err5').text('Mời bạn nhập Message');
	      }
	      else {
	    	$('#err5').text();
	    }
	});
	
	 
    
});