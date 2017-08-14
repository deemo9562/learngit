$(function(){
	// alert($(window).width())
	//全屏滚动
	var height=$(window).height();
	var width_center=$(window).width();
	var box=$('.box');
    box.css({'height':height+'px'})

	var num=0;
	var z=1;
	var flag=true;
	var flags=true;

	$('.box').each(function(index,ele){
		$(ele).css({'height':height+'px'});
	})
	$('#box').css({'height':height+'px'});
	$('.box').eq(0).css('zIndex',2);


	$(document).mousewheel(function(e,delta){
		if(delta>0){

			if(flags){
   				flags=false;
				num--;
				z++;

				if(num<0){
					num=0;
				}else{
					box.eq(num).css({'top':-height,'zIndex':z});
					box.eq(num).animate({'top':0},function(){
						flags=true;
						flag=true;
					})
					
					btn_a.each(function(index,ele){
						$(ele).css('color','#ccc');
					})
					btn_a.eq(num).css('color','#00dfb9');
					border.css('left',num*84+11+'px');
				};

			}

		}else{

			if(flag){
				flag=false;
				num++;
				z++;

				if(num>box.length-1){
					num=box.length-1;
				}else{
					box.eq(num).css({'top':height,'zIndex':z});
					box.eq(num).animate({'top':0},function(){
						flags=true;
						flag=true;
					})

					btn_a.each(function(index,ele){
						$(ele).css('color','#ccc');
					})
					btn_a.eq(num).css('color','#00dfb9');
					border.css('left',num*84+11+'px');
				}
			}

		}
		OverallSituation();

	})
  


	//head点击
	var btn=$('.ul_head>li');
	var btn_a=btn.children();

	btn.click(function(){
		z++;
		var index=$(this).index()-1;

		if(index>=num){
			box.eq(index).css({'top':height,'zIndex':z}).animate({'top':0});
		}else{
			box.eq(index).css({'top':-height,'zIndex':z}).animate({'top':0});
		}

		num=index;

		border.animate('left',num*84+11+'px');
		btn_a.each(function(index,ele){
			$(ele).css('color','#ccc');
		})
		btn_a.eq(num).css('color','#00dfb9')

		OverallSituation();

	})

	//head滑动效果
	var border=$('.border_4');
	btn.mouseover(function(){
		var indexs=$(this).index();
		border.animate({'left':(indexs-1)*84+11},200);

		btn_a.each(function(index,ele){
			$(ele).css('color','#ccc');
		})
		btn_a.eq(indexs-1).css('color','#00dfb9')
		btn_a.eq(num).css('color','#00dfb9')

	})

	var btn_box=$('.ul_head');
	btn_box.mouseleave(function(){
		border.stop(true);
		border.animate({'left':num*84+11},100);

		btn_a.each(function(index,ele){
			$(ele).css('color','#ccc');
		})
		btn_a.eq(num).css('color','#00dfb9')
	})



	//侧边栏
	var sidebar_top=(height-300)/2;
	$('#sidebar').css('top',sidebar_top+'px');
	var switchs=$('.switch');
	var switchs_a=switchs.find('a');
	var option=$('.sidebar_option');
	var switchs_flag=true;
	switchs.click(function(){

		if(switchs_flag){
			option.animate({'left':'100px'},500,'linear');
			switchs_a.css('backgroundPosition','-32px -640px');
			switchs_flag=false;
		}else{
			option.animate({'left':'0px'},500,'linear');
			switchs_a.css('backgroundPosition','0px -640px');
			switchs_flag=true;
		}
		
	})

	//侧边栏滑动效果
	var qq=$('.qq');
	qq.hover(function(){
		z++;
		qq.css('zIndex',z);	
		if(!$('.qq_box').is(':animated')){
			$('.qq_box').animate({'left':'-156'},500);
		}
	},function(){
			$('.qq_box').animate({'left':'60'},20)
	})

	var telephone=$('.telephone');
	telephone.hover(function(){
		z++;
		telephone.css('zIndex',z);	
		if(!$('.phone_box').is(':animated')){
			$('.phone_box').animate({'left':'-241'},500)
		}
	},function(){
			$('.phone_box').animate({'left':'60'},20)
	})

	var wechat=$('.wechat');
	wechat.hover(function(){
		z++;
		wechat.css('zIndex',z);	 
		if(!$('.wechat_box').is(':animated')){
			$('.wechat_box').animate({'left':'-159'},500)
		}
	},function(){
			$('.wechat_box').animate({'left':'60'},20)
	})



	//up点击
	var up=$('.up');
	up.click(function(){
		if(flags){
   			flags=false;;'';
			num--;
			z++;

			if(num<0){
				num=0; 
			}else{
				box.eq(num).css({'top':-height,'zIndex':z});
				box.eq(num).animate({'top':0},function(){
					flags=true;
					flag=true;
				})
			}

			OverallSituation();

			btn_a.each(function(index,ele){
				$(ele).css('color','#ccc');
			})
			btn_a.eq(num).css('color','#00dfb9');
			border.css('left',num*84+11+'px');
		}
	})

	//down点击
	var down=$('.down');
	down.click(function(){
		if(flag){
			flag=false;
			num++;
			z++;

			if(num>box.length-1){
				num=box.length-1;
			}else{
				box.eq(num).css({'top':height,'zIndex':z});
				box.eq(num).animate({'top':0},function(){
					flags=true;
					flag=true;
				})
			}
			OverallSituation();

			btn_a.each(function(index,ele){
				$(ele).css('color','#ccc');
			})
			btn_a.eq(num).css('color','#00dfb9');
			border.css('left',num*84+11+'px');
				
		}

	})

	//news滚动
	var ul_move=$('.ul_move');
	var li_move=ul_move.children('li');
	var news_t=setInterval(moves,2000);
	var num1=0;
	function moves(){
		num1++;
		if(num1>=li_move.length-1){
			ul_move.animate({'top':'0px'},500,'linear')
			num1=0;
		}else{
			ul_move.animate({'top':-num1*20},500,'linear');
		}
	}




	//movedown点击
	var movedown=$('.movedown');
	movedown.click(function(){
		num++;
		z++;
		box.eq(num).css({'top':height,'zIndex':z});
		box.eq(num).animate({'top':0},function(){
			btn_a.each(function(index,ele){
				$(ele).css('color','#ccc');
			})
			btn_a.eq(num).css('color','#00dfb9');
			border.css('left',num*84+11+'px');
			flags=true;
			flag=true;
		})

		OverallSituation();
		

	})


	//页面1轮播
	var ul=$('.carousel');


	var li=ul.children();
	var width=li.outerWidth(true);
	
	ul.css({'height':height});

	var t=setInterval(move,5000);
	var nums=0;

	function move(){
		nums++;
		if(nums>=li.length-1){
			ul.animate({'marginLeft':-nums*width},500,'linear',function(){
				ul.css('marginLeft','0px');

				circle.each(function(index,ele){
					$(ele).css('background','#fff');
				})
				circle.eq(nums).css('background','#00dfb9');
			})
			nums=0;
		}else{
			ul.animate({'marginLeft':-nums*width},500,'linear');

			circle.each(function(index,ele){
				$(ele).css('background','#fff');
			})
			circle.eq(nums).css('background','#00dfb9');
		}

		OverallSituation();

	}

	var circle=$('.circle');

	circle.eq(0).css('background','#00dfb9')

	circle.mouseover(function(){
		ul.animate({'marginLeft':-$(this).index()*width},500,'linear');

		circle.each(function(index,ele){
			$(ele).css('background','#fff');
		})
		circle.eq($(this).index()).css('background','#00dfb9');

		nums=$(this).index();
		OverallSituation();
	})

	circle.hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,5000);
	})


	var mask=$('.mask');
	mask.each(function(index,ele){
		$(ele).css({'width':'100%','height':height});
	})





	//页面2hover
	var clip_li=$('.cilpbox>li')
	var cl=$('.cl');
	var cr=$('.cr');
	var clip_i=$('.cilpbox>li>i');
	var clip_p=$('.cilpbox>li>p');
	var clip_s=$('.cilpbox>li>strong');

	clip_li.hover(function(){
		var index=$(this).index();
		cl.eq(index).css({'clip':'rect(0px,156px,-10px,78px)','transition':'all .5s ease-in-out 0s'});
		cr.eq(index).css({'clip':'rect(156px,78px,156px,0px)','transition':'all .5s ease-in-out 0s'});
		clip_li.eq(index).css({'backgroundPosition':'0px 0px','transition':'all .5s ease-in-out 0.3s'});
		clip_p.eq(index).css({'top':'20px','transition':'all .5s ease-in-out 0.3s'});
		clip_s.eq(index).css({'color':'#fff','transition':'all .5s ease-in-out 0.3s'})
		if(index==0){
			clip_i.eq(index).css({'backgroundPosition':'-167px -357px','transition':'all .5s ease-in-out 0.3s'})
		}else if(index==1){
			clip_i.eq(index).css({'backgroundPosition':'-338px -291px','transition':'all .5s ease-in-out 0.3s'})
		}else if(index==2){
			clip_i.eq(index).css({'backgroundPosition':'-328px -362px','transition':'all .5s ease-in-out 0.3s'})
		}else if(index==3){
			clip_i.eq(index).css({'backgroundPosition':'-168px -439px','transition':'all .5s ease-in-out 0.3s'})
		}else if(index==4){
			clip_i.eq(index).css({'backgroundPosition':'-335px -439px','transition':'all .5s ease-in-out 0.3s'})
		}

	},function(){
		cl.css({'clip':'rect(0px,156px,156px,78px)','transition':'all .5s ease-in-out 0s'});
		cr.css({'clip':'rect(0px,78px,156px,0px)','transition':'all .5s ease-in-out 0s'});
		clip_li.css({'backgroundPosition':'0px 400px','transition':'all 0s ease-in-out 0s'});
		clip_p.css({'top':'200px','transition':'all 0s ease-in-out 0s'});
		clip_s.css({'color':'#333','transition':'all 0s ease-in-out 0s'});
		clip_i.eq(0).css({'backgroundPosition':'-245px -357px','transition':'all 0s ease-in-out 0s'});
		clip_i.eq(1).css({'backgroundPosition':'-416px -291px','transition':'all 0s ease-in-out 0s'});
		clip_i.eq(2).css({'backgroundPosition':'-415px -362px','transition':'all 0s ease-in-out 0s'});
		clip_i.eq(3).css({'backgroundPosition':'-244px -439px','transition':'all 0s ease-in-out 0s'});
		clip_i.eq(4).css({'backgroundPosition':'-420px -439px','transition':'all 0s ease-in-out 0s'});

	})



	//页面4	hover效果
	var box4_logo=$('.box4_logo');
	var move_logo=$('.move_logo');
	var logo_mask;
	move_logo.each(function(index,ele){
		var left=$(ele).position().left;
		var top=$(ele).position().top;
		$(ele).attr({'lefts':left,'tops':top});
	})
	move_logo.each(function(index,ele){
		$(ele).css({'position':'absolute','left':$(ele).attr('lefts')+'px','top':$(ele).attr('tops')+'px'})
	})

	box4_logo.on('mouseenter','span',function(){
		if(!logo_mask){
			logo_mask=$('<div class="logo_mask"></div>');
			logo_mask.css({'left':$(this).attr('lefts')+'px','top':$(this).attr('tops')+'px'})
		}

		logo_mask.stop().animate({'left':$(this).attr('lefts')+'px','top':$(this).attr('tops')+'px'})
		logo_mask.appendTo(box4_logo);
	})

	box4_logo.on('mouseleave',function(){
		logo_mask.remove();
		logo_mask='';
	})


	//页面7 font轮播效果
	var option_li=$('.option>li');
	var bg=$('#bg');
	var option_box=$('.option_box');
	var font_li=$('.option_box>li');
	var num2=0;

	option_li.eq(0).css('color','#fff');

	var o=setInterval(Option,8000);
	function Option(){
		num2++;
		if(num2>font_li.length-2){
			option_box.animate({'left':-num2*480+'px'},1000,'linear',function(){
				option_box.css('left','0px');
				num2=0;
			});

			bg.animate({'top':'0px'},function(){
				option_li.each(function(index,ele){
					$(ele).css('color','#888');
				})
				option_li.eq(0).css('color','#fff');
			});
			
		}else{
			option_box.animate({'left':-num2*480+'px'},1000,'linear');
			bg.animate({'top':num2*42+'px'},function(){
				option_li.each(function(index,ele){
					$(ele).css('color','#888');
				})
				option_li.eq(num2).css('color','#fff');
			});
		}
	}


	option_li.hover(function(){
		clearInterval(o);
		var index=$(this).index();
		option_box.animate({'left':-index*480+'px'},1000,'linear');
		bg.animate({'top':index*42+'px'},function(){
			option_li.each(function(index,ele){
				$(ele).css('color','#888');
			})
			option_li.eq(index).css('color','#fff');
		});
		num2=index;
	},function(){
		o=setInterval(Option,8000);
	})















	//动画


	$('.lb_2_font2').css('height',height);
	var lb_left=Math.floor($('.lb_1').offset().left);
	$('.box5_center').css('left',(width_center-240)/2+'px');
	$('.box8_move').css('left',(width_center-810)/2+'px');


	
	$('.lb_1_font1').css('display','block').animate({'left':lb_left+'px'},1000,'linear');
	$('.lb_1_font2').animate({'right':lb_left+'px'},1000,'linear');
	function OverallSituation(){
		if(num==0){
			if(nums==0){
				$('.lb_1_font1').css('display','block').animate({'left':lb_left+'px'},1000,'linear');
				$('.lb_1_font2').animate({'right':lb_left+'px'},1000,'linear');
			}else if(nums==1){
				$('.lb_2_font1').css('display','block').animate({'left':'20%'},1000,'linear');
				$('.lb_2_font2').css('display','block').animate({'left':'0px'},1000,'linear');
			}else if(nums==2){
				$('.lb_3_box').css('display','block').animate({'top':'159px'},1000,'linear');
			}else if(nums==3){
				$('.lb_4_font1').animate({'top':'159px'},1000,'linear');
				$('.lb_4_font2').css('display','block').animate({'top':'300px'},1000,'linear');
			}
		}
		if(num==1){
			cl.css({'clip':'rect(0px,156px,156px,78px)','transition':'all 2s'});
			cr.css({'clip':'rect(0px,78px,156px,0px)','transition':'all 2s'});
			$('.box2_font').fadeIn(2000);
		}
		if(num==2){
			$('.slidebox').animate({'top':'35%'},1000,'linear');
			$('.box3_font').fadeIn(2000);
			$('.more').fadeIn(3000);
		}
		if(num==3){
			$('.box4_font').fadeIn(2000);
		}
		if(num==4){
			$('.box5_font').fadeIn(2000);
			$('.box5_left').animate({'left':'200px'},1000,'linear');
			$('.box5_right').animate({'right':'200px'},1000,'linear');
			$('.box5_center').animate({'top':'265px'},1000,'linear');
		}
		if(num==5){
			$('.box6_font').fadeIn(2000);
			$('.six_move').animate({'bottom':'0px'},800,'linear');
		}
		if(num==6){
			$('.seven_font').animate({'left':'50%'},1000,'linear');
			$('.box7_bottom').animate({'bottom':'0px'},1000,'linear');
		}
		if(num==7){
			$('.box8_top').animate({'top':'0px'},1000,'linear');
			$('.box8_bottom').animate({'bottom':'0px'},1000,'linear');

		}





	}

	












})