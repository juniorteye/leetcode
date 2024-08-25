var findWordsContaining = function(words, x) {
    let sip = [];
    words.forEach((val, index) => {
        if (val.includes(x)) {
            sip.push(index);
        }
    });
    return sip;
};
