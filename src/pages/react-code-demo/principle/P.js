import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import p1 from './p1.png'
import p2 from './p2.png'
import p3 from './p3.png'
import p4 from './p4.png'
import p5 from './p5.png'

class P extends React.Component {
    render(){
        return (
            <div style={{paddingLeft: 15}}>
                <div>
                    <h3>8-3 再次回顾不可变值</h3>
                    <div>函数式编程</div>
                    <ul>
                        <li>一种编程范式，概念比较多</li>
                        <li>纯函数</li>
                        <li>不可变值</li>
                    </ul>
                </div>

                <div>
                    <h3>8-4 vdom和diff是实现React的核心</h3>
                </div>

                <div>
                    <h3>4-7 虚拟DOM-面试里的网红</h3>
                    <p>
                    虚拟DOM（Virtual DOM）和diff<br/>
                    1.vdom是实现vue和React的重要基石<br/>
                    2.diff算法是vdom中最核心，最关键的部分<br/>
                    </p>
                    <p>
                    背景<br/>
                    1.DOM操作非常耗费性能<br/>
                    2.以前用jQuery，可以自行控制DOM操作的时机，手动调整<br/>
                    3.Vue和React是数据驱动视图，如何有效控制DOM操作<br/>
                    </p>
                    <p>
                    解决方案 - vdom<br/>
                    1.有了一定复杂度，想减少计算次数比较难<br/>
                    2.能不能把计算，更多的转移为JS计算？因为JS执行速度很快<br/>
                    3.vdom - 用JS模拟DOM结构，计算出最小的变更，操作DOM<br/>
                    </p>
                    <p>
                    用JS模拟DOM结构 - vnode(见注释)<br/>
                    <img src={p1} style={{width: '60%'}}/><br/>
                    {/* 
                    <div id="div1" class="container">
                        <p>vdom</p>
                        <ul style="font-size: 20px">
                            <li>a</li>
                        </ul>
                    </div> 

                    {
                        tag: 'div',
                        props: {
                            className: 'container',
                            id: 'div1'
                        },
                        children: [
                            {
                                tag:'p',
                                children: 'vdom'
                            },
                            {
                                tag: 'ul',
                                props: {
                                    style: 'font-size: 20px'
                                },
                                children:[
                                    {
                                        tag:'li',
                                        children: 'a'
                                    }
                                ]
                            }
                        ]
                    }
                    */}
                    </p>
                    <p>
                        通过snabbdom学习vdom<br/>
                        1.简洁强大的vdom库，易学易用<br/>
                        2.Vue参考它实现的vdom和diff<br/>
                        3.github地址<br/>
                    </p>
                </div>
                <div>
                    <h3>4-8 用过虚拟DOM吗</h3>
                    <p>
                        snabbdom重点总结<br/>
                        1.h函数 - 生成vnode<br/>
                        2.vnode数据结构<br/>
                        3.patch函数 - 把vnode初次渲染到DOM节点上，DOM更新<br/>
                    </p>
                    <p>
                        vdom总结<br/>
                        1.用JS模拟DOM结构（vnode）<br/>
                        2.新旧vnode对比，得出最小的更新范围，最后更新DOM<br/>
                        3.数据驱动视图的模式下，有效控制DOM操作<br/>
                    </p>
                </div>
                <div>
                    <h3>4-9 虚拟DOM-diff算法概述</h3>
                    <p>
                    diff算法<br/>
                    1.diff算法是vdom中最核心，最关键的部分<br/>
                    2.diff算法能在日常使用vue React中体现出来（如key）<br/>
                    </p>
                    <p>
                    diff算法概述<br/>
                    1.diff即对比，是一个广泛的概念，如linux diff命令，git diff等，不是react独创<br/>
                    2.两个js对象也可以做diff，如github.com/cujojs/jiff<br/>
                    3.两棵树做diff，如这里的vdom diff <br/>
                    <img src={p2}  style={{width: '40%'}} /><br/>
                    </p>
                    <p>
                    树diff的时间复杂度O(n^3)<br/>
                    1.第一，遍历tree1，第二，遍历tree2<br/>
                    2.第三，排序<br/>
                    3.1000个节点，要计算1亿次，算法不可用<br/>
                    </p>
                    <p>
                    优化时间复杂度到O(n)<br/>
                    1.只比较同一层级，不跨级比较<br/>
                    <img src={p3}  style={{width: '40%'}} /><br/>
                    2.tag不相同，则直接删除掉重建，不再深度比较<br/>
                    <img src={p4}  style={{width: '40%'}} /><br/>
                    3.tag和key，两者都相同，则认为是相同节点，不再深度比较<br/>
                    </p>
                </div>

                <div>
                    <h3>4-10 深入diff算法源码-h函数生成vnode</h3>
                </div>

                <div>
                    <h3>4-11 深入diff算法源码-patch函数</h3>
                </div>

                <div>
                    <h3>4-12 深入diff算法源码-updateChildren函数</h3>
                    用到key<br/>
                    <img src={p5} style={{width: '50%'}}/><br/>
                </div>
            
            </div>
        );
    }
}

export default P