class Productos {
  constructor() {
      this.lista = [],
      this.count = 1
  }
  getProductById(id){
    var result = this.lista.filter(a => a.id == id);
    return result
  }
  identificador(producto){
    var productoIdentificado = producto.id = this.count;
    this.count++;
    return producto
  }

  // agregar los metodos requeridos
}

// exporto una instancia de la clase
module.exports = new Productos();
