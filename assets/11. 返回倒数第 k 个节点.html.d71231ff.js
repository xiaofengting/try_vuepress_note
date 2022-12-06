import{_ as n,o as a,c as s,a as e}from"./app.f886be28.js";const t={},p=e(`<h3 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h3><p>\u627E\u51FA\u5355\u5411\u94FE\u8868\u4E2D\u5012\u6570\u7B2C k \u4E2A\u8282\u70B9\u3002\u8FD4\u56DE\u8BE5\u8282\u70B9\u7684\u503C\u3002</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1A 1-&gt;2-&gt;3-&gt;4-&gt;5 \u548C k = 2
\u8F93\u51FA\uFF1A 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8303\u56F4" aria-hidden="true">#</a> \u6570\u636E\u8303\u56F4</h3><p>\u7ED9\u5B9A\u7684 k \u4FDD\u8BC1\u662F\u6709\u6548\u7684\u3002</p><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><p>\u5173\u952E\u70B9\uFF1A\u53CC\u6307\u9488</p><p>\u5FEB\u6307\u9488\u5148\u8D70 k \u6B65\u3002\u968F\u540E\u5FEB\u6162\u6307\u9488\u4E00\u8D77\u8D70\u3002</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)</p><h3 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">kthToLast</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> fast <span class="token operator">=</span> head
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
  <span class="token keyword">let</span> slow <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> slow<span class="token punctuation">.</span>val
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function c(i,l){return a(),s("div",null,o)}var d=n(t,[["render",c],["__file","11. \u8FD4\u56DE\u5012\u6570\u7B2C k \u4E2A\u8282\u70B9.html.vue"]]);export{d as default};
