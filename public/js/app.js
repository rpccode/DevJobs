document.addEventListener('DOMContentLoaded', () => {
    const skill = document.querySelector('.lista-conocimientos');
    if (skill) {
        skill.addEventListener('click', agregandoSkills)

        //unaves que estamos en editar llamar la funcion
        skillsSeleccionados();
    }
});

const Skills = new Set();
const agregandoSkills = e => {
    if (e.target.tagName === 'LI') {
        if (e.target.classList.contains('activo')) {
            //quitarlo del set y desmarcarlo 
            Skills.delete(e.target.textContent);
            e.target.classList.remove('activo');
        } else {
            Skills.add(e.target.textContent)
            e.target.classList.add('activo')
        }

    }
    const skillArray = [...Skills]
    document.querySelector('#skills').value = skillArray;
}
const skillsSeleccionados = e => {
    const seleccionadas = Array.from(document.querySelectorAll('.lista-conocimientos .activo'));
    seleccionadas.forEach(e => {
        Skills.add(e.textContent);
    })
    const skillArray = [...Skills]
    document.querySelector('#skills').value = skillArray;
}