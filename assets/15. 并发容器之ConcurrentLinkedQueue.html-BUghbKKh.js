import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,e,a,b as s,f as h,w as k,r,o as p}from"./app-vVdIt_Lt.js";const d={};function o(c,i){const n=r("RouteLink");return p(),l("div",null,[i[7]||(i[7]=e(`<h1 id="并发容器之-concurrentlinkedqueue" tabindex="-1"><a class="header-anchor" href="#并发容器之-concurrentlinkedqueue"><span>并发容器之 ConcurrentLinkedQueue</span></a></h1><h2 id="_1-concurrentlinkedqueue-简介" tabindex="-1"><a class="header-anchor" href="#_1-concurrentlinkedqueue-简介"><span>1. ConcurrentLinkedQueue 简介</span></a></h2><p>在单线程编程中我们会经常用到一些集合类，比如 ArrayList，HashMap 等，但是这些类都不是线程安全的类。在面试中也经常会有一些考点，比如 ArrayList 不是线程安全的，Vector 是线程安全。而保障 Vector 线程安全的方式，是非常粗暴的在方法上用 synchronized 独占锁，将多线程执行变成串行化。要想将 ArrayList 变成线程安全的也可以使用 <code>Collections.synchronizedList(List&lt;T&gt; list)</code> 方法将 ArrayList 转换成线程安全的，但这种转换方式依然是通过 synchronized 修饰方法实现的，很显然这不是一种高效的方式。</p><p>同时，队列也是我们常用的一种数据结构。为了解决线程安全的问题，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi><mi>o</mi><mi>u</mi><mi>g</mi><mtext> </mtext><mi>L</mi><mi>e</mi><mi>a</mi></mrow><annotation encoding="application/x-tex">Doug \\ Lea</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">Do</span><span class="mord mathnormal" style="margin-right:0.03588em;">ug</span><span class="mspace"> </span><span class="mord mathnormal">L</span><span class="mord mathnormal">e</span><span class="mord mathnormal">a</span></span></span></span> 大师为我们准备了 ConcurrentLinkedQueue 这个线程安全的队列。从类名就可以看的出来实现队列的数据结构是链式。</p><h3 id="_1-1-node" tabindex="-1"><a class="header-anchor" href="#_1-1-node"><span>1.1 Node</span></a></h3><p>要想先学习 ConcurrentLinkedQueue 自然而然得先从它的节点类看起，明白它的底层数据结构。Node 类的源码为：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    volatile</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> E</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    volatile</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	.......</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)),a("p",null,[i[1]||(i[1]=s("Node 节点主要包含了两个域：一个是数据域 ")),i[2]||(i[2]=a("code",null,"item",-1)),i[3]||(i[3]=s("，另一个是 ")),i[4]||(i[4]=a("code",null,"next",-1)),i[5]||(i[5]=s(" 指针，用于指向下一个节点从而构成链式队列。并且都是用volatile进行修饰的，以保证内存可见性（关于 volatile 可以看")),h(n,{to:"/zh/computer/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/JUC%20%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/5.%20%E5%BD%BB%E5%BA%95%E7%90%86%E8%A7%A3volatile.html"},{default:k(()=>i[0]||(i[0]=[s("这篇文章")])),_:1}),i[6]||(i[6]=s("）。"))]),i[8]||(i[8]=e(`<p>另外 ConcurrentLinkedQueue 含有这样两个成员变量：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> transient</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> volatile</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> transient</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> volatile</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> tail</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明 ConcurrentLinkedQueue 通过持有头尾指针进行管理队列。当我们调用无参构造器时，其源码为：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ConcurrentLinkedQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    head </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> tail </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>head 和 tail 指针会指向一个 item 域为 <code>null</code> 的节点，此时 ConcurrentLinkedQueue 状态如下图所示：</p><figure><img src="" alt="ConcurrentLinkedQueue初始化状态" tabindex="0" loading="lazy"><figcaption>ConcurrentLinkedQueue初始化状态</figcaption></figure><p>如图，head 和 tail 指向同一个节点 Node0，该节点 item 域为 <code>null</code>，next域为 <code>null</code>。</p><h2 id="_1-2-操作-node-的几个-cas-操作" tabindex="-1"><a class="header-anchor" href="#_1-2-操作-node-的几个-cas-操作"><span>1.2 操作 Node 的几个 CAS 操作</span></a></h2><p>在队列进行出队入队的时候免不了对节点需要进行操作，在多线程就很容易出现线程安全的问题。可以看出在处理器指令集能够支持 CMPXCHG 指令后，在 Java 源码中涉及到并发处理都会使用 CAS 操作，那么在 ConcurrentLinkedQueue 中对 Node 的 CAS 操作有这样几个：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 更改Node中的数据域item	</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> casItem</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> cmp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> E</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> val) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> UNSAFE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">compareAndSwapObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, itemOffset, cmp, val);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 更改Node中的指针域next</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> lazySetNext</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">E</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> val) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    UNSAFE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">putOrderedObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, nextOffset, val);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 更改Node中的指针域next</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> casNext</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">E</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> cmp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">E</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> val) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> UNSAFE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">compareAndSwapObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, nextOffset, cmp, val);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出这些方法实际上是通过调用 UNSAFE 实例的方法，UNSAFE 为 sun.misc.Unsafe 类，该类是 hotspot 底层方法，目前为止了解即可，知道 CAS 的操作归根结底是由该类提供就好。</p>`,11))])}const u=t(d,[["render",o],["__file","15. 并发容器之ConcurrentLinkedQueue.html.vue"]]),y=JSON.parse('{"path":"/zh/computer/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/JUC%20%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/15.%20%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E4%B9%8BConcurrentLinkedQueue.html","title":"并发容器之 ConcurrentLinkedQueue","lang":"zh-CN","frontmatter":{"category":["并发编程"],"tag":["JUC"],"description":"并发容器之 ConcurrentLinkedQueue 1. ConcurrentLinkedQueue 简介 在单线程编程中我们会经常用到一些集合类，比如 ArrayList，HashMap 等，但是这些类都不是线程安全的类。在面试中也经常会有一些考点，比如 ArrayList 不是线程安全的，Vector 是线程安全。而保障 Vector 线程安全...","head":[["meta",{"property":"og:url","content":"https://thirty-li.github.io/blogs/blogs/zh/computer/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/java/JUC%20%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/15.%20%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E4%B9%8BConcurrentLinkedQueue.html"}],["meta",{"property":"og:site_name","content":"Thirty_Li"}],["meta",{"property":"og:title","content":"并发容器之 ConcurrentLinkedQueue"}],["meta",{"property":"og:description","content":"并发容器之 ConcurrentLinkedQueue 1. ConcurrentLinkedQueue 简介 在单线程编程中我们会经常用到一些集合类，比如 ArrayList，HashMap 等，但是这些类都不是线程安全的类。在面试中也经常会有一些考点，比如 ArrayList 不是线程安全的，Vector 是线程安全。而保障 Vector 线程安全..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T14:59:31.000Z"}],["meta",{"property":"article:tag","content":"JUC"}],["meta",{"property":"article:modified_time","content":"2024-10-25T14:59:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发容器之 ConcurrentLinkedQueue\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-25T14:59:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Thirty_Li\\",\\"url\\":\\"https://thirty-li.github.io/blogs/\\"}]}"]]},"headers":[{"level":2,"title":"1. ConcurrentLinkedQueue 简介","slug":"_1-concurrentlinkedqueue-简介","link":"#_1-concurrentlinkedqueue-简介","children":[{"level":3,"title":"1.1 Node","slug":"_1-1-node","link":"#_1-1-node","children":[]}]},{"level":2,"title":"1.2 操作 Node 的几个 CAS 操作","slug":"_1-2-操作-node-的几个-cas-操作","link":"#_1-2-操作-node-的几个-cas-操作","children":[]}],"git":{"createdTime":1729868371000,"updatedTime":1729868371000,"contributors":[{"name":"Thirty_Li","email":"thirty_li@qq.com","commits":1}]},"readingTime":{"minutes":2.47,"words":741},"filePathRelative":"zh/computer/编程语言/java/JUC 并发编程/15. 并发容器之ConcurrentLinkedQueue.md","localizedDate":"2024年10月25日","excerpt":"\\n<h2>1. ConcurrentLinkedQueue 简介</h2>\\n<p>在单线程编程中我们会经常用到一些集合类，比如 ArrayList，HashMap 等，但是这些类都不是线程安全的类。在面试中也经常会有一些考点，比如 ArrayList 不是线程安全的，Vector 是线程安全。而保障 Vector 线程安全的方式，是非常粗暴的在方法上用 synchronized 独占锁，将多线程执行变成串行化。要想将 ArrayList 变成线程安全的也可以使用 <code>Collections.synchronizedList(List&lt;T&gt; list)</code> 方法将 ArrayList 转换成线程安全的，但这种转换方式依然是通过 synchronized 修饰方法实现的，很显然这不是一种高效的方式。</p>","autoDesc":true}');export{u as comp,y as data};
