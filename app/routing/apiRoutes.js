//===============================================================
var users = [];

module.exports = function(app) {
	app.post("/api/friends", function(req, res) {
		console.log(users);

		var bestIndex = -1;
		var lowestDifference = 10000;

		var userScore = req.body.score.map( function(elt){ // assure the value can be converted into a number
			      return /^\d+$/.test(elt) ? parseInt(elt) : 0; 
			    })
			    .reduce( function(a,b){ // sum all resulting numbers
			      return a+b
			    });

		for (var i = 0; i < users.length; i++) {

			var totalScore = users[i].score.map( function(elt){ // assure the value can be converted into a number
			      return /^\d+$/.test(elt) ? parseInt(elt) : 0; 
			    })
			    .reduce( function(a,b){ // sum all resulting numbers
			      return a+b
			    });

			    if (Math.abs(userScore - totalScore) < lowestDifference) {
			    	lowestDifference = Math.abs(userScore - totalScore);
			    	bestIndex = i;
			    }
			}

			var returnObject;
			if (users.length > 0) {
				returnObject = {
				userName: users[bestIndex].name,
				userPhoto: users[bestIndex].photo
			};
		} else {
			returnObject = {
				userName: "sorry, no one here yet",
				userPhoto: "oops.jpeg"
			};
		}

		users.push(req.body);
	    res.json(returnObject);
	});
	app.get("/api/friends", function(req, res) {
	    res.json(users);
	});


};

// var users = [];


