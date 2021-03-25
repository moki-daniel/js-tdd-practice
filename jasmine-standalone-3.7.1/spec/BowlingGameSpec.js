/*--In order to write code that mimics a bowling game, let's start with the simplest concept.
A player rolls the ball!

For each "turn" in bowling, a player gets two rolls.

We'll cover two broad scenarios that could arise when a player rolls:

Player knocks down impressive pins (a spare or a strike)

Player knocks down 0 pins

Spare: when a player hits all the pins over the course of two rolls (one turn)

Strike: when a player hits all the pins in a single roll --*/

describe("bowling game", function() {

/*--A bowling player rolls twice in one turn, right, and they have 20 turns in one game? Let's say that, 
every single turn, they hit zero pins., This is an easy scenario to test! I'll add it to the first spec:--*/
        it("should properly calculate a gutter game", function() {
            game.roll(20, 0);
            expect(game.score()).toEqual(0);
        });
        it("should properly calculate a strike", function() {
            game.roll(20, 20);
            expect(game.score()).toEqual(20);
            it("should properly calculate a spare", function() {
                game.roll(20, 10);
                expect(game.score()).toEqual(10);
            });
        });
    });
