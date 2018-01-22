/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User} = require('../server/db/models')
const {UserWallet} = require('../server/db/models')
const {Order} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'stranger@email.com', password: '123'}),
    User.create({email: 'someguy@email.com', password: '123'})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)

  const userWallets = await Promise.all([
    UserWallet.create({coins: ['BTC', 'XVG'], coinsAmount: [1.5, 125000], userId: 1}),
    UserWallet.create({coins: ['BTC', 'ETH'], coinsAmount: [0.25, 22.22222222], userId: 2})
  ])
  console.log(`seeded ${userWallets.length} userWallets`)

  const orders = await Promise.all([
    Order.create({symbol: 'ETH', type: 'Buy', coinAmount: 25, price: 0.022152, userId:1}),
    Order.create({symbol: 'ETH', type: 'Sell', coinAmount: 25, price: 0.10211, userId:1}),
    Order.create({symbol: 'XVG', type: 'Buy', coinAmount: 125000, price: .0000055, userId:1}),
    Order.create({symbol: 'ETH', type: 'Buy', coinAmount: 22.22222222, price: 0.034065, userId: 2})
  ])
  console.log(`seeded ${orders.length} orders`)

  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
