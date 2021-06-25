import axios from 'axios'
// import * as THING from './thing.module'

function getData() {
    return axios.get('http://10.209.1.230:8806/category/getCategoryTree')
}

function createScene() {
    // Create main application, bind to 'div3d' DIV element as default
    const app = new THING.App();
    // Set the backgroundColor of the Sence
    app.background = 'gray';
    const campus = new THING.Campus({
        url: './assets/campus2.json',
        complete: async function (e) {
            await app.levelManager.changeAsync(campus);
            // createBox()
            // createMarker()
        }
    })
    window.app = app
    window.campus = campus
}

function createBox() {
    let style = new THING.Style({
        sideType: THING.SideType.Double,
        color: THING.Math.randomColor(),
        opacity: .8,
    })
    let box = new THING.Box(4, 4, 4, {
        position: [0, 2, 0],
        style,
    })
}

function createMarker() {
    let style = new THING.Style({
        sideType: THING.SideType.Double,
        image: new THING.ImageTexture('./imgs/alarm_build.png')
    })
    let parent = window.campus.children.query('car01')[0]
    new THING.Marker({
        parent,
        style,
        localPosition: [0, parent.boundingBox.size[1] / 2 + 1, 0],
        pivot: [0.5, 0],
        renderType: THING.RenderType.Sprite
    })
}

export {
    getData,
    createBox,
    createMarker,
    createScene
}