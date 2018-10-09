const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const partyService = require('./PartyService');

//routes
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    partyService.create(
        //req.body
        {
            created: new Date(),
            updated: new Date(),
            type: req.body.type,
            name : req.body.name,
            ICType: req.body.ICType,
            ICNumber: req.body.ICNumber,
            gender: req.body.gender,
            birthDate: req.body.birthDate,
            address: req.body.address,
            contact: req.body.contact,
            occupation: req.body.occupation,
            lastEducation: req.body.lastEducation,
            picture: "",
            isActive: "Active",
            maritalStatus: req.body.maritalStatus
        }
    )
        .then(() => res.json({
            success: true,
            msg: 'Party created'
        }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    partyService.getAll()
        .then(parties => res.json(parties))
        .catch(err => next(err));
}

function getById(req, res, next) {
    partyService.getById(req.params.id)
        .then(party => party ? res.json(party) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    partyService.update(
        req.params.id,
        //req.body
        {
            updated: new Date(),
            type: req.body.type,
            name : req.body.name,
            ICType: req.body.ICType,
            ICNumber: req.body.ICNumber,
            gender: req.body.gender,
            birthDate: req.body.birthDate,
            address: req.body.address,
            contact: req.body.contact,
            occupation: req.body.occupation,
            lastEducation: req.body.lastEducation,
            picture: req.body.picture,
            isActive: req.body.isActive,
            maritalStatus: req.body.maritalStatus
        }
    )
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    partyService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}