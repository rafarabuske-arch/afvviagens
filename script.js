function buscar() {
  const origem = document.getElementById("origem").value.toUpperCase();
  const destino = document.getElementById("destino").value.toUpperCase();
  const ida = document.getElementById("ida").value;
  const volta = document.getElementById("volta").value;
  const results = document.getElementById("results");

  if (!origem || !destino || !ida) {
    results.innerHTML = "<p>Preencha origem, destino e data de ida.</p>";
    return;
  }

  const precoBase = Math.floor(Math.random() * 1000) + 1200;
  const milhasBase = Math.floor(Math.random() * 20000) + 30000;

  results.innerHTML = `
    <div class="card">
      ✈️ <strong>AFV Airlines</strong><br>
      🛫 ${origem} → 🛬 ${destino}<br>
      📅 Ida: ${ida} ${volta ? " | Volta: " + volta : ""}<br>
      💰 Dinheiro: R$ ${precoBase}<br>
      🌟 Milhas: ${milhasBase} + R$ 120<br>
      🏆 <strong>Melhor custo-benefício</strong><br>
      <a href="https://www.google.com/flights" target="_blank">
        Ver no site da companhia
      </a>
    </div>
  `;
}
