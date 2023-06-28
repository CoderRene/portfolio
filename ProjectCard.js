const ProjectCard = ({imgSrc, title, description, projLink, dateCreated}) => {
    return {
        dateCreated: dateCreated,
        element:`
        <div class="col-md-12 col-lg-4 d-flex justify-content-center mt-5">
            <div class="card">
                <img class="card-img-top" src="${imgSrc}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text text-white">${description}</p>
                    <a href="${projLink}" target="_blank" class="btn">See project</a>
                </div>
            </div>
        </div>
        `
    }
}