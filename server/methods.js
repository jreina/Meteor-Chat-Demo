Meteor.methods({
    'message.add': (message) => {
        Messages.insert(message);
    }
});