  const projetos = [
    {
      titulo: "FATREK",
      descricao: "Site para consulta de horários e localização de salas na FATEC Jacareí",
      tecnologias: "HTML • CSS • JavaScript • PostgreSQL",
      link: "https://fatreck.ct.ws/?i=1",
      img: "./assets/imgFatrek.png"
    },
    {
      titulo: "wantedBooks",
      descricao: "Aplicação web para backlog, review e promoção de livros",
      tecnologias: "HTML • CSS • JavaScript • PostgreSQL",
      link: "https://github.com/MarcioBuenoo/wantedBooks",
      img: "./assets/imgWantedBooks.png"
    },
  ];

  const container = document.getElementById("projetos-list");
  container.innerHTML = projetos.map(proj => `
    <div class="card">
      <img src="${proj.img}" alt="Preview ${proj.titulo}">
      <div class="card-content">
        <h3>${proj.titulo}</h3>
        <p>${proj.descricao}</p>
        <span class="projetos-tecnologias">${proj.tecnologias}</span>
        <a href="${proj.link}" target="_blank" class="btn">Ver Projeto</a>
      </div>
    </div>
  `).join("");