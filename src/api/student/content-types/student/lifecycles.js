const crypto = require('crypto');

module.exports = {
    async beforeCreate(event) {
        console.log('beforeCreate is working...', event.params.data);
        const hashedMobile = crypto.createHash('sha512').update(event.params.data.mobile).digest('hex');
        event.params.data.mobile = hashedMobile;
        return event;
    }
};