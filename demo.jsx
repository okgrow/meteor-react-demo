Messages = new Mongo.Collection("Messages", {});

Meteor.methods({
  addMessage(text) {
    let message = {
      time: new Date(),
      text: text
    };

    Messages.insert(message);
  }
});


if (Meteor.isClient) {
  Meteor.startup(function () {
    ReactDOM.render(<MessageList />, document.getElementById("render-target"));
  });
}
