export default function updateStudentGradeByCity(students, city, grades) {
	const studentsByCity = students.filter((std) => std.location === city);
	const result = studentsByCity.map(obj => {
		const match = grades.find(item => obj.id === item.id);
		return {
			...obj,
			grade: match ? match.grade : "NA"
		};
	});
	return result;
}
