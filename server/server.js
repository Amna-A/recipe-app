
const express = require('express')

const app = express()

recipes = 
[
        {
            "id": 1,
            "name": "peanut butter and jelly sandwidtch",
            "ingredients": ['peanut butter', 'jelly', 'bread']
        },
        {
            "id": 2,
            "name": "buckeyes",
            "ingredients": ['chocolate', 'peanut butter', 'sugar']
        },
        {
            "id": 3,
            "name": "hawaiian pizza",
            "ingredients": ['cheese', 'pizza dough', 'tomato sauce','pineaple', 'bacon']
        },
        {
            "id": 4,
            "name": "hot chocolate",
            "ingredients": ['milk', 'chocolate', 'sugar']
        },
        {
            "id": 5,
            "name": 'grilled cheese sandwitch',
            "ingredients": ["cheese", "bread"]
        }   
    ]

app.get('/api/recipe', (req, res)=>{
    res.json(recipes)
})

app.listen(8080, ()=> recipes)