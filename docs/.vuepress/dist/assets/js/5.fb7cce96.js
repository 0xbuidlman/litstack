(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"fjord-a-laravel-cms-admin-panel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fjord-a-laravel-cms-admin-panel"}},[a._v("#")]),a._v(" Fjord: A Laravel CMS/Admin-Panel")]),a._v(" "),s("p",[a._v("Fjord is a multilanguage CMS/Admin-Panel based on the Laravel framework.")]),a._v(" "),s("p",[a._v("It offers Artisan-Commands for generating CRUD-Modelst and Users. Manage CRUD-Models as well as all Page-Content of your website on a modern yet super simple interface.")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/aw-studio/fjord/master/fjord.png",alt:"Fjord Interface",title:"Fjord Interface"}})]),a._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("p",[a._v("Install this package using the following commands:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("composer require aw-studio/fjord\nphp artisan fjord:install\n")])])]),s("p",[a._v("Thats it for the installation. You can easily create a new admin-user by running:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan fjord:admin\n")])])]),s("p",[a._v("It's all setup now, visit http://yourapp.tld/admin")]),a._v(" "),s("h2",{attrs:{id:"crud"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crud"}},[a._v("#")]),a._v(" CRUD")]),a._v(" "),s("p",[a._v("Create your first CRUD-Model by typing the command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan fjord:crud\n")])])]),s("p",[a._v("Follow the instructions and your Model will be cruddy in no-time.")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/aw-studio/fjord/master/crud.png",alt:"Fjord Interface",title:"Fjord CRUD"}})]),a._v(" "),s("h2",{attrs:{id:"multilanguage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multilanguage"}},[a._v("#")]),a._v(" Multilanguage")]),a._v(" "),s("p",[a._v("If your application is multilingual edit the "),s("code",[a._v("config/translatable.php")]),a._v(" config\nand set the locals to your needing:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'locales'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'de'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'en'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("h2",{attrs:{id:"extend-fjord-vue-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extend-fjord-vue-application"}},[a._v("#")]),a._v(" Extend Fjord Vue Application")]),a._v(" "),s("p",[a._v("To use the npm fjord package you must install the local package that is located in the vendor folder:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm i vendor/aw-studio/fjord\n")])])]),s("p",[a._v("You can now extend the Fjord Vue Application:")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Fjord "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fjord'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Fjord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    store\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);