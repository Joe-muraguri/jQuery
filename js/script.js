// $('button').click(()=>{
//     $('.text').hide();
// })

//Ready is used to prevent javascript from running before the HTML document finishes loading

$(document).ready(()=>{
    $('button').click(()=>{
    //     $('p').hide();
    //     $('h1').hide();



    //set html content
    console.log($('h1').html("Good morning jQuery"));


    //Adding a class to an element
    $('h1').addClass("heading");
    $('h1').addClass("title");
    $('h1').removeClass("title");


    // Set CSS styles
    console.log($('p').css('color', 'blue'));




    })


    
})