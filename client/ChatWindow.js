Meteor.subscribe('messages');
Template.ChatWindow.helpers({
    messages: ()=>{return Messages.find();}
});