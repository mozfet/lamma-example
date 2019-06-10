import { Layout } from 'meteor/msavin:lamma'
import '/imports/ui/components/foo'
import '/imports/ui/components/bar'
import './main.html'

Layout.register({
  body: {
    default: 'foo',
    notFound: 'notFound',
    processor: function (name) { return 'body_' + name },
    Parrot: true
  },
  side: {
    default: 'foo',
    notFound: 'notFound',
    processor: function (name) { return 'side_' + name },
    Parrot: true
  }
})
