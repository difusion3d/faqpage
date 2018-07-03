window.onload=function() {
    $("#ajaxloader").remove();
    $("#footer").show();
    
    
};
var content = [
    '<iframe width="100%" height="60%" src="https://www.youtube.com/embed/videoseries?list=PLu6bZF5fHBVOPGZ7iwKK-HRkf58-s7IU4" frameborder="0" allow="autoplay; encrypted-media"></iframe>',
    '<iframe width="100%" height="60%"src="https://www.youtube.com/embed/QmUabjqlYH8" frameborder="0" allow="autoplay; encrypted-media"></iframe>',
    '<iframe width="100%" height="60%"src="https://www.youtube.com/embed/KZqKufsGEpQ" frameborder="0" allow="autoplay; encrypted-media"></iframe>',
    '<iframe width="100%" height="60%"src="https://www.youtube.com/embed/cWsbcg5J-2k" frameborder="0" allow="autoplay; encrypted-media"></iframe>',
    '<iframe width="100%" height="60%"src="https://www.youtube.com/embed/qy0cdB7hu6Q" frameborder="0" allow="autoplay; encrypted-media"></iframe>',
    '<iframe width="100%" height="60%"src="https://www.youtube.com/embed/1r6eess3bFk" frameborder="0" allow="autoplay; encrypted-media"></iframe>',
    '<iframe width="100%" height="60%"src="https://www.youtube.com/embed/yzXDXZhzWic" frameborder="0" allow="autoplay; encrypted-media"></iframe>',
    '<iframe width="100%" height="60%"src="https://www.youtube.com/embed/ct8awQ-C8uI" frameborder="0" allow="autoplay; encrypted-media"></iframe>',
    '<iframe width="100%" height="60%"src="https://www.youtube.com/embed/yoW5GPYmp0U" frameborder="0" allow="autoplay; encrypted-media"></iframe>',
    '<div style = "margin-left:0px;"><iframe style = "border:0px;" width = "100%" height = "65%" src="faq.html"></iframe></div>',
    '<div><a href = "https://www.kiosque-edu.com/">Kiosque Numérique de lÉducation</a></div>'
];
function toggle(x) {
    var arr = ['one','two','three','four'];
    for (var i = 0; i < arr.length; i++){
        if (x !== arr[i]){
            if (document.getElementById(arr[i])){
                document.getElementById(arr[i]).setAttribute("class","fa fa-arrow-down");
            }
        }
    }
    var x = document.getElementById(x);
    if (x.getAttribute("class") === "fa fa-arrow-up"){
        x.setAttribute("class","fa fa-arrow-down");
    }
    else {
        x.setAttribute("class","fa fa-arrow-up");
    }
}




function togglec(x) {
    var arr = [
        'uno','dos','tres','quatro','cinco','seis','siete','ocho','nueve','ten',
        'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
        'eighteen','nineteen','twenty','twentyone','twentytwo','twentythree',
        'twentyfour','twentyfive','twentysix','twentyseven','twentyeight',
        'twentynine','thirty','thirtyone','thirtytwo','thirtythree','thirtyfour',
        'thirtyfive','thirtysix',
    ];
    
    for (var i = 0; i < arr.length; i++){
        if (document.getElementById(arr[i])){
            if (document.getElementById(arr[i]).style.backgroundColor != ""){
                document.getElementById(arr[i]).style.backgroundColor = "";
                document.getElementById(arr[i]).firstChild.style.color = "black"

            }
        }
    }
    var c = x;
    var x = document.getElementById(x);
    var y = document.getElementById("info");      
    var z = 0
    for(var i = 0; i < content.length-1; i++){
        if (document.getElementById(arr[i]) === x) break;
        z++
    }
    console.log(z)
    console.log(content[z])
    y.innerHTML = content[z]
    x.style.backgroundColor = "#65bb69";
    x.firstChild.style.color = "white"

    if ($(window).width() <= 1040){
        $("#menu2").slideUp();
        $("#menu3").attr("style","display:none;");
        $("#menu").show();
    }
}
$(document).ready(function(){
    $(".thirddiv").hover(function(){
        $(this).toggleClass("hover");
        $(this).children().children().toggleClass("hover1");
    })
    $("#menu").click(function(){
        $("#collapseOne").removeClass('show');
        $("#one").removeClass('fa-arrow-up').addClass("fa-arrow-down")
        $("#menu2").slideDown();
        $("#menu").attr("style","display:none;");
        $("#menu3").show();
    })
    $("#menu3").click(function(){
        $("#menu2").slideUp();
        $("#menu3").attr("style","display:none;");
        $("#menu").show();        
    })
    $(window).on('resize', function(){
        var p = 0;
        if($(this).width() >= 1040){
            for (var i = 0; i < 111; i++){
                p = i;
                if (content[i] == $("#info").html()){
                    break
                } 
            }
            console.log(p)
            if (p <= 8){
                toggle('one');
                $("#one").removeClass("fa-arrow-down").addClass("fa-arrow-up")
                $("#collapseOne").addClass('show');
                $("#collapseTwo").removeClass('show');
                $("#collapseThree").removeClass('show');
                $("#collapseFour").removeClass('show');                        
            }
            if (p == 9){
                toggle('two');
                $("#two").removeClass("fa-arrow-down").addClass("fa-arrow-up")
                $("#collapseTwo").addClass('show');
                $("#collapseOne").removeClass('show');
                $("#collapseThree").removeClass('show');
                $("#collapseFour").removeClass('show');   
            }
            if (p == 10){
                toggle('three');
                $("#two").removeClass("fa-arrow-down").addClass("fa-arrow-up")
                $("#collapseThree").addClass('show');                            
                $("#collapseOne").removeClass('show');
                $("#collapseTwo").removeClass('show');
                $("#collapseFour").removeClass('show');  
            }
            $("#menu2").show();
            $("#menu3").hide();
            $("#menu").hide();
        }
        else {
            $("#menu2").hide();
            $("#menu").show();
            $("#menu3").hide();
        }
    });
})