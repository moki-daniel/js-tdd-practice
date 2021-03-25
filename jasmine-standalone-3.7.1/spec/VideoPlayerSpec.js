/*--One great thing about Jasmine is that it comes with built-in matchers. Using matchers, 
you can test if:

two things are equal (or not).

if something is true (or not).

if something is defined (or not).

if something is greater than a value (or less than).

if an error is thrown (or not). and more!--**/


// the tests below describes the tests to be done on video player
describe("video player", function() {
    describe("when the page loads", function() {
        it("play the video automaticatically", function() {
            expect(videoPlaying).toBe(true);
        });
    })
    describe("when user clicks the play button", function() {
        it("it should play the video", function() {
            expect(videoPlaying).toBe(true)

        });
    });
});