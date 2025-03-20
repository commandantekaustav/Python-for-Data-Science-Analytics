import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-005QRd18.js";import{b as g,o as u,w as e,g as s,B as i,e as k,m as p,v as h,x as m,C as t}from"./modules/vue-DcZKNubr.js";import{I as c}from"./slidev/two-cols-header-DfCb6LcV.js";import{u as f,f as D}from"./slidev/context-DOn3OHKD.js";import"./modules/unplugin-icons-DbOwnpFF.js";import"./index-DTPcApfY.js";import"./modules/shiki-BYsr0BdZ.js";const _={__name:"s9dd.md__slidev_554",setup(A){const{$clicksContext:n,$frontmatter:r}=f();return n.setup(),(y,l)=>{const o=d;return u(),g(c,h(m(t(D)(t(r),553))),{left:e(a=>l[0]||(l[0]=[s("p",null,[s("strong",null,"Explanation:")],-1),s("ul",null,[s("li",null,[s("strong",null,"Undo changes in your working directory or staging area.")]),s("li",null,[i("Modern Git command for undoing (replaces older "),s("code",null,"git checkout --"),i(").")]),s("li",null,[i("Key uses: "),s("ul",null,[s("li",null,[i("Discard "),s("strong",null,"unstaged changes"),i(" in working directory.")]),s("li",null,[i("Unstage "),s("strong",null,"staged changes"),i(" (remove from staging area).")]),s("li",null,"Revert files to a specific commit (later, more advanced).")])])],-1)])),right:e(a=>[l[2]||(l[2]=s("p",null,[s("strong",null,[i("Basic "),s("code",null,"git restore"),i(" (Discard Working Changes):")])],-1)),l[3]||(l[3]=s("ul",null,[s("li",null,[s("code",null,"git restore <filename>")]),s("li",null,[i("Discards "),s("strong",null,"unstaged modifications"),i(" in "),s("code",null,"<filename>"),i(".")]),s("li",null,"Reverts file to the version in the Staging Area (or last commit if not staged).")],-1)),l[4]||(l[4]=s("p",null,[s("strong",null,"Code Demo (Restore Working Dir):")],-1)),k(o,p({},{ranges:[]}),{default:e(()=>l[1]||(l[1]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# ...Modify 'hello_script.py' but DON'T stage...")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"git"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," status"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"        # Shows 'modified'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"git"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," restore"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," hello_script.py"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"  #  <-- Run: Discard changes!")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"git"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," status"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"        # Now 'working tree clean' again")])])],-1)])),_:1},16)]),default:e(()=>[l[5]||(l[5]=s("h3",null,[i("Git Deep Dive - "),s("code",null,"git restore"),i(": Undo Mistakes")],-1)),l[6]||(l[6]=s("p",null,[s("strong",null,"Headline:"),i(),s("code",null,"git restore"),i(' - Your "Oops!" Button in Git')],-1))]),_:1},16)}}};export{_ as default};
