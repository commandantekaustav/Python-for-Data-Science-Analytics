import{_ as n}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BobOEePV.js";import{b as r,o as p,w as h,g as i,e as d,B as s,m as g,v as y,x as A,C as a}from"./modules/vue-DYRo_Lls.js";import{I as D}from"./slidev/two-cols-header-Bm3rW2CS.js";import{u as C,f as B}from"./slidev/context-Yz-4lzjv.js";import"./modules/unplugin-icons-CJ6nVESg.js";import"./index-Q9xIr-xQ.js";import"./modules/shiki-NVXounY8.js";const v={__name:"session-8.md__slidev_824",setup(o){const{$clicksContext:t,$frontmatter:l}=C();return t.setup(),(m,k)=>{const e=n;return p(),r(D,y(A(a(B)(a(l),823))),{default:h(()=>[k[1]||(k[1]=i("h3",null,[s("Sorting Data - "),i("code",null,"sort_values()"),s(" Example (Part 1) ⬆️⬇️📊🐼")],-1)),k[2]||(k[2]=i("p",null,[i("strong",null,"Sorting by Single Column: Code Example")],-1)),k[3]||(k[3]=i("p",null,[s("Let’s sort our DataFrame by 'Age' in "),i("em",null,"ascending"),s(" order (default).")],-1)),d(e,g({},{ranges:[]}),{default:h(()=>k[0]||(k[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-python"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," pandas "),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"as"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," pd")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"data_list_dicts "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    {"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Name"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Alice"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Age"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 25"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"City"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"NY"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"},")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    {"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Name"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Bob"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Age"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 30"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"City"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"London"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"},")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    {"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Name"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Charlie"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Age"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 22"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"City"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Paris"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"},")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    {"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Name"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"David"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Age"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 35"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"City"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"London"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"},")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    {"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Name"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Eve"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Age"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 24"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"City"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Paris"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"df "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," pd"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"DataFrame"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"data_list_dicts"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Original DataFrame:"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\n"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," df"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Sort DataFrame by 'Age' column (ascending by default)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"df_sorted_age_asc "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," df"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"sort_values"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"by"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Age"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # <--- Sort by 'Age'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\n"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"DataFrame Sorted by 'Age' (Ascending):"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\n"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," df_sorted_age_asc"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")])])],-1)])),_:1},16)]),_:1},16)}}};export{v as default};
