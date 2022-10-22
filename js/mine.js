



        
        // $(".detils p").slideUp(1000);
        //  $(this).next().slideDown(1000);
    

       
         $(".detils h2").click(function(){
            $(this).next().slideToggle(1000);
            $(".detils p").not($(this).next()).slideUp(1000);        
         
 })


//  =============  NAV ======================
$(".barIcon").css("left" , $(".navigation").outerWidth(true) + "px")
$(".navigation").animate({left : `-${$(".navigation").outerWidth(true)}px`} ,1000)
 $(".barIcon").click(function(){
    $(".navigation").animate({left : `0px`} ,1000)
})
$(".fa-x").click(function()
{
    $(".navigation").animate({ left : `-${$(".navigation").outerWidth(true)}px`} ,1000);
})
$(".upAndDown h3").click(function(eInfo){
        let index = allH3.indexOf(eInfo.target);
        $(".upAndDown p").eq(index).slideToggle(1000 ,function()
        {
            $(".upAndDown p").eq(index).siblings("p").slideUp(1000); 
        });
    })