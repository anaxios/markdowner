var lexicon = {
    T_HEAD: "<h1>",
    T_HEAD_END: "</h1>",
};

var htmlOutput = [];

var markDowner = (md) => {
// get input as string

// look through string for markdown
for (c of md) {
    mdParser(c);
}
return htmlOutput;
// add each element to parser list

// transfor lexicon to html tags
}

var mdParser = c => {
    if (c === "#") {
        htmlOutput.unshift("T_HEAD");
    } else if (c == "\n") {
        if (backTrace(c) == true) htmlOutput.unshift("T_HEAD_END");
    } else {
        htmlOutput.unshift(c);
    }
    return htmlOutput;
};

var backTrace = c => {
    for (element of htmlOutput){
     if (element === "T_HEAD") {break; return true}
     else {return false}
    } 
   // else if (c.find(isExcapeChar)) {}
   
    
}

var isT_HEAD = c => {
    return c === "T_HEAD";
}

