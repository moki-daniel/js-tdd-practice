//You need to check the number of words in a comment if more than 1000,
// then don't save but return an error

//BEHAVIOUR DRIVEN DEVELOPMENT

//GIVEN - the user leaves a comment 
//WHEN - the words are more than 1000 words
//THEN - the comment should not save
//AND - the user should see an error message

//TEST DRIVEN DEVELOPMENT
decribe("saving a comment", function() {
    it("should throw an error if the comment is over 1000 characters", function() {
        Comment.length = 1200;
        expect(function() {
            Comment.save();
        }).toThrowError("comment is too long");
    });
});