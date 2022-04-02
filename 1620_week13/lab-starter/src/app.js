//Starting code
const container = document.querySelector('.original-container')

container.addEventListener('click', (evt) => {
    console.log(evt.target.innerText)
})

function clickEvent(evt) {
    console.log(evt.currentTarget.innerText)
}
//Code to make copy

originalSection = document.querySelectorAll('section.originals div.original-container div')

function copy(evt){
	console.log(evt)
	const copy_container = document.querySelector('div.copy-container')
    copy_container.insertAdjacentHTML("afterbegin", evt.currentTarget.innerText+'<br>')
}

originalSection.forEach(evnt => evnt.addEventListener('click', copy))

//Code to delete copies



const delteButton = document.querySelector('copies.button')
delteButton.forEachforEach(evnt => evnt.removeEventListener('click', copy))





//copy.remov('click', copies)
//removeEventListener
//original_section.removeEventListener('click', copy)
//const copies = document.querySelector(".deleteCopy")




