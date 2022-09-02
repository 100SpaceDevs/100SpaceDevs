const Ships = require('../models/shipsModel')

module.exports = {
    getShips: async (req,res)=>{
        console.log(req.user)
        try{
            const shipsItems = await Ships.find({userId:req.user.id})
            const itemsLeft = await Ships.countDocuments({userId:req.user.id,completed: false})
            res.render('ships.ejs', {ships: shipsItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createShips: async (req, res)=>{
        try{
            await Ships.create({ships: req.body.shipsItem, completed: false, userId: req.user.id})
            console.log('ships has been added!')
            res.redirect('/ships')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Ships.findOneAndUpdate({_id:req.body.shipsIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Ships.findOneAndUpdate({_id:req.body.shipsIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteShips: async (req, res)=>{
        console.log(req.body.shipsIdFromJSFile)
        try{
            await Ships.findOneAndDelete({_id:req.body.shipsIdFromJSFile})
            console.log('Deleted ships')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}  