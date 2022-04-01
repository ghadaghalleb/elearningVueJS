const express = require('express')

const app = express();
app.use(express.json())

const auth = require('./routes/api/auth-api')
const users = require('./routes/api/users-api')
const matieres = require('./routes/api/matieres-api')
const cours = require('./routes/api/cours-api')

app.use('/api/auth',auth)
app.use('/api/users',users)
app.use('/api/matieres',matieres)
app.use('/api/cours',cours)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))