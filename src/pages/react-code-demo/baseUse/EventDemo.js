import React from 'react'

class EventDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'zhangsan',
            list: [
                {
                    id: 'id-1',
                    title: '标题1'
                },
                {
                    id: 'id-2',
                    title: '标题2'
                },
                {
                    id: 'id-3',
                    title: '标题3'
                }
            ]
        }

        // 修改方法的 this 指向，bind this应该写在这里，只执行一次
        this.clickHandler1 = this.clickHandler1.bind(this)
    }
    render() {
        // // this - 使用 bind
        // return <p onClick={this.clickHandler1}>
        //     {this.state.name}
        // </p>

        // // 这这里bind this不好，会多次执行，每次点击都会执行，性能不好
        // return <p onClick={this.clickHandler1.bind(this)}>
        // {this.state.name}
        // </p>

        // // this - 使用静态方法
        // return <p onClick={this.clickHandler2}>
        //     clickHandler2 {this.state.name}
        // </p>

        // event
        return <a href="https://imooc.com/" onClick={this.clickHandler3}>
            click me
        </a>

        // 传递参数 - 用 bind(this, a, b)
        // return <ul>{this.state.list.map((item, index) => {
        //     return <li key={item.id} onClick={this.clickHandler4.bind(this, item.id, item.title)}>
        //         index {index}; title {item.title}
        //     </li>
        // })}</ul>
    }
    clickHandler1() {
        // console.log('this....', this) // this 默认是 undefined
        this.setState({
            name: 'lisi'
        })
    }
    // 静态方法，this 指向当前实例，不用bind this
    clickHandler2 = () => {
        this.setState({
            name: 'lisi'
        })
    }
    // 获取 event
    clickHandler3 = (event) => {
        event.preventDefault() // 阻止默认行为
        event.stopPropagation() // 阻止冒泡
        console.log('target', event.target) // 指向当前元素，即当前元素触发
        console.log('current target', event.currentTarget) // 指向当前元素，假象！！！

        // 注意，event 其实是 React 封装的。可以看 __proto__.constructor 是 SyntheticBaseEvent(react17)，SyntheticEvent(react16) 组合事件
        console.log('event', event) // 不是原生的 Event ，原生的 MouseEvent
        console.log('event.__proto__.constructor', event.__proto__.constructor)

        // 原生 event 如下。其 __proto__.constructor 是 MouseEvent
        console.log('nativeEvent', event.nativeEvent)
        console.log('nativeEvent target', event.nativeEvent.target)  // 指向当前元素，即当前元素触发
        console.log('nativeEvent current target', event.nativeEvent.currentTarget) // <div id="root">...</a>

        /*
        1. event 是 SyntheticBaseEvent(react17)，SyntheticEvent(react16)  ，模拟出来 DOM 事件所有能力
        2. event.nativeEvent 是原生事件对象
        3. 所有的事件
            React16绑定到document上
            React17绑定到root组件
            有利于多个React版本并存（documnet只有一个，root可以有多个），例如微前端
        4. 和 DOM 事件不一样，和 Vue 事件也不一样
        */
    }
    // 传递参数
    clickHandler4(id, title, event) {
        console.log(id, title)
        console.log('event', event) // 最后追加一个参数，即可接收 event
    }

}

export default EventDemo