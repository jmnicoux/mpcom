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
    "track": "mmfr00000003",
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
    "zone": "1",
    "prgLines": ["fake_program_a1", "fake_program_a2", "fake_program_a3"],
    "lastEdit": "2013/02/01 13:14"
  }, {
    "id": "fake_program_b",
    "name": "fake Program B",
    "zone": "1",
    "prgLines": ["fake_program_b1", "fake_program_b2"],
    "lastEdit": "2013/09/10 06:54"
  }, {
    "id": "fake_program_c",
    "name": "fake Program C",
    "zone": "1",
    "prgLines": ["fake_program_c1"],
    "lastEdit": "2013/07/13 01:00"
}];

App.PrgLine.FIXTURES = [{
    "id": "fake_program_a1",
    "basket" : "fake_basket1",
    "startDate" : "2010/01/01 00:00",
    "endDate" : "2027/01/01 19:00",
    "startValidity": "10:00",
    "endValidity": "13:30",
    "Mon": "true",
    "Tue": "true",
    "Wed": "true",
    "Thu": "true",
    "Fri": "false",
    "Sat": "true",
    "Sun": "true",
    "frq": "1"
  }, {
    "id": "fake_program_a2",
    "basketName" : "fake basket 2",
    "basket" : "fake_basket2",
    "startDate" : "2010/01/01 00:00",
    "endDate" : "2027/01/01 19:00",
    "startValidity": "10:00",
    "endValidity": "13:30",
    "Mon": "true",
    "Tue": "true",
    "Wed": "true",
    "Thu": "true",
    "Fri": "false",
    "Sat": "true",
    "Sun": "true",
    "frq": "973"
  }, {
    "id": "fake_program_a3",
    "basketName" : "fake basket 3",
    "basket" : "fake_basket3",
    "startDate" : "2010/01/01 00:00",
    "endDate" : "2027/01/01 19:00",
    "startValidity": "10:00",
    "endValidity": "13:30",
    "Mon": "true",
    "Tue": "true",
    "Wed": "true",
    "Thu": "true",
    "Fri": "false",
    "Sat": "true",
    "Sun": "true",
    "frq": "3"
  }, {
    "id": "fake_program_b1",
    "basketName" : "fake basket 2",
    "basket" : "fake_basket2",
    "startDate" : "2010/01/01 00:00",
    "endDate" : "2027/01/01 19:00",
    "startValidity": "10:00",
    "endValidity": "13:30",
    "Mon": "true",
    "Tue": "true",
    "Wed": "true",
    "Thu": "true",
    "Fri": "false",
    "Sat": "true",
    "Sun": "true",
    "frq": "3"
  }, {
    "id": "fake_program_b2",
    "basketName" : "fake basket 3",
    "basket" : "fake_basket3",
    "startDate" : "2010/01/01 00:00",
    "endDate" : "2027/01/01 19:00",
    "startValidity": "10:00",
    "endValidity": "13:30",
    "Mon": "true",
    "Tue": "true",
    "Wed": "true",
    "Thu": "true",
    "Fri": "false",
    "Sat": "true",
    "Sun": "true",
    "frq": "3"
}];

App.Basket.FIXTURES = [{
    "id": "fake_basket1",
    "name": "fake basket 1",
    "tracks": ["mmfr00000001", "mmfr00000003"],
    "lastEdit": "2013/05/21 14:02"
  }, {
    "id": "fake_basket2",
    "name": "fake basket 2",
    "tracks": ["mmfr00000002", "mmfr00000005"],
    "lastEdit": "2013/02/06 10:33"
  }, {
    "id": "fake_basket3",
    "name": "fake basket 3",
    "tracks": ["mmfr00000001", "mmfr00000002", "mmfr00000003"],
    "lastEdit": "2013/04/11 09:03"
  }, {
    "id": "fake_basket4",
    "name": "fake basket 4",
    "tracks": ["mmfr00000006",
      "mmfr00000007",
      "mmfr00000008",
      "mmfr00000009"],
    "lastEdit": "2013/08/12 "
}];


App.Track.FIXTURES = [{
    "id": "mmfr00000001",
    "album": "fake_album_a",
    "artist": "fake_artist_adf",
    "name": "fake track 1",
    "label": "myLabel",
    "year": "2013",
    "duration": "3:12",
    "lastEdit": "2013/07/13",
    "consistency": "true"
  }, {
    "id": "mmfr00000002",
    "album": "fake_album_a",
    "artist": "fake_artist_aa",
    "name": "fake track 2",
    "label": "myLabel",
    "year": "2011",
    "duration": "3:12",
    "lastEdit": "2013/07/13",
    "consistency": "true"
  }, {
    "id": "mmfr00000003",
    "album": "fake_album_a",
    "artist": "fake_artist_bbb",
    "name": "fake track 3",
    "label": "myLabel",
    "year": "2012",
    "duration": "2:01",
    "lastEdit": "2013/07/13",
    "consistency": "true"
  }, {
    "id": "mmfr00000004",
    "album": "fake_album_a",
    "artist": "fake_artist_adf",
    "name": "fake track 4",
    "label": "myLabel",
    "year": "2011",
    "duration": "1:39",
    "lastEdit": "2013/07/13 17:32",
    "consistency": "true"
  }, {
    "id": "mmfr00000005",
    "album": "fake_album_a",
    "artist": "fake_artist_adf",
    "name": "fake track 5",
    "label": "myLabel",
    "year": "2011",
    "duration": "4:22",
    "lastEdit": "2013/07/13 18:03",
    "consistency": "true"
  }, {
    "id": "mmfr00000006",
    "album": "fake_album_a",
    "artist": "fake_artist_adf",
    "name": "fake track 6",
    "label": "myLabel",
    "year": "2011",
    "duration": "1:03",
    "lastEdit": "2013/07/13 01:05",
    "consistency": "true"
  }, {
    "id": "mmfr00000007",
    "album": "fake_album_a",
    "artist": "fake_artist_adf",
    "name": "fake track 7",
    "label": "myLabel",
    "year": "2011",
    "duration": "0:51",
    "lastEdit": "2012/04/13 14:32",
    "consistency": "true"
  }, {
    "id": "mmfr00000008",
    "album": "fake_album_a",
    "artist": "fake_artist_adf",
    "name": "fake track 8",
    "label": "myLabel",
    "year": "2011",
    "duration": "3:12",
    "lastEdit": "2013/02/18 07:06",
    "consistency": "true"
  }, {
    "id": "mmfr00000009",
    "album": "fake_album_a",
    "artist": "fake_artist_adf",
    "name": "fake track 9",
    "label": "myLabel",
    "year": "2011",
    "duration": "3:12",
    "lastEdit": "2013/06/23 23:33",
    "consistency": "true"
}];


App.Mssii.FIXTURES = [{
    "id": "regulars_1",
    "name": "regulars",
    "type": "regular",
    "zone": "1",
    "mssiiLines": [],
    "lastEdit": "2013/06/23 23:33"
  }, {
    "id": "events_1",
    "name": "events",
    "type": "event",
    "zone": "1",
    "mssiiLines": [],
    "lastEdit": "2013/06/23 23:33"
  }, {
    "id": "opens_closes_1",
    "name": "opens/closes",
    "type": "event",
    "zone": "1",
    "mssiiLines": [],
    "lastEdit": "2013/06/23 23:33"
  }, {
    "id": "adcoms_1",
    "name": "adcoms",
    "type": "local",
    "zone": "1",
    "mssiiLines": [],
    "lastEdit": "2013/06/23 23:33"
  }, {
    "id": "local_1",
    "name": "locals",
    "type": "local",
    "zone": "1",
    "mssiiLines": [],
    "lastEdit": "2013/06/23 23:33"
}];


