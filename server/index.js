const express = require('express')
const app = express()
const PORT = 3040
const server = app.listen(PORT, function () { console.log(`server started at ${PORT}`)})
app.get('/api/podcast/:name', function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    const data = {
        ui:{
            title: [
                {title: 'Take your podcast to the next  '},
                ],
            latestEpisodes : [
                {
                    id:1,
                    title: 'Should you get outboard audio gear?',
                    description: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
                    src: 'djInstrArtic',
                    category:'Gear',
                    Episodes: 'Episodes ',
                },
                {
                    id:2,
                    title: 'Mic tricks to take you to the next level',
                    description: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
                    src: 'microfonArtic',
                    category:'Tips & Tricks',
                    Episodes: 'Episodes ',
                },
                {
                    id:3,
                    title: 'The best microphone under $200',
                    description: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
                    src: 'heroArtic',
                    category:'Gear',
                    Episodes: 'Episodes ',
                },
            ],
            reviewInfo : [
                {id:1, author: 'Betty Lacey', review: 'I can’t recommend this podcast enough'},
                {id:2, author: 'Adam Driver', review: 'Jacob is the best in the business'},
                {id:3, author: 'Marcus Brown', review: 'A wealth of audio knowledge'},
                {id:4, author: 'Jessica Knowl', review: 'Every episode is a gem!'},
                {id:5, author: 'Scott Adams', review: 'Whoa whoa, let me take some notes!'},
                {id:6, author: 'Steven Blast', review: 'I’ve upped my game considerably since I started listening'},
            ],
        },
    }
    const name = req.params.name
    res.send(data[name])
})