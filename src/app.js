const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const errorHandler = require('./middlewares/errorHandler');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})