export function readSkitJson(skitJsonPath = "pages/skits/skit1") {
        var returnData = null;

        fetch("https://sphis-sinco.github.io/Puy-and-Bez/" + skitJsonPath + ".json")
                .then((response) => {
                        // Check if the request was successful
                        if (!response.ok) {
                                throw new Error(
                                        `File not found`
                                );
                        }
                        // Parse the JSON data from the response
                        return response.json();
                })
                .then((data) => {
                        returnData = data;
                })
                .catch((error) => {
                        console.error("Error fetching or parsing JSON:", error);
                });

        return returnData;
}
