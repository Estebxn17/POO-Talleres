export default class VehiculoElectrico {
    constructor() {
        this.nivelBateria = 0; 
    }

    cargarBateria() {
    
        this.nivelBateria = 100; 
        console.log("Batería cargada al 100%");
    }

    usarBateria() {
        
        if (this.nivelBateria > 0) {
            this.nivelBateria -= 10; 
            console.log("Usando batería...");
        } else {
            console.log("Batería agotada, se necesita recargar.");
        }
    }
}
