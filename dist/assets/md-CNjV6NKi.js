import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BobOEePV.js";import{b as g,o as y,w as h,g as i,B as s,e as a,m as t,v as A,x as D,C as e}from"./modules/vue-DYRo_Lls.js";import{I as C}from"./slidev/two-cols-header-Bm3rW2CS.js";import{u as o,f as B}from"./slidev/context-Yz-4lzjv.js";import"./modules/unplugin-icons-CJ6nVESg.js";import"./index-Q9xIr-xQ.js";import"./modules/shiki-NVXounY8.js";const _={__name:"session-9.md__slidev_851",setup(m){const{$clicksContext:n,$frontmatter:r}=o();return n.setup(),(u,k)=>{const l=p;return y(),g(C,A(D(e(B)(e(r),850))),{left:h(d=>[k[1]||(k[1]=i("p",null,[i("strong",null,[s("Removing Columns: 1. "),i("code",null,"del"),s(" Keyword")])],-1)),k[2]||(k[2]=i("p",null,[s("The "),i("code",null,"del"),s(" keyword provides a direct way to "),i("em",null,"delete"),s(" a column from a DataFrame "),i("em",null,"in place"),s(" (modifies the original DataFrame).")],-1)),k[3]||(k[3]=i("p",null,[i("strong",null,"Syntax:")],-1)),a(l,t({},{ranges:[]}),{default:h(()=>k[0]||(k[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-python"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"del"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," df"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"["),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"column_name"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]")])])],-1)])),_:1},16),k[4]||(k[4]=i("ul",null,[i("li",null,[i("code",null,"del df['column_name']"),s(": Directly removes the column named 'column_name' from the DataFrame "),i("code",null,"df"),s(".")]),i("li",null,[i("strong",null,"In-place modification:"),s(" The original DataFrame "),i("code",null,"df"),s(" is altered directly.")])],-1))]),right:h(d=>[k[6]||(k[6]=i("p",null,[i("strong",null,[s("Example: Removing the 'CityRank' column using "),i("code",null,"del")])],-1)),a(l,t({},{ranges:[]}),{default:h(()=>k[5]||(k[5]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-python"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," pandas "),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"as"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," pd")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"data_list_dicts "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ["),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # Example data")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    {"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Name"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Alice"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Age"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 25"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"    '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"City"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"NY"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"CityRank"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"},"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # Assume 'CityRank' exists")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    {"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Name"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Bob"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Age"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 30"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"    '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"City"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"London"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"CityRank"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"},")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    {"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Name"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Charlie"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Age"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 22"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"    '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"City"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Paris"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"CityRank"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"df "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," pd"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"DataFrame"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"data_list_dicts"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"DataFrame *before* removing 'CityRank':"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\n"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," df"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"del"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," df"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"["),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"CityRank"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # <--- Using del to remove 'CityRank'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\n"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"DataFrame *after* removing 'CityRank':"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\n"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," df"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")])])],-1)])),_:1},16)]),default:h(()=>[k[7]||(k[7]=i("h3",null,[s("Removing Columns - "),i("code",null,"del"),s(" Keyword i/p ➖📊🐼")],-1))]),_:1},16)}}};export{_ as default};
