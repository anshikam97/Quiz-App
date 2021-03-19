var q = {
        "html" : [
            {
                "question" : "HTML stands for -",
                "options" : [
                    "HighText Machine Language",
                   " HyperText and links Markup Language",
                   " HyperText Markup Language",
                   "None of these"
                ]
            },
            {
                "question" : "The correct sequence of HTML tags for starting a webpage is -",
                "options" : [
                "Head, Title, HTML, body",
                "HTML, Body, Title, Head",
                "HTML, Head, Title, Body",
                "HTML, Head, Title, Body"
                ]
            },
            {
                "question" : "Which of the following tag is used for inserting the largest heading in HTML?",
                "options" : [
                    "h3",
                    "h1",
                    "h5",
                    "h6"
                ]
            },
            {
                "question" : "input tag is -",
                "options" : [
                    "a format tag.",
                    "an empty tag.",
                    "All of the above",
                    "None of the above"
                ]
            }
        ],

        "python" : [
            {
                "question" : "What is the maximum possible length of an identifier?",
                "options" : [
                    "16",
                    "32",
                    "34",
                    "None of these"
                ]
            },
            {
                "question" : "Who developed the Python language?",
                "options" : [
                    "Zim Den",
                    "Guido van Rossum",
                    "Niene Stom",
                    "Wick van Rossum"
                ]
            },
            {
                "question" : "In which year was the Python language developed?",
                "options" : [
                    "1995",
                    "1972",
                    "1981",
                    "1989"
                ]
            },
            {
                "question" : "What is the method inside the class in python language?",
                "options" : [
                    "Object",
                    "Function",
                    "Attribute",
                    "Argument"
                ]
            }
        ]

}
var count = 1

var score = 0

var correcthtml = ["0", "3", "1", "1"]

var correctpython = ["3", "1" ,"3" ,"1" ]

var selected = [] 

var v;


function disp(c,v){
    if(v=="html"){
    document.getElementById("que_text").innerHTML = q.html[c-1].question + "<br>";
        for (var j = 0; j< q.html[c-1].options.length; j++){  
            document.getElementById("option_list").innerHTML += '<div class="option">' + '<input type="radio" name="op" onclick="req()">' + '<label>' + q.html[c-1].options[j] +'</label >' + '</div>' + '<br>';
        }
    }

    if(v=="python"){
        document.getElementById("que_text").innerHTML = q.python[c-1].question + "<br>";
        for (var j = 0; j< q.python[c-1].options.length; j++){  
            document.getElementById("option_list").innerHTML += '<div class="option">' + '<input type="radio" name="op" onclick="req()">' + '<label>' + q.python[c-1].options[j] +'</label >' + '</div>' + '<br>';
        }
    }
}

function check(){

    var r = $('input[type="radio"]:checked').val();
    selected.push(r)
}

function counter(){
    count+=1;
    document.getElementById("option_list").innerHTML = "";
    disp(count, v);
    document.getElementById("inc").innerHTML = count;
    if(count==4){
        count+=1;
    }
}

function ab(){
    var radios = document.querySelectorAll('input[type="radio"]');
    for (var j = 0 ; j<radios.length; j++){
        var radio = radios[j]
        radio.setAttribute("value",j)
    }
}

function submitting(){
        check()
        $(".quiz_box").css("display","none");
        $(".quiz_box").css("pointer-events","none");

        if(v=="html"){
            for(var i=0; i<=3; i++){
                if(correcthtml[i] == selected[i]){
                    score+=2;
                }
            }
        }

        if(v=="python"){
            for(var i=0; i<=3; i++){
                if(correctpython[i] == selected[i]){
                    score+=2;
                }
            }
        }

        $(".result_box").css("display","block");
        $(".result_box").css("pointer-events","all");        
        $("#result").text(score);
}

function req(){
    $(".nxt_btn").css("pointer-events","all");
}

function timing(){
    var seconds = document.getElementById("timer_text").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("timer_text").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);

        console.log(seconds)
        if (seconds == 0){
            $(".nxt_btn").click()
        }
    }, 1000);
}


$(document).ready(function(){
    $(".strt").click(function(){
        $(".start_btn").css("display","none");
        $(".sub_box").css("display","block");
    });

    $(".html").click(function(){
        v ="html";
        $(".info_box").css("display","block");
        $(".sub_box").css("display","none");
    });

    $(".python").click(function(){
        v = "python";
        $(".info_box").css("display","block");
        $(".sub_box").css("display","none");
    });

    $(".quit_str").click(function(){
            $(".start_btn").css("display","block");
            $(".info_box").css("display","none");
    });

    $(".continue").click(function(){
            $(".quiz_box").css("display","block");
            $(".info_box").css("display","none");
            $(".quiz_box").css("pointer-events","all")
            timing()
            disp(count,v)
            ab()
        }); 
    
    $(".nxt_btn").css("pointer-events","none");

    $(".nxt_btn").click(function(){
        $(".nxt_btn").css("pointer-events","none");
            if(count==5){
                $(".nxt_btn").addClass("submitting");
                $(".submitting").removeClass("nxt_btn");
                $(".submitting").text("submit");
                $(".submitting").attr("onclick",submitting());
            }
                check()
                counter()
                ab()           
                // timing()
    });

    $(".quit").click(function(){
        $(".result_box").css("display","none");
        $(".quiz_box").css("display","none");
        $(".start_btn").css("display","block");

        count = 1
        score = 0
        selected = []

        $(".submitting").addClass("nxt_btn");
        $(".nxt_btn").removeClass("submitting");
        $(".nxt_btn").text("Next");
        document.getElementById("inc").innerHTML = count;

    });

});