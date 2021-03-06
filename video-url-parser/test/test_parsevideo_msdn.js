/* jshint -W097 */
/* jshint -W117 */
"use strict";

const { assert } = require("chai");
const { ParseVideo } = require('../js/parsevideo');
const fs  = require("fs");

describe('msdn.com', function() {
    const url = 'https://channel9.msdn.com/Events/Visual-Studio/Visual-Studio-2017-Launch/T108';
    it(url, function() {
        const html = fs.readFileSync('test/data/msdn-1.html').toString();
        const video = new ParseVideo(url, html);
        const video_urls = video.Parse();
        assert.deepEqual(video_urls, [ 
            "https://sec.ch9.ms/ch9/e38e/55fb9c4b-33b1-4742-9fda-225eb92ee38e/VS2017LaunchT108_mid.mp4",
            "https://sec.ch9.ms/ch9/e38e/55fb9c4b-33b1-4742-9fda-225eb92ee38e/VS2017LaunchT108_high.mp4",
            "https://sec.ch9.ms/ch9/e38e/55fb9c4b-33b1-4742-9fda-225eb92ee38e/VS2017LaunchT108.mp4"            
        ]);
    });   
});
