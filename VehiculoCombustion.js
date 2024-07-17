export default class VehiculoCombustion {
    constructor() {
        this.nivelCombustible = 0; 
    }

    llenarTanque() {
        
        this.nivelCombustible = 100; 
        console.log("Tanque lleno al 100%");
    }

    usarCombustible() {
        // Simulación de uso de combustible
        if (this.nivelCombustible > 0) {
            this.nivelCombustible -= 10; 
            console.log("Usando combustible...");
        } else {
            console.log("Tanque vacío, se necesita llenar.");
        }
    }
}
  