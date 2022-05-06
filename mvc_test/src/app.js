import View from './view/View.js'
import HistoryModel from './models/History.js'

const ele = document.querySelector('.div')
const viewObj = new View(ele)




// 이게 메인 컨트롤러 역할
viewObj.on('@click', e =>  console.log(e.detail) ).emit('@click', { a: 'a', b: 'b' })



console.log(HistoryModel)
console.log(HistoryModel.list().then(data => data.map(item => ele.innerHTML += `
    <div>${item.keyword}</div>
    <div>${item.data}</div>
`)))






/* 
    mvc 기본 흐름
    controller 
    models
    views

    뷰 : 화면에 뿌려질 것들의 모든 기능
    - 만약 데이터요청 버튼이 눌리면 컨트롤러한테 그 사실만을 전달해주고 메인 컨트롤러는 모델에서 데이터를 요청 한 후  결과 뷰에게 그것을 뿌린다
    ex) 
        view(입력한 데이터 전송..emit) -> 
        controller(init(ele) 실행..on..) (result view에있는 렌더 함수에 데이터전송) -> 
        result view
*/



















// view.on('click', () => { console.log('hehe') })

// const emit = (event, data) => {
//     const evt = new CustomEvent(event, { detail: data })
//     ele.dispatchEvent(evt)   
// }

// const on = (event, handler) => {
//     ele.addEventListener(event, handler)
// } 

// on('@click', e => console.log(e.detail))
// emit('@click', { a: 'a', b: 'b' })




// ele.addEventListener('@click', e => console.log(e.detail))
// const aa = new CustomEvent('@click', { detail: 'asdasd' })
// ele.dispatchEvent(aa)