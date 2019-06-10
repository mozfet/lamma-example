import { Layout } from 'meteor/msavin:lamma'
import '/imports/ui/components/foo'
import '/imports/ui/components/bar'
import './main.html'

Layout.register({
  body: {
    default: 'foo',
    notFound: 'notFound',
    processor: function (name) { return 'body_' + name },
    // Parrot: true
  },
  side: {
    default: 'foo',
    notFound: 'notFound',
    processor: function (name) { return 'side_' + name },
    // Parrot: true
  }
})

Template.main_layout.events({
  'click #js-foo-button'(event) {
    const instance = Template.instance()
    console.log('foo button click')
    Layout.set({body: 'foo', side: 'foo'})
  },

  'click #js-bar-button'(event) {
    const instance = Template.instance()
    console.log('bar button click')
    Layout.set({body: 'bar', side: 'bar'})
  }
})
