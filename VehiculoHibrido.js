import VehiculoElectrico from './VehiculoElectrico.js';
import VehiculoCombustion from './VehiculoCombustion.js';

export default class VehiculoHibrido extends VehiculoElectrico {
    constructor() {
        super(); 
        this.nivelCombustible = 0; 
    }

    llenarTanque() {
        
        this.nivelCombustible = 100; 
        console.log("Tanque del vehículo híbrido lleno al 100%");
    }

    usarCombustible() {
        
        if (this.nivelCombustible > 0) {
            this.nivelCombustible -= 10; 
            console.log("Usando combustible del vehículo híbrido...");
        } else {
            console.log("Tanque del vehículo híbrido vacío, se necesita llenar.");
        }
    }

    mostrarEstado() {
        console.log(`Estado del vehículo híbrido:
            Nivel de batería: ${this.nivelBateria}%
            Nivel de combustible: ${this.nivelCombustible}%`);
    }
}
