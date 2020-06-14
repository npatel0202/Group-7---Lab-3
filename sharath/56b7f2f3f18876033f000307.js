function inAscOrder(a) {
    let result = true;
    for (i = 0; i < a.length-1; i++) { 
        if (a[i] > a[i + 1]) {
            result = false;
            break;
        }
    }
    return result;
    }