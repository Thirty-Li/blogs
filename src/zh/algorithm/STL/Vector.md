---
tittle: Vector的使用
index: true
date: 2024-03-05
star: true
article: true
category:
  - Vector
  - C++
tag:
  - STL
---
# Vector
vector是一个动态数组会自动分配和管理内部的内存，使其能够动态地存储元素，具有快速的随机访问能力（O(1)时间复杂度）

## 内存分配：
### 始分配内存
>当你创建一个空的vector或通过指定初始大小时，vector会分配一块内存来存储元素。这个初始内存通常比容器实际需要的要大，以容纳未来添加的元素。STL库会自动决定初始内存大小。
 

### 内存分配策略 
>vector的内存分配策略通常是指数增长的，也就是说，当vector的容量不足以存储新元素时，它会分配一块更大的内存，通常是原内存的两倍。这种策略可以减少频繁的内存分配和复制操作，提高性能。
当vector的内存不足以容纳新元素时，它会分配新的内存，将现有元素从旧内存复制到新内存中，然后释放旧内存。这个过程可能导致元素的重新分配，因此要谨慎处理大型vector的插入操作，因为它们可能会导致性能开销。
 

## 功能使用：
（注意：以下代码块中std::表示标准命名空间，若使用using namespace std;则可以省略)

包含头文件
在使用vector之前，需要包含相应的头文件：
```c++
#include <vector>
```
定义和声明
vector容器的定义和声明可以如下所示：
```c++
std::vector<元素类型> 变量名;
```

例如，要创建一个存储整数的vector，可以这样声明：
```c++
std::vector<int> myVector;
```
初始化
vector可以通过多种方式进行初始化：
无参数初始化：vector对象被创建时为空。
```c++
std::vector<int> myVector; // 空的整数向量
```
指定大小初始化：可以指定容器的大小，所有元素初始化为默认值。
```c++
std::vector<int> myVector(5); // 包含5个整数的向量，值为0
```
指定大小和初始值初始化：可以指定容器的大小和初始值。
```c++
std::vector<int> myVector(5, 42); // 包含5个整数的向量，值为42
```
使用初始化列表初始化：C++11之后，可以使用初始化列表来初始化vector。
```c++
std::vector<int> myVector = {1, 2, 3, 4, 5};
//表示包含5个整数的向量，值分别为1，2，3，4，5
```

成员函数的使用

插入元素：`push_back` 函数用于在 `vector` 的末尾添加一个元素。
```c++
std::vector<int> myVector;
myVector.push_back(42); // 向向量末尾添加元素 42
```
访问元素：可以使用下标运算符 [] 或 at 函数来访问 vector 中的元素。
```c++
int firstElement = myVector[0];      // 访问第一个元素
int secondElement = myVector.at(1);  // 访问第二个元素
```
注意：使用[] 时，该元素必须存在
```c++
//错误用法
vector<int>a;
a[0]=1;//定义容器a时，容器为空不存在a[0]
//正确用法
vector<int>a(10);
a[0]=1;
```
删除元素：`pop_back` 函数用于删除 `vector` 末尾的元素。
```c++
myVector.pop_back(); // 删除向量末尾的元素
```
清空容器：`clear` 函数可以用来清空 `vector` 中的所有元素。
```c++
myVector.clear(); // 清空整个向量
```
获取容器大小和容量：`size` 函数用于获取容器中元素的数量，而 `capacity` 函数用于获取容器的容量。
```c++
int size = myVector.size();       // 获取元素数量
int capacity = myVector.capacity(); // 获取容器容量
```
重设容器大小：`resize` 函数可以用来改变 `vector` 的大小，可以指定新大小并指定新元素的默认值。
```c++
myVector.resize(10);           // 将向量的大小调整为 10，多余的元素被默认值填充
myVector.resize(20, 0);        // 将向量的大小调整为 20，多余的元素用 0 填充
```
预分配内存：`reserve` 函数可以用来预分配内存，以提高性能。它不会更改 `vector` 的大小，但会增加容器的容量。
```c++
myVector.reserve(100); // 预分配足够的内存以容纳 100 个元素
```
插入和删除指定位置的元素：insert 函数用于在指定位置插入元素，erase 函数用于删除指定位置的元素。
```c++
myVector.insert(myVector.begin() + 2, 99); // 在第三个位置插入元素 99
myVector.erase(myVector.begin() + 1);      // 删除第二个位置的元素
```
获取首尾迭代器：`begin` 和 `end` 函数用于获取 `vector` 的起始和结束迭代器，可用于遍历容器。
```c++
for (std::vector<int>::iterator it = myVector.begin(); it != myVector.end(); ++it) {
    // 使用迭代器访问元素
    int element = *it;
}
```
将就地构造的元素插入到向量中：`emplace_back` 和 `emplace` 成员函数允许你在容器的末尾或指定位置以构造函数的方式插入新元素，而不是通过拷贝构造或移动构造。
`emplace_back` 用于在 `vector` 的末尾插入新元素，而 `emplace` 则用于在指定位置插入新元素。
```c++
#include <iostream>
#include <vector>
class MyClass {
public:
    MyClass(int a, double b) : integer(a), floating_point(b) {}
private:
    int integer;
    double floating_point;
};
int main() {
    std::vector<MyClass> myVector;
    // 使用 emplace_back 在 vector 末尾插入元素
    myVector.emplace_back(1, 3.14);
    // 使用 emplace 在指定位置插入元素
    myVector.emplace(myVector.begin() + 1, 7, 1.23);
    return 0;
}
```
交换两个容器内容：

`swap` 成员函数将它们的内容互换。注意，`swap` 不会复制元素，而是直接交换指向元素的内部指针，因此它的执行速度非常快。

`swap` 成员函数对于在不需要复制大量元素的情况下快速交换容器内容非常有用，尤其是对于大型容器。这有助于减少内存开销和提高性能。
```c++
#include <iostream>
#include <vector>
int main() {
    std::vector<int> vector1 = {1, 2, 3};
    std::vector<int> vector2 = {4, 5, 6};
    // 使用 swap 交换 vector1 和 vector2 的内容
    vector1.swap(vector2);
    return 0;
}
```
判断容器是否为空：如果向量为空，则返回 `true`；如果向量不为空，则返回 `false`。

```c++
vector<int>a;
a.empty();
```
容器遍历
使用迭代器：

```c++
#include <iostream>
#include <vector>
int main() {
    std::vector<int> myVector = {1, 2, 3, 4, 5};
    for (std::vector<int>::iterator it = myVector.begin(); it != myVector.end(); ++it) {
        std::cout << *it << " ";
    }
    return 0;
}
```
使用 `C++11` 的自动类型推导：
```c++
#include <iostream>
#include <vector>
int main() {
    std::vector<int> myVector = {1, 2, 3, 4, 5};
    for (auto element : myVector) {
        std::cout << element << " ";
    }
    return 0;
    //注意：此时不能通过element去改变容器内的值
    //若想通过element去改变容器内的值，则需要将auto element改为auto &element
}
```
多维`vector`的使用        
定义及初始化
以二维`vector`为例：

使用默认值初始化：
```c++
#include <iostream>
#include <vector>
int main() {
    int rows = 3;
    int cols = 4;
    // 初始化一个3x4的二维 vector，所有元素都为默认值（0）
    std::vector<std::vector<int>> twoDimensionalVector(rows, std::vector<int>(cols));
    // 输出二维 vector
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            std::cout << twoDimensionalVector[i][j] << " ";
        }
        std::cout << std::endl;
    }
    return 0;
}
``` 

指定初始值初始化：
```c++
#include <iostream>
#include <vector>
int main() {
    int rows = 3;
    int cols = 4;
    // 初始化一个3x4的二维 vector，所有元素都初始化为特定值（例如-1）
    std::vector<std::vector<int>> twoDimensionalVector(rows, std::vector<int>(cols, -1));
    // 输出二维 vector
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            std::cout << twoDimensionalVector[i][j] << " ";
        }
        std::cout << std::endl;
    }
    return 0;
}
```
易错提醒： 
越界访问： 访问 `std::vector` 中的元素时要小心，确保不越界。使用下标访问元素时，确保索引值在有效范围内，否则会导致未定义行为。
```c++
std::vector<int> myVector = {1, 2, 3};
int value = myVector[5]; // 这可能导致未定义行为
```
解决方法： 使用 `.at()` 成员函数或检查索引范围来避免越界访问。

在循环中修改容器： 在使用迭代器或循环遍历 `std::vector` 时，不要在循环内修改容器，因为在修改 `std::vector` 的过程中可能会使迭代器失效，从而导致未定义行为。这是因为 `std::vector` 可能会重新分配内存来容纳新元素，这会导致旧的迭代器失效。

```c++
std::vector<int> myVector = {1, 2, 3};
for (auto it = myVector.begin(); it != myVector.end(); ++it) {
    if (*it == 2) {
        myVector.erase(it); // 这可能导致迭代器失效
    }
}
```
解决方法：
 
```c++
std::vector<int> myVector = {1, 2, 3, 4, 5};
for (auto it = myVector.begin(); it != myVector.end(); ) {
    if (*it == 2) {
        it = myVector.erase(it); // 删除元素并获得下一个有效的迭代器
    } else {
        ++it; // 前进到下一个元素
    }
}
``` 

内存重新分配： 当 `std::vector` 不断增长时，它可能会频繁地重新分配内存，从而影响性能。使用 `reserve()` 函数来提前分配足够的内存，以避免频繁的重新分配。

```c++
std::vector<int> myVector;
for (int i = 0; i < 1000; ++i) {
    myVector.push_back(i); // 可能导致频繁内存重新分配
}
 
// 改进：提前分配内存
myVector.reserve(1000);
```
 