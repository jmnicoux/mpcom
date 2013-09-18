var express = require('express'),
  app = express();

var modules = [
  {
    "id": "music",
    "name": "Music",
    "submodules": ["playlist", "programs", "baskets", "tracks"]
  }, {
    "id": "ads",
    "name": "Ads",
    "submodules": ["planning", "mssiis", "adsTracks"]
  }, {
    "id": "settings",
    "name": "Settings",
    "submodules": ["eeprom", "network", "date", "misc", "audio"]
  }, {
    "id": "maintenance",
    "name": "Maintenance",
    "submodules": ["diagnostic", "update"]
  }, {
    "id": "help",
    "name": "Help",
    "submodules": ["docs", "contacts"]
  }
];


var submodules = [{
    "id": "playlist",
    "name": "Playlist"
  }, {
    "id": "programs",
    "name": "Programs"
  }, {
    "id": "baskets",
    "name": "Baskets"
  }, {
    "id": "tracks",
    "name": "Tracks"
  }, {
    "id": "planning",
    "name": "today's Planning"
  }, {
    "id": "mssiis",
    "name": "configuration files"
  }, {
    "id": "adsTracks",
    "name": "Tracks"
  }, {
    "id": "eeprom",
    "name": "Eeprom"
  }, {
    "id": "network",
    "name": "Network"
  }, {
    "id": "misc",
    "name": "Misc"
  }, {
    "id": "audio",
    "name": "Audio"
  }, {
    "id": "date",
    "name": "Date"
  }, {
    "id": "diagnostic",
    "name": "Diagnostic"
  }, {
    "id": "update",
    "name": "Update"
  }, {
    "id": "docs",
    "name": "Documentation"
  }, {
    "id": "contacts",
    "name": "contacts"
}];


var playlists = [{
  "playlistLines": ["1", "2", "3", "4", "5"],
  "date": "2013/09/12"
}];

var playlistLines = [{
    "id": "1",
    "type": "music",
    "basket": "fake_basket1",
    "artist": "first_fake_artist",
    "track": "mmfr00000001",
    "date": "2013/09/12 11:11"
  },{
    "id": "2",
    "type": "ads",
    "mssii": "regulars_1",
    "adsTrack": "fake_ads_1",
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

var programs = [{
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

var prgLines = [{
    "id": "fake_program_a1",
    "basket" : "fake_basket1",
    "startDate" : "2010/01/01 00:00",
    "endDate" : "2027/01/01 19:00",
    "startValidity": "10:00",
    "endValidity": "13:30",
    "dow": "FC",
    "frq": "1"
  }, {
    "id": "fake_program_a2",
    "basketName" : "fake basket 2",
    "basket" : "fake_basket2",
    "startDate" : "2010/01/01 00:00",
    "endDate" : "2027/01/01 19:00",
    "startValidity": "10:00",
    "endValidity": "13:30",
    "dow": "FE",
    "frq": "973"
  }, {
    "id": "fake_program_a3",
    "basketName" : "fake basket 3",
    "basket" : "fake_basket3",
    "startDate" : "2010/01/01 00:00",
    "endDate" : "2027/01/01 19:00",
    "startValidity": "10:00",
    "endValidity": "13:30",
    "dow": "FE",
    "frq": "3"
  }, {
    "id": "fake_program_b1",
    "basketName" : "fake basket 2",
    "basket" : "fake_basket2",
    "startDate" : "2010/01/01 00:00",
    "endDate" : "2027/01/01 19:00",
    "startValidity": "10:00",
    "endValidity": "13:30",
    "dow": "FE",
    "frq": "3"
  }, {
    "id": "fake_program_b2",
    "basketName" : "fake basket 3",
    "basket" : "fake_basket3",
    "startDate" : "2010/01/01 00:00",
    "endDate" : "2027/01/01 19:00",
    "startValidity": "10:00",
    "endValidity": "13:30",
    "dow": "FE",
    "frq": "3"
}];

var baskets = [{
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


var tracks = [{
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








var plannings = [{
    "id": "2013_09_17_1",
    "zone": "1",
    "planningLines": ["2013_09_17_1_10_14", "2013_09_17_1_10_39", "2013_09_17_1_17_00"],
    "date": "2013/09/17"
}];

var planningLines = [{
    "id": "2013_09_17_1_10_14",
    "mssii": "regulars_1",
    "adsTrack": "fake_ads_1",
    "date": "2013/09/17 10:14"
  }, {
    "id": "2013_09_17_1_10_39",
    "mssii": "regulars_1",
    "adsTrack": "fake_ads_2",
    "date": "2013/09/17 10:39"
  }, {
    "id": "2013_09_17_1_17_00",
    "mssii": "opens_closes_1",
    "adsTrack": "fake_ads_4",
    "date": "2013/09/17 17:00"
}];


var adsTracks = [{
    "id": "fake_ads_1",
    "name": "fake ads 1",
    "duration": "1:32",
    "lastEdit": "2013/06/11 12:14"
  }, {
    "id": "fake_ads_2",
    "name": "fake ads 2",
    "duration": "0:27",
    "lastEdit": "2013/08/27 08:16"
  }, {
    "id": "fake_ads_3",
    "name": "fake ads 3",
    "duration": "0:10",
    "lastEdit": "2013/09/17 10:07"
  }, {
    "id": "fake_ads_4",
    "name": "pre_open",
    "duration": "0:10",
    "lastEdit": "2013/09/17 09:17"
}];

var mssiis = [{
    "id": "regulars_1",
    "name": "regulars",
    "type": "regular",
    "zone": "1",
    "mssiiLines": ["regulars_1_1", "regulars_1_2"],
    "lastEdit": "2013/06/23 23:33",
    "subType": "window",
    "windowSize": "60",
    "endValidity": "2027/12/31"
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
    "type": "open/close",
    "zone": "1",
    "mssiiLines": [],
    "lastEdit": "2013/06/23 23:33"
  }, {
    "id": "adcoms_1",
    "name": "adcoms",
    "type": "adcom",
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

var mssiiLines = [{
    "id": "regulars_1_1",
    "adsTrack": "fake_ads_1",
    "start": "2013/06/18",
    "end": "2013/12/31",
    "qh": "00000000FFFFFFFFFFFF0000",
    "dow": "FE"
  }, {
    "id": "regulars_1_2",
    "adsTrack": "fake_ads_2",
    "start": "2013/06/18",
    "end": "2013/12/31",
    "qh": "00000000FFFFFFFFFFFF0000",
    "dow": "FC"
  }, {
    "id": "events_1_1",
    "adsTrack": "fake_ads_3",
    "start": "2013/06/18",
    "end": "2013/12/31",
    "hour": "12:14"
  }, {
    "id": "locals_1_1",
    "adsTrack": "fake_ads_2",
    "start": "2013/05/28",
    "end": "2027/12/31",
    "qh": "00000000FFFFFFFFFFFF0000",
    "dow": "FC",
    "frq": "20"
}];



/*
app.get('/modules', function(req, res) {
  res.json({
    "modules": modules,
    "submodules": submodules,
    "playlists": playlists,
    "playlistLines": playlistLines,
    "programs": programs,
    "prgLines": prgLines,
    "baskets": baskets,
    "tracks": tracks,
    "adsTracks": adsTracks,
    "plannings": plannings,
    "planningLines": planningLines,
    "mssiis": mssiis,
    "mssiiLines": mssiiLines
  });
});
*/


app.get('/modules', function(req, res) {
  res.json({"modules": modules, "submodules": submodules });
});

app.get('/submodules', function(req, res) {
  res.json({"submodules": submodules });
});

app.get('/playlists', function(req, res) {
  res.json({"playlists": playlists, "playlistLines": playlistLines });
});

app.get('/playlists', function(req, res) {
  res.json({"playlists": playlists, "playlistLines": playlistLines });
});

app.get('/playlistLines', function(req, res) {
  res.json({"playlistLines": playlistLines });
});

app.get('/programs', function(req, res) {
  res.json({"programs": programs, "prgLines": prgLines });
});

app.get('/programs/:id', function(req, res) {
  res.json({"programs": programs, "prgLines": prgLines });
});

app.get('/prgLines', function(req, res) {
  res.json({"prgLines": prgLines });
});

app.get('/baskets', function(req, res) {
  res.json({"baskets": baskets });
});

app.get('/baskets/:id', function(req, res) {
  res.json({"baskets": baskets });
});

app.get('/tracks', function(req, res) {
  res.json({"tracks": tracks });
});

app.get('/tracks/:id', function(req, res) {
  res.json({"tracks": tracks });
});

app.get('/adsTracks', function(req, res) {
  res.json({"adsTracks": adsTracks });
});

app.get('/adsTracks/:id', function(req, res) {
  res.json({"adsTracks": adsTracks });
});

app.get('/plannings', function(req, res) {
  res.json({"plannings": plannings ,"planningLines": planningLines});
});

app.get('/plannings/:id', function(req, res) {
  res.json({"plannings": plannings ,"planningLines": planningLines});
});

app.get('/planningLines', function(req, res) {
  res.json({"planningLines": planningLines });
});

app.get('/mssiis', function(req, res) {
  res.json({"mssiis": mssiis, "mssiiLines": mssiiLines});
});

app.get('/mssiis/:id', function(req, res) {
  res.json({"mssiis": mssiis, "mssiiLines": mssiiLines});
});

app.get('/mssiiLines', function(req, res) {
  res.json({"mssiiLines": mssiiLines });
});




module.exports = app;
