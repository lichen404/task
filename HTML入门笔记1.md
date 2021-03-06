## HTML 入门笔记 1

HTML 的全名是”超文本标记语言“（HyperText Markup Language），是由万维网之父 TimBerners-Lee 发明的。

HTML 起手应该使用 Emmet 语法写英文感叹号，然后按 tab。

### 常见的表章节标签

- `h1~h6` 用来表示文章标题，h1 为最高级，h6 为最低级
- `section` 表示一个包含在 HTML 文档中的独立部分，它没有更具体的语义元素来表示，一般来说会有包含一个标题
- `article` 标签表示页面里面有一段完整的内容，即使页面的其他部分不存在，也具有独立使用的意义，通常用来表示一篇文章或一个论坛帖子。他可以有自己的标题(h1 到 h6)
- `main` 标签表示页面的主题内容，一个页面只能有一个 main 标签
- `aside` 标签表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框（call-out boxes）

### 全局属性

全局属性是所有 HTML 元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用。

此处介绍几个常用的全局属性

#### id

---

id 属性是元素在网页内的唯一标识符，**id 属性的值理论上必须是全局唯一，但写多个同样值并不会报错。** id 属性的值还可以在最前面加上#，放到 URL 中作为锚点，定位到该元素在网页内部的位置。比如，用户访问网址 https://foo.com/index.html#bar 的时候，浏览器会自动将页面滚动到 bar 的位置，让用户第一眼就看到这部分内容。

#### class

---

class 属性用来对网页元素进行分类。如果不同元素的 class 属性值相同，就表示它们是一类的。

#### title

---

title 属性用来为元素添加附加说明。大多数浏览器中，鼠标悬浮在元素上面时，会将 title 属性值作为浮动提示，显示出来。

#### tabindex

---

当浏览者使用 TAB 键在网页控件中移动时，将首先移动到具有最小 tabIndex 属性值的控件上，最后在具有最大 tabIndex 属性值的控件上结束移动。

- `负整数`：该元素可以获得焦点（比如使用 JavaScript 的 focus()方法），但不参与 Tab 键对网页元素的遍历。这个值通常是-1。
- `0`：默认的 tabIndex 属性为 0 ，该元素参与 Tab 键的遍历，将排列在在所有指定 tabIndex 的控件之后。
- `正整数`：网页元素按照从小到大的顺序（1、2、3、……），参与 Tab 键的遍历。如果多个元素的 tabindex 属性相同，则按照在网页源码里面出现的顺序遍历。
- `一般来说，`tabindex 属性最好都设成 0，按照自然顺序进行遍历，这样比较符合用户的预期，除非网页有特殊布局。

链接、输入框等默认可以遍历，可以获取到焦点。

#### style

---

style 属性用来指定当前元素的 CSS 样式。

#### contenteditable

---

HTML 网页的内容默认是用户不能编辑，contenteditable 属性允许用户修改内容。它有两个可能的值。

- `true 或空字符串`：内容可以编辑
- `false`：不可以编辑

### 常见的内容标签

#### a 标签

---

链接通过 a 标签表示，用户点击后，浏览器会跳转到指定的网址。

a 标签的常用属性：

- title:  超链接的描述性信息
- href: 给出链接指向的地址，也可以是锚点
- target: 以何种方式展示打开的链接
  - \_self（默认值）: 当前窗口打开
  - \_blank: 在新窗口打开

#### strong 标签

---

strong 是一个行内元素，表示它包含的内容具有很强的重要性，需要引起注意。浏览器会以粗体显示内容。

#### em 标签

---

em 是一个行内标签，表示强调（emphasize），浏览器会以斜体显示它包含的内容。

**em 和 strong 的区别**
em 表示强调，strong 表示更强烈的强调。言简意赅，表明了 em 和 strong 的命名来历。并且在浏览器中，em 默认用斜体表示，strong 用粗体表示。
em 用来局部强调，strong 则是全局强调。从视觉上考虑，em 的强调是有顺序的，阅读到某处时，才会注意到。strong 的强调则是一种随意无顺序的，看见某文时，立刻就凸显出来的关键词句。斜体和粗体刚好满足了这两种视觉效果，因此也就成了 em 和 strong 的默认样式。
em 表示内容的重点（stress emphasis），strong 表示强烈的重要性、严重性或内容的紧迫性，strong 不会改变所在句子的语意，em 则会改变所在句子的语义。
em 和 strong 的区别

#### code 标签

---

code 标签是一个行内元素，表示标签内容是计算机代码，浏览器默认会以等宽字体显示。

如果要表示多行代码，code 标签必须放在 pre 内部。code 本身仅表示一行代码。

#### pre 标签

---

pre 是一个块级元素，表示保留原来的格式（preformatted），即浏览器会保留该标签内部原始的换行和空格。浏览器默认以等宽字体显示标签内容。

注意，pre 只保留空格和换行，不会保留 HTML 标签。HTML 标签仍会生效，如果想要显示 HTML 代码，需要转义`<` 和`>`符号。
