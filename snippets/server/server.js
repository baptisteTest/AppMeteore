//general server side code
//console.log('we can log to the server');
Meteor.publish('snippets', function(){
  return Snippets.find({owner:this.userId});
})

Snippets.allow({
  insert: function(userId,fields){
    return(userId); //verifier qu'un utilisateur est bien connecté
  }
})
