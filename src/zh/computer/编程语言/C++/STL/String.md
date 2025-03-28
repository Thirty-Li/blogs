# `KString `

成员变量

``` c++
private:
    char* data;
    size_t length;
    size_t capacity; // 用于优化内存管理，避免频繁的 realloc
```

构造函数

``` c++
KString(); // 默认构造函数
KString(const char* str); // 传入 C 风格字符串的构造函数
KString(const KString& other); // 拷贝构造函数
KString(KString&& other) noexcept; // 移动构造函数
KString& operator=(const KString& other); // 拷贝赋值运算符
KString& operator=(KString&& other) noexcept; // 移动赋值运算符
~KString(); // 析构函数
```

内存管理

``` c++
void clear(); // 清空字符串
void append(const KString& other); // 追加另一个字符串
```

元素操作

``` c++
size_t size() const; // 获取字符串长度
size_t get_capacity() const; // 获取字符串当前容量
const char* c_str() const; // 获取 C 风格字符串
```

元素访问

``` c++
char& operator[](size_t index); // 重载 [] 运算符
char& at(size_t index); // 重载 at() 函数，支持越界检查
```

额外功能

``` c++
bool empty() const; // 判断字符串是否为空
KString substr(size_t pos, size_t len) const; // 获取子串
size_t find(const KString& str) const; // 查找子字符串
```

运算符重载

``` c++
KString operator+(const KString& other) const; // 拼接字符串
bool operator==(const KString& other) const; // 比较是否相等
bool operator<(const KString& other) const; // 字典序比较
bool operator>(const KString& other) const; // 字典序比较
bool operator<=(const KString& other) const; // 字典序比较
bool operator>=(const KString& other) const; // 字典序比较
friend std::ostream& operator<<(std::ostream& os, const KString& str); // 输出运算符
```

