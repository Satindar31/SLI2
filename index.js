#!/usr/bin/env node

/**
 * SLI2
 * A simple SLI
 *
 * @author Satindar31 <https://satindars-den.cf>
 */

const axios = require("axios");
const figlet = require('figlet')
const exec = require('child_process').exec;
const fs = require("fs")

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	if (input.includes('joke')) {
		const options = {
			method: 'GET',
			url: 'https://jokesapi1.p.rapidapi.com/joke',
			params: { type: flags.type },
			headers: {
				'X-RapidAPI-Key': 'ff6e764b22msh445d5c159cf41e9p184016jsn6e61a157ed0d',
				'X-RapidAPI-Host': 'jokesapi1.p.rapidapi.com'
			}
		};

		axios.request(options).then(function (response) {
			console.log(response.data);
		}).catch(function (error) {
			console.error(error);
		});
	}
	else if (input.includes('genCs')) {

		try {
			figlet('Generate C# project', function (err, data) {
				if (err) {
					console.log('Something went wrong...');
					console.dir(err);
					return;
				}
				console.log(data)
			});
			const command = `mkdir ` + flags.ProjectName + ` && cd ` + flags.ProjectName + ` && dotnet new console`;
			exec(command);
			console.clear()
		} catch (error) {
			console.log(error)
		}

	}
	else if (input.includes('genHTML')){
		const command = `mkdir ${flags.ProjectName} && cd ${flags.ProjectName} && echo > index.html`
		exec(command)
		fs.createWriteStream(flags.ProjectName + "index.html")
	}

})();
