var loc = window.location.href; 
if (loc.includes('genius.it')) {
    offset = loc.indexOf('genius.it');
    newloc = loc.slice(0,offset)+ loc.slice(offset+'genius.it/'.length);
    window.location.replace(newloc);
    }
