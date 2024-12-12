// Example of dynamically loading courses
const courses = [
    { title: 'Curso 1', description: 'Descrição do curso 1' },
    { title: 'Curso 2', description: 'Descrição do curso 2' },
    { title: 'Curso 3', description: 'Descrição do curso 3' },
];

const coursesGrid = document.getElementById('coursesGrid');
courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
    `;
    coursesGrid.appendChild(courseCard);
});