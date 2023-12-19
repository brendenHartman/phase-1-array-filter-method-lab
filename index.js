function findMatching(arr,name){
    return arr.filter(function (cur){
        return cur.toUpperCase() === name.toUpperCase();
    })
}

function fuzzyMatch(arr,lets){
    return arr.filter(function (cur){
        return cur.slice(0,lets.length) === lets;
    })
}

function matchName(arr,str){
    return arr.filter(function(obj){
        return obj["name"] === str;
    })
}