const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');
const figlet = require('figlet')

module.exports = ({ clear = true }) => {
	unhandled();
	welcome(
		figlet('SLI V2 \n \n \n \n \n ', function(err, data) {
			if (err) {
				console.log('Something went wrong...');
				console.dir(err);
				return;
			}
			console.log(data)
		})
	);
};
