# AF-vanilla-js-node-test

## Test spec

Create a basic Node command line script which consumes the REST Countries API - http://restcountries.eu

Only returning countries that have the region value of "Europe".

Which takes the argument of a country name (or partial): `Eg node yourScript.js united`

Then writes a JSON object to a .json file of just the Country name and Capital city, with the filename of the input.

Eg ./united.json

```json
{
    "results": [{
        "countryName": "United Kingdom",
        "capitalCity": "London"
    }, {
        "…"
    }]
}

```

Also create a basic frontend in HTML and ES6, which will take the input country name via a text field, load the matching .json file and then return a UL list of the countries and capitals below the field.

Be sure to use Babel to convert your ES6 code to production ready JS compatible with the following browsers: IE11, Edge 15, Chrome 65, Firefox 60, Safari 9

This test is designed so it shows us that you can interact with external APIs, build backend JS to process that data and also frontend JS to consume that sort of
data, within our current stack.

## Generate Country utility (generate-countries.js)

Within the `src/backend` folder is the node utility to call the restcountries.eu public API for the purposes of retrieving European countries.

It takes the provided input from the command line and creates a JSON file named after the input. The file contains JSON for all returned countries that match the partial provided and are in Europe.

## using the command

`node src/backend/generate-countries.js united build/countries`

- The first parameter is the country name or partial.
- The second parameter is optional and is the output directory
- If no second parameter is provided the output will be the directory the command is ran from

## running the test site

Either execute the `npm run build` command and host the site on a web server, or issue the `npm run dev` command to have the site served up via the serve npm package.

Note: as per the documentation and task set out the site's functionality is depandant on the existance of JSON files that would need to have been already generated. This can be done via the `node src/backend/generate-countries.js united build/countries` command.

This test is obviously contrived and is just to give an indication of how my skillset would stack up against the regular activites of the role. To make this production ready I would question the usefulness of outsourcing the API call to a node utility. I would instead either make the API call itself on the front-end, or if needed convert the logic within the utility to an express api that the client would then call.
