var mod = angular.module( 'coffeetech', [] );
mod.controller( 'GithubCtrl', function( $scope ) {
  var github = new GitHub({} );
  var repo = github.getRepo( "gollum", "gollum" );
  repo.show( function(err, repo) {
    $scope.repo = repo;
    $scope.$apply();
  });
})
