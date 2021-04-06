function arrayToTree(list) {

    // 判断数组大小
    if (list.length === 0) {
        return {}
    }
    let root = list.shift()
    return {
        id: root.id,
        value: root.value,
        children: list.length > 0 ? toTree(list, root.id) : []
    }
}

function toTree(list, parentId) {
    let child = []
    for (let i = 0; i < list.length; i++) {
        if (list[i].parentId === parentId) {
            child.push({
                id: list[i].id,
                value: list[i].value,
                children: toTree(list, list[i].id)
            })
        }
    }
    return child
}

let temp=[
    {
        id:1,
        value:'学校',
        parentId:null
    },
    {
        id: 2,
        value: '班级1',
        parentId: 1
    },
    {
        id: 3,
        value: '班级2',
        parentId: 1
    },
    {
        id: 4,
        value: '刘某某',
        parentId: 2
    }
]

console.log(arrayToTree(temp))