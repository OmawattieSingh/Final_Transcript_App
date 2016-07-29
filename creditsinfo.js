// a list of class info objects
var classData = [
	{"Subject": "Math", "Credits_Earned": 6, "Credits_Required": 6, },
	{"Subject": "English", "Credits_Earned": 4, "Credits_Required": 8, },
	{"Subject": "Social Studies", "Credits_Earned": 4, "Credits_Required": 8, },
	{"Subject": "Science", "Credits_Earned": 6, "Credits_Required": 6 },
	{"Subject": "Foreign Language", "Credits_Earned": 2, "Credits_Required": 2, },
	{"Subject": "PE/Health", "Credits_Earned": 3.5, "Credits_Required": 5, },
	{"Subject": "Art/Music", "Credits_Earned": 4, "Credits_Required": 2, },
	{"Subject": "Total Earned", "Credits_Earned": 31.5, "Credits_Required": 44, },
];

// This variable holds the HTML representing each row in the data table
var tableDataString = "";

// For each data object, construct a row of data.
classData.forEach(function(info) {
	// construct a row in our table using our list of class data objects
	tableDataString += "<tr>" + 
	               "<td>" + info.Subject + "</td>" +
				   "<td>" + info.Credits_Earned + "</td>" + 
				   "<td>" + info.Credits_Required + "</td>" +
				   "</tr>";
});

// if you want to see what HTML string will be put in our table tags, try the following line:
console.log(tableDataString);

// put our table string in our table
$("#CreditsInfo").append(tableDataString);