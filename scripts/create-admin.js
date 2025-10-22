const bcrypt = require('bcryptjs')

const email = 'admin@market-ia.fr'
const password = 'Admin2024!'

const hash = bcrypt.hashSync(password, 10)

console.log('\n=================================')
console.log('🔐 COMPTE ADMIN CRÉÉ')
console.log('=================================\n')
console.log('📧 Email:', email)
console.log('🔑 Mot de passe:', password)
console.log('\n📋 Hash (pour .env.local):')
console.log(hash)
console.log('\n=================================')
console.log('💾 Copiez ces lignes dans votre .env.local:')
console.log('=================================\n')
console.log(`AUTH_SECRET_KEY=${require('crypto').randomBytes(32).toString('hex')}`)
console.log(`ADMIN_EMAIL=${email}`)
console.log(`ADMIN_PASSWORD_HASH=${hash}`)
console.log('\n=================================\n')
