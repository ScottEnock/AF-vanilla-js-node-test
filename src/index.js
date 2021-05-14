// form.addEventListener("submit", (e) => e.preventDefault());
const axios = require("axios");

document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("#search");

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		const input = document.querySelector("#country-input");
		const ul = document.querySelector("ul");
		ul.innerHTML = "";

		const { data } = await axios
			.get(`/countries/${input.value}.json`)
			.catch(() => {
				const li1 = document.createElement("li");
				li1.innerHTML = `Could not match "${input.value}" within our records. Please try another search term.`;
				ul.appendChild(li1);
			});

		data.forEach((x) => {
			const li = document.createElement("li");
			li.innerHTML = `${x.countryName} - ${x.capitalCity}`;
			ul.appendChild(li);
		});

		input.value = "";
	});
});
