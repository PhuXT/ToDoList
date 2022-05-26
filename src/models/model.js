const  mongoose = require('mongoose')
const userSchema = mongoose.Schema( {
    userName: { type: String, max: 50 },
    email: { type: String, max: 50, require: true, unique: true},
    password: { type: String, max: 50, require: true},
    tasks: [ 
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "tasks"
        }
    ]

}, { timestamps: true})


const taskSchema = mongoose.Schema( {
    task: { type: String, max: 100, require:  true, unique: true},
    description: { type: String, max: 200, require: false},
    isComplete: { type: Boolean, default: false},
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    }
}, { timestamps:  true})

module.exports = {
   userModel: mongoose.model('users', userSchema),
   taskModel: mongoose.model('tasks', taskSchema)
}
