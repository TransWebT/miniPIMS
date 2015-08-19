Patients = new Mongo.Collection('patients');


if (Meteor.isServer) {
  Patients.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}

Patients.attachSchema(new SimpleSchema({
  petName: {
    type: String,
    label: "Pet Name",
    max: 100
  },
  ownerFirstName: {
    type: String,
    label: "Owner's First name",
    max: 50
  },
  ownerLastName: {
    type: String,
    label: "Owner's Last name",
    max: 100
  },
  street1: {
    type: String,
    label: "Street Address 1",
    max: 150
  },
  street2: {
    type: String,
    label: "City",
    max: 100
  },
  state: {
    type: String,
    label: "State",
    allowedValues: ['ME', 'VT', 'MA', 'CT', 'NH', 'NY', 'RI', 'FL', 'MO', 'CA', 'AZ']
  },
  zipcode: {
    type: String,
    label: "Zipcode",
    max: 15
  },
  phone: {
    type: String,
    label: "Phone",
    max: 20
  },
  species: {
    type: String,
    label: "Species",
    allowedValues: ['Dog', 'Cat', 'Bird', 'Hamster', 'Horse', 'Rabbit'],
    optional: false
  },
  patientAge: {
    type: Number,
    label: "Patient Age",
    optional: true
  }
}));
