const stages = window.exhibitionStages;
const gallery = document.getElementById("gallery-items");

function renderGallery() {
    gallery.innerHTML = stages.map(stage => `
        <article class="gallery-item" id="${stage.id}">
            <img
                src="${stage.image}"
                width="${stage.imageResolution.width}"
                height="${stage.imageResolution.width}"
                loading="lazy"
            >

            <div class="gallery-content">
                <p class="year:>
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