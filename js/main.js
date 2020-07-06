$(function(){
    'use strict';


// featured work shuffle

    $('.work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active'); // when we click the button its background color changed and the selected one will be unselected color
    
        if($(this).data('class')==='all'){
            $('.shuffle .imag').css('opacity',1);
        }
        else{
            $('.shuffle .imag').css('opacity',0.1);
            $($(this).data('class')).parent().css('opacity',1);         //fel 3ady mfesh parent bas e7na zawedna parent
            //$($(this).data('class')).css('opacity',1);       //3shan elmfrod kona nektb el data-class fel div msh el img
        }
    });

});