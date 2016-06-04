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
function doGetCaretPosition (oField) {

  // Initialize
  var iCaretPos = 0;
  // IE Support
  if (document.selection) {
    // Set focus on the element
    oField.focus();
    // To get cursor position, get empty selection range
    var oSel = document.selection.createRange();

    // Move selection start to 0 position
    oSel.moveStart('character', -oField.value.length);

    // The caret position is selection length
    iCaretPos = oSel.text.length;
  }

  // Firefox support
  else if (oField.selectionStart || oField.selectionStart == '0')
    iCaretPos = oField.selectionStart;

  // Return results
  return iCaretPos;
}
function getTextFieldSelection(textField) {
	console.log(textField.selectionStart);
    return textField.value.substring(textField.selectionStart, textField.selectionEnd);
}