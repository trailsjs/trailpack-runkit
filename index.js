'use strict'

const Trailpack = require('trailpack')

module.exports = class RunkitTrailpack extends Trailpack {

  validate () {
    if (!this.app.config.runkit.context) {
      throw new ConfigValueError('config.runkit.context must be properly set')
    }
  }

  /**
   * Create the runkit endpoint from the RunkitController.runkitEndpoint handler
   */
  configure () {
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

