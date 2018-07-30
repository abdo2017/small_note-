function getNote() {

    if (localStorage.getItem("note")) {
        var note = localStorage.getItem("note");
    } else {
        var note = "Go ahead and edit this note to save in the localstorage";
    }
    document.querySelector(".note-text").innerHTML = note;
}

function saveNote() {
    var noteText= document.querySelector(".note-text").innerHTML;
    localStorage.setItem("note",noteText);
}
function clearNote() {
    localStorage.clear();
    return false;
}
getNote();