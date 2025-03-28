---
tittle: 自定义Vector
index: true
date: 2025-03-28
star: true
article: true
category:
  - String
  - C++
tag:
  - STL

---

# `KAllocator`

基于内存池的自定义堆内存管理器，主要用于优化小对象的内存分配与释放。
其核心思想是预分配一块连续内存，并使用空闲链表进行管理，从而减少动态内存分配的开销。

> 1. 内存池 (`memory_pool`)： 预先分配固定大小的内存块，提高分配效率。

> 2. 空闲链表 (`free_list`)： 维护已释放的块，供后续复用，避免频繁调用 malloc/free。

> 3. 分配策略： 先检查 `free_list`，若无可用块，则顺序分配新块。

> 4. 释放策略： 释放的内存不会归还给系统，而是加入 `free_list`，加快后续分配速度。

> 5. 兼容 `STL`： 通过 `rebind` 机制，使 `KAllocator` 适用于标准库容器

### 代码流程

初始化：

> `memory_pool` 作为固定大小的数组，存放最多 `capacity` 个 T 类型对象。

> `free_list` 为空，`current` 记录当前分配位置。

分配内存 `allocate()`

> 检查 `free_list` 是否有可用块：

> 若存在，则从 `free_list` 取出一个块。

> 若 `free_list` 为空，则从 `memory_pool` 分配新块。

> 若 `memory_pool` 已满，则调用 std::allocator<T> 进行动态分配。

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/eac61daa49b40192fbe8a66b4439bfae.png?raw=true)

释放内存（deallocate()）

1. 释放的内存不会归还给系统，而是加入 `free_list`，以便后续复用。

2. 维护 `free_list` 结构，使其始终指向最新释放的块。

3. 若 n 超过 `capacity`，则使用 `std::allocator<T>` 进行正常释放。

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/3ad0ab1905486e3c3c6b1a7b8a950cf5.png?raw=true)

# `KIterator`

提供类似 `STL` 迭代器的功能。

> 支持指针操作 (`operator*`, `operator->`) 使其像指针一样使用。

> 支持递增和运算 (`operator++`, `operator+`, `operator-`) 方便遍历容器。

> 支持比较运算 (`operator==`, `operator!=`) 便于控制循环。

> 兼容 STL 迭代器，可以用于标准库算法。

# `KVector `

类似于标准库 `std::vector` 的动态数组实现，具有高效的动态扩展能力，支持自定义分配器 `Allocator`，并提供基本的容器操作接口。

> 动态内存管理：使用 `KAllocator` 进行内存管理，支持动态扩容和缩容。

> 元素管理：提供插入、删除、访问、清空等操作。

> 迭代器支持：提供 `begin()` 和 `end()` 以支持遍历。

> 移动语义支持：实现移动构造和移动赋值优化性能。

成员变量

``` c++
private:
    T* m_data;               // 数据存储指针
    size_t m_capacity;       // 容器容量
    size_t m_size;           // 当前元素个数
    Allocator m_allocator;   // 内存分配器
```

构造函数

``` c++
KVector(); // 默认构造函数
KVector(size_t size); // 带初始值（大小）的构造函数
template<typename... Args>
KVector(Args... args); // 带初始值（数值）的构造函数
KVector(std::initializer_list<T> initList); // 列表初始化构造函数
KVector(const KVector& kvector); // 拷贝构造函数
KVector(KVector&& other) noexcept;// 移动构造函数
KVector& operator=(KVector&& other) noexcept;// 移动赋值运算符
```

内存管理

``` c++
void reserve(size_t new_capacity); // 重新分配内存
void resize(size_t newSize, const T& value = T()); // 调整大小
void clear(); // 清空数组
```

元素访问

``` c++
T& operator[](int index); // 获取元素
T& at(int index); // 通过at函数获取
```

元素操作

``` c++
void push_back(T&& value); // 插入元素
void insert(int index, T&& value); // 在指定位置插入元素
void erase(int index); // 删除指定位置的元素
void pop_back(); // 删除最后一个元素
size_t getSize() const; // 获取容器大小
size_t getCapacity() const; // 获取容器容量
```

迭代器支持

``` c++
iterator begin(); // 获取迭代器的起始位置
iterator end(); // 获取迭代器的结束位置
```

