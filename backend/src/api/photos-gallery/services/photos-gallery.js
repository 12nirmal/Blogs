'use strict';

/**
 * photos-gallery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::photos-gallery.photos-gallery');
