"use strict";

// Dependencies
const compress = require("compression")
const express = require("express")
const path = require("path")

// Variables
const port = process.env.PORT || 8080
const web = express()

/// Configurations
//* Express
web.use(compress({ level: 1 }))

// Main
web.use((req, res, next)=>{
    if(req.headers.via && req.headers.via.match("archive.org_bot")) return res.send("𝓦𝓲𝓽𝓱 𝓪𝓵𝓵 𝓭𝓾𝓮 𝓻𝓮𝓼𝓹𝓮𝓬𝓽, 𝓵𝓸𝓿𝓮 𝓪𝓷𝓭 𝓹𝓵𝓮𝓪𝓼𝓾𝓻𝓮, 𝓘 𝓱𝓪𝓿𝓮 𝓽𝓸 𝓼𝓪𝔂 𝓽𝓱𝓪𝓽 𝔂𝓸𝓾 𝓬𝓪𝓷'𝓽 𝓭𝓸 𝓽𝓱𝓪𝓽.")
    if(req.path.match(".html")) return res.redirect(req.path.replace(".html", ""))

    next()
})

web.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }))
web.use("*", (req, res)=>res.redirect("/"))
web.listen(port, ()=>{console.log(`Server is running. Port: ${port}`)})