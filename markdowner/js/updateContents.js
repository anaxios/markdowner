function updateContents() {
    var converter = new showdown.Converter();
    $("#htmlPanel").html(converter.makeHtml($("#mdPanel").val()));
    $("iframe").contents().find("head").html("<style type='text/css'>" + $("#cssPanel").val() + "</style> <base target='_blank'>");
    $("iframe").contents().find("body").html($("#htmlPanel").val());
}
