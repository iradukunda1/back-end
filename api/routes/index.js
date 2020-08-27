const { Router } = require('express')

const postRouter = require("./posts.routes")
const genreRouter = require("./geners.route")
const bookRouter = require("./books.route")
const userRouter = require("./users.route")

const router = Router();

router.use(
    '/v1',
    postRouter,
    genreRouter,
    bookRouter
)
router.use('/v1/users',userRouter)
module.exports = router