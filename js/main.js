$(function () {
  var _clih = document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight;
  var _cliw = document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth;
  var _sli1 = _clih-54+'px';
  var _sli2 = _cliw*14/1200+'px';

  if(_cliw*12/800<12) _sli2 = 9;
  var _li11=100;
  if(_clih>=1601&&_clih<1800){_li11 = 92;}
  else if(_cliw>=1401&&_cliw<1600){_li11 = 86;}
  else if(_cliw>=1201&&_cliw<1400){_li11 = 80;}
  else if(_cliw>=1001&&_cliw<1200){_li11 = 74;}
  else if(_cliw<=1000){_li11 = 64;}
  else{_li11 = 100;}
  var _sli3 = _clih-_li11+'px';
  var _sli5 = Math.floor((_cliw-71)*0.3)+'px';
  var _sli6 = $('.cpName').outerWidth()*0.125;
  var _sli7 = $('.pImgs').outerWidth();
  var _sli8 = (_clih-54)/2+'px';
  function _flo() {
    $('.myProject').css('height',_sli1);
    $('.imgMin .top, .imgMin .bot,.imgMin .bot .item,.imgMin .top .item').css('max-height',_sli8);
    $('body,html').css('font-size',_sli2);
    $('.banner,.picScroll-left .bd li,.bnnerInner').css({'height':_sli3});
    $('.cpList .item a').css('width',_sli6);
    $('.pImgs,.pTxts').css('height',_sli7+'px');
  }
  _flo();
  var _is = true;
  var _sli9;
  $('.menuCons').click(function () {
    _sli9 = (document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight)-$('.header').outerHeight();
    if(_is){
      if(!$('.menuContent').is(':animated')){
        if($('.menuContent').hasClass('menuItems')){
          $('.menuItems').css('height',_sli9+12+'px').stop().slideDown(500);
        }
        else {
          $('.menuContent').stop().slideDown(500);
        }
        $(this).parents('.header').addClass('active');
        _is = false;
      }
    }
    else{
      if(!$('.menuContent').is(':animated')){
        if($('.menuContent').hasClass('menuItems')){
          $('.menuItems').css('height',_sli9+'px').stop().slideUp(500);
        }
        else {
          $('.menuContent').stop().slideUp(500);
        }
        $(this).parents('.header').removeClass('active');
        _is = true;
      }
    }
  })
  $('.isClose').click(function () {
    if(!$('.menuContent').is(':animated')){
      $('.header').removeClass('active');
      $(this).parents('.header').removeClass('active');
      $('.menuContent').stop().slideUp(500);
      _is = true;
    }
  })
  $(window).resize(function () {
    _cliw = document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth;
    _clih = document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight;
    _sli1 = _clih-54+'px';
    _sli2 = _cliw*14/1200+'px';
    if(_cliw*12/800<12) _sli2 = 9;
    _li11=100;
    if(_clih>=1601&&_clih<1800){_li11 = 92;}
    else if(_cliw>=1401&&_cliw<1600){_li11 = 86;}
    else if(_cliw>=1201&&_cliw<1400){_li11 = 80;}
    else if(_cliw>=1001&&_cliw<1200){_li11 = 74;}
    else if(_cliw<=1000){_li11 = 64;}
    else{_li11 = 100;}
    _sli3 =  _clih-_li11+'px';
    _sli5 = Math.floor((_cliw-71)*0.3)+'px';
    _sli6 = $('.cpName').outerWidth()*0.125;
    _sli7 = $('.pImgs').outerWidth();
    _sli8 = (_clih-54)/2+'px';
    _sli9 = _clih - _li11+12+'px';
    if(_cliw<=1300){
      $('.myProject').css('min-width','1500px');
    }
    else{
      $('.myProject').css('min-width','1200px');
    }

    _flo();
    $('.menuItems').css('height',_sli9);
  })
  //滚动
  $('.wtMain').on('click','.botClick',function () {
    var _ins = $(this).parents('.modeList').outerHeight(true);
    var _top = $(this).parents('.modeList').offset().top;
    var _inall = $(this).parent().outerHeight();
    var _mtops = parseInt($(this).parents('.modeList').css('marginTop'));
    var _hie = $('.header').outerHeight();
    $('body,html').stop().animate({
      scrollTop:_ins+_top-_hie+'px'
    },500)
  })
})