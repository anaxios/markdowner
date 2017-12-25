function updateContentBody () {
    updateContentHtml(convertMdToHtml());
    $("iframe").contents().find("body").html($("#htmlPanel").val());
}

function updateContentHead (updateWith) {
    $("iframe").contents().find("head").html(
                                        "<style type='text/css'>" + 
                                        $("#cssPanel").val() + 
                                        "</style> <base target='_blank'>"
    );
}

function updateContentHtml (updateWith) {
    $("#htmlPanel").html(updateWith);
}

function convertMdToHtml () {
    var converter = new showdown.Converter();
   return converter.makeHtml($("#mdPanel").val());
}