const bcrypt = require('bcryptjs')

const password = process.argv[2]

if (!password) {
  console.log('Usage: node scripts/hash-password.js <votre-mot-de-passe>')
  process.exit(1)
}

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('Erreur:', err)
    process.exit(1)
  }
  console.log('\nHash de votre mot de passe:')
  console.log(hash)
  console.log('\nCopiez ce hash dans votre .env.local comme ADMIN_PASSWORD_HASH')
})
