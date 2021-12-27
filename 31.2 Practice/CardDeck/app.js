
    axios
    .get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then((res) => {
    const deckId = res.data.deck_id;
    return axios.get(
      `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
  })
  .then((res) => {
    const value = res.data.cards[0].value;
    const suit = res.data.cards[0].suit;
    const image = res.data.cards[0].image;
    console.log(`${value} of ${suit}`);
    const deckId = res.data.deck_id;
    return axios.get(
      `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
  })
  .then((res) => {
    const value = res.data.cards[0].value;
    const suit = res.data.cards[0].suit;
    const image = res.data.cards[0].image;
    console.log(`${value} of ${suit}`);
    console.log(res.data);
  });





let cardDeck = [];
axios
  .get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then((res) => {
    const deckId = res.data.deck_id;
    return axios.get(
      `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
    );
  })
  .then((res) => {
    const cards = res.data.cards;
    for (let card of cards) {
      cardDeck.push(card);
    }
    $('#wrapper').append(
      '<h1>Lets Play Some Cards</h1><button id="btn">GIMME A CARD!</button>'
    );
  });

$('body').on('click', '#btn', () => {
  if (cardDeck.length > 0) {
    const card = cardDeck[0];
    $('#cardContainer').append(
      `<img src="${card.image}" alt="" class="draw-card" id="${cardDeck.length}">`
    );
    $(`#${cardDeck.length}`).css(
      'transform',
      `rotate(${Math.floor(Math.random() * 180)}deg) translateY(${Math.floor(
        Math.random() * 20
      )}px) translateX(${Math.floor(Math.random() * 20)}px)`
    );
    cardDeck.shift();
  } else {
    alert('Deck is empty!');
  }
});
