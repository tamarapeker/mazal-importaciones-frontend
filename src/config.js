const dotenv = require('dotenv');

dotenv.config();

const env = process.env.REACT_APP_ENV || 'dev';

console.log('ENVIRONMENT '+ env)

const DEFAULT_BACKEND_SERVER = 'http://localhost:8080';

const server = {
    dev: {
        backend: 'https://mazalimportaciones-backend.herokuapp.com',
    },
    prod: {
        backend: 'https://mazalimportaciones-backend.herokuapp.com',
    },
    other: {
        backend: process.env.REACT_APP_BACKEND || DEFAULT_BACKEND_SERVER,
        user_service: process.env.REACT_APP_USER_SERVICE || DEFAULT_BACKEND_SERVER,
        refreshTime: 300
    }
};

export const CONFIG = server[env];