let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
    {id: 6, name: '部门5', pid: 3},
]

let tree = []

arr.forEach(item => {
    if (item.id != 1) {
        item.pid && queryTree(tree, item)
    } else {
        tree.push(item)
    }
})
function queryTree(treeData, source){
    treeData.map(item => {
        if (item.id === source.pid) {
            if (!item.children) {
                item.children = [source]
            } else {
                item.children.push(source)
            }
        } else {
            item.children && item.children.length > 0 && queryTree(item.children, source)
        }
    })
}
console.table(tree)


let treedata = [
    {
        id: 1, name: '部门1', pid: 0, 
        children: [
            {
                id: 2, name: '部门2', pid: 1, 
                children: [
                    {
                        id: 3, name: '部门3', pid: 2
                    },
                ]
            }
        ]
    },
]
const format = []
function xx(data) {
    data && data.map(item => {
        if (item.children && item.children.length > 0) {
            xx(item.children)
            item.children = null
            format.push(item)
        } else {
            item.children = null
            format.push(item)
        }
    })
}
xx(treedata)
console.table(format)