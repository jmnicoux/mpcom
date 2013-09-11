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

var programs = [{
    "id": "fake_program_a",
    "name": "fake Program A",
    "prgLines": ["fake_program_a1", "fake_program_a2", "fake_program_a2"]
  }, {
    "id": "fake_program_b",
    "name": "fake Program B",
    "prgLines": ["fakeProgramB1", "fakeProgramB2"]
  }, {
    "id": "fake_program_c",
    "name": "fake Program C",
    "prgLines": ["fakeProgramC1"]
}];


app.get('/modules', function(req, res) {
  res.json({"modules": modules });
});

app.get('/submodules', function(req, res) {
  res.json({"submodules": submodules });
});


app.get('/programs', function(req, res) {
  res.json({"programs": programs });
});



module.exports = app;