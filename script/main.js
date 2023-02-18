// let theButton = document.queryselector ("#buttonOne")
// step1
let theButtons = document.querySelectorAll("#buttonHolder img"),
    theHeading = document.querySelector("#headLine h1"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    mainBoard = document.querySelector(".puzzle-pieces"),
// store the dragged piece in a global variable
	// because we need it in the handleDrop function
    draggedPiece = null; 


// step 3
// functionality always goes in the middle -> how do we want
// the app to behave?
function changeBGImage() {
	// the `` is a JavaScript template string. It tells the JS enging to evaluate the expression
	// inside the braces - run that little bit of code. In this case it's just pulling the ID of the
	// button we clicked on and putting it at the end of the image name (0, 1, 2, 3)
	// and updating the background-image style of the puzzle board element.

	// bug fix #2 should go here. it's at most 3 lines of JS code.
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);

	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); // e is shorthand for event
	// this overrides the default dragover behaviour
	console.log('dragged over me'); 
}

// bug1
{const dropZone = this;

// check if the drop zone has a piece already
    const existingPiece = dropZone.querySelector('img');
    if (existingPiece) {
        puzzleBoard.insertBefore(draggedPiece, existingPiece);
        dropZone.removeChild(existingPiece);
        mainBoard.appendChild(existingPiece);
    }

    // add the dropped piece to the drop zone
    dropZone.appendChild(draggedPiece);

    // mark the piece as dropped
    draggedPiece.classList.add("dropped");

    // clear the draggedPiece reference
    draggedPiece = null;
}

// step2
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));