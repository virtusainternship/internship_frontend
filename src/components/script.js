const name = document.getElementById('name')
const form = document.getElementById('form')

form.addEventListener('submit',(e) => {
    let messages =[]
    if(name.value === '' || name.value == null ) {
        messages.push('Name is Requied')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
        
})