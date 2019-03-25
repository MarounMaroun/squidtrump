class Application {
  search;
  replacement;
  searchRegex;

  constructor(search, replacement) {
    this.search = search;
    this.replacement = replacement;
    this.searchRegex = new RegExp(this.search, "g");
  }

  run() {
    this.replaceAllText();
    this.replaceAllImages();
  }

  replaceAllText() {
    const elements = Array.from(document.getElementsByTagName("*"));
    elements.forEach(element => {
      Array.from(element.childNodes)
      .filter(node => node.nodeType === Node.TEXT_NODE)
      .forEach(node => {
        node.nodeValue = node.nodeValue.replace(this.searchRegex, this.replacement);
      })
    })
  }

  replaceAllImages() {
    const imgElements = Array.from(document.getElementsByTagName("IMG"));
    imgElements.forEach(element => {
      if (this.searchRegex.test(element.title) || this.searchRegex.test(element.alt)) {
        if (!!element.src) {
          element.src = this.getRandomTrump();
        }
      }
    })
  }

  getRandomTrump() {
    return Application.trumps[Math.floor(Math.random() * Application.trumps.length)];
  }

  static trumps = ["https://pbs.twimg.com/profile_images/547689289979404289/-0qeLugC.png",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvT7ID6dyBKnK6rhWtuxHkj6fV4yZlPDqubhKWCx0hTTCL_pNj",
                   "https://vignette.wikia.nocookie.net/spongebob/images/7/77/Culture_Shock_002.jpg/revision/latest?cb=20161219212813",
                   "https://media.giphy.com/media/kDaVw1zX2Kkxy/giphy.gif",
                   "https://pbs.twimg.com/profile_images/479419169134231553/35C2XxQY_400x400.png",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5W4oaPJOtfZsdQRUzZjpSGjQB0z5uldmt_8IHIRv4-C9qFcFz",
                   "https://media.tenor.com/images/555a2b27b36c9facead3e96f6f343d07/tenor.gif",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWeAzsYFJOo0C-_44Htg7GJf55Cx1MQZnuoZfc6WvXOUFvuQ8",
                   "https://i.pinimg.com/originals/62/b5/a2/62b5a2c97af2f2926dae60ed5673ea82.jpg",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxvGygdvS3gk4LZ7u4nTJkmb7T15LgHIaHEx_V96VQDXuE4ek",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAb0a9wKc6MrZfO6q0oc2opKgqO8GzP13vpP_IVBa2Tm0uiYH8QQ",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVALWTEasH5mlNcg8MDnqMM8x4GHnSn_m7PWUjMNNGM5fIcktj",
                   "https://i.pinimg.com/originals/a7/90/fb/a790fb093769210f447fdc59bc73ec82.jpg",
                   "https://media3.giphy.com/media/jLzjQE0emILFm/giphy.gif",
                   "https://i.pinimg.com/236x/82/4b/d1/824bd149896e3c947b7604c81b446466.jpg",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeY3luq_olnaOuIsr6UCxGCWCuytAj_PPcRMysqCSEIrL2R1c",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpRWW_gE9DxpFrobqFME4qBkT-hiBzlmy6m8jt-7AlbRiY9ZR"];
}

(function() {
  const trumpCombinations = ['Donald John Trump', 'donaldjtrump', 'Trump', 'trump', 'Donald Trump',
	                         'Donald_Trump', 'donald_trump', 'donald trump', 'Donald J. Trump'].join('|');
  const app = new Application(trumpCombinations, "Squidward");
  app.run();
})();
