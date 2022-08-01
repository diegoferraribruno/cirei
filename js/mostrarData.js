function mostrarData() {
    const hour = new Date().getHours(); 
    let saudacao;
    if (hour < 12) {
      saudacao = "Booom dia!";
    } else {
      saudacao = "Boa Tarde";
      if(hour >18){
        saudacao = "Boa Noite Giselle.";}
    }
      let dia;
      switch (new Date().getDay()) {
        case 0:
          dia = "Eita Domingão!";
          break;
        case 1:
          dia = "A Segunda-feira chegou.";
          break;
        case 2:
          dia = "Terça-feira é dia de #CiroGames!";
          break;
        case 3:
          dia = "Quarta-feira é bom demais!";
          break;
        case 4:
          dia = "Quinta-feira, tamo quase lá!";
          break;
        case 5:
          dia = "Sextou!";
          break;
        case 6:
          dia = "Sabadão.";
    }
      document.getElementById("data").innerHTML = saudacao+" "+ dia+ " ultima atualização: "+Date();
  }
