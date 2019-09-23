## 浅析 URL

### URL 和 URI

- URI(Uniform Resource Identifier)
- URL(Uniform Resource Locater)

URL 是 URI 的子集，中文名称为统一资源定位符。它标识了互联网上每个文件的位置以及处理方式。

#### URL 的组成

例如：`https://www.baidu.com/s?wd=hello&rsv_spt=1#1`

`https` 为超文本传输协议，两个电脑之间传输内容的协议 。也就是说前面的 http 或者 https 指的是协议

`www.baidu.com` 域名

`/s` 路径， https://www.baidu.com 这个网址默认会有一个 /的路径

`wd=hello&rsv_spt=1` 查询参数 ，可以点击 https://www.baidu.com/s?wd=hi&rsv_spt=1#1 会发现变成了在百度 hi 的内容

`#1` 锚点 ， 将网站#1 变为 #3 ，点击 https://www.baidu.com/s?wd=hello&rsv_spt=1#3 会发现直接显示在第一行的是该搜索项网页的第三个链接 ，多次修改#后面的数字就会明白了

`:80` 其实这个网址还有一个端口号，http 协议的服务端口号就是对应的 80。https://www.baidu.com/s?wd=hello&rsv_spt=1#1:80 这个网址的效果和 https://www.baidu.com/s?wd=hello&rsv_spt=1#1 是一样的。

#### URL 与 URI 的区别

URL 和 URI 都定义了 what the resource is。而 URL 还定义了 how to get the resource。

一个网址`http://www.xxx.com/dir/filename.html` 中 `/dir/filename.html` 就是 uri。而整个链接又是 url，url 包含了指定什么协议（`http`），在哪个站点（`http://www.xxx.com`）获得什么资源（`/dir/filename.html`）

### DNS

什么是 DNS
DNS (Domain Name System) 域名系统，将方便用户记忆的域名地址 domain names 转换为 IP 数字串、IP addresses，从而在因特网 Internet 或者私有网络上找到特定的机器。

#### DNS 的工作流程

在你的浏览器地址栏输入 mozilla.org。
您的浏览器询问您的计算机是否已经识别此域名所确定的 IP 地址（使用本地 DNS 缓存）。 如果是的话，这个域名被转换为 IP 地址，然后浏览器与网络服务器交换内容。结束。
如果你的电脑不知道 mozilla.org 域名背后的 IP, 它会询问一个 DNS 服务器，这个服务器的工作就是告诉你的电脑已经注册的域名所匹配的 IP。
现在电脑知道了要请求的 IP 地址，你的浏览器能够与网络服务器交换内容。
###nslookup 命令
nslookup 命令用来查询 DNS 的记录，查看域名解析是否正常，在网络故障的时候用来诊断网络问题。

####基本用法
命令格式：`nslookup domain[dns-server]`
示例：`nslookup www.163.com`

### IP

IP，全称互联网协议地址，是指 IP 地址，意思是分配给用户上网使用的网际协议（英语：InternetProtocol,IP）的设备的数字标签。常见的 IP 地址分为 IPv4 与 IPv6 两大类，但是也有其他不常用的小分类。

#### IP 地址的作用

IP 地址是人们在 Internet 上为了区分数以亿计的主机而给每台主机分配的一个专门的地址，通过 IP 地址就可以访问到每一台主机。

区分数以亿计的主机而分配的专门地址，所以他的主要作用是为了区别不同的主机。
IP 地址从字面看，它具有定位的作用，他的定位原则取决于它的分配原则，IP 地址查询就是基于此。

### ping 命令

ping 命令有助于验证网络层的连通性。一般进行网络故障排除时，可以使用 ping 命令向目标计算机或 IP 地址发送 ICMP 回显请求，目标计算机会返回回显应答，如果目标计算机不能返回回显应答，说明在源计算机和目标计算机之间的网路存在问题，需要进一步检查解决！

ping 命令是 Windows 操作系统中集成的一个 TCP/IP 协议探测工具，它只能在有 TCP/IP 协议有网络中使用。

ping 命令的格式为：`ping[参数 1][参数2][……][目的地址]`

### 域名

域名（Domain names）是互联网基础架构的关键部分。它们为互联网上任何可用的网页服务器提供了人类可读的地址。但 IP 地址很难记忆而且可能会随着时间的推移发生改变 。为了解决这些问题，我们使用人类可读的地址，称作域名。

#### 域名的级别分类

域名分不同级别，包括顶级域名、二级域名、三级域名等。

- 顶级域名： .com / .cn / .org 等
- 二级域名： baidu.com / google.com 等
- 三级域名： www.baidu.com / blog.163.com 等
