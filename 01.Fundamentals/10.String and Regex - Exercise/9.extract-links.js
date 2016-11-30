function extractLinks(input) {

    let pattern =/www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    let matches  = [];
    for (let line of input){
        let match = line.match(pattern);
        if (match) matches.push(match);
    }
    console.log(matches.join('\n'));
}

extractLinks(["Join WebStars now for free, at www.web-stars.com","You can also support our partners:","Internet - www.internet.com","WebSpiders - www.webspiders101.com","Sentinel - www.sentinel.-ko"]);