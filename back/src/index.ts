import server from "./server";
import "reflect-metadata";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/dataSource";

AppDataSource.initialize()
.then(res => {
    console.log("Conectado a la base de datos")
    
    server.listen(PORT, () => {
        console.log(`servidor ejecutandose en el puerto ${PORT}`);
        
    })
})
