document.getElementById('priceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de los inputs
    const pomadasMate = parseInt(document.getElementById('pomadasMate').value) || 0;
    const pomadasBrillantes = parseInt(document.getElementById('pomadasBrillantes').value) || 0;
    const polvosTexturizadores = parseInt(document.getElementById('polvosTexturizadores').value) || 0;
    const afterShave = parseInt(document.getElementById('afterShave').value) || 0;
    const aceitesDeBarba = parseInt(document.getElementById('aceitesDeBarba').value) || 0;
    const envio = parseFloat(document.getElementById('envio').value) || 0;

    // Calcular el total de unidades
    const totalUnidades = pomadasMate + pomadasBrillantes + polvosTexturizadores + afterShave + aceitesDeBarba;

    // Definir precios basados en la cantidad total de unidades
    let precioPomadasMate, precioPomadasBrillantes, precioPolvosTexturizadores, precioAfterShave, precioAceitesDeBarba;

    if (totalUnidades >= 150) {
        precioPomadasMate = 2500;
        precioPomadasBrillantes = 2500;
        precioPolvosTexturizadores = 2000;
        precioAfterShave = 2000;
        precioAceitesDeBarba = 2000;
    } else if (totalUnidades >= 70) {
        precioPomadasMate = 2550;
        precioPomadasBrillantes = 2550;
        precioPolvosTexturizadores = 2050;
        precioAfterShave = 2050;
        precioAceitesDeBarba = 2050;
    } else if (totalUnidades >= 30) {
        precioPomadasMate = 2650;
        precioPomadasBrillantes = 2650;
        precioPolvosTexturizadores = 2150;
        precioAfterShave = 2150;
        precioAceitesDeBarba = 2150;
    } else if (totalUnidades >= 15) {
        precioPomadasMate = 2790;
        precioPomadasBrillantes = 2790;
        precioPolvosTexturizadores = 2290;
        precioAfterShave = 2290;
        precioAceitesDeBarba = 2290;
    } else {
        precioPomadasMate = 0;
        precioPomadasBrillantes = 0;
        precioPolvosTexturizadores = 0;
        precioAfterShave = 0;
        precioAceitesDeBarba = 0;
    }

    // Calcular subtotales
    const subtotalPomadasMate = pomadasMate * precioPomadasMate;
    const subtotalPomadasBrillantes = pomadasBrillantes * precioPomadasBrillantes;
    const subtotalPolvosTexturizadores = polvosTexturizadores * precioPolvosTexturizadores;
    const subtotalAfterShave = afterShave * precioAfterShave;
    const subtotalAceitesDeBarba = aceitesDeBarba * precioAceitesDeBarba;

    // Calcular total de productos
    const totalProductos = subtotalPomadasMate + subtotalPomadasBrillantes + subtotalPolvosTexturizadores + subtotalAfterShave + subtotalAceitesDeBarba;

    // Calcular total con envío
    const totalConEnvio = totalProductos + envio;

    // Generar texto del resultado
    const resultadoTexto = `
Pedido ${totalUnidades} Unidades:
- ${pomadasMate} Pomadas Mate: $${subtotalPomadasMate.toLocaleString()} (${precioPomadasMate} c/u)
- ${pomadasBrillantes} Pomadas Brillantes: $${subtotalPomadasBrillantes.toLocaleString()} (${precioPomadasBrillantes} c/u)
- ${polvosTexturizadores} Polvos Texturizadores: $${subtotalPolvosTexturizadores.toLocaleString()} (${precioPolvosTexturizadores} c/u)
- ${afterShave} After Shave: $${subtotalAfterShave.toLocaleString()} (${precioAfterShave} c/u)
- ${aceitesDeBarba} Aceites de Barba: $${subtotalAceitesDeBarba.toLocaleString()} (${precioAceitesDeBarba} c/u)

Subtotal Productos: $${totalProductos.toLocaleString()}
Envío: $${envio.toLocaleString()}
Total: $${totalConEnvio.toLocaleString()}
    `;

    // Mostrar el resultado
    document.getElementById('resultText').textContent = resultadoTexto;
});
