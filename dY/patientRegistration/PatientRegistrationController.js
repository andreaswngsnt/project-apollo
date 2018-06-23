var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

var Party = require('./Party');
var Patient = require('./Patient');
var User = require('./User');

//CREATE
router.post('/', function (req, res) {
    Party.create({
        created: new Date(),
        updated: new Date(),
        type: "Patient",
        name : req.body.name,
        governmentIdType: req.body.governmentIdType,
        governmentId: req.body.governmentId,
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        address: req.body.address,
        contact: req.body.contact,
        occupation: req.body.occupation,
        lastEducation: req.body.lastEducation,
        picture: "",
        isActive: "Active",
        maritalStatus: req.body.maritalStatus
    },
    function (err, party) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(party);

        Patient.create({
            created: new Date(),
            updated: new Date(),
            description: req.body.description,
            m_parties_id: party._id,
        },
        function (err, patient) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(patient);

            User.create({
                created: new Date(),
                updated: new Date(),
                m_parties_id: party._id,
                username: req.body.username,
                password: req.body.password
            },
            function (err, user) {
                if (err) return res.status(500).send("There was a problem adding the information to the database.");
                res.status(200).send(user);
            });
        });
    });
});

//READ ALL
router.get('/', function (req, res) {
    Patient.find({}, function (err, patients) {
        if (err) return res.status(500).send("There was a problem finding the patients.");
        res.status(200).send(patients);
    })
});

//READ ONE
router.get('/:id', function (req, res) {
    Patient.findById(req.params.id, function (err, article) {
        if (err) return res.status(500).send("There was a problem finding the article.");
        if (!article) return res.status(404).send("No article found.");
        res.status(200).send(article);
    });
});

//DELETE ONE
router.delete('/:id', function (req, res) {
    Patient.findByIdAndRemove(req.params.id, function (err, article) {
        if (err) return res.status(500).send("There was a problem deleting the article.");
        res.status(200).send("Patient "+ article.title +" was deleted.");
    });
});

//UPDATE ONE
router.put('/:id', function (req, res) {
    Patient.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, article) {
        if (err) return res.status(500).send("There was a problem updating the article.");
        res.status(200).send(article);
    });
});

module.exports = router;