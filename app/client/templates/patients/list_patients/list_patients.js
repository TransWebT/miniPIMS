/*****************************************************************************/
/* ListPatients: Event Handlers */
/*****************************************************************************/
Template.ListPatients.events({
});

/*****************************************************************************/
/* ListPatients: Helpers */
/*****************************************************************************/
Template.ListPatients.helpers({
    patients: function() {
        return Patients.find();
    }
});

/*****************************************************************************/
/* ListPatients: Lifecycle Hooks */
/*****************************************************************************/
Template.ListPatients.onCreated(function () {
});

Template.ListPatients.onRendered(function () {
});

Template.ListPatients.onDestroyed(function () {
});
