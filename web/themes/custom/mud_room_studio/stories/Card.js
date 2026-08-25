export const createCard = ({
    kicker,
    title,
    body,
    meta,
    elevation = 'sm',
}) => {
    const card = document.createElement('div');
    card.className = `card elev-${elevation}`;

    if (kicker) {
        const kickerEl = document.createElement('div');
        kickerEl.className = 'card-kicker';
        kickerEl.innerText = kicker;
        card.appendChild(kickerEl);
    }

    
    const titleEl = document.createElement('h3');
    titleEl.className = 'card-title';
    titleEl.innerText = title;
    card.appendChild(titleEl);
   

    
    const bodyEl = document.createElement('p');
    bodyEl.className = 'card-body';
    bodyEl.innerText = body;
    card.appendChild(bodyEl);
  

    if (meta) {
        const metaEl = document.createElement('div');
        metaEl.className = 'card-meta';
        metaEl.innerText = meta;
        card.appendChild(metaEl);
    }

    return card;
};