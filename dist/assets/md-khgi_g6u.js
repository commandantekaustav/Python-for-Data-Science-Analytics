import{_ as o}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-005QRd18.js";import{b as p,o as r,w as t,g as s,B as i,e as d,m as u,v as A,x as c,C as n}from"./modules/vue-DcZKNubr.js";import{I as g}from"./slidev/two-cols-header-DfCb6LcV.js";import{u as D,f as y}from"./slidev/context-DOn3OHKD.js";import"./modules/unplugin-icons-DbOwnpFF.js";import"./index-DTPcApfY.js";import"./modules/shiki-BYsr0BdZ.js";const v={__name:"s4.md__slidev_218",setup(C){const{$clicksContext:a,$frontmatter:e}=D();return a.setup(),(m,l)=>{const h=o;return r(),p(g,A(c(n(y)(n(e),217))),{left:t(k=>[l[1]||(l[1]=s("p",null,[s("strong",null,[i("Example - Simple "),s("code",null,"while"),i(" Loop:")])],-1)),d(h,u({},{ranges:[]}),{default:t(()=>l[0]||(l[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-py"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"count "),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"while"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," count "),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"<"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 5"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    # Condition: Is count less than 5?")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    print"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"f"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"Count is: '),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"{"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"count"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"}"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    # Important: Update the loop counter!")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    count "),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," count "),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  ")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Output:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Count is: 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Count is: 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Count is: 2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Count is: 3")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Count is: 4")])])],-1)])),_:1},16)]),right:t(k=>l[2]||(l[2]=[s("p",null,[s("strong",null,"Explanation:")],-1),s("ol",null,[s("li",null,[i("Initially, "),s("code",null,"count"),i(" is 0.")]),s("li",null,[i("The "),s("code",null,"while"),i(" loop checks the condition "),s("code",null,"count < 5"),i(". It’s true (0 < 5).")]),s("li",null,[i("The code block inside the loop executes: "),s("code",null,'print(f"Count is: {count}")'),i(' prints "Count is: 0", and then '),s("code",null,"count = count + 1"),i(" increments "),s("code",null,"count"),i(" to 1.")])],-1)])),default:t(()=>[l[3]||(l[3]=s("h2",null,[i("Introduction to "),s("code",null,"while"),i(" Loops 🔁")],-1)),l[4]||(l[4]=s("h1",null,[i("Control Flow: Loops - "),s("code",null,"while"),i(" Loops - Condition-Based Repetition")],-1))]),_:1},16)}}};export{v as default};
