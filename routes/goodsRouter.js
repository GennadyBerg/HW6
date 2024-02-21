import { Router } from 'express'

const goodsRouter = new Router()

function getGoods (req, res) {
    res.json({
        id: 4,
        data: 'some data goods'
    })
}

goodsRouter.use((req, res, next) => {
    console.log('goods router middleware')
    next()
})

goodsRouter.get('/goods', getGoods )


export { goodsRouter }



