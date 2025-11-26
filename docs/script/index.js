  const projetosAcademicos = [
    {
      titulo: "FATREK",
      descricao: "Site para consulta de horários e localização de salas na FATEC Jacareí - ABP 2025-1",
      tecnologias: "HTML • CSS • JavaScript • PostgreSQL",
      link: "https://fatreck.ct.ws/?i=1",
      img: "./assets/imgFatrek.png"
    },
    {
      titulo: "Dados Limológicos",
      descricao: "Site para consulta de dados dos projetos FURNAS, SIMA e BALCAR - ABP 2025-2",
      tecnologias: "REACT • Typescript • Docker • PostgreSQL • CSS • Node.js • Express",
      link: "https://abp-2025-2-front.onrender.com/",
      img: "./assets/imgDadosLm.png"
    },
  ];

const projetosPessoais = [
    {
      titulo: "wantedBooks",
      descricao: "Aplicação web para backlog, review e promoção de livros",
      tecnologias: "HTML • CSS • JavaScript • PostgreSQL",
      link: "https://github.com/MarcioBuenoo/wantedBooks",
      img: "./assets/imgWantedBooks.png"
    },
  ];

  const container = document.getElementById("projetos-academicos");
  container.innerHTML = projetosAcademicos.map(proj => `
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

  const container2 = document.getElementById("projetos-pessoais");
  container2.innerHTML = projetosPessoais.map(proj => `
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