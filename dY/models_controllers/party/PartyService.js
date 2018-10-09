const Party = require('./Party');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Party.find();
}

async function getById(id) {
    return await Party.findById(id);
}

async function create(partyParam) {
    // validate
    if (await Party.findOne({ ICnumber: partyParam.ICNumber })) {
        throw 'IC Number "' + partyParam.ICNumber + '" is already taken';
    } else if (await Party.findOne({ "contact.email": partyParam.contact.email })) {
        throw 'Email "' + partyParam.contact.email + '" is already taken';
    }

    const party = new Party(partyParam);

    // save party
    await party.save();
}

async function update(id, partyParam) {
    const party = await Party.findById(id);

    // validate
    if (!party) throw 'Party not found';
    if (party.ICNumber !== partyParam.ICNumber && await Party.findOne({ ICNumber: partyParam.ICNumber })) {
        throw 'IC Number "' + partyParam.ICNumber + '" is already taken';
    } else if (party.contact.email !== partyParam.contact.email && await Party.findOne({ "contact.email": partyParam.contact.email })) {
        throw 'Email "' + partyParam.contact.email + '" is already taken';
    }

    // copy partyParam properties to party
    Object.assign(party, partyParam);

    await party.save();
}

async function _delete(id) {
    await Party.findByIdAndRemove(id);
}