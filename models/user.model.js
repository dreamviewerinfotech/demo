
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    mobileno: {
        type: Number,
        unique: true,
        required: true,
    },
    Name : {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        default:' '
    },

});

UserSchema.methods.getEndpointForDomain = async function() {
    
    const domain = this.email.split('@')[1];

    let endpoint = null;
    if (domain === 'gmail.com') {
        endpoint = 'User has registered with having domain = gmail';
    } else if (domain === 'Arista.com' || 'Arista.in') {
        endpoint = 'User has registered with having domain = Arista';
    } else if (domain === 'Sita.com' || 'Sita.in') {
        endpoint = 'User has registered with having domain = Sita';
    } else if (domain === 'Aviatrix.com' || 'Aviatrix.in') {
        endpoint = 'User has registered with having domain = Aviatrix';
    } else if (domain === 'weroute.com' || 'weroute.in') {
        endpoint = 'User has registered with having domain = weroute';
    } 
 
    return endpoint;
};

const UserModel = mongoose.model('User', UserSchema);

module.exports =  UserModel 



