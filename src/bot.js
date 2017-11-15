const LineConnect = require('./connect');
let line = require('./main.js');
let LINE = new line();

// const auth = {
// 	authToken: 'Emdh0Rap8ypmaxaKAQb1.epv6ketlsZZBUvnGte+TOq.ckIwFKMxVuhtD+9Wp657634KtE7yhEFoiGJoD79+A9U=',
// }
// let client =  new LineConnect(auth);
let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
