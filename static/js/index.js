function toggle(x) {
    var arr = ['one','two','three','four'];
    for (var i = 0; i < arr.length; i++){
        if (x !== arr[i]){
            document.getElementById(arr[i]).setAttribute("class","fa fa-thumbs-o-up");
        }
    }
    var x = document.getElementById(x);
    if (x.getAttribute("class") === "fa fa-thumbs-o-down"){
        x.setAttribute("class","fa fa-thumbs-o-up");
    }
    else {
        x.setAttribute("class","fa fa-thumbs-o-down");
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
        if (document.getElementById(arr[i]).style.backgroundColor != "white"){
            document.getElementById(arr[i]).style.backgroundColor = "white";
        }
    }
    var x = document.getElementById(x);
    x.style.backgroundColor = "#B2DFDE";
}
$(document).ready(function(){
    $(".thirddiv").hover(function(){
        $(this).toggleClass("hover")
    })
    $("#menu").click(function(){
        $("#menu2").fadeIn();
        $("#menu").attr("style","display:none;");
        $("#menu3").show();
    })
    $("#menu3").click(function(){
        $("#menu2").fadeOut();
        $("#menu3").attr("style","display:none;");
        $("#menu").show();
        
    })
    $(window).on('resize', function(){
        if($(this).width() >= 1040){
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