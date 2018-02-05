module.exports = {
	workflow:
	[
		{
			Question: "In which city are you looking for movie?",
			Type: "dropdown",
			IsAsked: false,
			Step: 1,
			Suggestion: ["Bangalore", "Hyderabad", "Pune", "Delhi"],
			Answer: ""
		}, 
		{
			Question: "Which movie are you looking for?",
			Type: "text",
			IsAsked: false,
			Step: 2,
			Suggestion: ["ABCD", "ABCD2", "ABCD3", "ABCD4"],
			Answer: ""
		},
		{
			Question: "On which date do you want to book a movie?",
			Type: "date",
			IsAsked: false,
			Step: 3,
			Answer: ""
		},
		{
			Question: "Can you please select the show timing?",
			Type: "time",
			IsAsked: false,
			Step: 4,
			Answer: ""
		},
		{
			Question: "How many tickets do you want to book?",
			Type: "number",
			IsAsked: false,
			Step: 5,
			Answer: ""
		},
		{
			Question: "Can you please select the seats?",
			Type: "text",
			IsAsked: false,
			Step: 6,
			Suggestion: ["A1", "A2", "A3", "A4"],
			Answer: ""
		},
		{
			Question: "Can you please enter your Phone number?",
			Type: "number",
			IsAsked: false,
			Step: 7,
			Answer: ""
		},
		{
			Question: "Can you please enter your email id?",
			Type: "email",
			IsAsked: false,
			Step: 8,
			Answer: ""
		},
		{
			Question: "You have successfully booked the movie ticket.",
			Type: "text",
			IsAsked: false,
			Step: 9,
			Answer: ""
		}
	]
};