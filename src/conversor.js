function convertirArsAUsd(montoArs, tipoCambio) {
    if (typeof montoArs !== 'number' || typeof tipoCambio !== 'number') {
      throw new TypeError('Los argumentos deben ser números');
    }
    if (tipoCambio <= 0) throw new RangeError('El tipo de cambio debe ser > 0');
    return Number((montoArs / tipoCambio).toFixed(2));
  }
  
  module.exports = { convertirArsAUsd };
  