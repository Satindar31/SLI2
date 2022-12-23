const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	type: {
		type: `string`,
		alias: `jt`,
		desc: `Specifies type of joke`,
		default: `dad`,
	},
	ProjectName: {
		type: `string`,
		alias: `projname`,
		desc: `Specifies name of the project which is to be generated`,
	}
};

const commands = {
	help: { desc: `Print help info` },
	joke: { desc: `Prints a random joke` },
	genCs: { desc: `Generates a C# comsole project` },
	genHTML: { desc: `Generates a basic HTML project` },
};

const helpText = meowHelp({
	name: `SLI2`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
