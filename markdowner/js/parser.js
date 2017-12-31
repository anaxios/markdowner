var lexicon = {
    T_HEAD: "<h1>",
    T_HEAD_END: "</h1>",
};
var T_HEAD = ["T_HEAD_1", "T_HEAD_2", "T_HEAD_3", "T_HEAD_4", "T_HEAD_5", "T_HEAD_6", ]
var htmlOutput = [];

var markDowner = (inputText) => {
    let hashAccum = 0;
    for (let i = 0; inputText.length > i; i++) {  
        if (inputText.charAt(i) && inputText.charAt((i + 1)) === "#") {
            hashAccum++;
        } else if (hashAccum > 0 && hashAccum < 6 && inputText.charAt(i + 1) != "#") {
            htmlOutput.unshift(T_HEAD[hashAccum - 1]);
            hashAccum = 0;
        } else if (inputText.charAt(i) == "#" && inputText.charAt(i + 1) != "#") {
            htmlOutput.unshift(T_HEAD[hashAccum]);
        } else if (hashAccum > 5) {
            while (hashAccum > 0) {htmlOutput.unshift("#"); hashAccum--;}
        } else {
            htmlOutput.unshift(inputText.charAt(i));
        }

        
    }
    return htmlOutput;

}

var mdParser = character => {
    if (character === "#") {
        return "T_HEAD";
    } else if (character === "\n") {
        if (backTrace() == true) return "T_HEAD_END"; // 
    } else {
        return character;
    }
}

var backTrace = character => {
    for (element of htmlOutput){
        switch (element) {
            case "T_HEAD_END":
                return false;
                break;
            case "T_HEAD":
                return true;
                break;
            default:
                continue;
        }
    } 
   // else if (c.find(isExcapeChar)) {}
   
    
}


