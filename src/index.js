module.exports = function toReadable(number) {
    if (number == 0) return "zero";

    let numbersDictionary = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
    };

    let tensDictionary = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    let dozensDictionary = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let result = "";
    let numAsString = "";
    let numberArray = number.toString().split("").reverse();

    for (let i = numberArray.length - 1; i >= 0; i--) {
        if (numberArray[i] === "0") continue;

        if (i % 3 == 1) {
            if (numberArray[i] === "1") {
                numAsString =
                    tensDictionary[
                        numberArray
                            .slice(i - 1, i + 1)
                            .reverse()
                            .join("")
                    ];
                i--;
            } else {
                numAsString = dozensDictionary[numberArray[i]];
            }
        } else {
            numAsString = numbersDictionary[numberArray[i]];
            if (i % 3 == 2) {
                if (Math.trunc(i / 3) == 0) numAsString += " hundred";
            }
        }

        result += ` ${numAsString}`;
    }

    return result.trim();
};
