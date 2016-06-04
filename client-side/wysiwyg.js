var editor = document.getElementById("editor");
italic_button.addEventListener("click",function(){
	style = "<span style = 'font-style:italic'>";
	applyStyle(style);
});
underline_button.addEventListener("click",function(){
	style = "<span style = 'text-decoration:underline'>";
	applyStyle(style);
});
cross_button.addEventListener("click",function(){
	style = "<span style = 'text-decoration:line-through'>";
	applyStyle(style);
})
function applyStyle(style){
	editor.value = editor.value.substring(0, editor.selectionStart)+ style + getTextFieldSelection(editor)+"</span>"+editor.value.substring(editor.selectionEnd, editor.value.length);
}
function getTextFieldSelection(textField) {
	console.log(textField.selectionStart);
    return textField.value.substring(textField.selectionStart, textField.selectionEnd);
}