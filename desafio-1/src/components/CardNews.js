class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const autor = document.createElement("span");
    autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "desafio-1/assets/img/default-profile-picture1.jpg";
    newsImage.alt = "Foto da Noticia";
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    
    .card {
      width: 80%;
      margin: 0 auto;
      -webkit-box-shadow: 3px 3px 27px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 3px 3px 27px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 3px 3px 27px 0px rgba(0, 0, 0, 0.75);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .card_left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
    }
    
    .card_left>span {
      font-weight: 400;
    }
    
    .card_left>a {
      margin-top: 15px;
      font-size: 25px;
      color: black;
      text-decoration: none;
      font-weight: 500;
    }
    
    .card_left>p {
      color: #707070;
    }
    
    .card_right >img{
      width: 320px;
      height: auto;
    }
    
    `;

    return style;
  }
}
customElements.define("card-news", CardNews);

// Selecione todos os elementos <card-news> dentro da div com a classe "app-root"
const cardNewsElements = document.querySelectorAll('.app-root card-news');

// Itere sobre os elementos e adicione margens a cada um
cardNewsElements.forEach((cardNewsElement, index) => {
  // Adicione margens à direita de todos, exceto o último elemento
  if (index < cardNewsElements.length - 1) {
    cardNewsElement.style.marginRight = '20px';
  }
});

customElements.define("card-news", CardNews);