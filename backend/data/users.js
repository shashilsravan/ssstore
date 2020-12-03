import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'Admin@example.com',
        password: bcrypt.hashSync('sravan', 12),
        isAdmin: true,
        isSuperAdmin: true
    },
    {
        name: 'John Doe',
        email: 'John@example.com',
        password: bcrypt.hashSync('sravan', 12),
    },
    {
        name: 'Jane Doe',
        email: 'Jane@example.com',
        password: bcrypt.hashSync('sravan', 12),
    },
]

export default users
