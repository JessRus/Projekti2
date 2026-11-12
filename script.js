const elokuvaInput = document.getElementById("elokuvaInput");
const haeButton = document.getElementById("haeButton");
const elokuvaInfo = document.getElementById("elokuvaInfo");

// PUT_YOUR_API_KEY_HERE FOR THE CODE TO WORK
const API_KEY = "PUT_YOUR_API_KEY_HERE";

haeButton.addEventListener("click", function() {

    const elokuva = elokuvaInput.value;

    fetch(`https://www.omdbapi.com/?t=${elokuva}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            
            if (data.Response === "True") {

                elokuvaInfo.innerHTML =
                    "<h2>" + data.Title + "</h2>" +
                    "<p>Year: " + data.Year + "</p>" +
                    "<p>Genre: " + data.Genre + "</p>" +
                    "<p>Director: " + data.Director + "</p>" +
                    "<p>Actors: " + data.Actors + "</p>" +
                    "<p>Plot: " + data.Plot + "</p>" +
                    "<p>IMDb Rating: " + data.imdbRating + "</p>";

            } else {

                elokuvaInfo.textContent = "Something went wrong, movie not found :(";

            }
        })
});
