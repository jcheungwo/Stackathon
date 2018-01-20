function setIntervalIsEvil(func, wait, times){
    var interv = function(w, t){
        return function(){
            if (typeof t === 'undefined' || t-- > 0){
                setTimeout(interv, w);
                try {
                    func(null);
                }
                catch (err){
                    t = 0;
                    throw err.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
}

module.exports = setIntervalIsEvil
