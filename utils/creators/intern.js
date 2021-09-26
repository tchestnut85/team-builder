function createInternCard(intern) {
	return `
                <div class="col s4">
                    <div class="card cyan lighten-3">
                        <div class="card content teal lighten-5 center-align">
                            <h2 class="padding-top card-title">${intern.getName()}</h2>
                            <h5 class='padding-bot'><span class="icon icons"><i class="fas fa-book"></i></span>${intern.getRole()}</h5>
                        </div>
                        <div class="card-content">
                            <div class="card-content">
                                <span>ID: ${intern.getId()}</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a class='black-text' href='mailto:${intern.getEmail()}'> ${intern.getEmail()}</a></span>
                            </div>
                            <div class="card-content">
                                <span>School: ${intern.getSchool()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
}

module.exports = createInternCard;
