// update output on initial load
$("document").ready( () => {
    resizePanelHeight();
    resizePanelWidth();
    updateContentHead();
    updateContentBody();
});

$(window).resize( () => {
    resizePanelHeight();
    resizePanelWidth();
});

$(".toggleButton").hover(function() {
    $(this).addClass("highlightedButton");
}, function() {
    $(this).removeClass("highlightedButton");
});

$(".toggleButton").click( function() {
    $(this).toggleClass("activeButton");
    $(this).removeClass("highlightedButton");
    let panelId = $(this).attr("id");
    panelId = panelId.slice(0,-6);
    panelId += "Panel";
    $("#" + panelId).toggleClass("hidden");
    // let numberOfActivePanels = ($(".panel").length - $(".hidden").length);
    // $(".panel").width(($(window).width() / numberOfActivePanels) - (($(".panel").length - $(".hidden").length)));
    resizePanelWidth();
});

$("textarea").on("change keyup paste", () => {
    updateContentHead();
    updateContentBody();
});


function resizePanelHeight () {
    $(".panel").height(
        panelFillEmpySpace(
            ($(window).height()), 
            ($("#topBar").height() + 15))
    );
}

function resizePanelWidth () {
    $(".panel").width(
        dividePanelEvenly(
            ($(window).width() - 15),
            ($(".panel").length - $(".hidden").length)
        )
    );
}

function panelFillEmpySpace (windowSize, sizeOfObstructingElements) {
   return (windowSize - sizeOfObstructingElements);
}

function dividePanelEvenly (windowSize, numberOfElements) {
    return windowSize / numberOfElements;
}