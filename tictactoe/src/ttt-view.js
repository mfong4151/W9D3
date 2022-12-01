class View {
  constructor(game, htmlNode) {
    this.game = game;
    this.htmlNode = htmlNode;
  }

  setupBoard(){
    const ul = document.createElement("ul");

    this.htmlNode.appendChild(ul);
    let el;
    for(let i = 0; i < 9; i++){
      el = document.createElement("li");
      // el.classList.add(`data-${i}`);
      el.dataset.id = i;
      //el.style.backgroundColor = "coral";
      ul.appendChild(el);
    }

    // let ul = document.createElement("ul");
    // this.el.appendChild(ul);
    // for (let i = 1; i <= 9; i++) {
    //   li = document.createElement("li");
    //   li.dataset.pos = i;
    //   ul.appendChild(li);
    // }
    // let div = document.createElement("div");
    // div.setAttribute("id", "game-state");
    // div.classList.add("hidden");
    // this.el.appendChild(div);
  }

  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
