// Atualiza o relógio com horário NY (UTC-1 ou UTC-2 no horário de verão)
setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    data.setUTCSeconds(data.getUTCSeconds() + 19); // ajusta os seguntos )
    data.setUTCHours(data.getUTCHours() - 1); // NY UTC-1 (ou UTC-2 no horário de verão automático)
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    
    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;
    
    rel.innerHTML = `${h}:${m}:${s}`;
}, 1000);

// Função para exibir a data atualizada
function exibirDataAtualizada() {
   let meses = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    
    let semanas = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

  let data = new Date();
  let diasem = data.getDay();
  let dia = data.getDate();
  let mes = data.getMonth();
  let ano = data.getFullYear();

  // Verifica se é meia-noite (00:00:00)
  if (data.getHours() === 0 && data.getMinutes() === 0 && data.getSeconds() === 0) {
    // Incrementa um dia
    data.setDate(data.getDate() + 0);
    dia = data.getDate();
    mes = data.getMonth();
    ano = data.getFullYear();
  }
    
    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia} ${meses[mes]}, ${ano}`;
}

// Atualiza a data à meia-noite NY
function atualizarData() {
    let data = new Date();
    data.setUTCSeconds(data.getUTCSeconds() + 19); // Ajuste para o horário NY
    data.setUTCHours(data.getUTCHours() - 1); // Ajuste para o horário NY
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
    }
    setTimeout(atualizarData, 1000); // Verifica a cada segundo
}

// Inicializa a data e a atualização automática
exibirDataAtualizada();
atualizarData();
