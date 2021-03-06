app.config(function($routeProvider) {
    
    $routeProvider.
    
    when('/', {
        templateUrl: '../../views/allQuestions.html',
        controller: 'AllQuestionsCtrl as questions',
        css: ['../../css/main.css', '../../css/all.css', '../../css/profileModal.css',
              '../../css/ngDialog.css', '../../css/allMediaQueries.css',
              '../../css/profileModalMediaQueries.css']
    }).
    
    when('/question/:questionID', {
        templateUrl: '../../views/singleQuestion.html',
        controller: 'SingleQuestionCtrl as singleQuestion',
        css: ['../../css/main.css', '../../css/single.css', '../../css/profileModal.css',
              '../../css/ngDialog.css', '../../css/singleMediaQueries.css',
              '../../css/profileModalMediaQueries.css']
    });
        
});