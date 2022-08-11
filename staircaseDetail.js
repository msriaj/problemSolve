// Staircase detail

// This is a staircase of size:

//    #
//   ##
//  ###
// ####

function staircase(n) {
    let textSpace = " ", textHash = "#"

    for (let i = 1; i <= n; i++) {
        let newSpacev = "";
        for (let index = 1; index <= n - i; index++) {
            newSpacev += textSpace;
        }

        for (let index2 = 1; index2 <= n - (n - i); index2++) {
            newSpacev += textHash;
        }
        console.log(newSpacev);
    }


}
staircase(6)