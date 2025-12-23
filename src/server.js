import app from "./app.js";

import {PORT} from './/config/env.js'

const connection = app.listen(PORT, ()=> {
    try {
        if (connection){
            console.log(`connection established on port http://localhost:${PORT}`);
        }
    } catch (error) {
        console.log('cannot connect to the port', error);
    }
})
