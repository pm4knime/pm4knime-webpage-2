(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[659],{8802:function(e){e.exports={reactStrictMode:!0,images:{loader:"akamai",path:"/"},basePath:""}},9423:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var n=s(9600),i=s(7857),r=s(8802),o=s(5675),a=s.n(o),l=s(3951),h=s(5893);function c(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.Z,{}),(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"section",children:(0,h.jsxs)("div",{className:"row-userDoc",children:[(0,h.jsx)("h1",{children:"Working with Python"}),(0,h.jsx)("p",{children:"Python extension in KNIME enables the python scripting. By importing python environment with different packages, it allows the python execution in such environments. In a personal view, the configuration is the most complex part to import the Python scripting. After this, in the Python extension nodes, python scripts are like the normal ones. In this demo, we shows two parts of the Python usages. One is the basic Python scripting, the other focuses on the integration of pm4py into KNIME."}),(0,h.jsxs)("p",{children:["First, to configure Python in KNIME by following this steps in the"," ",(0,h.jsx)("a",{href:"https://docs.knime.com/2018-12/python_installation_guide/index.html",rel:"nofollow",children:"link"}),". In brief summary, those steps are in need."]}),(0,h.jsxs)("ol",{children:[(0,h.jsxs)("li",{children:["Download and install Python with miniconda or Annaconda. Minicanda is chosen to benefit the integration of pm4py. The installation steps are the same as pm4py in this"," ",(0,h.jsx)("a",{href:"http://pm4py.pads.rwth-aachen.de/installation/",rel:"nofollow",children:"link"}),"."]}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"https://docs.knime.com/2018-12/python_installation_guide/index.html#_installation",rel:"nofollow",children:"Install the Python Extension in KNIME"})})]}),(0,h.jsx)("blockquote",{children:(0,h.jsx)("p",{children:"File=> Install KNIME Extension => Search Python Extension => Install"})}),(0,h.jsx)("ol",{start:"3",children:(0,h.jsxs)("li",{children:[(0,h.jsx)("a",{href:"https://docs.knime.com/2018-12/python_installation_guide/index.html#_configure_the_knime_python_integration",rel:"nofollow",children:"Set the Python Environment"}),"."]})}),(0,h.jsx)("blockquote",{children:(0,h.jsx)("p",{children:"File=>Perference => Search Python => Use the created env for pm4py."})}),(0,h.jsx)("h3",{children:"the normal python scripting in KNIME, similarly like Java Snippet."}),(0,h.jsxs)("p",{children:[(0,h.jsx)(a(),{src:r.basePath+"/assets/images/workingWithPython/demo-advanced-python-programming.png",alt:"",width:"450px",height:"200px",className:"img-fluid img-shadow"}),(0,h.jsxs)("div",{className:"new-wrapper",children:[(0,h.jsx)(a(),{src:r.basePath+"/assets/images/workingWithPython/demo-advanced-python-programming-wf.png",alt:"",width:"450px",height:"200px",className:"img-fluid img-shadow"}),(0,h.jsx)("p",{children:"A concrete workflow is shown in the next figure. "})]})]}),(0,h.jsx)("p",{children:"To create this workflow, those steps are in need:"}),(0,h.jsxs)("ol",{children:[(0,h.jsxs)("li",{children:["Download the dataset ",(0,h.jsx)("code",{children:"chapter_1"})," from the github"," ",(0,h.jsx)("a",{href:"https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip",children:"link"})," ","and extract it to get the CSV file"," ",(0,h.jsx)("code",{children:"running-example.csv"}),"."]}),(0,h.jsxs)("li",{children:["Import CSV into KNIME with node ",(0,h.jsx)("strong",{children:"CSV Reader"}),"."]}),(0,h.jsxs)("li",{children:["Use node ",(0,h.jsx)("strong",{children:"Python Script"})," to add a category to the Data table."]})]}),"Configure the node ",(0,h.jsx)("strong",{children:"Python Script"})," with settings",(0,h.jsx)(l.default,{language:"python",children:'# Copy input to output\ncostValues = input_table[\'Costs\']\nprint(costValues.mean())\n\nprint( len(costValues))\nprint("begin")\nctg = list()\n\nfor idx in range(0, len(costValues)) :\n\t# print(costValues[idx])\n\tif costValues[idx] > 250 :\n\t\tctg.append("high")\n\telif costValues[idx] > 100 :\n\t\tctg.append("medium")\n\telse:  \n\t\tctg.append("low")\n\nprint(len(ctg))\ninput_table[\'category\'] = ctg\n\noutput_table = input_table.copy()'}),(0,h.jsx)(a(),{src:r.basePath+"/assets/images/workingWithPython/PythonScript-configuration-01.png",alt:"",width:"450px",height:"200px",className:"img-fluid img-shadow"}),(0,h.jsxs)("p",{children:["After execution, it outputs the result ",(0,h.jsx)("br",{}),(0,h.jsx)(a(),{src:r.basePath+"/assets/images/workingWithPython/PythonScript-result-01.png",alt:"",width:"450px",height:"200px",className:"img-fluid img-shadow"})]}),(0,h.jsx)("h3",{children:"\xa0"}),(0,h.jsx)("h3",{children:"Python scripting with pm4py"}),(0,h.jsxs)("p",{children:["The task is to use the pm4py for process discovery. ",(0,h.jsx)("br",{})," ",(0,h.jsx)(a(),{src:r.basePath+"/assets/images/workingWithPython/demo-advanced-python-programming-02.png",alt:"",width:"400px",height:"150px",className:"img-fluid img-shadow"}),(0,h.jsx)("br",{})," To simplify the workflow, the input and output are enclosed in Python Script. In this way, the concrete workflow looks like this. ",(0,h.jsx)("br",{})," ",(0,h.jsx)(a(),{src:r.basePath+"/assets/images/workingWithPython/demo-advanced-python-programming-02-wf.png",alt:"",width:"300px",height:"160px",className:"img-fluid img-shadow"})]}),(0,h.jsxs)("ol",{children:[(0,h.jsxs)("li",{children:["Drag node ",(0,h.jsx)("strong",{children:"Python Source"})," into KNIME"]}),(0,h.jsx)("li",{children:"Configure it like the following"})]}),(0,h.jsx)(l.default,{className:"python",children:"from pandas import DataFrame\nfrom pm4py.algo.discovery.alpha import factory as alpha_miner\nfrom pm4py.objects.log.importer.xes import factory as xes_importer\nfrom pm4py.visualization.petrinet import factory as vis_factory\n# Create empty table\noutput_table = DataFrame()\n\nlog = xes_importer.import_log('E:\\Datasets\\PM4KNIME\\Dataset\\Chapter_1\\running-example.xes')\nnet, initial_marking, final_marking = alpha_miner.apply(log)\ngviz = vis_factory.apply(net, initial_marking, final_marking)\nvis_factory.view(gviz)"}),(0,h.jsx)("p",{children:(0,h.jsx)(a(),{src:r.basePath+"/assets/images/workingWithPython/PythonSouce-configuration-01.png",alt:"",width:"400px",height:"150px",className:"img-fluid img-shadow"})}),(0,h.jsx)(a(),{src:r.basePath+"/assets/images/workingWithPython/PythonSouce-result-01.png",alt:"",width:"400px",height:"150px",className:"img-fluid img-shadow"}),(0,h.jsx)("ol",{start:"3",children:(0,h.jsxs)("li",{children:["Execute the workflow, output the view of generated process model."," "]})}),(0,h.jsx)("p",{children:"Here only the simply ussage case is shown to integrate pm4py into KNIME. Anyway, it is an interesting task and needs more exploration later."})]})})}),(0,h.jsx)(i.Z,{})]})}},7857:function(e,t,s){"use strict";var n=s(5893);t.Z=function(e){return(0,n.jsx)("footer",{className:"footer",children:(0,n.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the"," ",(0,n.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,n.jsx)("span",{className:"float-right ml-1 mr-1 text-muted",children:"|"}),(0,n.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},9600:function(e,t,s){"use strict";var n=s(9499),i=(s(7294),s(8802)),r=s.n(i),o=s(4593),a=s(1664),l=s.n(a),h=s(634),c=s(9368),d=s(3210),p=s(5893);function m(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function g(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?m(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var x=function(e){var t=e.style;return(0,p.jsxs)(h.Z,{className:"container-fluid color-nav",style:t,children:[(0,p.jsxs)(h.Z.Brand,{children:[(0,p.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,p.jsx)("img",{src:r().basePath+"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,p.jsx)(l(),{href:"/",passHref:!0,children:(0,p.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},children:[(0,p.jsx)("img",{src:r().basePath+"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:"",style:{alignSelf:"left"}}),"PM4KNIME"]})})]}),(0,p.jsx)(h.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,p.jsxs)(h.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,p.jsx)(c.Z,{children:(0,p.jsx)(l(),{href:"/userDoc/",passHref:!0,children:(0,p.jsx)(c.Z.Link,{children:"Home"})})}),(0,p.jsx)(c.Z,{children:(0,p.jsxs)(d.Z,{title:"Getting Started",id:"collasible-nav-dropdown",children:[(0,p.jsx)(l(),{href:"/userDoc/guides/",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Introduction Guides"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/features",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"PM4KNIME Features"})}),(0,p.jsx)(d.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/installation",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Installation Instructions"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/importantConcepts",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"KNIME Important Concepts"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/bugReport",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Bug Report"})}),(0,p.jsx)(d.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/knimeServer",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"KNIME Server Usage"})})]})}),(0,p.jsx)(c.Z,{children:(0,p.jsxs)(d.Z,{title:"Examples",id:"collasible-nav-dropdown",children:[(0,p.jsx)(l(),{href:"/userDoc/guides/demos",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Introduction Demos"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/processDiscovery",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Process Discovery"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/conformance",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Confromance"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/logManipulation",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Log Manipulation"})}),(0,p.jsx)(d.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/repetiveExecution",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Repetitive Execution of Workflow (Legacy does not work)"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/parameterOptimization",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Parameter Optimization (Legacy does not work)"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/organizationOnWorkflow",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Organization on Workflow"})}),(0,p.jsx)(d.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/knimeNodes",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"KNIME Nodes"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/workWithJava",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Working with Java"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/workWithPython",passHref:!0,children:(0,p.jsx)(d.Z.Item,{children:"Working with Python"})})]})})]})]})},f=function(){return(0,p.jsxs)(o.q,{children:[(0,p.jsx)("meta",{charSet:"UTF-8"}),(0,p.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,p.jsx)("title",{children:"PM4KNIME"}),(0,p.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:r().basePath+"/assets/pm4knimeLogo.png"}),(0,p.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:r().basePath+"/assets/pm4knimeLogo.png"}),(0,p.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:r().basePath+"/assets/pm4knimeLogo.png"}),(0,p.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,p.jsx)("meta",{name:"google",content:"notranslate"})]})},u=function(){return(0,p.jsx)(x,{style:g({},{collapseOnSelect:!0,expand:"lg",variant:"light",transition:"top 0.6s",position:"fixed",width:"100%"})})};t.Z=function(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f,{}),(0,p.jsx)(u,{})]})}},8606:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userDoc/guides/demos/workWithPython",function(){return s(9423)}])}},function(e){e.O(0,[917,675,951,774,888,179],(function(){return t=8606,e(e.s=t);var t}));var t=e.O();_N_E=t}]);