# Go语言fmt包(输入,输出,格式化占位符)

`fmt` 是Go语言中的标准库主要是用来 Go语言中终端输入输出以及格式化输出常用的函数.

# fmt

Go 语言标准库中的 fmt 包提供了打印函数将数据以字符串形式输出到控制台、文件、其他满足 io.Writer 接口的至以及其他字符串中

## 输出

标准库`fmt`提供了以下几种输出相关的函数.

### Print

`Print` 系列函数会将内容输出到系统的标准输出,区别在于`Print` 函数直接输入内容到终端,

```go
package main

import "fmt"

func main() {
	fmt.Print("hello")
	fmt.Print("我叫春生")
	fmt.Print("我是北京吴彦祖")
}
```

### Printf

`Printf`函数支持格式化输出字符串.

```go
package main

import "fmt"

func main() {
	fmt.Printf("我是春生，人称北京: %s \n","吴彦祖")
	fmt.Printf("是不是季度我的容颜。\n")
}
```

### Println

`Println` 函数 自定帮我们添加换行符 ,输出内容独占一行.他不支持格式化出去

```go
package main

import "fmt"

func main() {
	fmt.Println( "我是春生")
	fmt.Println( "人称北京吴彦祖")
	fmt.Println("不能嫉妒我容颜")
}
```



可以看到 没个输出都是独占一行的,自动帮我们添加了 `\n`

### Fptiny

`Fprint`系列函数会将内容输出到一个`io.Writer`接口类中,我们通常用这个函数往文件中写入内容.

```go
func Fprint(w io.Writer, a ...interface{}) (n int, err error)  // 没有格式化输出。不带换行符
func Fprintf(w io.Writer, format string, a ...interface{}) (n int, err error) // 格式化输出 需要自定义
func Fprintln(w io.Writer, a ...interface{}) (n int, err error) // 自动带 换行符
```

例子:

```go
package main

import (
	"fmt"
	"os"
)

func main() {

	// 向标准输出写入内容
	// os.Stdout 使用 os.Stdout 只能输出到 控制台
	fmt.Fprintln(os.Stdout, "向标准输出写入内容") // io结束后输出内容 
	// os.OpenFile(文件路径，文件打开模式，文件权限)
	fileObj, err := os.OpenFile("./xx.txt", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
	// 异常捕获
	if err != nil {
		fmt.Println("打开文件出错，err:", err)
		return
	}
	name := "北京吴彦祖"
	// 向打开的文件句柄中写入内容
	fmt.Fprintf(fileObj, "往文件中写如信息：%s", name)
}
```

注意.只要满足`io.Writer`借口都支持写入

### Sprint

`Sprint`系列函数会把传入的数据生成并返回一个字符串

```go
func Sprint(a ...interface{}) string
func Sprintf(format string, a ...interface{}) string
func Sprintln(a ...interface{}) string
```

例子:

```go
package main

import "fmt"

func main() {
   s1 := fmt.Sprintf("我是春生 人称: %s","北京吴彦祖")
   s2 := fmt.Sprintln("好好学习 天天向上")
   s3 := fmt.Sprint("劳动人民最光荣")


   fmt.Println(s1)  // 打印结果
   fmt.Println(s2)  // 打印结果
   fmt.Println(s3)  // 打印结果

}
```

结果:

```go
我是春生 人称: 北京吴彦祖
好好学习 天天向上

劳动人民最光荣

Process finished with exit code 0
```

结果可以看到。Sprintf 格式化 转换结果 赋值给了 s1 最终通过 `fmt.Println` 打印.

### Errorf

`Errorf` 函数根据format参数生成格式化字符并返回一个包含该字符串的错误.

```go
func Errorf(format string, a ...interface{}) error
```

通常使用这种方式来自定义错误类型，例如：

```go
package main

import "fmt"

func main() {
	
	err := fmt.Errorf("这是一个错误信息:%s","北京吴彦祖报表了")
	fmt.Println(err)
}
```

Go1.13版本为`fmt.Errorf`函数新加了一个`%w`占位符用来生成一个可以包裹Error的Wrapping Error。

```go
package main

import (
	"errors"
	"fmt"
)
func main() {
	e := errors.New("原始错误e")
	w := fmt.Errorf("Wrap了一个错误%w", e)
	fmt.Println(w)
}
```

## 格式化占位符

`*printf`系列函数都支持format格式化参数，在这里我们按照占位符将被替换的变量类型划分，方便查询和记忆。

### 通用占位符

| 占位符 |                说明                |
| :----: | :--------------------------------: |
|   %v   |          值的默认格式表示          |
|  %+v   | 类似%v，但输出结构体时会添加字段名 |
|  %#v   |           值的Go语法表示           |
|   %T   |            打印值的类型            |
|   %%   |               百分号               |

代码:

```go
package main
import "fmt"
func main() {
	var pi float64 = 3.1415926
	fmt.Printf("%v \n",pi) // %v 会自动推导出当前的变量 是什么格式 类型输出
	var o = struct {
		name string
	}{"春生"}
	fmt.Printf("%v \n",o)   //  输出值
	fmt.Printf("%+v \n",o)  // 结构体输出 建 和 值
	fmt.Printf("%#v \n",o)  // 以Go的语法输出
	fmt.Printf("%T \n",o)  //  %T 打印值的类型
	fmt.Printf("%T \n",pi)  // %T 打印值的类型
	fmt.Printf("%% %v",100) // 如果打印的是 带有 %的特殊 形式 需要加上 %%去注视特殊字符

}
```

结果:

```go
3.1415926 
{春生} 
{name:春生} 
struct { name string }{name:"春生"} 
struct { name string } 
float64 
% 100
Process finished with exit code 0
```

### 布尔型

| 占位符 |    说明     |
| :----: | :---------: |
|   %t   | true或false |

```go
fmt.Printf("%t \n",true)
fmt.Printf("%t \n",false)
```

结果:

```go
true 
false 

Process finished with exit code 0
```

### 整型

| 占位符 |                             说明                             |
| :----: | :----------------------------------------------------------: |
|   %b   |                         表示为二进制                         |
|   %c   |                    该值对应的unicode码值                     |
|   %d   |                         表示为十进制                         |
|   %o   |                         表示为八进制                         |
|   %x   |                   表示为十六进制，使用a-f                    |
|   %X   |                   表示为十六进制，使用A-F                    |
|   %U   |          表示为Unicode格式：U+1234，等价于”U+%04X”           |
|   %q   | 该值对应的单引号括起来的go语法字符字面值，必要时会采用安全的转义表示 |

示例代码如下：

```go
n := 65
fmt.Printf("%b\n", n)
fmt.Printf("%c\n", n)
fmt.Printf("%d\n", n)
fmt.Printf("%o\n", n)
fmt.Printf("%x\n", n)
fmt.Printf("%X\n", n)
```

输出结果如下：

```bash
1000001
A
65
101
41
```

### 浮点数与复数

| %b   | 无小数部分、二进制指数的科学计数法，如-123456p-78      |
| ---- | ------------------------------------------------------ |
| %e   | 科学计数法，如-1234.456e+78                            |
| %E   | 科学计数法，如-1234.456E+78                            |
| %f   | 有小数部分但无指数部分，如123.456                      |
| %F   | 等价于%f                                               |
| %g   | 根据实际情况采用%e或%f格式（以获得更简洁、准确的输出） |
| %G   | 根据实际情况采用%E或%F格式（以获得更简洁、准确的输出） |

示例代码如下：

```go
f := 12.34
fmt.Printf("%b\n", f)
fmt.Printf("%e\n", f)
fmt.Printf("%E\n", f)
fmt.Printf("%f\n", f)
fmt.Printf("%g\n", f)
fmt.Printf("%G\n", f)
```

输出结果如下：

```bash
6946802425218990p-49
1.234000e+01
1.234000E+01
12.340000
12.34
12.34
```

### 字符串和[]byte

| 占位符 |                             说明                             |
| :----: | :----------------------------------------------------------: |
|   %s   |                   直接输出字符串或者[]byte                   |
|   %q   | 该值对应的双引号括起来的go语法字符串字面值，必要时会采用安全的转义表示 |
|   %x   |           每个字节用两字符十六进制数表示（使用a-f            |
|   %X   |          每个字节用两字符十六进制数表示（使用A-F）           |

示例代码如下:

```go
s := "春生"
fmt.Printf("%s \n",s)
fmt.Printf("%q \n",s)
fmt.Printf("%x \n",s)                       
fmt.Printf("%X \n",s)
```

输出结果如下:

```go
春生 
"春生" 
e698a5e7949f 
E698A5E7949F 
```

### 指针

| 占位符 |              说明              |
| :----: | :----------------------------: |
|   %p   | 表示为十六进制，并加上前导的0x |

```go
s := "春生"
fmt.Printf("%p\n",&s)
```

结果:

```go
0xc000010200

Process finished with exit code 0
```

### 宽度标识符

宽度通过一个紧跟在百分号后面的十进制数指定,如果未指定宽度,则表示值除了必须之外不作填充. 精度通过(可选的)宽度后跟点号后跟的十进制数指定.

如果为指定精度,会使用默认精度;如果点号后没有跟数字吗,就表示精度为0

例子:

| 占位符 |        说明        |
| :----: | :----------------: |
|   %f   | 默认宽度，默认精度 |
|  %9f   |  宽度9，默认精度   |
|  %.2f  |  默认宽度，精度2   |
| %9.2f  |    宽度9，精度2    |
|  %9.f  |    宽度9，精度0    |

### 代码:

```go
n := 12.34
fmt.Printf("%f \n",n)
fmt.Printf("%9f \n",n)
fmt.Printf("%.2f \n",n)
fmt.Printf("%9.2f \n",n)
fmt.Printf("%9.f \n",n)
```

结果:

```go
12.340000 
12.340000 
12.34 
    12.34 
       12 

Process finished with exit code 0
```

### 其他falg

| 占位符 |                             说明                             |
| :----: | :----------------------------------------------------------: |
|  ’+’   | 总是输出数值的正负号；对%q（%+q）会生成全部是ASCII字符的输出（通过转义）； |
|  ’ ‘   | 对数值，正数前加空格而负数前加负号；对字符串采用%x或%X时（% x或% X）会给各打印的字节之间加空格 |
|  ’-’   | 在输出右边填充空白而不是默认的左边（即从默认的右对齐切换为左对齐）； |
|  ’#’   | 八进制数前加0（%#o），十六进制数前加0x（%#x）或0X（%#X），指针去掉前面的0x（%#p）对%q（%#q），对%U（%#U）会输出空格和单引号括起来的go字面值； |
|  ‘0’   | 使用0而不是空格填充，对于数值类型会把填充的0放在正负号后面； |

举个例子：

举个例子：

```go
s := "小王子"
fmt.Printf("%s\n", s)
fmt.Printf("%5s\n", s)
fmt.Printf("%-5s\n", s)
fmt.Printf("%5.7s\n", s)
fmt.Printf("%-5.7s\n", s)
fmt.Printf("%5.2s\n", s)
fmt.Printf("%05s\n", s)
```

输出结果如下：

```bash
小王子
  小王子
小王子  
  小王子
小王子  
   小王
00小王子
```

## 输入

Go语言的`fmt`包下有`fmt.Scan`、`fmt.Scanf`、`fmt.Scanln`三个函数,可以在程序运行过程中从标准输入获取用户的输入.

### fat.Scan

函数定签名如下:

```go
func Scan(a ...interface{}) (n int, err error)
```

- Scan从标准输入扫描文本,读取由空白符分割的值保存到传递给本函数的参数中,换行符视为空白符.
- 本函数返回成功扫描的数据个数和遇到的任何错误.如果读取的数据个数比提供的参数少,会返回一个错误报告原因

代码:

```go
package main

import "fmt"

func main() {
	var (
		name string
		age int
		married bool
	)
	fmt.Scan(&name,&age,&married)
	fmt.Printf("扫描结果 name:%v age:%d marridL:%v",name,age,married)
}
```

结果:

```go
春生 
18
false
扫描结果 name:春生 age:18 marridL:false
Process finished with exit code 0
```

可以看到 `fmt.Scan`从标准输入中扫描用户输入的数据,将空白符分割的数据分别存在指定的参数.

### fmt.Scanf

函数签名:

```go
func Scanf(format string, a ...interface{}) (n int, err error)
```

- Scanf从标准输入扫描文本,根据format参数指定的格式去读取由空白符分隔的值保存到传递本函数的参数中
- 本函数返回成功扫描的数据个数和遇到的任何错误.

代码:

```go
package main

import "fmt"

func main() {
	var (
		name    string
		age     int
		married bool

	)

	fmt.Scanf("1:%v 2:%v 3:%v", &name, &age, &married)
	fmt.Printf("扫描结果 name:%s age:%d married:%t \n", name, age, married)
}
```

结果:

```go
1:小王子 2:28 3:false
扫描结果 name:小王子 age:28 married:false 

Process finished with exit code 0
```

`fmt.Scanf`不同于`fmt.Scan`简单的以空格作为输入数据的分割符,`fmt.Scanf` 为输入数据指定了具体的输入内容格式,只有按照格式输入数据才会被扫描并存入变量.

### fmt.Scanln

函数签名如下:

```go
func Scanln(a ...interface{}) (n int, err error)
```

- Scanln类似Scan，它在遇到换行时才停止扫描。最后一个数据后面必须有换行或者到达结束位置。
- 本函数返回成功扫描的数据个数和遇到的任何错误。

代码:

```go
package main

import "fmt"

func main() {
	var (
		name    string
		age     int
		married bool

	)
	fmt.Scanln(&name,&age,&married)
	fmt.Printf("扫描结果 name:%v age:%v married:%v",name,age,married)
}
```

结果:

```go
chunsheng 177 true
扫描结果 name:chunsheng age:177 married:true
Process finished with exit code 0
```

`fmt.Scanln`遇到回车就结束扫描了,这个比较常用

### bufio.NewReader

有时候我们想完整获取输入内容,而输入的内容可能包含空格、这种情况下可以使用`bufio`包来实现.

代码:

```go
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)  // 标准输出生成对象
	fmt.Print("请输入内容:")

	text,_ := reader.ReadString('\n')  // 读取回车换行

	text = strings.TrimSpace(text)  // strings 方法 去空格 去换行符

	fmt.Printf("%v \n",text)  //打印输出
	
}
```

结果:

![image-20210126100955083](/Users/chunsheng/Library/Application Support/typora-user-images/image-20210126100955083.png)

### Fscan系列

这几个函数分别类似于 `fmt.Scan`、`fmt.Scanf`、`fmt.Scanln`三个函数,只不过它们不是从标准输出读取数据是从`io.Reader`中读取数据

```go
func Fscan(r io.Reader, a ...interface{}) (n int, err error)
func Fscanln(r io.Reader, a ...interface{}) (n int, err error)
func Fscanf(r io.Reader, format string, a ...interface{}) (n int, err error)
```

Fscan 系列都是和 io 阻塞的有关系 .

### Sscan系列

这几个函数功能分别类似于`fmt.Scan`、`fmt.Scanf`、`fmt.Scanln`三个函数，只不过它们不是从标准输入中读取数据而是从指定字符串中读取数据。

```go
package main

import (
	"fmt"
)

func main() {
	//reader := bufio.NewReader(os.Stdin)  // 标准输出生成对象
	//fmt.Print("请输入内容:")
	//text,_ := reader.ReadString('\n')  // 读取回车换行
	//text = strings.TrimSpace(text)  // strings 方法 去空格 去换行符
	//fmt.Printf("%v \n",text)  //打印输出

	var (
		name string
		age int
		is bool
	)

	fmt.Scan(&name,&age,&is)     // 读取由空白符分隔的值保存到传递给本函数的参数中 ，换行符视为空白符
	fmt.Scanln(&name,&age,&is)   //  遇到换行符是才停止扫描。最后一个数据必须有换行符
	fmt.Println(name,age,is) 

}
```