import dotenv from 'dotenv';


dotenv.config();


export default {
    head: {
        titleTemplate: '%s | microCMS test',
    },
    plugins: ['~/plugins/APIClient'],
    env: process.env,
};
