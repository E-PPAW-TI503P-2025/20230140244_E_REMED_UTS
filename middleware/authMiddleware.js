const isAdmin = (req, res, next) => {
    const role = req.headers['x-user-role'];
    if (role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied. Admins only.' });
    }
};

const isUser = (req, res, next) => {
    const role = req.headers['x-user-role'];
    const userId = req.headers['x-user-id'];

    if (role === 'user' && userId) {
        next();
    } else {
        res.status(403).json({ message: 'Access denied. Users only.' });
    }
};

module.exports = { isAdmin, isUser };