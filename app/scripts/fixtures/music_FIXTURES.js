App.Playlist.FIXTURES = [{
  playlistLines: ["1", "2", "3", "4", "5"]
}];

App.PlaylistLine.FIXTURES = [{
    "id": "1",
    "type": "music",
    "basket": "fake_basket1",
    "artist": "first_fake_artist",
    "track": "mmfr00000001",
    "date": "2013/09/12 11:15"
  },{
    "id": "2",
    "type": "music",
    "basket": "fake_basket1",
    "artist": "first_fake_artist",
    "track": "mmfr00000001",
    "date": "2013/09/12 11:10"
  },{
    "id": "3",
    "type": "music",
    "basket": "fake_basket1",
    "artist": "first_fake_artist",
    "track": "mmfr00000001",
    "date": "2013/09/12 11:05"
  },{
    "id": "4",
    "type": "music",
    "basket": "fake_basket1",
    "artist": "first_fake_artist",
    "track": "mmfr00000001",
    "date": "2013/09/12 10:55"
  },{
    "id": "5",
    "type": "music",
    "basket": "fake_basket1",
    "artist": "first_fake_artist",
    "track": "mmfr00000001",
    "date": "2013/09/12 10:50"
}];

App.Program.FIXTURES = [{
    "id": "fake_program_a",
    "name": "fake Program A",
    "prgLines": ["fake_program_a1", "fake_program_a2", "fake_program_a3"]
  }, {
    "id": "fake_program_b",
    "name": "fake Program B",
    "prgLines": ["fake_program_b1", "fake_program_b2"]
  }, {
    "id": "fake_program_c",
    "name": "fake Program C",
    "prgLines": ["fake_program_c1"]
}];

App.PrgLine.FIXTURES = [{
    "id": "fake_program_a1",
    "basketName" : "fake basket 1",
    "basket" : ["fake_basket1"],
    "properties": "blabla 1"
  }, {
    "id": "fake_program_a2",
    "basketName" : "fake basket 2",
    "basket" : ["fake_basket2"],
    "properties": "blabla 2"
  }, {
    "id": "fake_program_a3",
    "basketName" : "fake basket 3",
    "basket" : ["fake_basket3"],
    "properties": "blabla 3"
  }, {
    "id": "fake_program_b1",
    "basketName" : "fake basket 2",
    "basket" : ["fake_basket2"],
    "properties": "blabla b1"
  }, {
    "id": "fake_program_b2",
    "basketName" : "fake basket 3",
    "basket" : ["fake_basket3"],
    "properties": "blabla b2"
}];

App.Basket.FIXTURES = [{
    "id": "fake_basket1",
    "name": "fake basket 1",
    "tracks": ["mmfr00000001", "mmfr00000003"]
  }, {
    "id": "fake_basket2",
    "name": "fake basket 2",
    "tracks": ["mmfr00000002", "mmfr00000005"]
  }, {
    "id": "fake_basket3",
    "name": "fake basket 3",
    "tracks": ["mmfr00000001", "mmfr00000002", "mmfr00000003"]
  }, {
    "id": "fake_basket4",
    "name": "fake basket 4",
    "tracks": ["mmfr00000006",
      "mmfr00000007",
      "mmfr00000008",
      "mmfr00000009"]
}];


App.Track.FIXTURES = [{
    "id": "mmfr00000001",
    "name": "fake track 1"
  }, {
    "id": "mmfr00000002",
    "name": "fake track 2"
  }, {
    "id": "mmfr00000003",
    "name": "fake track 3"
  }, {
    "id": "mmfr00000004",
    "name": "fake track 4"
  }, {
    "id": "mmfr00000005",
    "name": "fake track 5"
  }, {
    "id": "mmfr00000006",
    "name": "fake track 6"
  }, {
    "id": "mmfr00000007",
    "name": "fake track 7"
  }, {
    "id": "mmfr00000008",
    "name": "fake track 8"
  }, {
    "id": "mmfr00000009",
    "name": "fake track 9"
}];


App.Mssii.FIXTURES = [{
    "id": "regular",
    "name": "regular"
  }, {
    "id": "events",
    "name": "events"
  }, {
    "id": "open_close",
    "name": "open/close"
  }, {
    "id": "adcom",
    "name": "adcom"
  }, {
    "id": "locals",
    "name": "locals"
}];
