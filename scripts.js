function calculatePromotionRate() {
  const numPromovidos = parseFloat(document.getElementById("num-promovidos").value);
  const numFuncionarios = parseFloat(document.getElementById("num-funcionarios").value);
  const rate = (numPromovidos / numFuncionarios) * 100;
  document.getElementById("result").innerHTML = `Taxa de Promoção Interna: ${rate.toFixed(2)}%`;
}

