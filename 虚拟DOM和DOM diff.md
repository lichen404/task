### 虚拟 DOM 是什么

一个能代表 DOM 树的对象，通常含有标签名，标签上的属性，事件监听和子元素们以及其他属性。

```javascript
//React
const vNode = {
    key:null,
    props:{
        children:[ //子元素们
            { type:'span',...},
            {type:'span',...}
        ],
        className:"red"  // 标签上的属性
        onClick:()=>{} //事件
    },
    ref:null,
    type:"div"  // 标签名 or 组件名
}
```

```javascript
const vNode = {
    tag:"div", // 标签名 or 组件名
    data:{
        class:"red", // 标签上的属性
        on:{
            click:()=>{} //事件
        }
    },
    children:[ //子元素们
        {tag:"span",...},
        {tag:"span",...}
    ],
    ...
    }
```

### 虚拟 DOM 的优缺点

#### 优点

- 减少 DOM 操作
  虚拟 DOM 可以将多次操作合并为一次操作，比如你添加 1000 个节点，却是一个一个添加的
- 跨平台
  虚拟 DOM 不止可以变成 DOM ，还可以变成小程序，安卓或者 iOS 应用

#### 缺点

- 需要额外的创建函数，如 createElement 或 h

### DOM diff 是什么

DOM diff 就是一个函数，我们称之为 patch

patches = patch(oldVNode,newVNode)

patches 就是要运行的 DOM 操作，可能长这样:

```javascript
[
    {type:'INSERT',vNode:...},
    {type:'TEXT',vNode:...},
    {type:'PROPS',propsPatch:[...]}
]
```

### DOM diff 的优缺点

#### 优点

可以省去多余的操作，只更新改变的节点，而不必每次更新所有的节点。

#### 缺点

在同级节点中对比会有一些 bug，会出现识别错误的问题。
