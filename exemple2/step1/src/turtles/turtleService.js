function TurtlesService($q) {
    var self = this;
    self.turtles = [{name:'Leonardo', color:'blue'}]

    self.findAll = function() {
      return $q.resolve(self.turtles)
    }

    this.add = function(turtle) {
      self.turtles = self.turtles.concat([turtle])
      return $q.resolve(turtle);
    }
}

angular.module('turtles.app')
  .service('TurtlesService', ['$q', TurtlesService]);
