let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
    {id: 6, name: '部门5', pid: 3},
]

function formatTree(data){
    const result = []
    const arrMap = []
    for(const a of data) {
        arrMap[a.id] = {...a, children: []}
    }
    data.map(item => {
        if (item.pid === 0) {
            result.push(arrMap[item.id])
        } else {
            if (arrMap[item.pid]) {
                arrMap[item.pid].children.push(arrMap[item.id])
            }
        }
    })

    return result
}
const a = formatTree(arr)
console.table(a);


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

function formatArr(arr){
    const result = []
    // arr.map(item => loop(item))
    loop(arr[0])
    function loop(aItem){
        const {id, name, pid} = aItem
        result.push({id, name, pid, children: []})
        if (aItem.children) {
            aItem.children.map(cItem => loop(cItem))
        }
    }
    
    return result
}
console.log(JSON.stringify(formatArr(arr), null ,2))