var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

var Location = require('./Location');

//CREATE
router.post('/', function (req, res) {
    Location.create({
        created: new Date(),
        updated: new Date(),
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        latitudeDelta: req.body.latitudeDelta,
        longitudeDelta: req.body.longitudeDelta,
        description: req.body.description
    },
    function (err, location) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(location);
    });
});

//READ ALL
router.get('/', function (req, res) {
    Location.find({}, function (err, locations) {
        if (err) return res.status(500).send("There was a problem finding the locations.");
        res.status(200).send(locations);
    })
});

//READ ONE
router.get('/:id', function (req, res) {
    Location.findById(req.params.id, function (err, location) {
        if (err) return res.status(500).send("There was a problem finding the location.");
        if (!location) return res.status(404).send("No location found.");
        res.status(200).send(location);
    });
});

//DELETE ONE
router.delete('/:id', function (req, res) {
    Location.findByIdAndRemove(req.params.id, function (err, location) {
        if (err) return res.status(500).send("There was a problem deleting the location.");
        res.status(200).send("Location "+ location.title +" was deleted.");
    });
});

//UPDATE ONE
router.put('/:id', function (req, res) {
    Location.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, location) {
        if (err) return res.status(500).send("There was a problem updating the location.");
        res.status(200).send(location);
    });
});

module.exports = router;