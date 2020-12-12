

### 前言

在学习使用 Vue 和 React 的过程中，我发现它们在展示数组的数据时都需要添加 key ，但并不太明白这么做的原因。很多教程也提到如果使用 index 作为 key 可能会出现 Bug，但在我的实践中似乎也没有出现过什么问题。闲暇之余，在知乎上看到了相关问题，今天来总结一下。

#### Virtual DOM

Vue 和 React 都使用了虚拟 DOM ，虚拟 DOM 的作用就是用一个对象去代替真实的 DOM 对象，当有多次更新 DOM 的动作时，不会立即更新 DOM，而是将变化保存在一个对象中，最终一次性将改变渲染出来。这样可以避免 DOM 的重新渲染耗费性能。

#####  DOM diff

![img](https://pic1.zhimg.com/80/v2-73120ff4c30dd81a128cd422e325786a_720w.jpg?source=1940ef5c)



当页面的数据发生变化时，Diff 算法只会比较同一层级的节点，如果节点的类型相同，那么则会重新设置该节点的属性，从而实现节点的更新。当某一层有很多相同节点时，也就是列表节点时，Diff 算法的更新过程默认情况下也是遵循以上原则。

比如以下情况：

![img](https://pic1.zhimg.com/80/v2-6e88cc53a7e427f0ae8340cf930ac30d_720w.jpg?source=1940ef5c)

我们希望在 B 和 C 之间加一个 F，Diff 算法默认执行起来是这样的：

![img](https://pic1.zhimg.com/80/v2-bf76311258f100b789226ccbb2600071_720w.jpg?source=1940ef5c)

即把 C 更新成 F，D更新成 C，E 更新成 D，最后再插入 E。可以看出这样做的效率很低。我们需要使用 key 来给每个节点做一个唯一标识，Diff 算法就可以正确地识别此节点，找到正确的位置插入新的节点，复用其他节点。

![img](https://pic1.zhimg.com/80/v2-bb1147af7c458f0b09d6a3c2f74b0100_720w.jpg?source=1940ef5c)

sameVNode 函数的简化源码，用于判断是不是同一节点。

```javascript
function sameVNode(a, b) {
  return a.key === b.key && a.tag === b.tag
}
```

可以看出判断两个节点是否为同一节点（也就是是否可以复用），标准是 key 相同且 tag 相同。

#### 为什么不能使用 index 作为 key？

- 带来性能问题
  index 作为 key 的话其实就等于不加 key，因为 key 是当前的索引值，sameVNode 函数的结果为 true ，所以跟不加 key 的更新流程是一样的。
- 可能会出错
  index 作为 key 只适用于不依赖子组件状态或临时 DOM 状态（例如表单输入值）的列表渲染输出，原因见下文。

#### 为什么有时候使用 index 作为 key 看起来好像没有问题?

因为我们大多数时候在列表场景使用的组件依赖的是外部的 props，组件内部的 data 是相同的。在上面的场景中，props 会发生变化，因此视图(看起来)会正确更新，但一样会产生不必要的性能损失。如果使用了组件内部的 data 就会发现 Vue 复用了错误的节点,具体可以查看这个[例子](https://codesandbox.io/s/vue-template-forked-lcgj3?file=/src/App.vue)

当你点击第三项的 delete 按钮，看上去是正常的，第三项被成功删除了。

如果点击第二项的 delete 按钮，会发现外部的 props 更新了，但内部的属性却没有更新。因为按照 index 作为 key 的话。实际的 DOM 更新流程是：第二项被复用，更新 props ，而第三项被删除。在这个过程中，第二项的内部属性和 DOM 状态都将被保留，而第三项却被删除了，所以就会出现更新错误的情况。

![未命名文件 (2)](C:\Users\genew\Downloads\未命名文件 (2).png)

#### 为什么不能使用随机数作为 key?

key 不稳定，会导致每次列表渲染，列表中的组件都要重新渲染，带来性能问题。

####  没有 id 怎么办？

1. 创建一个 id() 函数，每次调用就自增一，可以看下[这篇文章](https://juejin.cn/post/6844903823757180941)介绍的方法。
2. 使用 guid 或 uuid 库
3. 最好使用数据库中的 id

### 总结

- DOM Diff 算法会复用 key 和标签相同的节点
- 使用 index 作为 key 和 不使用 key 其实是一样的
- 不要使用随机数或 index 作为 key，请使用唯一的 id 作为 key，否则会导致性能问题或者显示错误

---

### 参考

- [v-for 为什么要加 key，能用 index 作为 key 么](https://www.cnblogs.com/youhong/p/11327062.html)
- [为什么 Vue 中不要用 index 作为 key?](https://juejin.im/post/6844904113587634184#heading-12)
- [什么情况下 Vue 使用 index 作为 key 会出问题](https://juejin.im/post/6844904163772629005)
- [Vue/React 的一种安全获取 key 的方法](https://juejin.im/post/6844903823757180941)
- [Vue2.0 v-for 中 :key 到底有什么用?](https://www.zhihu.com/question/61064119/answer/766607894)
- [为什么使用 v-for 时必须添加唯一的 key?](https://segmentfault.com/a/1190000013810844)
