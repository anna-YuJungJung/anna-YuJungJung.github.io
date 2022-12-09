/* numOfArms= number of arms 
    numOfLegs= number of legs
    bodyHeight affects bottom value of legs
    bodyWidth affects spacing of leg
    bodyPlan = 1, 2, or 3
        > 1=biped
        > 2=quadruped: change arms to display:none
*/
var numOfArms=1   
var bodyHeight=250
var bodyWidth=150
var limbWidth=45
var inseam=280;
var bodyColor=10;
var eyeColor=0;
let bodyPlan;


//ATTRIBUTE FUNCTIONS
function adjustHeight(){
    bodyHeight=($("#height").val()) + "px"
    $("#body").css("height", bodyHeight)
    console.log($("#body").css("top"))
    // $("#body").css({"margin-top": parseInt((($("#gen").offsetHeight)/2)-(bodyHeight/2))})
}

function adjustWidth(){
    bodyWidth=parseInt($("#width").val())
    armPos=(bodyWidth)+"px"
    legPos=(bodyWidth-limbWidth)+"px"
    $("#body").css("width", bodyWidth+"px")
    $("#arm2").css("left",armPos)
    $(".armCopy").children("#arm2").css("left",armPos)
    $("#leg2").css("left",legPos)
    $("#head").css("left", (bodyWidth/2)-50)
    console.log(armPos)
}

function adjustArms(){         
    $(".arm").stop() 
    $(".armCopy").remove()
    numOfArms=parseInt($("#armHandle").val())
    console.log(numOfArms)            
    var armInt = parseInt(bodyHeight.slice(0,-2))/5
    var actualArms=$(".armPair").length
    console.log(actualArms)
    
    if(numOfArms>1){    
        var armRaise = parseInt(11*numOfArms)       
        $(".armPair").children("#arm2").css({ "transform": "rotate(-"+ parseInt(armRaise) +"deg)"})
        $(".armPair").children("#arm1").css({ "transform": "rotate("+ parseInt(armRaise) +"deg)"})
        $(".armPair").removeClass("armbob")
        $(".armCopy").removeClass("armbob")

        for (i=1; i < numOfArms; i++) {    
            var $armClone = $("#arms").clone(true)
            $armClone.prop("class", "armCopy")
            console.log(bodyHeight)
            console.log(armInt)
            numOfArms=parseInt($("#armHandle").val())
            var armRaise = parseInt(10*numOfArms)
            console.log(armRaise)
            $armClone.children(".arm").css({ "top": (armInt*i)+"px" })
            console.log("rotate("+ parseInt(armRaise-(15*(i-1))) +"deg)")
            $armClone.children("#arm1").css({ "transform": "rotate("+ parseInt(armRaise-(10*(i-1))) +"deg)"})
            $armClone.children("#arm2").css({ "transform": "rotate(-"+ parseInt(armRaise-(10*(i-1))) +"deg)"})
            $armClone.appendTo("#body")
            $(".armPair").addClass("armbob")
            $(".armCopy").addClass("armbob")

        } 
    
    } else if(numOfArms==1){
        var armRaise = 10      
        $(".armPair").children("#arm2").css({ "transform": "rotate(-"+ parseInt(armRaise) +"deg)"})
        $(".armPair").children("#arm1").css({ "transform": "rotate("+ parseInt(armRaise) +"deg)"})
        $(".armPair").addClass("armbob")

    }
    
}

function adjustColor(){
    bodyColor=parseInt($("#colorHandle").val())+"deg"
    $("#body").not(("#head")).css("filter", "hue-rotate("+bodyColor+")")
    console.log(bodyColor)
}

function adjustEyeColor(){
    eyeColor=parseInt($("#eyeHandle").val())+"deg"
    $("#head").children(".eyes").css({"filter": "hue-rotate("+eyeColor+")"})
}

//SLIDERS
$(function(){
    adjustWidth()
    adjustHeight()
    adjustColor()
    adjustEyeColor()
    $("#height").change(function(){
        adjustHeight()
        adjustArms()
    })
    
    $("#width").change(function(){
        adjustWidth()
    })
    
    $("#armHandle").change(function(){
        adjustArms()
    })
    $("#colorHandle").change(function(){
        adjustColor()
    })
    $("#eyeHandle").change(function(){
        adjustEyeColor()
    })
})

$(document).ready(function(){

  console.log('script loaded');

  const wghtmax = 500;
  const lummax = 100;

  let value;

  $('.axis-range').on('input', function(){

      value = parseInt($(this).val()); //get slider input value
      console.log(value);

      let slidertype = $(this).data('type'); //get slider axis
      console.log("--"+slidertype, value);
     $('#shape').css("--"+slidertype, value);
  });

  $('#submit').click(function(e){
	    console.log('submit');

	    let plain = $('#plain').val();
	    $('#word').text(plain);

      let css = $('#shape').attr('style');
      console.log(css);


      $('#newshape').attr('style', css);

      $('.form').hide();
      $('#poster').show();
      
      
	});

  var dt = new Date();
  document.getElementById('date-time').innerHTML = dt;

});
//button

function background1(){
    document.getElementById('myImage')
    .src="images/IMG_7316.JPG";
    document.getElementById('message')
    .innerHTML="";
}

function background2(){
    document.getElementById('myImage')
    .src="https://cdn.glitch.global/9bcc0001-186c-4136-bb5d-806fc5602edb/2.jpeg?v=1670570403843";
    document.getElementById('message')
    .innerHTML="";
}
function background3(){
    document.getElementById('myImage')
    .src="https://cdn.glitch.global/9bcc0001-186c-4136-bb5d-806fc5602edb/1.jpeg?v=1670570391174";
    document.getElementById('message')
    .innerHTML="";
}

// 
$(document).ready(function(){

    console.log('script loaded');
  
    const wghtmax = 500;
    const lummax = 100;
  
    let value;
  
    $('.axis-range').on('input', function(){
  
        value = parseInt($(this).val()); //get slider input value
        console.log(value);
  
        let slidertype = $(this).data('type'); //get slider axis
        console.log("--"+slidertype, value);
       $('#shape').css("--"+slidertype, value);
    });
  
    $('#submit').click(function(e){
          console.log('submit');
  
          let plain = $('#plain').val();
          $('#word').text(plain);
  
        // let shape = $('#shape').val();
        // $('#newshape').text(shape);
  
        let css = $('#shape').attr('style');
        console.log(css);
  
  
        $('#newshape').attr('style', css);
  
        $('.form').hide();
        $('#poster').show();
        
        // $('#newshape').append(cellname);
        //
        //
             // let chocolate = $('#options').val();
          // $('#chocolate-choice').text(chocolate);
        //
          // $('form').hide(); //hide form upon submission
        //
          // $('#output').show(); //show output upon submission
  
      });
  
    var dt = new Date();
    document.getElementById('date-time').innerHTML = dt;
  
  });
  