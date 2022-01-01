require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61c8308edb75f41f1628a0a4').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('61c918ee1ab98af7e870ce9d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
