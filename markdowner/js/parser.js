var lexicon = {
    T_HEAD: "<h1>",
    T_HEAD_END: "</h1>",
};
var T_HEAD = ["T_HEAD_1", "T_HEAD_2", "T_HEAD_3", "T_HEAD_4", "T_HEAD_5", "T_HEAD_6", ]
var htmlOutput = [];

var markDowner = (inputText) => {
    let mdSymbol = /#|~|\n/;
    let buffer = [];
    for (let i = 0; inputText.length > i; i++) {  
        if (mdSymbol.test(inputText.charAt(i))) {
            if (charBuffer.length != 0){
                isNotSymbol(charBuffer.join(""));
                buffer.length = 0;
            }
        } else { 
            if (buffer.length != 0) {
                isSymbol(buffer.join(""));
                buffer.length = 0;
            }

        }
        buffer.push(inputText.charAt(i));        
    }
    return htmlOutput;

}

var isSymbol = buffer => {
    switch (buffer) {
        case "#":
            writeToOutput(T_HEAD[0]);
            break;
        case "##":
            writeToOutput(T_HEAD[1]);
            break;
        case "###":
            writeToOutput(T_HEAD[2]);
            break;
        case "####":
            writeToOutput(T_HEAD[3]);
            break;
        case "#####":
            writeToOutput(T_HEAD[4]);
            break;        
        case "######":
            writeToOutput(T_HEAD[5]);
            break;
        case "\n\n":
            writeToOutput("</p>");
        default:
            writeToOutput(buffer);
        
    }

}

var isNotSymbol = symbol => {
    writeToOutput("<p>");
    writeToOutput(symbol);
}

var writeToOutput = symbol => {
    htmlOutput.push(symbol);
}


// must look ahead to get this to work easily 