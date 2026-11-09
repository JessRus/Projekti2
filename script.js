// MUISTA MUUTTAA VIDEO/GITHUB
const API_KEY = "PUT_YOUR_API_KEY_HERE";

const movieInput = document.getElementById("elokuvaInput");
const searchButton = document.getElementById("haeButton");
const movieInfo = document.getElementById("elokuvaInfo");

// Add an event listener to the search button
searchButton.addEventListener("click", function() {

    // Get the movie name from the input
    let movieName = movieInput.value;

    // Create the API URL
    let url = "https://www.omdbapi.com/?apikey="
        + API_KEY + "&t=" + encodeURIComponent(movieName);

    // Fetch movie information from the API
    fetch(url)

        // Convert the response into JSON
        .then(response => response.json())

        // Display the movie information
        .then(data => {

            if (data.Response === "True") {

                movieInfo.innerHTML =
                    "<h2>" + data.Title + "</h2>" +
                    "<p>Year: " + data.Year + "</p>" +
                    "<p>Genre: " + data.Genre + "</p>" +
                    "<p>Director: " + data.Director + "</p>" +
                    "<p>Actors: " + data.Actors + "</p>" +
                    "<p>Plot: " + data.Plot + "</p>" +
                    "<p>IMDb Rating: " + data.imdbRating + "</p>";

            } else {

                movieInfo.textContent = "Something went wrong, movie not found :(";

            }
        })
});
