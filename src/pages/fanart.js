var fanarts = [
        {
                name: ["Retis concept"],
                author: "Sphis_Sinco",
                path: ["concepts/characters/Retis"],
                width: [300],
                dates: ["8/1/2025"],
        },
];

var addFanart = function (
        title = [""],
        creator = "",
        location = [""],
        w = [300],
        date = [""]
) {
        fanarts.push({
                name: title,
                author: creator,
                path: location,
                width: w,
                dates: date,
        });
};

fanarts = [];
addFanart(
        ["Chibi Boys", "Gamer Boys"],
        "H.R.",
        ["fanart/H.R/chibi", "fanart/H.R/human"],
        [150],
        ["8/2/2025", "8/2/2025"]
);

var list = document.getElementById("fanart-list");
if (fanarts.length > 0) list.removeChild(document.getElementById("empty"));
for (let fanart of fanarts) {
        var fanartstring = "";

        var i = 0;
        for (let name in fanart.name) {
                fanartstring += fanart.name[i];

                fanartstring += ' (';
                if (fanart.dates[i] != null) fanartstring += fanart.dates[i]; else fanartstring += 'unknown date';
                fanartstring += ')';

                if (i + 1 < fanart.name.length) fanartstring += ", ";
                if (i + 1 == fanart.name.length - 1) fanartstring += " and ";

                i++;
        }

        if (fanart.author != null) fanartstring += " by " + fanart.author;

        var card = document.createElement("li");
        card.className = "book-card";

        var fanartElement = document.createElement("h4");
        fanartElement.innerHTML = fanartstring;

        card.appendChild(fanartElement);

        var i = 0;
        for (let art in fanart.path) {
                var artwork = document.createElement("img");
                artwork.src = "../" + fanart.path[i] + ".png";
                artwork.width = 300;

                if (fanart.width[i] != null) artwork.width = fanart.width[i];
                card.appendChild(artwork);

                if (i + 1 < fanart.name.length)
                        card.appendChild(document.createElement("br"));

                i++;
        }

        list.appendChild(card);
}
