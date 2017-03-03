Template.NewMessage.events({
    'click #send-button': () => {
        let form = $('#new-message-form');
        let name = form.find('#name');
        let message = form.find('#message');
        let data = {
            name: name.val(),
            message: message.val(),
            timestamp: new Date()
        };
        Meteor.call('message.add', data);
        message.val('');
    }
});
