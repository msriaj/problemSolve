//return the total number of smiling faces in the array
function countSmileys(arr) {

    if (arr.length > 0) {
        const a = [":)", ":-)", ":~)", ";)", ";-)", ";~)", ":D", ":-D", ":~D", ";D", ";-D", ";~D"];
        let save = a.filter(Set.prototype.has, new Set(arr));
        return save.length;

    }

    else {
        return 0;
    }

}

console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
