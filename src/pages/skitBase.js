export function readSkitJson(skitJsonPath = "pages/skits/skit1") {
        const path = "../../" + skitJsonPath + ".json";

        console.info(path);
        fetch(path)
                .then((response) => {
                        // Check if the request was successful
                        if (!response.ok) {
                                throw new Error(`File not found`);
                        }
                        // Parse the JSON data from the response
                        return response.json();
                })
                .then((data) => {
                        console.info("worked!");
                        console.info(data);
                        return data;
                })
                .catch((error) => {
                        console.info("nop");
                        console.error("Error fetching or parsing JSON:", error);
                        return null;
                });
}

export function loadSkitJson(
        document, data = { content: [{ type: "", content: "", size: 0, path: "" }] }
) {
        console.info("lesgo");
        console.log(data.content);
        for (let item in data.content) {
                if (item.type == 'text') {
                        var text = document.createElement('p');
                        text.innerText = item.content;

                        document.body.appendChild(text);
                }
        }
}
