import router from "./router.js";
import db from "./config/db.js"
import colors from 'colors';

async function connectionDb(){
    try {
        await db.authenticate();
        db.sync()
        console.log(colors.rainbow("Conexion exitosa"));
    } catch (error) {
        console.log(error);
        console.log(colors.bgRed.bold("Hubo un error al conectar!"));       
    }
}

connectionDb();

const port = process.env.PORT || 4000

router.listen(port, () => {
  console.log(`Puerto ${port}`);
})