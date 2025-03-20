import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BobOEePV.js";import{b as p,o as d,w as l,g as i,B as s,e as o,m as g,v as y,x as A,C as t}from"./modules/vue-DYRo_Lls.js";import{I as u}from"./slidev/two-cols-header-Bm3rW2CS.js";import{u as m,f as D}from"./slidev/context-Yz-4lzjv.js";import"./modules/unplugin-icons-CJ6nVESg.js";import"./index-Q9xIr-xQ.js";import"./modules/shiki-NVXounY8.js";const w={__name:"session-12.md__slidev_922",setup(C){const{$clicksContext:k,$frontmatter:e}=m();return k.setup(),(B,a)=>{const h=r;return d(),p(u,y(A(t(D)(t(e),921))),{left:l(n=>a[0]||(a[0]=[i("p",null,[i("strong",null,[s("4. Using "),i("code",null,"map()"),s(" with Series:")])],-1),i("ul",null,[i("li",null,[i("code",null,"map()"),s(" applies a function element-wise to a Series.")]),i("li",null,"It is used for performing transformations on individual elements of a Series."),i("li",null,[i("code",null,"map()"),s(" can also be used with dictionaries or Series for mapping values.")])],-1)])),right:l(n=>[a[2]||(a[2]=i("p",null,[i("strong",null,[s("Example: Applying a Function with "),i("code",null,"map()")])],-1)),o(h,g({},{ranges:[]}),{default:l(()=>a[1]||(a[1]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-python"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," pandas "),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"as"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," pd")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Sample Series")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"series "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," pd"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Series"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(["),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 3"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 4"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 5"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Original Series:"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\n"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," series"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Apply a function to square each element")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"squared_series "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," series"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"map"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"lambda"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," x"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," x"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"**"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\n"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Squared Series:"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\n"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," squared_series"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")])])],-1)])),_:1},16)]),default:l(()=>[a[3]||(a[3]=i("h3",null,"DataFrame Operations - Data Transformation and Function Application 🛠️",-1)),a[4]||(a[4]=i("p",null,[i("strong",null,"Applying Custom Functions for Data Manipulation")],-1)),a[5]||(a[5]=i("p",null,[s("Now, let’s move on to using "),i("code",null,"map()"),s(" with Series.")],-1))]),_:1},16)}}};export{w as default};
