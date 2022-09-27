# tampermonkey-plugin
油猴插件

# XMLHttpRequest.prototype的属性–列出主要属性
```text
abort：资料说是调用该方法后 ， readyState变为0 。在readyState-时测试 ， 我测试结果readyState变为4 ， 其余都是顺序变化 1 -2 -3 -4

open：打开连接，传入方法和地址，是否异步，是否需要认证，调用该方法的时候readyState改为1

send：发送请求 ， 发送成功后readyState变为2 ，然后自动接受服务器数据 。

setRequestHeader：设置请求头，传入两个参数，参数一请求头的属性，参数二请求头的值

readyState：对象初始化为0 ， 调用open方法之后改为1 。 调用send()方法后自动修改值。不可人工干预。不可自定义设置(自定义设置报错，搞不懂报错原理)，0-该对象被构造出来的时的值 。 1-open开始打开链接，把值变为1 ，2-send方法调用后，把请求发送到服务器。但是未收到响应 。 3-收到响应后，但响应未完成 ，4-服务器的响应全部接受

onreadystatechange：readyState改变时调用的事件函数。

getAllResponseHeaders：返回响应头部信息 ， 测试在readyState等于2及大于2都是有响应头部信息 ，头部信息由字符串

getResponseHeader：传入参数(必传否则报错)，返回对应的响应头信息 。未查询到返回null

responseText：服务器端返回的响应体 ，不包含响应头。readyState为1和2时，该值为空。数据较少时 ，3和4一样 。 没有使用大数据测试过 。 资料介绍数据量大时 ，3为部分数据 ， 4为全部数据。
```