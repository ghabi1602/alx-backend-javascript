interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
	}

const std1: Student = {
	firstName: "Alice",
	lastName: "Smith",
	age: 22,
	location: "Glascow",
	};

const std2: Student = {
	firstName: "Alina",
	lastName: "watson",
	age: 23,
	location: "Liverpool",
	};

const studentsList: Student[] = [std1, std2];
