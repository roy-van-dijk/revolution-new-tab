$(document).ready(function(){

    $("[id='txtBgImage'").click(function(){this.select();});
    $("[id='txtLocation'").click(function(){this.select();});
    $("[id='txtLink'").click(function(){this.select();});
    $("[id='txtImage'").click(function(){this.select();});

    // $('#export').click(function(){
    //     //var hiddenElement = document.createElement('a');
    //     // hiddenElement.href = 'data:attachment/text,' + encodeURI(toExport);
    //     // hiddenElement.target = '_blank';
    //     // hiddenElement.download = 'RNT_Export.json';
    //     // hiddenElement.click();

    //     var toExport = JSON.stringify(localStorage);
    //     chrome.storage.sync.clear();
    //     chrome.storage.sync.set({'RNT_settings': toExport}, function() {
    //         alert('Settings saved, you can now import them on any device that you have logged into chrome with.');
    //     });

    // });
    // $('#import').click(function(){
    //     // $.getJSON("./RNT_Export.json", function(json) {
    //     //     Object.keys(json).forEach(function (k) {
    //     //        localStorage.setItem(k, json[k]);
    //     //         console.log(k + " " + json[k]);
    //     //     });
    //     // });

    //     localStorage.clear();
    //     chrome.storage.sync.get("RNT_settings", function(json){
    //        Object.keys(json).forEach(function (k) {
    //            localStorage.setItem(k, json[k]);
    //             console.log(k + " " + json[k]);
    //         });
    //     });
    //     //location.reload();
    // });
    $('.tips').click(function(){
        $('.tipsbody').toggleClass('displaynone');
        if($('.tips').html() == "Show Quick Tips"){
            $('.tips').html('Hide Quick Tips');
        }
        else{
            $('.tips').html('Show Quick Tips');
        }
        var bPopup = $('.settingsdialog').bPopup();
        bPopup.reposition(200);
    });

    // Click animations \\
    $('.one-one .linkblock').mousedown(function(){ $('.one-one .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.one-one .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.one-two .linkblock').mousedown(function(){ $('.one-two .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.one-two .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.one-three .linkblock').mousedown(function(){ $('.one-three .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.one-three .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.one-four .linkblock').mousedown(function(){ $('.one-four .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.one-four .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.one-five .linkblock').mousedown(function(){ $('.one-five .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.one-five .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.one-six .linkblock').mousedown(function(){ $('.one-six .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.one-six .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.two-one .linkblock').mousedown(function(){ $('.two-one .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.two-one .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.two-two .linkblock').mousedown(function(){ $('.two-two .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.two-two .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.two-three .linkblock').mousedown(function(){ $('.two-three .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.two-three .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.two-four .linkblock').mousedown(function(){ $('.two-four .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.two-four .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.two-five .linkblock').mousedown(function(){ $('.two-five .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.two-five .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.two-six .linkblock').mousedown(function(){ $('.two-six .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.two-six .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.three-one .linkblock').mousedown(function(){ $('.three-one .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.three-one .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.three-two .linkblock').mousedown(function(){ $('.three-two .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.three-two .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.three-three .linkblock').mousedown(function(){ $('.three-three .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.three-three .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.three-four .linkblock').mousedown(function(){ $('.three-four .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.three-four .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.three-five .linkblock').mousedown(function(){ $('.three-five .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.three-five .linkblock').css('transform', 'scale(1)'); }, 150 ); });
    $('.three-six .linkblock').mousedown(function(){ $('.three-six .linkblock').css('transform', 'scale(0.9)'); setTimeout(function () { $('.three-six .linkblock').css('transform', 'scale(1)'); }, 150 ); });

    $('#chkEdit').change(function() { // Edit mode toggle
        $(".editblock").toggleClass("displaynone");
        $(".editmessage").toggleClass("displaynone");
    }); // Edit mode toggle

    $('#chkRound').change(function() { // Circle toggle
        if($('#chkRound').prop('checked') == true){
            localStorage.localround = 1;
            $('.linkblock').addClass('circle');
            $('.editblock').addClass('circle');
        }
        if($('#chkRound').prop('checked') == false){
            localStorage.localround = 0;
            $('.linkblock').removeClass('circle');
            $('.editblock').removeClass('circle');
        }
    });
    if(localStorage.localround == 1){
        $('#chkRound').prop('checked', 'true');
        $('.linkblock').addClass('circle');
        $('.editblock').addClass('circle');
    }
    if(localStorage.localround == 0){
        $('.linkblock').removeClass('circle');
        $('.editblock').removeClass('circle');
    } // Circle toggle

    $('#chkTransparent').change(function() { // Transparency toggle
        if($('#chkTransparent').prop('checked') == true){
            localStorage.localtransparent = 1;
            $('.linkblock').addClass('transparencyToggled');
        }
        if($('#chkTransparent').prop('checked') == false){
            localStorage.localtransparent = 0;
            $('.linkblock').removeClass('transparencyToggled');
        }
    });
    if(localStorage.localtransparent == 1){
        $('#chkTransparent').prop('checked', 'true');
        $('.linkblock').addClass('transparencyToggled');
    }
    if(localStorage.localtransparent == 0){
        $('.linkblock').removeClass('transparencyToggled');
    } // Transperency toggle

    $('#chkAmpm').change(function() { // Am / Pm toggle
        $('#chkStopwatch').prop('checked', false);
        localStorage.localstopwatch = 0;
        if($('#chkAmpm').prop('checked') == true){
            localStorage.localAmpm = 1;
            $('.time').addClass('displaynone');
            $('.timeAmpm').removeClass('displaynone');
        }
        if($('#chkAmpm').prop('checked') == false){
            localStorage.localAmpm = 0;
            $('.timeAmpm').addClass('displaynone');
            $('.time').removeClass('displaynone');
        }
        $('.stopwatch').addClass('displaynone');
        $('.date').removeClass('displaynone');
    });
    if(localStorage.localAmpm == 1){
        $('#chkAmpm').prop('checked', 'true');
        $('.time').addClass('displaynone');
        $('.timeAmpm').removeClass('displaynone');
    }
    if(localStorage.localAmpm == 0){
            $('.timeAmpm').addClass('displaynone');
            $('.time').removeClass('displaynone');
    } // Am / Pm toggle

    $('#chkStopwatch').change(function(){ // Stopwatch toggle
        if (typeof localStorage.getItem("localAmpm") == 'undefined' || localStorage.getItem("localAmpm") == null){
            localStorage.localApmpm = 0;
        }
        if($('#chkStopwatch').prop('checked') == true){
            $('.time').addClass('displaynone');
            $('.timeAmpm').addClass('displaynone');
            $('.date').addClass('displaynone');
            $('.stopwatch').removeClass('displaynone');
            localStorage.localstopwatch = 1;
        }
        if($('#chkStopwatch').prop('checked') == false){
            if (localStorage.localAmpm == 0){
                $('.time').removeClass('displaynone');
                $('.timeAmpm').addClass('displaynone');
            }
            if (localStorage.localAmpm == 1){
                $('.time').addClass('displaynone');
                $('.timeAmpm').removeClass('displaynone');
            }
            $('.date').removeClass('displaynone');
            $('.stopwatch').addClass('displaynone');
            localStorage.localstopwatch = 0;
        }
    });
    if (localStorage.localstopwatch == 1){
        $('.time').addClass('displaynone');
        $('.timeAmpm').addClass('displaynone');
        $('.date').addClass('displaynone');
        $('.stopwatch').removeClass('displaynone');
        $('#chkStopwatch').prop('checked', true);
    }
    if (localStorage.localstopwatch == 0){
        if (localStorage.localAmpm == 0){
            $('.time').removeClass('displaynone');
            $('.timeAmpm').addClass('displaynone');
        }
        if (localStorage.localAmpm == 1){
            $('.time').addClass('displaynone');
            $('.timeAmpm').removeClass('displaynone');
        }
        $('.date').removeClass('displaynone');
        $('.stopwatch').addClass('displaynone');
        localStorage.localstopwatch = 0;
    } // Stopwatch toggle

    $("#txtBackground").change(function(){ // Background colour
        var backgroundcolor = $('#txtBackground').val();
        $("body").css("background-color", "#" + backgroundcolor);
        localStorage.localbgcolor = backgroundcolor;
    });
    if (typeof localStorage.getItem("localbgcolor") !== 'undefined' && localStorage.getItem("localbgcolor") !== null){
        $("body").css("background-color", "#" + localStorage.getItem("localbgcolor"));
        $('#txtBackground').attr('value', localStorage.getItem("localbgcolor"));
    } // End background colour

    $("#txtBgImage").on('input propertychange paste', function(){ // Background image
        var backgroundimage = $('#txtBgImage').val();
        backgroundimage = backgroundimage.replace("http://", "");
        backgroundimage = backgroundimage.replace("https://", "");
        $("body").css("background-image", "url(http://" + backgroundimage + ")");
        localStorage.localbgimg = backgroundimage;
    });
    if (typeof localStorage.getItem("localbgimg") !== 'undefined' && localStorage.getItem("localbgimg") !== null){
        $("body").css("background-image", "url(http://" + localStorage.getItem("localbgimg") + ")");
        $('#txtBgImage').val(localStorage.localbgimg);
    } // End background image

    $(".settingsbutton").click(function(){ // Settingsdialog
        $('.settingsdialog').bPopup({
            speed: 100,
            followSpeed: 200
        });
    }); // End settingsdialog

    if (typeof localStorage.getItem("localloaded") == 'undefined' || localStorage.getItem("localloaded") == null){ // Hide tiles on default;
        localStorage.localdptwo_four = 1;
        localStorage.localdptwo_five = 1;
        localStorage.localdptwo_six = 1;
        localStorage.localdpthree_one = 1;
        localStorage.localdpthree_two = 1;
        localStorage.localdpthree_three = 1;
        localStorage.localdpthree_four = 1;
        localStorage.localdpthree_five = 1;
        localStorage.localdpthree_six = 1;
        localStorage.localAmpm = 0;
        if (localStorage.localloaded != 1){
            localStorage.localloaded = 1;
            location.reload();
        }
    } // Hide tiles on default

    $("#restoredefaults").click(function(){ // Restore defaults
        if (confirm('Warning: Clicking OK will restore all settings to their defaults. All your changes will be lost.')) {
            //chrome.storage.sync.clear();
            localStorage.clear();
            location.reload();
        }
    }); // Restore defaults
});
