var data = require("../data.json");

exports.addFriend = function(req, res) {  
	var newname = req.query.name;
	var newdesc = req.query.description;
	
	//grab();
	console.log(newname);
	console.log(newdesc);
	
	
var newfriend = 
		{
			"name": req.query.name,
			"description": req.query.description,
			"imageURL": req.query.image
		}


console.log(newfriend);
	data["friends"].push(newfriend);
	console.log(data);
	res.render('add',data);
}

