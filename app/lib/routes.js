Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/patients/create', {
    name: 'createPatient',
    controller: 'PatientsController',
    action: 'create',
    where: 'client'
});

Router.route('/patients', {
    name: 'patientsList',
    controller: 'PatientsController',
    action: 'list',
    where: 'client'
});

