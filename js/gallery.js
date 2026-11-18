const stages = window.exhibitionStages;
const gallery = document.getElementById("gallery-items");

// galerija. karoč katru reizi kad tiek pielikts jauns ieraksts, šis kods viņu renderē.
function renderGallery() {
    gallery.innerHTML = stages.map(stage => `
        <article class="gallery-item" id="${stage.id}">
            <img
                src="${stage.image}"
                alt="${stage.alt}"
                width="${stage.imageResolution.width}"
                height="${stage.imageResolution.height}"
                loading="lazy"
            >

            <div class="gallery-content">
                <p class="year">
                    <time datetime="${stage.year}">
                        ${stage.year}
                    </time>
                </p>

                <h3>${stage.title}</h3>
                <p>${stage.description}</p>
            </div>
        </article>
    `).join("");
}

renderGallery();