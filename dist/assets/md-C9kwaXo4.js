import{_ as n}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-005QRd18.js";import{b as r,o as p,w as k,g as i,e as d,m as g,B as s,v as A,x as y,C as h}from"./modules/vue-DcZKNubr.js";import{I as o}from"./slidev/default-DITZbOMS.js";import{u as D,f}from"./slidev/context-DOn3OHKD.js";import"./modules/unplugin-icons-DbOwnpFF.js";import"./index-DTPcApfY.js";import"./modules/shiki-BYsr0BdZ.js";const S={__name:"s3.md__slidev_177",setup(C){const{$clicksContext:a,$frontmatter:e}=D();return a.setup(),(u,t)=>{const l=n;return p(),r(o,A(y(h(f)(h(e),176))),{default:k(()=>[t[1]||(t[1]=i("h3",null,"Set Operations: Difference & Subset/Superset ➖ ⊆ ⊇",-1)),t[2]||(t[2]=i("h1",null,"Set Operations: Difference and Subset/Superset",-1)),t[3]||(t[3]=i("br",null,null,-1)),t[4]||(t[4]=i("p",null,[i("strong",null,"1. Difference (—): Elements in One Set but Not the Other")],-1)),d(l,g({},{ranges:[]}),{default:k(()=>t[0]||(t[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-python"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"set1 "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 3"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 4"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 5"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"set2 "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"3"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 4"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 5"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 6"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 7"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Method 1: using difference() - returns a new set")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"difference_set_method "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," set1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"difference"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"set2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"difference_set_method"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # Output: {1, 2} (elements in set1 but not in set2)")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Method 2: using - operator - returns a new set")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"difference_set_operator "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," set1 "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"-"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," set2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"difference_set_operator"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # Output: {1, 2}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Method 3: using difference_update() - modifies set1 in-place")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"set3 "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 3"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 4"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 5"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # Create a copy of set1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"set4 "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"3"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 4"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 5"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 6"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 7"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"set3"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"difference_update"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"set4"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # Modifies set3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"print"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"set3"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # Output: {1, 2}")])])],-1)])),_:1},16)]),_:1},16)}}};export{S as default};
