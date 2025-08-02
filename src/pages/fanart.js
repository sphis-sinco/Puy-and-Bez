var fanarts = [
        {
                name: "Retis concept",
                author: "Sphis_Sinco",
                path: "concepts/characters/Retis.png",
                width: 300,
        },
];

var addFanart = function (title = "", creator = "", location = "", w = 300) {
        fanarts.push({
                name: title,
                author: creator,
                path: location,
                width: w,
        });
};

fanarts = [];

var list = document.getElementById("fanart-list");
if (fanarts.length > 0) list.removeChild(document.getElementById("empty"));
else {
        for (let fanart of fanarts) {
                var fanartstring = fanart.name;

                if (fanart.author != null)
                        fanartstring += " by " + fanart.author;

                var card = document.createElement("li");
                card.className = "book-card";

                var fanartElement = document.createElement("h4");
                fanartElement.innerHTML = fanartstring;

                card.appendChild(fanartElement);

                var artwork = document.createElement("img");
                artwork.src = "../" + fanart.path;
                artwork.width = 300;

                if (fanart.width != null) artwork.width = fanart.width;
                card.appendChild(artwork);

                list.appendChild(card);
        }
}
