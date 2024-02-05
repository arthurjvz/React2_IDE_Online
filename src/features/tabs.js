import { createSlice } from "@reduxjs/toolkit"
import {html, css, js} from "../assets/index"

const initialState = [
    {
        id: 1,
        lang:"html",
        imgURL : html,
        buttonContent: "HTML",
        code: `<div>
        <h1>Editeur de code avec React</h1>
        <p>Codez directement sur votre navigateur</p>
</div>
        `
    },
    {
        id: 2,
        lang:"css",
        imgURL : css,
        buttonContent: "CSS",
        code: `body {
            font-family: Roboto , sans serif;
            padding: 25px;
            color: #111;
            background-color: #f1f1f1;
        }
        `
    },
    {
        id: 3,
        lang:"js",
        imgURL : js,
        buttonContent: "JavaScript",
        code: `console.log("hello world")`
    }
]

export const codeUpdater = createSlice({
    name:"code-updater", //On lui donne un nom
    initialState,    // valeur de départ
    reducers : {
        updateCode: (state, action) => {
         state.find(obj => obj.id === action.payload.id).code = action.payload.value
         /* Ici on cherche à modifier le "code" du bon object, pour ce faire :
            on récupère le state, correspondant à initialState, et on utilise "find" pour récupèrer le BON object

            "obj.id === action.payload.id" 
            permet de récupèrer l'id object (html ou css ou js) qui est modifié, une modification du label entrainera une modification 
            du action.payload.id, donc permettra de récupèrer le bon id object

            et enfin ).code =  action.payload.value lui permet de donnée la valeur écrite dans le label au code

            1) on récupère le bon id object grâce à la modification du code
            2) on modifie le code par rapport à ce que l'utilisateur écrit
            */
        }
    }
})

export const {updateCode} = codeUpdater.actions // On export toutes les actions du Updatecode
export default codeUpdater.reducer