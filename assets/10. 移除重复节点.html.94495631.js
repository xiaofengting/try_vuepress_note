import{_ as n,o as s,c as a,a as e}from"./app.f886be28.js";const p={},t=e(`<h3 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h3><p>\u7F16\u5199\u4EE3\u7801\uFF0C\u79FB\u9664\u672A\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u8282\u70B9\u3002\u4FDD\u7559\u6700\u5F00\u59CB\u51FA\u73B0\u7684\u8282\u70B9\u3002</p><p>\u8981\u6C42\uFF1A\u5B9E\u73B0\u7A7A\u95F4\u590D\u6742\u5EA6O(1)\u3001\u65F6\u95F4\u590D\u6742\u5EA6 <code>O(n^2)</code> \u7684\u7B97\u6CD5\u3002</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u793A\u4F8B\u4E00
\u8F93\u5165\uFF1A[1, 2, 3, 3, 2, 1]
\u8F93\u51FA\uFF1A[1, 2, 3]
// \u793A\u4F8B\u4E8C
\u8F93\u5165\uFF1A[1, 1, 1, 1, 2]
\u8F93\u51FA\uFF1A[1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8303\u56F4" aria-hidden="true">#</a> \u6570\u636E\u8303\u56F4</h3><p>\u94FE\u8868\u957F\u5EA6\u8303\u56F4\uFF1A<code>[0, 20000]</code><br> \u94FE\u8868\u5143\u7D20\u8303\u56F4\uFF1A<code>[0, 20000]</code></p><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><p>\u4F7F\u7528\u54C8\u5E0C\u8868\uFF0C\u53EF\u4EE5\u8FBE\u5230\u65F6\u95F4\u590D\u6742\u5EA6 <code>O(n)</code> \u7684\u7B97\u6CD5\u3002</p><p>\u7A7A\u95F4\u590D\u6742\u5EA6O(1)\u7684\u7B97\u6CD5\uFF0C\u53EA\u80FD\u66B4\u529B\u5B9E\u73B0\u3002</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n^2)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)</p><h3 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h3><p>\u54C8\u5E0C\u8868\u5B9E\u73B0\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  val<span class="token operator">:</span> <span class="token builtin">number</span>
  next<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>val<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> next<span class="token operator">?</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">removeDuplicateNodes</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">||</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66B4\u529B\u5B9E\u73B0</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeDuplicateNodes</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> cur
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> p<span class="token punctuation">.</span>next <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
      <span class="token keyword">else</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[t];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","10. \u79FB\u9664\u91CD\u590D\u8282\u70B9.html.vue"]]);export{r as default};
