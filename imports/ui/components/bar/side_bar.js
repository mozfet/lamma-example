// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './side_bar.html'

// on created
Template.side_bar.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.side_bar.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.side_bar.helpers({
  helper() {
    const instance = Template.instance()
    return 'side_bar'
  }
})

// events
Template.side_bar.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.side_bar.onDestroyed(() => {
  const instance = Template.instance()
})
