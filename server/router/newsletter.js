const express = require('express');
const NewsletterController = require('../controllers/newsletter');
const {ensureAuth} = require('../middlewares/authenticated');

const api = express.Router();

api.post('/newsletter', NewsletterController.subscribe);
api.post('/newsletter/unsubscribe', NewsletterController.unsubscribe);
api.get('/newsletter', ensureAuth, NewsletterController.getSubscribers);
api.delete('/newsletter/:id', ensureAuth, NewsletterController.deleteSubscriber);

module.exports = api;