

var score = [];

var name;

var photo;

//question variables
var question1;

var question2;

var question3;

var question4;

var question5;

var question6;

var question7;

var question8;

var question9;

var question10;

// console.log(userProfile);

$(document).ready(function() {



		$("#submit").on("click", function() {

			name = $("#name").val();
			// score.push(name);

			photo = $("#photo").val();
			// score.push(photo);

			question1 = $("#question1_form input:checked").attr("value");
			score.push(question1);

			question2 = $("#question2_form input:checked").attr("value");
			score.push(question2);

			question3 = $("#question3_form input:checked").attr("value");
			score.push(question3);

			question4 = $("#question4_form input:checked").attr("value");
			score.push(question4);

			question5 = $("#question5_form input:checked").attr("value");
			score.push(question5);

			question6 = $("#question6_form input:checked").attr("value");
			score.push(question6);

			question7 = $("#question7_form input:checked").attr("value");
			score.push(question7);

			question8 = $("#question8_form input:checked").attr("value");
			score.push(question8);

			question9 = $("#question9_form input:checked").attr("value");
			score.push(question9);

			question10 = $("#question10_form input:checked").attr("value");
			score.push(question10);

			//add up the numbers in the score array
			console.log(
			  
			    score.map( function(elt){ // assure the value can be converted into a number
			      return /^\d+$/.test(elt) ? parseInt(elt) : 0; 
			    })
			    .reduce( function(a,b){ // sum all resulting numbers
			      return a+b
			    })
			)

			var userProfile = {
				newName: name,
				newPhoto: photo,
				newScore: score
			};

			console.log(userProfile);

			$.post("api/friends", userProfile function(data) {
				
			})

	})



});

