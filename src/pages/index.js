var skits = [
        {
                number: 1,
                release: `8/1/2025`,
                link: `pages/skit1.html`,
        },
];

var addSkit = function (num = 0, rel = ``, href = ``) {
        skits.push({
                number: num,
                release: rel,
                link:
                        `/${href}.html`,
        });
};

skits = [];
addSkit(1, `8/1/2025`, `pages/skits/skit1`);
addSkit(2, `8/2/2025`, `pages/skits/skit2`);
addSkit(3, null /* `8/2/2025` */, `pages/skits/skit3`);
addSkit(4, null, `pages/skits/skit4`);
addSkit(5, null, `pages/skits/skit5`);
addSkit(6, null, `pages/skits/skit6`);

var list = document.getElementById(`book-list`);
var otherPages = document.getElementById(`page-list`);

var linkButton = document.createElement(`a`);
linkButton.innerHTML = `Fanart`;
linkButton.className = `book-card`;
linkButton.href = `pages/fanart.html`;
otherPages.appendChild(linkButton);

for (let skit of skits) {
        var skitString = `Skit ${skit.number}`;

        var card = document.createElement(`li`);
        card.className = `book-card`;

        var skitElement = document.createElement(`h4`);
        skitElement.innerHTML = skitString;

        if (skit.release != null) {
                skitElement.innerHTML += ` (${skit.release})`;
        }
        card.appendChild(skitElement);

        if (skit.release == null) {
                var linkButton = document.createElement(`button`);
                linkButton.innerHTML = `Coming Eventually`;
        } else {
                var linkButton = document.createElement(`a`);
                linkButton.innerHTML = `Go to ${skitString}`;
                linkButton.href = skit.link;
        }
        card.appendChild(linkButton);

        list.appendChild(card);
}
