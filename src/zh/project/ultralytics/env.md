---
title: YOLOv11(Ultralytics)环境配置
icon: screwdriver-wrench
order: 2
category:
  - 环境配置
  - yolo
  - Pytorch
tag:
  - Anaconda3
---

# 本教程将指导你如何搭建 yolo11 的运行环境。

<!-- more -->

::: info 前言

yolo11 是 Ultralytics 公司 yolo 系列实时目标检测器的最新迭代版本，它以尖端的准确性、速度和效率重新定义了可能实现的性能。在之前 yolo 版本取得的显著进步基础上，yolo11 在架构和训练方法上进行了重大改进，使其成为各种计算机视觉任务中的通用选择。除了传统的目标检测外，yolo11 还支持目标跟踪、实例分割、姿态估计、OBB 定向物体检测（旋转目标检测）等视觉任务。

如果已经会配置 yolov8 的环境，本文不需要重复配置，下载最新的 yolov11 训练文件即可。

:::

## 📍1. Anaconda

::: info 前言

Anaconda 是一个开源的 Python 和 R 语言的发行版本，主要用于数据科学、机器学习和科学计算。它包含了大量的科学计算库和工具，并且提供了一个方便的环境管理工具，使得用户可以轻松地创建、管理和切换不同的 Python 环境。

:::

### 🔥Anaconda 官网下载（国内网络的问题，下载速度很慢，不推荐）

[Anaconda官网](https://www.anaconda.com/download/success)

Anaconda可以在Windows、MacOS、Linux系统平台中安装和使用，下载的时候找到对应的点击即可。

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-103920.png?raw=true)

### 🔥Anaconda 使用清华镜像源下载（下载速度快，推荐）

[Anaconda清华镜像源下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=M&O=D)

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/16cd77eac0198dd7f3a53974dace50e7.png?raw=true)

我的电脑是windows系统，我这里选择下载最新版本的 Anaconda3-2024.10-1-Windows-x86_64.exe 下载完成我们就可以得到一个exe文件。

### 🔥Anaconda 安装

Step1: 直接点击next

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-104652.png?raw=true)

Step2: 点击 I Agree

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-104750.png?raw=true)

Step3: 选择 ALL users（选择仅个人的话，后面使用可能会报错）,然后点击next

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-104840.png?raw=true)

 Step4: 选择 anaconda 的安装位置

::: warning 注意

这里建议修改为其他盘,要不然下载的包和创建的环境都在C盘，占用空间，后面介绍如何把创建的环境和下载的包都装在自己想装的盘里。

:::

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-105120.png?raw=true)

Step5: 这里把三个勾全部打上，然后点击 Install , anaconda 开始安装

> 🔒创建开始菜单  
> 🔒base环境以python3.12创建  
> 🔒清除包缓存

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-105306.png?raw=true)

Step6: 后续就是等待安装完成即可，这一步取决于电脑的性能。

### 🔥Anaconda 配置

Step1: 打开高级系统设置，找到环境变量

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-110100.png?raw=true)

Step2: 系统变量选择path，双击进入

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-110317.png?raw=true)

step3: 新建环境变量【根据自己刚刚安装的路径，添加以下几个变量】

```bash
D:\anaconda3
```
```bash
D:\anaconda3\Scripts
```
```bash
D:\anaconda3\Library\bin
```
```bash
D:\anaconda3\Library\mingw-w64\bin
```

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-110645.png?raw=true)

step4: 安装测试

在windows菜单栏搜索 Anaconda ,打开anaconda prompt 

输入这行代码，查看版本号，检查是否成功安装

```bash
conda --version
```

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-110949.png?raw=true)

### 🔥Anaconda默认环境保存路径和下载源修改

因为还涉及到环境和包的下载，这里默认是下载在C盘的，我们需要更改下载的位置，以免占C盘系统盘内存；最后再添加镜像源方便下载环境的包（网速更快）

```bash
C:\Users\你的用户名
```

根据上述文件路径可以找到.condarc，用记事本打开

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-111554.png?raw=true)

> 删除其他的，输入以下指令【注意修改为自己想要的安装路径，最后的路径一定是落在envs和pkgs】
>  
> ```bash
> envs_dirs:  
>   - D:\Anaconda\envs
> pkgs_dirs:
>   - D:\Anaconda\pkgs
> channels:
>   - defaults
> ```  
> 
> strl + s 保存

conda镜像源的配置，因为conda很多下载的东西在国外，默认的下载速度往往会很慢，这里建议修改为清华的镜像源，打开anaconda prompt，输入以下指令

```bash
# 添加清华源
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
 
# 添加阿里云镜像源
conda config --add channels https://mirrors.aliyun.com/anaconda/pkgs/free/
conda config --add channels https://mirrors.aliyun.com/anaconda/pkgs/main/
 
# 添加中科大源
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/menpo/
 
 
 
# （可选）设置搜索时显示通道地址
conda config --set show_channel_urls yes
```
## 📍2. Pytorch

::: info 前言

PyTorch（Python Torch）是一个开源的机器学习库，主要用于深度学习任务。它由 Facebook 的人工智能研究小组开发，提供了灵活的张量（tensor）数据结构和强大的深度学习工具。

:::

### 🔥CUDA 的安装

版本检查  

打开cmd，命令行中输入指令`nvidia-smi`，查看 cuda 版本，博主的最高支持的 CUDA 版本为12.3，CUDA版本向下兼容，所以12.3版本以下的 CUDA，都可以选择安装

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-115434.png?raw=true)

软件安装

下载链接：[CUDA Toolkit Archive | NVIDIA Developer](https://developer.nvidia.com/cuda-toolkit-archive)

选择自己电脑对应的CUDA版本，点击Toolkit后准备安装包下载

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-115650.png?raw=true)

配置如图所示，最后点击下载即可

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-115836.png?raw=true)

打开安装包，点击“OK”，开始cuda下载（这里的路径按照默认来就行，不建议修改路径）

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-120816.png?raw=true)

解压完成后，系统检查安装程序的系统兼容性，等待片刻

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-120926.png?raw=true)

选择<精简>安装，点击“下一步”

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-121011.png?raw=true)

同意协议，点击“Next”，开始安装

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-121047.png?raw=true)

显示安装程序已完成，点击"关闭"

环境验证

> - 高级系统设置中打开环境变量
> - 检查是否有图中的两个CUDA路径
> 
> ![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-121232.png?raw=true)

打开cmd，在命令行中输入`nvcc --version`，如下图所示，即为安装成功

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-121448.png?raw=true)

### 🔥CUDNN 的安装

cudnn的版本号下载时要注意与cuda版本号对应

下载链接：[cuDNN Archive | NVIDIA Developer](https://developer.nvidia.com/rdp/cudnn-archive)

> - cudnn网址需要注册账号并登录，这个自行注册就行
> - 此网址也可能需要科学上网
> - 进入网址，找到对应版本的cudnn（比如博主下载的CUDA版本12.3，这里选个for CUDA 12.x的进行下载）

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-121752.png?raw=true)

选择第一个，点击进行下载（cudnn就是一个压缩包）

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-121833.png?raw=true)

解压之后打开文件夹如下

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-121924.png?raw=true)

将上图这三个文件复制粘贴到CUDA的文件夹地址下（环境变量中的路径可查看）即可

环境变量中的CUDA文件夹路径

![](https://github.com/Thirty-Li/typoraImg/blob/main/blogImage/QQ20241107-122138.png?raw=true)

例如博主的路径为`C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.3\lib`  
就将上述三个文件复制在`C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.3`目录下即可

### 🔥创建虚拟环境

step1: 打开 anaconda prompt 

默认进入的是base环境，base环境的版本与下载的anaconda3版本有关，因此不建议直接使用，需要新建环境，在新建环境之前建议更改默认的pip源和conda源可加速下载速度。

step2: 这里创建一个名为yolov11，python版本为3.10的虚拟环境，也可以修改为其他名或者python版本，建议使用python3.9以上版本，选择替换即可。

```bash
conda create -n yolov11 python=3.10
```

step3: 回车后出现新建环境提醒输入y继续，耐心等待全部下载完成后自动安装。

step4: 创建完之后输入以下指令进入yolov11环境之中

```bash
conda activate yolov11
```

step5: 安装pytorch

进入yolov11环境，之后输入下方命令即可安装pytorch,耐心等待安装完成

```bash
pip install torch==2.0.0+cu118 torchvision==0.15.1+cu118 --extra-index-url https://download.pytorch.org/whl/cu118
```

step6: 安装ultralytics

```bash
pip install ultralytics
```

---

以上就完成了环境的搭建


