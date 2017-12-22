function updateOutput() {
    var converter = new showdown.Converter();
    $("#htmlPanel").html(converter.makeHtml($("#mdPanel").val()));
    $("iframe").contents().find("head").html("<style type='text/css'>" + $("#cssPanel").val() + "</style>");
    $("iframe").contents().find("body").html($("#htmlPanel").val());
}