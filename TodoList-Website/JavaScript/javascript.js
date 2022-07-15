let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

/* add btn disabled */

input.addEventListener('keyup', () => {
    if (input.value.trim() != 0){
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
}) 

/* add to do list */

addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Task successfully added to your list',
            showConfirmButton: false,
            timer: 1000
          })
          setTimeout(function() { 
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
            <p> ${input.value} </p>
            <div class="item-btn">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>`

            tasks.appendChild(newItem);
            input.value = '';
          }, 1000);
        
    } else {
        Swal.fire(
            '',
            'Please input some task.',
            'error'
          )
    }
})

/* this script will remove the selected list */

  tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash')) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              setTimeout(function(){
                e.target.parentElement.parentElement.remove();
              }, 1000)
            }
          })
    } else {
        
    }
})

/* mark item as completed */

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    } else {

    }
})

