import{b as i,o as a,w as u,g as t,i as r,B as e,v as m,x as h,C as l}from"./modules/vue-DcZKNubr.js";import{I as c}from"./slidev/default-DITZbOMS.js";import{u as d,f as p}from"./slidev/context-DOn3OHKD.js";import"./index-DTPcApfY.js";import"./modules/shiki-BYsr0BdZ.js";const j={__name:"s8.md__slidev_442",setup(_){const{$clicksContext:n,$frontmatter:s}=d();return n.setup(),(f,o)=>(a(),i(c,m(h(l(p)(l(s),441))),{default:u(()=>[o[0]||(o[0]=t("h3",null,"Iterators - The Engine of Iteration ⚙️",-1)),r(" # Iterators: The Engine Behind Iteration "),r(" **While iterables are objects you *can* iterate over, **iterators** are the actual objects that *perform* the iteration.** "),o[1]||(o[1]=t("p",null,[t("strong",null,"What is an Iterator?")],-1)),o[2]||(o[2]=t("ul",null,[t("li",null,[t("strong",null,"Iterator Protocol:"),e(" Iterators in Python must implement the "),t("strong",null,"iterator protocol"),e(", which consists of two essential methods: "),t("ol",null,[t("li",null,[t("strong",null,[t("code",null,"__iter__()"),e(":")]),e(" This method is required for both iterables and iterators. "),t("ul",null,[t("li",null,[e("For an "),t("em",null,"iterable"),e(", the "),t("code",null,"__iter__()"),e(" method returns an "),t("em",null,"iterator"),e(" object for that iterable.")]),t("li",null,[e("For an "),t("em",null,"iterator"),e(" itself, the "),t("code",null,"__iter__()"),e(" method simply returns "),t("code",null,"self"),e(" (the iterator object itself). This makes iterators also iterable.")])])]),t("li",null,[t("strong",null,[t("code",null,"__next__()"),e(":")]),e(" This method is the core of an iterator. "),t("ul",null,[t("li",null,[e("It returns the "),t("strong",null,"next element"),e(" in the sequence.")]),t("li",null,[e("When there are "),t("strong",null,"no more elements"),e(" to return, it "),t("strong",null,[e("raises a "),t("code",null,"StopIteration"),e(" exception")]),e(". This exception signals to the iteration loop (e.g., "),t("code",null,"for"),e(" loop) that the iteration is complete.")])])])])])],-1))]),_:1},16))}};export{j as default};
