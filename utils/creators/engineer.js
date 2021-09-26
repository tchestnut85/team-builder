function createEngineerCard(engineer) {
	return `
                <div class="col s4">
                    <div class="card cyan lighten-3">
                        <div class="card content teal lighten-5 center-align">
                            <h2 class="padding-top card-title">${engineer.getName()}</h2>
                            <h5 class='padding-bot'><span class="icon icons"><i class="fas fa-laptop-code"></i></span>${engineer.getRole()}</h5>
                        </div>
                        <div class="card-content">
                            <div class="card-content">
                                <span>ID: ${engineer.getId()}</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a class='black-text' href='mailto:${engineer.getEmail()}'> ${engineer.getEmail()}</a></span>
                            </div>
                            <div class="card-content">
                                <span>GitHub:<a href='https://github.com/${engineer.getGithub()}' target='_blank' rel='noreferrer'> ${engineer.getGithub()}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
}

module.exports = createEngineerCard;
