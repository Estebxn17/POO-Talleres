class Comic {
    #validar_cantidad
    #Titulo
    #Precio
    #Stock
  
    constructor(titulo, valor, disponibilidad, cantidadValida) {
      this.#Titulo = titulo
      this.#Precio = valor
      this.#Stock = disponibilidad
      this.#validar_cantidad = cantidadValida
    }
  
    agregarStock(nuevo) {
      return this.#Stock + nuevo
    }
  
    vender(cantidad) {
      let stock = this.#Stock - cantidad
      return "Se han vendido un producto " + cantidad
    }
  
    obtenerDetalles() {
      return "Titulo: " + this.#Titulo + " Precio: " + this.#Precio + " Stock: " + this.#Stock + " Validad: " + this.#validar_cantidad
    }
  
    #validarCantidad() {
      if (this.#Stock > 0) {
        return console.log("Productos disponible")
      } else {
        return console.log("No hay productos disponibles")
      }
    }

    validarDatos(){
      if (this.#Stock > 0) {
        return console.log("Productos disponible")
      } else {
        return console.log("No hay productos disponibles")
      }
    }
  }
  
  class Autor extends Comic {
    #nombreAutor
    _biografia
  
    constructor(nombre, historia, titulo, valor, disponibilidad, cantidadValida) {
      super(titulo, valor, disponibilidad, cantidadValida)
      this.#nombreAutor = nombre
      this._biografia = historia
    }
  
    obtenerInformacion() {
      return "Nombre Autor: " + this.#nombreAutor + " Biografia: " + this._biografia
    }
  }
  
  let informacion = new Autor("Esteban", "Biografia1", "Titulo1", 10, 5, true)
  console.log(informacion.obtenerInformacion())
  console.log(informacion.obtenerDetalles())
  console.log(informacion.vender(50))
  console.log(informacion.agregarStock(20))
  console.log(informacion.validarDatos(10))
    
