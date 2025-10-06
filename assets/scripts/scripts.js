document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input')
  const addButton = document.getElementById('add-button')
  const taskList = document.getElementById('task-list')

  function addTask () {
    const taskText = taskInput.value.trim()
    if (taskText !== '') {
      const listItem = document.createElement('li')
      // Create the checkbox
      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      const taskSpan = document.createElement('span')
      taskSpan.textContent = taskText

      // the remove button
      const removeButton = document.createElement('button')
      removeButton.textContent = '×'
      removeButton.classList.add('remove')

      // Add event listener to mark task as completed
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          taskSpan.classList.add('completed')
        } else {
          taskSpan.classList.remove('completed')
        }
      })

      // Add event listener to remove button
      removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem)
      })

      // Append elements to the list
      listItem.appendChild(checkbox)
      listItem.appendChild(taskSpan)
      listItem.appendChild(removeButton)
      taskList.appendChild(listItem)

      taskInput.value = ''
    }
  }

  addButton.addEventListener('click', addTask)

  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask()
    }
  })
})
