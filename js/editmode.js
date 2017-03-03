$(document).ready(function(){

    // Open settings row 1
    $("#one-one").click(function(){$('.diaone-one').bPopup({speed: 100});});
    $("#one-two").click(function(){$('.diaone-two').bPopup({speed: 100});});
    $("#one-three").click(function(){$('.diaone-three').bPopup({speed: 100});});
    $("#one-four").click(function(){$('.diaone-four').bPopup({speed: 100});});
    $("#one-five").click(function(){$('.diaone-five').bPopup({speed: 100});});
    $("#one-six").click(function(){$('.diaone-six').bPopup({speed: 100});});
    // Open settings row 2
    $("#two-one").click(function(){$('.diatwo-one').bPopup({speed: 100});});
    $("#two-two").click(function(){$('.diatwo-two').bPopup({speed: 100});});
    $("#two-three").click(function(){$('.diatwo-three').bPopup({speed: 100});});
    $("#two-four").click(function(){$('.diatwo-four').bPopup({speed: 100});});
    $("#two-five").click(function(){$('.diatwo-five').bPopup({speed: 100});});
    $("#two-six").click(function(){$('.diatwo-six').bPopup({speed: 100});});
    // Open settings row 3
    $("#three-one").click(function(){$('.diathree-one').bPopup({speed: 100});});
    $("#three-two").click(function(){$('.diathree-two').bPopup({speed: 100});});
    $("#three-three").click(function(){$('.diathree-three').bPopup({speed: 100});});
    $("#three-four").click(function(){$('.diathree-four').bPopup({speed: 100});});
    $("#three-five").click(function(){$('.diathree-five').bPopup({speed: 100});});
    $("#three-six").click(function(){$('.diathree-six').bPopup({speed: 100});});

    $.fn.addias = function (dia){
        $(".diacontainer").append('<div class="setdia '+ dia +'"><label class="noselect">Hide this tile</label><div class="switchbox floatright"><label><input type="checkbox" id="chkHide"><span></span></label></div><br /><label for="txtLink" class="noselect">Link URL</label><input type="text" id="txtLink"><br /><label for="txtImage" class="noselect">Image URL</label><input type="text" id="txtImage"><br /><label for="txtColour" class="noselect">Colour</label><input type="text" id="txtColour" class="jscolor"></div>');
    }

    // Add dias row 1
    $(".diacontainer").addias("diaone-one");
    $(".diacontainer").addias("diaone-two");
    $(".diacontainer").addias("diaone-three");
    $(".diacontainer").addias("diaone-four");
    $(".diacontainer").addias("diaone-five");
    $(".diacontainer").addias("diaone-six");
    // Add dias row 2
    $(".diacontainer").addias("diatwo-one");
    $(".diacontainer").addias("diatwo-two");
    $(".diacontainer").addias("diatwo-three");
    $(".diacontainer").addias("diatwo-four");
    $(".diacontainer").addias("diatwo-five");
    $(".diacontainer").addias("diatwo-six");
    // Add dias row 3
    $(".diacontainer").addias("diathree-one");
    $(".diacontainer").addias("diathree-two");
    $(".diacontainer").addias("diathree-three");
    $(".diacontainer").addias("diathree-four");
    $(".diacontainer").addias("diathree-five");
    $(".diacontainer").addias("diathree-six");

    // Hide toggle 1-1 \\
    $('.diaone-one #chkHide').change(function() {
        if($('.diaone-one #chkHide').prop('checked') == true){
            localStorage.localdpone_one = 1;
            $(".one-one").addClass("displaynone");}
        if($('.diaone-one #chkHide').prop('checked') == false){
            localStorage.localdpone_one = 0;
            $(".one-one").removeClass("displaynone");}
    });
    if(localStorage.localdpone_one == 1){
        $('.diaone-one #chkHide').prop('checked', 'true');
        $(".one-one").addClass("displaynone");}
    if(localStorage.localdpone_one == 0){
        $(".one-one").removeClass("displaynone");}
    // Hide toggle 1-2 \\
    $('.diaone-two #chkHide').change(function() {
        if($('.diaone-two #chkHide').prop('checked') == true){
            localStorage.localdpone_two = 1;
            $(".one-two").addClass("displaynone");}
        if($('.diaone-two #chkHide').prop('checked') == false){
            localStorage.localdpone_two = 0;
            $(".one-two").removeClass("displaynone");}
    });
    if(localStorage.localdpone_two == 1){
        $('.diaone-two #chkHide').prop('checked', 'true');
        $(".one-two").addClass("displaynone");}
    if(localStorage.localdpone_two == 0){
        $(".one-two").removeClass("displaynone");}
    // Hide toggle 1-3 \\
    $('.diaone-three #chkHide').change(function() {
        if($('.diaone-three #chkHide').prop('checked') == true){
            localStorage.localdpone_three = 1;
            $(".one-three").addClass("displaynone");}
        if($('.diaone-three #chkHide').prop('checked') == false){
            localStorage.localdpone_three = 0;
            $(".one-three").removeClass("displaynone");}
    });
    if(localStorage.localdpone_three == 1){
        $('.diaone-three #chkHide').prop('checked', 'true');
        $(".one-three").addClass("displaynone");}
    if(localStorage.localdpone_three == 0){
        $(".one-three").removeClass("displaynone");}
    // Hide toggle 1-4 \\
    $('.diaone-four #chkHide').change(function() {
        if($('.diaone-four #chkHide').prop('checked') == true){
            localStorage.localdpone_four = 1;
            $(".one-four").addClass("displaynone");}
        if($('.diaone-four #chkHide').prop('checked') == false){
            localStorage.localdpone_four = 0;
            $(".one-four").removeClass("displaynone");}
    });
    if(localStorage.localdpone_four == 1){
        $('.diaone-four #chkHide').prop('checked', 'true');
        $(".one-four").addClass("displaynone");}
    if(localStorage.localdpone_four == 0){
        $(".one-four").removeClass("displaynone");}
    // Hide toggle 1-5 \\
    $('.diaone-five #chkHide').change(function() {
        if($('.diaone-five #chkHide').prop('checked') == true){
            localStorage.localdpone_five = 1;
            $(".one-five").addClass("displaynone");}
        if($('.diaone-five #chkHide').prop('checked') == false){
            localStorage.localdpone_five = 0;
            $(".one-five").removeClass("displaynone");}
    });
    if(localStorage.localdpone_five == 1){
        $('.diaone-five #chkHide').prop('checked', 'true');
        $(".one-five").addClass("displaynone");}
    if(localStorage.localdpone_five == 0){
        $(".one-five").removeClass("displaynone");}
    // Hide toggle 1-6 \\
    $('.diaone-six #chkHide').change(function() {
        if($('.diaone-six #chkHide').prop('checked') == true){
            localStorage.localdpone_six = 1;
            $(".one-six").addClass("displaynone");}
        if($('.diaone-six #chkHide').prop('checked') == false){
            localStorage.localdpone_six = 0;
            $(".one-six").removeClass("displaynone");}
    });
    if(localStorage.localdpone_six == 1){
        $('.diaone-six #chkHide').prop('checked', 'true');
        $(".one-six").addClass("displaynone");}
    if(localStorage.localdpone_six == 0){
        $(".one-six").removeClass("displaynone");}
    // Hide toggle 2-1 \\
    $('.diatwo-one #chkHide').change(function() {
        if($('.diatwo-one #chkHide').prop('checked') == true){
            localStorage.localdptwo_one = 1;
            $(".two-one").addClass("displaynone");}
        if($('.diatwo-one #chkHide').prop('checked') == false){
            localStorage.localdptwo_one = 0;
            $(".two-one").removeClass("displaynone");}
    });
    if(localStorage.localdptwo_one == 1){
        $('.diatwo-one #chkHide').prop('checked', 'true');
        $(".two-one").addClass("displaynone");}
    if(localStorage.localdptwo_one == 0){
        $(".two-one").removeClass("displaynone");}
    // Hide toggle 2-2 \\
    $('.diatwo-two #chkHide').change(function() {
        if($('.diatwo-two #chkHide').prop('checked') == true){
            localStorage.localdptwo_two = 1;
            $(".two-two").addClass("displaynone");}
        if($('.diatwo-two #chkHide').prop('checked') == false){
            localStorage.localdptwo_two = 0;
            $(".two-two").removeClass("displaynone");}
    });
    if(localStorage.localdptwo_two == 1){
        $('.diatwo-two #chkHide').prop('checked', 'true');
        $(".two-two").addClass("displaynone");}
    if(localStorage.localdptwo_two == 0){
        $(".two-two").removeClass("displaynone");}
    // Hide toggle 2-3 \\
    $('.diatwo-three #chkHide').change(function() {
        if($('.diatwo-three #chkHide').prop('checked') == true){
            localStorage.localdptwo_three = 1;
            $(".two-three").addClass("displaynone");}
        if($('.diatwo-three #chkHide').prop('checked') == false){
            localStorage.localdptwo_three = 0;
            $(".two-three").removeClass("displaynone");}
    });
    if(localStorage.localdptwo_three == 1){
        $('.diatwo-three #chkHide').prop('checked', 'true');
        $(".two-three").addClass("displaynone");}
    if(localStorage.localdptwo_three == 0){
        $(".two-three").removeClass("displaynone");}
    // Hide toggle 2-4 \\
    $('.diatwo-four #chkHide').change(function() {
        if($('.diatwo-four #chkHide').prop('checked') == true){
            localStorage.localdptwo_four = 1;
            $(".two-four").addClass("displaynone");}
        if($('.diatwo-four #chkHide').prop('checked') == false){
            localStorage.localdptwo_four = 0;
            $(".two-four").removeClass("displaynone");}
    });
    if(localStorage.localdptwo_four == 1){
        $('.diatwo-four #chkHide').prop('checked', 'true');
        $(".two-four").addClass("displaynone");}
    if(localStorage.localdptwo_four == 0){
        $(".two-four").removeClass("displaynone");}
    // Hide toggle 2-5 \\
    $('.diatwo-five #chkHide').change(function() {
        if($('.diatwo-five #chkHide').prop('checked') == true){
            localStorage.localdptwo_five = 1;
            $(".two-five").addClass("displaynone");}
        if($('.diatwo-five #chkHide').prop('checked') == false){
            localStorage.localdptwo_five = 0;
            $(".two-five").removeClass("displaynone");}
    });
    if(localStorage.localdptwo_five == 1){
        $('.diatwo-five #chkHide').prop('checked', 'true');
        $(".two-five").addClass("displaynone");}
    if(localStorage.localdptwo_five == 0){
        $(".two-five").removeClass("displaynone");}
    // Hide toggle 2-6 \\
    $('.diatwo-six #chkHide').change(function() {
        if($('.diatwo-six #chkHide').prop('checked') == true){
            localStorage.localdptwo_six = 1;
            $(".two-six").addClass("displaynone");}
        if($('.diatwo-six #chkHide').prop('checked') == false){
            localStorage.localdptwo_six = 0;
            $(".two-six").removeClass("displaynone");}
    });
    if(localStorage.localdptwo_six == 1){
        $('.diatwo-six #chkHide').prop('checked', 'true');
        $(".two-six").addClass("displaynone");}
    if(localStorage.localdptwo_six == 0){
        $(".two-six").removeClass("displaynone");}
    // Hide toggle 3-1 \\
    $('.diathree-one #chkHide').change(function() {
        if($('.diathree-one #chkHide').prop('checked') == true){
            localStorage.localdpthree_one = 1;
            $(".three-one").addClass("displaynone");}
        if($('.diathree-one #chkHide').prop('checked') == false){
            localStorage.localdpthree_one = 0;
            $(".three-one").removeClass("displaynone");}
    });
    if(localStorage.localdpthree_one == 1){
        $('.diathree-one #chkHide').prop('checked', 'true');
        $(".three-one").addClass("displaynone");}
    if(localStorage.localdpthree_one == 0){
        $(".three-one").removeClass("displaynone");}
    // Hide toggle 3-2 \\
    $('.diathree-two #chkHide').change(function() {
        if($('.diathree-two #chkHide').prop('checked') == true){
            localStorage.localdpthree_two = 1;
            $(".three-two").addClass("displaynone");}
        if($('.diathree-two #chkHide').prop('checked') == false){
            localStorage.localdpthree_two = 0;
            $(".three-two").removeClass("displaynone");}
    });
    if(localStorage.localdpthree_two == 1){
        $('.diathree-two #chkHide').prop('checked', 'true');
        $(".three-two").addClass("displaynone");}
    if(localStorage.localdpthree_two == 0){
        $(".three-two").removeClass("displaynone");}
    // Hide toggle 3-3 \\
    $('.diathree-three #chkHide').change(function() {
        if($('.diathree-three #chkHide').prop('checked') == true){
            localStorage.localdpthree_three = 1;
            $(".three-three").addClass("displaynone");}
        if($('.diathree-three #chkHide').prop('checked') == false){
            localStorage.localdpthree_three = 0;
            $(".three-three").removeClass("displaynone");}
    });
    if(localStorage.localdpthree_three == 1){
        $('.diathree-three #chkHide').prop('checked', 'true');
        $(".three-three").addClass("displaynone");}
    if(localStorage.localdpthree_three == 0){
        $(".three-three").removeClass("displaynone");}
    // Hide toggle 3-4 \\
    $('.diathree-four #chkHide').change(function() {
        if($('.diathree-four #chkHide').prop('checked') == true){
            localStorage.localdpthree_four = 1;
            $(".three-four").addClass("displaynone");}
        if($('.diathree-four #chkHide').prop('checked') == false){
            localStorage.localdpthree_four = 0;
            $(".three-four").removeClass("displaynone");}
    });
    if(localStorage.localdpthree_four == 1){
        $('.diathree-four #chkHide').prop('checked', 'true');
        $(".three-four").addClass("displaynone");}
    if(localStorage.localdpthree_four == 0){
        $(".three-four").removeClass("displaynone");}
    // Hide toggle 3-5 \\
    $('.diathree-five #chkHide').change(function() {
        if($('.diathree-five #chkHide').prop('checked') == true){
            localStorage.localdpthree_five = 1;
            $(".three-five").addClass("displaynone");}
        if($('.diathree-five #chkHide').prop('checked') == false){
            localStorage.localdpthree_five = 0;
            $(".three-five").removeClass("displaynone");}
    });
    if(localStorage.localdpthree_five == 1){
        $('.diathree-five #chkHide').prop('checked', 'true');
        $(".three-five").addClass("displaynone");}
    if(localStorage.localdpthree_five == 0){
        $(".three-five").removeClass("displaynone");}
    // Hide toggle 3-6 \\
    $('.diathree-six #chkHide').change(function() {
        if($('.diathree-six #chkHide').prop('checked') == true){
            localStorage.localdpthree_six = 1;
            $(".three-six").addClass("displaynone");}
        if($('.diathree-six #chkHide').prop('checked') == false){
            localStorage.localdpthree_six = 0;
            $(".three-six").removeClass("displaynone");}
    });
    if(localStorage.localdpthree_six == 1){
        $('.diathree-six #chkHide').prop('checked', 'true');
        $(".three-six").addClass("displaynone");}
    if(localStorage.localdpthree_six == 0){
        $(".three-six").removeClass("displaynone");}




    // Settings dia one-one \\
    $(".diaone-one input").change(function(){
        var checklink = $(".diaone-one input#txtLink");
        var checkimage = $(".diaone-one input#txtImage");
        var checkcolour = $(".diaone-one input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diaone-one input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.one-one").attr("href", "http://" + link);
            localStorage.locallinkone_one = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diaone-one input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".one-one .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgone_one = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diaone-one input#txtColour').val();
            $(".one-one .linkblock").css("background-color", "#" + colour);
            $(".one-one .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourone_one = colour;
        }
    });
    if (typeof localStorage.locallinkone_one !== 'undefined' && localStorage.locallinkone_one !== null){
        $("a.one-one").attr("href", "http://" + localStorage.locallinkone_one);
        $('.diaone-one input#txtLink').val(localStorage.locallinkone_one);}
    if (typeof localStorage.localimgone_one !== 'undefined' && localStorage.localimgone_one !== null){
        $(".one-one .link").css("background-image", "url(http://" + localStorage.localimgone_one + ")");
        $('.diaone-one input#txtImage').val(localStorage.localimgone_one);}
    if (typeof localStorage.localcolourone_one !== 'undefined' && localStorage.localcolourone_one !== null){
        $(".one-one .linkblock").css("background-color", "#" + localStorage.localcolourone_one);
        $(".one-one .linkblock").css("border", "3px solid #" + localStorage.localcolourone_one);
        $('.diaone-one input#txtColour').val(localStorage.localcolourone_one);}


    // Settings dia one-two \\
    $(".diaone-two input").change(function(){ // Dia one-two
        var checklink = $(".diaone-two input#txtLink");
        var checkimage = $(".diaone-two input#txtImage");
        var checkcolour = $(".diaone-two input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diaone-two input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.one-two").attr("href", "http://" + link);
            localStorage.locallinkone_two = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diaone-two input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".one-two .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgone_two = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diaone-two input#txtColour').val();
            $(".one-two .linkblock").css("background-color", "#" + colour);
            $(".one-two .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourone_two = colour;
        }
    });
    if (typeof localStorage.locallinkone_two !== 'undefined' && localStorage.locallinkone_two !== null){
        $("a.one-two").attr("href", "http://" + localStorage.locallinkone_two);
        $('.diaone-two input#txtLink').val(localStorage.locallinkone_two);}
    if (typeof localStorage.localimgone_two !== 'undefined' && localStorage.localimgone_two !== null){
        $(".one-two .link").css("background-image", "url(http://" + localStorage.localimgone_two + ")");
        $('.diaone-two input#txtImage').val(localStorage.localimgone_two);}
    if (typeof localStorage.localcolourone_two !== 'undefined' && localStorage.localcolourone_two !== null){
        $(".one-two .linkblock").css("background-color", "#" + localStorage.localcolourone_two);
        $(".one-two .linkblock").css("border", "3px solid #" + localStorage.localcolourone_two);
        $('.diaone-two input#txtColour').val(localStorage.localcolourone_two);}


    // Settings dia one-three \\
    $(".diaone-three input").change(function(){ // Dia one-three
        var checklink = $(".diaone-three input#txtLink");
        var checkimage = $(".diaone-three input#txtImage");
        var checkcolour = $(".diaone-three input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diaone-three input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.one-three").attr("href", "http://" + link);
            localStorage.locallinkone_three = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diaone-three input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".one-three .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgone_three = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diaone-three input#txtColour').val();
            $(".one-three .linkblock").css("background-color", "#" + colour);
            $(".one-three .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourone_three = colour;
        }
    });
    if (typeof localStorage.locallinkone_three !== 'undefined' && localStorage.locallinkone_three !== null){
        $("a.one-three").attr("href", "http://" + localStorage.locallinkone_three);
        $('.diaone-three input#txtLink').val(localStorage.locallinkone_three);}
    if (typeof localStorage.localimgone_three !== 'undefined' && localStorage.localimgone_three !== null){
        $(".one-three .link").css("background-image", "url(http://" + localStorage.localimgone_three + ")");
        $('.diaone-three input#txtImage').val(localStorage.localimgone_three);}
    if (typeof localStorage.localcolourone_three !== 'undefined' && localStorage.localcolourone_three !== null){
        $(".one-three .linkblock").css("background-color", "#" + localStorage.localcolourone_three);
        $(".one-three .linkblock").css("border", "3px solid #" + localStorage.localcolourone_three);
        $('.diaone-three input#txtColour').val(localStorage.localcolourone_three);}


    // Settings dia one-four \\
    $(".diaone-four input").change(function(){ // Dia one-four
        var checklink = $(".diaone-four input#txtLink");
        var checkimage = $(".diaone-four input#txtImage");
        var checkcolour = $(".diaone-four input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diaone-four input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.one-four").attr("href", "http://" + link);
            localStorage.locallinkone_four = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diaone-four input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".one-four .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgone_four = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diaone-four input#txtColour').val();
            $(".one-four .linkblock").css("background-color", "#" + colour);
            $(".one-four .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourone_four = colour;
        }
    });
    if (typeof localStorage.locallinkone_four !== 'undefined' && localStorage.locallinkone_four !== null){
        $("a.one-four").attr("href", "http://" + localStorage.locallinkone_four);
        $('.diaone-four input#txtLink').val(localStorage.locallinkone_four);}
    if (typeof localStorage.localimgone_four !== 'undefined' && localStorage.localimgone_four !== null){
        $(".one-four .link").css("background-image", "url(http://" + localStorage.localimgone_four + ")");
        $('.diaone-four input#txtImage').val(localStorage.localimgone_four);}
    if (typeof localStorage.localcolourone_four !== 'undefined' && localStorage.localcolourone_four !== null){
        $(".one-four .linkblock").css("background-color", "#" + localStorage.localcolourone_four);
        $(".one-four .linkblock").css("border", "3px solid #" + localStorage.localcolourone_four);
        $('.diaone-four input#txtColour').val(localStorage.localcolourone_four);}


    // Settigs dia one-five \\
    $(".diaone-five input").change(function(){ // Dia one-five
        var checklink = $(".diaone-five input#txtLink");
        var checkimage = $(".diaone-five input#txtImage");
        var checkcolour = $(".diaone-five input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diaone-five input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.one-five").attr("href", "http://" + link);
            localStorage.locallinkone_five = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diaone-five input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".one-five .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgone_five = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diaone-five input#txtColour').val();
            $(".one-five .linkblock").css("background-color", "#" + colour);
            $(".one-five .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourone_five = colour;
        }
    });
    if (typeof localStorage.locallinkone_five !== 'undefined' && localStorage.locallinkone_five !== null){
        $("a.one-five").attr("href", "http://" + localStorage.locallinkone_five);
        $('.diaone-five input#txtLink').val(localStorage.locallinkone_five);}
    if (typeof localStorage.localimgone_five !== 'undefined' && localStorage.localimgone_five !== null){
        $(".one-five .link").css("background-image", "url(http://" + localStorage.localimgone_five + ")");
        $('.diaone-five input#txtImage').val(localStorage.localimgone_five);}
    if (typeof localStorage.localcolourone_five !== 'undefined' && localStorage.localcolourone_five !== null){
        $(".one-five .linkblock").css("background-color", "#" + localStorage.localcolourone_five);
        $(".one-five .linkblock").css("border", "3px solid #" + localStorage.localcolourone_five);
        $('.diaone-five input#txtColour').val(localStorage.localcolourone_five);}


    // Settings dia one-six \\
    $(".diaone-six input").change(function(){ // Dia one-six
        var checklink = $(".diaone-six input#txtLink");
        var checkimage = $(".diaone-six input#txtImage");
        var checkcolour = $(".diaone-six input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diaone-six input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.one-six").attr("href", "http://" + link);
            localStorage.locallinkone_six = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diaone-six input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".one-six .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgone_six = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diaone-six input#txtColour').val();
            $(".one-six .linkblock").css("background-color", "#" + colour);
            $(".one-six .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourone_six = colour;
        }
    }); // End dia one-six
    if (typeof localStorage.locallinkone_six !== 'undefined' && localStorage.locallinkone_six !== null){
        $("a.one-six").attr("href", "http://" + localStorage.locallinkone_six);
        $('.diaone-six input#txtLink').val(localStorage.locallinkone_six);}
    if (typeof localStorage.localimgone_six !== 'undefined' && localStorage.localimgone_six !== null){
        $(".one-six .link").css("background-image", "url(http://" + localStorage.localimgone_six + ")");
        $('.diaone-six input#txtImage').val(localStorage.localimgone_six);}
    if (typeof localStorage.localcolourone_five !== 'undefined' && localStorage.localcolourone_six !== null){
        $(".one-six .linkblock").css("background-color", "#" + localStorage.localcolourone_six);
        $(".one-six .linkblock").css("border", "3px solid #" + localStorage.localcolourone_six);
        $('.diaone-six input#txtColour').val(localStorage.localcolourone_six);}


    // Settings dia two-one \\
    $(".diatwo-one input").change(function(){ // Dia two-one
        var checklink = $(".diatwo-one input#txtLink");
        var checkimage = $(".diatwo-one input#txtImage");
        var checkcolour = $(".diatwo-one input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diatwo-one input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.two-one").attr("href", "http://" + link);
            localStorage.locallinktwo_one = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diatwo-one input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".two-one .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgtwo_one = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diatwo-one input#txtColour').val();
            $(".two-one .linkblock").css("background-color", "#" + colour);
            $(".two-one .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourtwo_one = colour;
        }
    });
    if (typeof localStorage.locallinktwo_one !== 'undefined' && localStorage.locallinktwo_one !== null){
        $("a.two-one").attr("href", "http://" + localStorage.locallinktwo_one);
        $('.diatwo-one input#txtLink').val(localStorage.locallinktwo_one);}
    if (typeof localStorage.localimgtwo_one !== 'undefined' && localStorage.localimgtwo_one !== null){
        $(".two-one .link").css("background-image", "url(http://" + localStorage.localimgtwo_one + ")");
        $('.diatwo-one input#txtImage').val(localStorage.localimgtwo_one);}
    if (typeof localStorage.localcolourtwo_one !== 'undefined' && localStorage.localcolourtwo_one !== null){
        $(".two-one .linkblock").css("background-color", "#" + localStorage.localcolourtwo_one);
        $(".two-one .linkblock").css("border", "3px solid #" + localStorage.localcolourtwo_one);
        $('.diatwo-one input#txtColour').val(localStorage.localcolourtwo_one);}




    // Settings dia two-two \\
    $(".diatwo-two input").change(function(){ // Dia two-two
        var checklink = $(".diatwo-two input#txtLink");
        var checkimage = $(".diatwo-two input#txtImage");
        var checkcolour = $(".diatwo-two input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diatwo-two input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.two-two").attr("href", "http://" + link);
            localStorage.locallinktwo_two = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diatwo-two input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".two-two .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgtwo_two = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diatwo-two input#txtColour').val();
            $(".two-two .linkblock").css("background-color", "#" + colour);
            $(".two-two .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourtwo_two = colour;
        }
    });
    if (typeof localStorage.locallinktwo_two !== 'undefined' && localStorage.locallinktwo_two !== null){
        $("a.two-two").attr("href", "http://" + localStorage.locallinktwo_two);
        $('.diatwo-two input#txtLink').val(localStorage.locallinktwo_two);}
    if (typeof localStorage.localimgtwo_two !== 'undefined' && localStorage.localimgtwo_two !== null){
        $(".two-two .link").css("background-image", "url(http://" + localStorage.localimgtwo_two + ")");
        $('.diatwo-two input#txtImage').val(localStorage.localimgtwo_two);}
    if (typeof localStorage.localcolourtwo_two !== 'undefined' && localStorage.localcolourtwo_two !== null){
        $(".two-two .linkblock").css("background-color", "#" + localStorage.localcolourtwo_two);
        $(".two-two .linkblock").css("border", "3px solid #" + localStorage.localcolourtwo_two);
        $('.diatwo-two input#txtColour').val(localStorage.localcolourtwo_two);}



    // Settings dia two-three \\
    $(".diatwo-three input").change(function(){ // Dia two-three
        var checklink = $(".diatwo-three input#txtLink");
        var checkimage = $(".diatwo-three input#txtImage");
        var checkcolour = $(".diatwo-three input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diatwo-three input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.two-three").attr("href", "http://" + link);
            localStorage.locallinktwo_three = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diatwo-three input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".two-three .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgtwo_three = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diatwo-three input#txtColour').val();
            $(".two-three .linkblock").css("background-color", "#" + colour);
            $(".two-three .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourtwo_three = colour;
        }
    });
    if (typeof localStorage.locallinktwo_three !== 'undefined' && localStorage.locallinktwo_three !== null){
        $("a.two-three").attr("href", "http://" + localStorage.locallinktwo_three);
        $('.diatwo-two input#txtLink').val(localStorage.locallinktwo_two);}
    if (typeof localStorage.localimgtwo_three !== 'undefined' && localStorage.localimgtwo_three !== null){
        $(".two-three .link").css("background-image", "url(http://" + localStorage.localimgtwo_three + ")");
        $('.diatwo-three input#txtImage').val(localStorage.localimgtwo_three);}
    if (typeof localStorage.localcolourtwo_three !== 'undefined' && localStorage.localcolourtwo_three !== null){
        $(".two-three .linkblock").css("background-color", "#" + localStorage.localcolourtwo_three);
        $(".two-three .linkblock").css("border", "3px solid #" + localStorage.localcolourtwo_three);
        $('.diatwo-three input#txtColour').val(localStorage.localcolourtwo_three);}


    // Settings dia two-four \\
    $(".diatwo-four input").change(function(){ // Dia two-four
        var checklink = $(".diatwo-four input#txtLink");
        var checkimage = $(".diatwo-four input#txtImage");
        var checkcolour = $(".diatwo-four input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diatwo-four input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.two-four").attr("href", "http://" + link);
            localStorage.locallinktwo_four = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diatwo-four input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".two-four .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgtwo_four = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diatwo-four input#txtColour').val();
            $(".two-four .linkblock").css("background-color", "#" + colour);
            $(".two-four .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourtwo_four = colour;
        }
    });
    if (typeof localStorage.locallinktwo_four !== 'undefined' && localStorage.locallinktwo_four !== null){
        $("a.two-four").attr("href", "http://" + localStorage.locallinktwo_four);
        $('.diatwo-four input#txtLink').val(localStorage.locallinktwo_four);}
    if (typeof localStorage.localimgtwo_four !== 'undefined' && localStorage.localimgtwo_four !== null){
        $(".two-four .link").css("background-image", "url(http://" + localStorage.localimgtwo_four + ")");
        $('.diatwo-four input#txtImage').val(localStorage.localimgtwo_four);}
    if (typeof localStorage.localcolourtwo_four !== 'undefined' && localStorage.localcolourtwo_four !== null){
        $(".two-four .linkblock").css("background-color", "#" + localStorage.localcolourtwo_four);
        $(".two-four .linkblock").css("border", "3px solid #" + localStorage.localcolourtwo_four);
        $('.diatwo-four input#txtColour').val(localStorage.localcolourtwo_four);}


    // Settings dia two-five \\
    $(".diatwo-five input").change(function(){ // Dia two-five
        var checklink = $(".diatwo-five input#txtLink");
        var checkimage = $(".diatwo-five input#txtImage");
        var checkcolour = $(".diatwo-five input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diatwo-five input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.two-five").attr("href", "http://" + link);
            localStorage.locallinktwo_five = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diatwo-five input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".two-five .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgtwo_five = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diatwo-five input#txtColour').val();
            $(".two-five .linkblock").css("background-color", "#" + colour);
            $(".two-five .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourtwo_five = colour;
        }
    });
    if (typeof localStorage.locallinktwo_five !== 'undefined' && localStorage.locallinktwo_five !== null){
        $("a.two-five").attr("href", "http://" + localStorage.locallinktwo_five);
        $('.diatwo-five input#txtLink').val(localStorage.locallinktwo_five);}
    if (typeof localStorage.localimgtwo_five !== 'undefined' && localStorage.localimgtwo_five !== null){
        $(".two-five .link").css("background-image", "url(http://" + localStorage.localimgtwo_five + ")");
        $('.diatwo-five input#txtImage').val(localStorage.localimgtwo_five);}
    if (typeof localStorage.localcolourtwo_five !== 'undefined' && localStorage.localcolourtwo_five !== null){
        $(".two-five .linkblock").css("background-color", "#" + localStorage.localcolourtwo_five);
        $(".two-five .linkblock").css("border", "3px solid #" + localStorage.localcolourtwo_five);
        $('.diatwo-five input#txtColour').val(localStorage.localcolourtwo_five);}


    // Settings dia two-six \\
    $(".diatwo-six input").change(function(){ // Dia two-six
        var checklink = $(".diatwo-six input#txtLink");
        var checkimage = $(".diatwo-six input#txtImage");
        var checkcolour = $(".diatwo-six input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diatwo-six input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.two-six").attr("href", "http://" + link);
            localStorage.locallinktwo_six = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diatwo-six input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".two-six .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgtwo_six = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diatwo-six input#txtColour').val();
            $(".two-six .linkblock").css("background-color", "#" + colour);
            $(".two-six .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourtwo_six = colour;
        }
    });
    if (typeof localStorage.locallinktwo_six !== 'undefined' && localStorage.locallinktwo_six !== null){
        $("a.two-six").attr("href", "http://" + localStorage.locallinktwo_six);
        $('.diatwo-six input#txtLink').val(localStorage.locallinktwo_six);}
    if (typeof localStorage.localimgtwo_six !== 'undefined' && localStorage.localimgtwo_six !== null){
        $(".two-six .link").css("background-image", "url(http://" + localStorage.localimgtwo_six + ")");
        $('.diatwo-six input#txtImage').val(localStorage.localimgtwo_six);}
    if (typeof localStorage.localcolourtwo_six !== 'undefined' && localStorage.localcolourtwo_six !== null){
        $(".two-six .linkblock").css("background-color", "#" + localStorage.localcolourtwo_six);
        $(".two-six .linkblock").css("border", "3px solid #" + localStorage.localcolourtwo_six);
        $('.diatwo-six input#txtColour').val(localStorage.localcolourtwo_six);}


    // Settings dia three-one \\
    $(".diathree-one input").change(function(){ // Dia three-one
        var checklink = $(".diathree-one input#txtLink");
        var checkimage = $(".diathree-one input#txtImage");
        var checkcolour = $(".diathree-one input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diathree-one input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.three-one").attr("href", "http://" + link);
            localStorage.locallinkthree_one = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diathree-one input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".three-one .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgthree_one = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diathree-one input#txtColour').val();
            $(".three-one .linkblock").css("background-color", "#" + colour);
            $(".three-one .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourthree_one = colour;
        }
    });
    if (typeof localStorage.locallinkthree_one !== 'undefined' && localStorage.locallinkthree_one !== null){
        $("a.three-one").attr("href", "http://" + localStorage.locallinkthree_one);
        $('.diathree-one input#txtLink').val(localStorage.locallinkthree_one);}
    if (typeof localStorage.localimgthree_one !== 'undefined' && localStorage.localimgthree_one !== null){
        $(".three-one .link").css("background-image", "url(http://" + localStorage.localimgthree_one + ")");
        $('.diathree-one input#txtImage').val(localStorage.localimgthree_one);}
    if (typeof localStorage.localcolourthree_one !== 'undefined' && localStorage.localcolourthree_one !== null){
        $(".three-one .linkblock").css("background-color", "#" + localStorage.localcolourthree_one);
        $(".three-one .linkblock").css("border", "3px solid #" + localStorage.localcolourthree_one);
        $('.diathree-one input#txtColour').val(localStorage.localcolourthree_one);}


    // Settings dia three-two \\
    $(".diathree-two input").change(function(){ // Dia three-two
        var checklink = $(".diathree-two input#txtLink");
        var checkimage = $(".diathree-two input#txtImage");
        var checkcolour = $(".diathree-two input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diathree-two input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.three-two").attr("href", "http://" + link);
            localStorage.locallinkthree_two = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diathree-two input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".three-two .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgthree_two = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diathree-two input#txtColour').val();
            $(".three-two .linkblock").css("background-color", "#" + colour);
            $(".three-two .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourthree_two = colour;
        }
    });
    if (typeof localStorage.locallinkthree_two !== 'undefined' && localStorage.locallinkthree_two !== null){
        $("a.three-two").attr("href", "http://" + localStorage.locallinkthree_two);
        $('.diathree-two input#txtLink').val(localStorage.locallinkthree_two);}
    if (typeof localStorage.localimgthree_two !== 'undefined' && localStorage.localimgthree_two !== null){
        $(".three-two .link").css("background-image", "url(http://" + localStorage.localimgthree_two + ")");
        $('.diathree-two input#txtImage').val(localStorage.localimgthree_two);}
    if (typeof localStorage.localcolourthree_two !== 'undefined' && localStorage.localcolourthree_two !== null){
        $(".three-two .linkblock").css("background-color", "#" + localStorage.localcolourthree_two);
        $(".three-two .linkblock").css("border", "3px solid #" + localStorage.localcolourthree_two);
        $('.diathree-two input#txtColour').val(localStorage.localcolourthree_two);}


    // Settings dia three-three \\
    $(".diathree-three input").change(function(){ // Dia three-three
        var checklink = $(".diathree-three input#txtLink");
        var checkimage = $(".diathree-three input#txtImage");
        var checkcolour = $(".diathree-three input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diathree-three input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.three-three").attr("href", "http://" + link);
            localStorage.locallinkthree_three = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diathree-three input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".three-three .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgthree_three = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diathree-three input#txtColour').val();
            $(".three-three .linkblock").css("background-color", "#" + colour);
            $(".three-three .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourthree_three = colour;
        }
    });
    if (typeof localStorage.locallinkthree_three !== 'undefined' && localStorage.locallinkthree_three !== null){
        $("a.three-three").attr("href", "http://" + localStorage.locallinkthree_three);
        $('.diathree-three input#txtLink').val(localStorage.locallinkthree_three);}
    if (typeof localStorage.localimgthree_three !== 'undefined' && localStorage.localimgthree_three !== null){
        $(".three-three .link").css("background-image", "url(http://" + localStorage.localimgthree_three + ")");
        $('.diathree-three input#txtImage').val(localStorage.localimgthree_three);}
    if (typeof localStorage.localcolourthree_three !== 'undefined' && localStorage.localcolourthree_three !== null){
        $(".three-three .linkblock").css("background-color", "#" + localStorage.localcolourthree_three);
        $(".three-three .linkblock").css("border", "3px solid #" + localStorage.localcolourthree_three);
        $('.diathree-three input#txtColour').val(localStorage.localcolourthree_three);}


    // Settings dia three-four \\
    $(".diathree-four input").change(function(){ // Dia three-four
        var checklink = $(".diathree-four input#txtLink");
        var checkimage = $(".diathree-four input#txtImage");
        var checkcolour = $(".diathree-four input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diathree-four input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.three-four").attr("href", "http://" + link);
            localStorage.locallinkthree_four = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diathree-four input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".three-four .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgthree_four = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diathree-four input#txtColour').val();
            $(".three-four .linkblock").css("background-color", "#" + colour);
            $(".three-four .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourthree_four = colour;
        }
    });
    if (typeof localStorage.locallinkthree_four !== 'undefined' && localStorage.locallinkthree_four !== null){
        $("a.three-four").attr("href", "http://" + localStorage.locallinkthree_four);
        $('.diathree-four input#txtLink').val(localStorage.locallinkthree_four);}
    if (typeof localStorage.localimgthree_four !== 'undefined' && localStorage.localimgthree_four !== null){
        $(".three-four .link").css("background-image", "url(http://" + localStorage.localimgthree_four + ")");
        $('.diathree-four input#txtImage').val(localStorage.localimgthree_four);}
    if (typeof localStorage.localcolourthree_four !== 'undefined' && localStorage.localcolourthree_four !== null){
        $(".three-four .linkblock").css("background-color", "#" + localStorage.localcolourthree_four);
        $(".three-four .linkblock").css("border", "3px solid #" + localStorage.localcolourthree_four);
        $('.diathree-four input#txtColour').val(localStorage.localcolourthree_four);}


    // Settings dia three-five \\
    $(".diathree-five input").change(function(){ // Dia three-five
        var checklink = $(".diathree-five input#txtLink");
        var checkimage = $(".diathree-five input#txtImage");
        var checkcolour = $(".diathree-five input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diathree-five input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.three-five").attr("href", "http://" + link);
            localStorage.locallinkthree_five = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diathree-five input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".three-five .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgthree_five = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diathree-five input#txtColour').val();
            $(".three-five .linkblock").css("background-color", "#" + colour);
            $(".three-five .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourthree_five = colour;
        }
    });
    if (typeof localStorage.locallinkthree_five !== 'undefined' && localStorage.locallinkthree_five !== null){
        $("a.three-five").attr("href", "http://" + localStorage.locallinkthree_five);
        $('.diathree-five input#txtLink').val(localStorage.locallinkthree_five);}
    if (typeof localStorage.localimgthree_five !== 'undefined' && localStorage.localimgthree_five !== null){
        $(".three-five .link").css("background-image", "url(http://" + localStorage.localimgthree_five + ")");
        $('.diathree-five input#txtImage').val(localStorage.localimgthree_five);}
    if (typeof localStorage.localcolourthree_five !== 'undefined' && localStorage.localcolourthree_five !== null){
        $(".three-five .linkblock").css("background-color", "#" + localStorage.localcolourthree_five);
        $(".three-five .linkblock").css("border", "3px solid #" + localStorage.localcolourthree_five);
        $('.diathree-five input#txtColour').val(localStorage.localcolourthree_five);}


    // Dia settings three-six \\
    $(".diathree-six input").change(function(){ // Dia three-six
        var checklink = $(".diathree-six input#txtLink");
        var checkimage = $(".diathree-six input#txtImage");
        var checkcolour = $(".diathree-six input#txtColour");
        if (checklink.val().length > 0) {
            var link = $('.diathree-six input#txtLink').val();
            link = link.replace("http://", "");
            link = link.replace("https://", "");
            $("a.three-six").attr("href", "http://" + link);
            localStorage.locallinkthree_six = link;
        }
        if (checkimage.val().length > 0) {
            var image = $('.diathree-six input#txtImage').val();
            image = image.replace("http://", "");
            image = image.replace("https://", "");
            $(".three-six .link").css("background-image", "url(http://" + image + ")");
            localStorage.localimgthree_six = image;
        }
        if (checkcolour.val().length > 0) {
            var colour = $('.diathree-six input#txtColour').val();
            $(".three-six .linkblock").css("background-color", "#" + colour);
            $(".three-six .linkblock").css("border", "3px solid #" + colour);
            localStorage.localcolourthree_six = colour;
        }
    });
    if (typeof localStorage.locallinkthree_six !== 'undefined' && localStorage.locallinkthree_six !== null){
        $("a.three-six").attr("href", "http://" + localStorage.locallinkthree_six);
        $('.diathree-six input#txtLink').val(localStorage.locallinkthree_six);}
    if (typeof localStorage.localimgthree_six !== 'undefined' && localStorage.localimgthree_six !== null){
        $(".three-six .link").css("background-image", "url(http://" + localStorage.localimgthree_six + ")");
        $('.diathree-six input#txtImage').val(localStorage.localimgthree_six);}
    if (typeof localStorage.localcolourthree_six !== 'undefined' && localStorage.localcolourthree_six !== null){
        $(".three-six .linkblock").css("background-color", "#" + localStorage.localcolourthree_six);
        $(".three-six .linkblock").css("border", "3px solid #" + localStorage.localcolourthree_six);
        $('.diathree-six input#txtColour').val(localStorage.localcolourthree_six);}

});