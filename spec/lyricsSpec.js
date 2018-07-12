describe("Lyrics", function() {
  var lyrics;

  beforeEach(function() {
    lyrics = new Lyrics();
  });

  it("prints the lyrics for 10 green bottles", function() {
    lyrics.play();
    expect(lyrics.play()).toEqual("10 Green Bottles Hanging on the Wall. 10 Green Bottles Hanging on the Wall. And if one green bottle should accidentally fall, there'll be 9 Green Bottles Hanging on the Wall.")
  });

});
