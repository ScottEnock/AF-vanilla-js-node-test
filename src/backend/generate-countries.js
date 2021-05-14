import axios from "axios";
import fs from "fs-extra";
import path from "path";

const fetchCountry = async () => {
	try {
		if (!process.argv[2])
			throw new Error("Must supply at least one argument to command.");

		const name = process.argv[2];
		const dir = process.argv[3] ? process.argv[3] : path.resolve();

		const { data: response } = await axios.get(
			`https://restcountries.eu/rest/v2/name/${encodeURI(process.argv[2])}`
		);

		const filteredCountries = response.filter((x) => x.region === "Europe");

		if (filteredCountries.length === 0)
			throw new Error("No european country matching input was found.");

		await fs.outputJSON(
			`${dir}/${name}.json`,
			filteredCountries.map((x) => ({
				countryName: x.name,
				capitalCity: x.capital,
			}))
		);
	} catch (error) {
		if (error?.response?.data?.message)
			return console.error(error.response.data.message);

		console.error(error);
	}
};

fetchCountry();
