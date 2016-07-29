// a list of class info objects
var classData = [
	{"class": "Algebra 1", "teacher": "Ms. Bradly", "grade": 91, "credits": 1.0, "on_track": "Yes"},
	{"class": "Geometry", "teacher": "Mr. Bill", "grade": 92, "credits": 1.0, "on_track": "Yes"},
	{"class": "Algebra 11/Trig", "teacher": "Ms. Grech", "grade": 87, "credits": 1.0, "on_track": "Yes"},
	{"class": "Living Environment", "teacher": "Ms. Brathwite", "grade": 91, "credits": 1.0, "on_track": "Yes"},
	{"class": "Earth Science", "teacher": "Ms. Shumer", "grade": 87, "credits": 1.0, "on_track": "Yes"},
	{"class": "Chemistry", "teacher": "Ms. Easter", "grade": 58, "credits": 1.0, "on_track": "No"},
	{"class": "Global History 1", "teacher": "Ms. Scarborough", "grade": 83, "credits": 1.0, "on_track": "Yes"},
	{"class": "Global History 11", "teacher": "Mr. Otto", "grade": 85, "credits": 1.0, "on_track": "Yes"},
	{"class": "U.S History", "teacher": "Mr. Otto", "grade": 90, "credits": 1.0, "on_track": "Yes"}
];

// This variable holds the HTML representing each row in the data table
var tableDataString = "";

// For each data object, construct a row of data.
classData.forEach(function(info) {
	// construct a row in our table using our list of class data objects
	tableDataString += "<tr>" + 
	               "<td>" + info.class + "</td>" +
				   "<td>" + info.teacher + "</td>" + 
				   "<td>" + info.grade + "</td>" +
				   "<td>" + info.credits + "</td>" + 
				   "<td>" + info.on_track + "</td>"  + 
				   "</tr>";
});

// if you want to see what HTML string will be put in our table tags, try the following line:
console.log(tableDataString);

// put our table string in our table
$("#classInfo").append(tableDataString);

$('#Print').click(function(){
window.print();
})

$('#Email').click(function(){
window.open('mailto:test@example.com?subject=This is My Transcript&body="Your Transcript here"');
})