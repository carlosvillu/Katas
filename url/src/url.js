var url = exports,
    sys = require('sys');
url.rewrite = function(url){
    if(matches = url.match(/^\/article\/(\d+)$/)){
        url = '/article?id='+matches[1];
    }else if(matches = url.match(/^\/guide\/(\w+)\/2008\/(\w*)$/)){
        url = '/guide/' + matches[1] + '/2009/' + matches[2];
    }else if(matches = url.match(/^\/company\/(\w+)\/(\w*)$/)){
        url = '/company?country=' + matches[1];
        if(matches[2])
            url += '&city=' + matches[2];
    }
    return url;
};