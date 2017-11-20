module.exports = function getLocalIp() {
	const n = require('os').networkInterfaces();
	for (let k in n) {
	    const inter = n[k];
	    for(let j in inter) {
	    	if(inter[j].family === 'IPv4' && !inter[j].internal)
	            return inter[j].address;
	    }        
	}
}