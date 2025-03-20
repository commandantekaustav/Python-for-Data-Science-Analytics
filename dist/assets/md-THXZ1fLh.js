import{_ as o}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BobOEePV.js";import{b as p,o as u,w as a,g as s,e as d,B as i,m,v as h,x as k,C as t}from"./modules/vue-DYRo_Lls.js";import{I as g}from"./slidev/two-cols-header-Bm3rW2CS.js";import{u as f,f as c}from"./slidev/context-Yz-4lzjv.js";import"./modules/unplugin-icons-CJ6nVESg.js";import"./index-Q9xIr-xQ.js";import"./modules/shiki-NVXounY8.js";const B={__name:"session-2.md__slidev_584",setup(y){const{$clicksContext:r,$frontmatter:l}=f();return r.setup(),(D,e)=>{const n=o;return u(),p(g,h(k(t(c)(t(l),583))),{default:a(()=>[e[1]||(e[1]=s("h2",null,"NumPy Broadcasting Rules - Rule 1 📏",-1)),e[2]||(e[2]=s("h3",null,"Broadcasting Rule 1: Dimension Compatibility",-1)),e[3]||(e[3]=s("p",null,[s("strong",null,"Example 3: Incompatible Shapes (Dimensions Not Meeting Rule 1):")],-1)),e[4]||(e[4]=s("p",null,[i("Arrays with shapes like "),s("code",null,"(2, 3)"),i(" and "),s("code",null,"(3, 2)"),i(" are not compatible for broadcasting because dimensions don’t meet Rule 1 (neither equal nor 1). This will result in an error.")],-1)),d(n,m({},{ranges:[]}),{default:a(()=>e[0]||(e[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-python"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Example of incompatible shapes (will cause error if you run)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# array_x = np.array([[1, 2, 3], [4, 5, 6]]) # Shape (2, 3)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# array_y = np.array([[7, 8], [9, 10], [11, 12]]) # Shape (3, 2)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# error_sum = array_x + array_y # This will raise a ValueError due to incompatible shapes")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Uncommenting the above lines will cause a broadcasting error.")])])],-1)])),_:1},16),e[5]||(e[5]=s("p",null,[s("strong",null,"Rule 1 is the first step in understanding broadcasting compatibility. In the next slide, we’ll look at Rule 2!")],-1))]),_:1},16)}}};export{B as default};
