const ProjectCard = ({imgSrc, title, description, projLink, webLink, dateCreated, badges}, isWebsite=false) => {

    const badgesArr = badges?.map(badge => `<span class="p-1 rounded font-weight-bold mx-1" style="background-color: ${badge.color}; font-size: .6rem; color: #000">${badge.name}</span>`);
    const badgesJson = JSON.stringify(badgesArr);
    const badgesStr = badgesJson?.replaceAll(/[\[\]\,\\]/g, '').replace(/^"|"$|""(?=<)/g, '') || undefined;

    return {
        dateCreated: dateCreated,
        element:`
        <div class="col-md-12 col-lg-4 d-flex justify-content-center mt-5">
            <div class="card">
                <img class="card-img-top" src="${imgSrc}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <div class="d-flex flex-wrap">
                        ${badgesStr || '<div></div>'}
                    </div>
                    <p class="card-text text-white">${description}</p>

                    <div class="row">
                        <div class="col-12">
                            <a href="${projLink}" target="_blank" class="btn">See project</a>
                        </div>
                        ${isWebsite ?  `
                        <div class="col-12 mt-2">
                            <a href="${webLink}" target="_blank" class="btn">Visit</a>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

export default ProjectCard