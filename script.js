setInterval(function atualizarRelogio() { 
    let relogio = document.getElementById('relogio01');
    let data = new Date(); // Obtém a hora exata UTC
    
    // Incrementa 21 segundos
    data.setSeconds(data.getSeconds() + 21);
    
    let opcoes = { timeZone: "UTC", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };
    let horarioGMT = new Intl.DateTimeFormat("en-US", opcoes).formatToParts(data);
    
    let h = horarioGMT.find(part => part.type === "hour").value;
    let m = horarioGMT.find(part => part.type === "minute").value;
    let s = horarioGMT.find(part => part.type === "second").value;
    
    relogio.innerHTML = `${h}:${m}:${s}`;
}, 1000);

// Função para exibir a data atualizada corretamente
function exibirDataAtualizada() {
    let data = new Date();
    
    // Incrementa 21 segundos
    data.setSeconds(data.getSeconds() + 21);
    
    let opcoes = { timeZone: "UTC", weekday: "long", day: "2-digit", month: "long", year: "numeric" };
    let dataGMT = new Intl.DateTimeFormat("en-US", opcoes).formatToParts(data);
    
    let diasem = dataGMT.find(part => part.type === "weekday").value;
    let dia = dataGMT.find(part => part.type === "day").value;
    let mes = dataGMT.find(part => part.type === "month").value;
    let ano = dataGMT.find(part => part.type === "year").value;
    
    document.getElementById("date").innerHTML = `${diasem}, ${dia} ${mes}, ${ano}`;
}

// Atualiza a data à meia-noite UTC
function atualizarData() {
    let data = new Date();
    
    // Incrementa 21 segundos
    data.setSeconds(data.getSeconds() + 21);
    
    let opcoes = { timeZone: "UTC", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };
    let horarioGMT = new Intl.DateTimeFormat("en-US", opcoes).formatToParts(data);
    
    let horas = parseInt(horarioGMT.find(part => part.type === "hour").value);
    let minutos = parseInt(horarioGMT.find(part => part.type === "minute").value);
    let segundos = parseInt(horarioGMT.find(part => part.type === "second").value);
    
    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
    }
    setTimeout(atualizarData, 1000); // Verifica a cada segundo
}

// Inicializa a data e a atualização automática
exibirDataAtualizada();
atualizarData();
