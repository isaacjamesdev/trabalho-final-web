$(document).ready(function(){

    var speed = 3000;
    var run = setInterval('rotate()',speed);

    var item_width= $('.itens li').outerWidth();
    var left_value = item_width *(-1);
    
    $('.itens li:first').before($('.itens li:last'));
    
    $('.itens ul').css({'left': left_value});
    
    $('#prev').click(function(){
      var left_intend = parseInt($('.itens ul').css('left')) + item_width;
      
      $('.itens  ul').animate({'left':left_intend},200, function(){
          $('.itens li:first').before($('.itens li:last'));
        $('.itens ul').css({'left':left_value});
      });
    });
    
    $('#next').click(function(){
      var left_intend = parseInt($('.itens ul').css('left')) - item_width;
      
      $('.itens ul').animate({'left':left_intend},200, function(){
          $('.itens li:last').after($('.itens li:first'));
        $('.itens ul').css({'left':left_value});
      });
    });
});