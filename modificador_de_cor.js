const selectColor = document.querySelector(".principal_main_projeto_formulario_seletor_cor");
const editorColor = document.querySelector(".principal_main_container");

selectColor.addEventListener("input", (event) => {
  let color = event.target.value;
  editorColor.style = `background: ${color}`;
});