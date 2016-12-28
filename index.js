'use strict'

const Trailpack = require('trailpack')
//const runkitEndpoint = require('@runkit/runkit/json-endpoint/1.0.0')

module.exports = class RunkitTrailpack extends Trailpack {

  validate () {
    if (!this.app.config.runkit.context) {
      throw new ConfigValueError('config.runkit.context must be properly set')
    }
  }

  /**
   * Create the runkit endpoint from the RunkitController.runkitEndpoint handler
   */
  initialize () {
    const RunkitController = this.app.controllers.RunkitController
    const context = this.app.config.runkit.context

    context.endpoint = function (request, response) {
      response.end(RunkitController.runkitEndpoint(request))
    }
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

