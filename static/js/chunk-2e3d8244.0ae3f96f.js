(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e3d8244"],{1293:function(e,t,a){},"1cc6":function(e,t,a){"use strict";var l=a("1293"),i=a.n(l);i.a},2423:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return o}));var l=a("b775");function i(e){return Object(l["a"])({url:"/vue-element-admin/article/list",method:"get",params:e})}function n(e){return Object(l["a"])({url:"/vue-element-admin/article/detail",method:"get",params:{id:e}})}function s(e){return Object(l["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:e}})}function r(e){return Object(l["a"])({url:"/manage/createStudent/",method:"post",data:e})}function o(e){return Object(l["a"])({url:"/vue-element-admin/article/update",method:"post",data:e})}},"333d":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,l){return e/=l/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,a){var l=r(),i=e-l,o=20,p=0;t="undefined"===typeof t?500:t;var m=function e(){p+=o;var r=Math.easeInOutQuad(p,l,i,t);s(r),p<t?n(e):a&&"function"===typeof a&&a()};m()}var p={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&o(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&o(0,800)}}},m=p,d=(a("1cc6"),a("2877")),c=Object(d["a"])(m,l,i,!1,null,"f3b72548",null);t["a"]=c.exports},6724:function(e,t,a){"use strict";a("8d41");var l="@@wavesContext";function i(e,t){function a(a){var l=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},l),n=i.ele;if(n){n.style.position="relative",n.style.overflow="hidden";var s=n.getBoundingClientRect(),r=n.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(s.width,s.height)+"px",n.appendChild(r)),i.type){case"center":r.style.top=s.height/2-r.offsetHeight/2+"px",r.style.left=s.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-s.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-s.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=i.color,r.className="waves-ripple z-active",!1}}return e[l]?e[l].removeHandle=a:e[l]={removeHandle:a},a}var n={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[l].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[l].removeHandle,!1),e[l]=null,delete e[l]}},s=function(e){e.directive("waves",n)};window.Vue&&(window.waves=n,Vue.use(s)),n.install=s;t["a"]=n},"8d41":function(e,t,a){},c0a4:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"姓名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:"性别",clearable:""},model:{value:e.listQuery.gender,callback:function(t){e.$set(e.listQuery,"gender",t)},expression:"listQuery.gender"}},e._l(e.genderTypeOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),a("el-select",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{placeholder:"身份",clearable:""},model:{value:e.listQuery.identity,callback:function(t){e.$set(e.listQuery,"identity",t)},expression:"listQuery.identity"}},e._l(e.identityTypeOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"学号 / 教职工号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.id_code,callback:function(t){e.$set(e.listQuery,"id_code",t)},expression:"listQuery.id_code"}}),0==e.listQuery.identity?a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"专业"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.specialty,callback:function(t){e.$set(e.listQuery,"specialty",t)},expression:"listQuery.specialty"}}):e._e(),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" 搜索 ")]),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" 添加 ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" 导出 ")]),a("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"15px"},on:{change:function(t){e.tableKey=e.tableKey+1}},model:{value:e.showReviewer,callback:function(t){e.showReviewer=t},expression:"showReviewer"}},[e._v(" reviewer ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{label:"学号 / 教职工号",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.studentID))])]}}])}),a("el-table-column",{attrs:{label:"姓名",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.studentName))])]}}])}),a("el-table-column",{attrs:{label:"性别",width:"80px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(e._f("genderFilter")(l.gender)))])]}}])}),a("el-table-column",{attrs:{label:"专业",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.specialty))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"280","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row,i=t.$index;return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.handleUpdate(l)}}},[e._v(" 详情 ")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(l)}}},[e._v(" 编辑 ")]),"deleted"!=l.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(l,i)}}},[e._v(" 删除 ")]):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-tabs",{staticStyle:{"padding-right":"20px","padding-left":"20px","margin-top":"-30px"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"base"}},[a("div",{staticStyle:{height:"380px",overflow:"auto"}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"20px","margin-top":"10px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"130px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"studentName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.studentName,callback:function(t){e.$set(e.temp,"studentName",t)},expression:"temp.studentName"}})],1),a("el-form-item",{attrs:{label:"性别",prop:"gender"}},[a("el-radio-group",{model:{value:e.temp.gender,callback:function(t){e.$set(e.temp,"gender",t)},expression:"temp.gender"}},[a("el-radio",{attrs:{label:"1"}},[e._v("男")]),a("el-radio",{attrs:{label:"0"}},[e._v("女")])],1)],1),a("el-form-item",{attrs:{label:"出生日期",prop:"birthday"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"请选择日期"},model:{value:e.temp.birthday,callback:function(t){e.$set(e.temp,"birthday",t)},expression:"temp.birthday"}})],1),a("el-form-item",{attrs:{label:"民族",prop:"nation"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.nation,callback:function(t){e.$set(e.temp,"nation",t)},expression:"temp.nation"}},e._l(e.nationTypeOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1),a("el-form-item",{attrs:{label:"是否宗教信仰",prop:"isReligious"}},[a("el-radio-group",{model:{value:e.temp.isReligious,callback:function(t){e.$set(e.temp,"isReligious",t)},expression:"temp.isReligious"}},[a("el-radio",{attrs:{label:"1"}},[e._v("是")]),a("el-radio",{attrs:{label:"0"}},[e._v("否")])],1)],1),a("el-form-item",{attrs:{label:"宗教信仰名称",prop:"religion"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.religion,callback:function(t){e.$set(e.temp,"religion",t)},expression:"temp.religion"}})],1),a("el-form-item",{attrs:{label:"个人电话",prop:"mobileNumber"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.mobileNumber,callback:function(t){e.$set(e.temp,"mobileNumber",t)},expression:"temp.mobileNumber"}})],1),a("el-form-item",{attrs:{label:"QQ号",prop:"qqNumber"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.qqNumber,callback:function(t){e.$set(e.temp,"qqNumber",t)},expression:"temp.qqNumber"}})],1),a("el-form-item",{attrs:{label:"政治面貌",prop:"politicalStatus"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.politicalStatus,callback:function(t){e.$set(e.temp,"politicalStatus",t)},expression:"temp.politicalStatus"}},e._l(e.politicalTypeOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1),a("el-form-item",{attrs:{label:"健康状况",prop:"healthy"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.healthy,callback:function(t){e.$set(e.temp,"healthy",t)},expression:"temp.healthy"}},e._l(e.healthTypeOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1)],1)],1)]),a("el-tab-pane",{attrs:{label:"监护人",name:"guardians"}},[a("div",{staticStyle:{height:"380px",overflow:"auto"}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"20px","margin-top":"10px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"130px"}},[a("el-form-item",{attrs:{label:"父亲姓名",prop:"fName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.fName,callback:function(t){e.$set(e.temp,"fName",t)},expression:"temp.fName"}})],1),a("el-form-item",{attrs:{label:"父亲电话",prop:"fMobileNumber"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.fMobileNumber,callback:function(t){e.$set(e.temp,"fMobileNumber",t)},expression:"temp.fMobileNumber"}})],1),a("el-form-item",{attrs:{label:"父亲工作单位",prop:"fWork"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.fWork,callback:function(t){e.$set(e.temp,"fWork",t)},expression:"temp.fWork"}})],1),a("el-form-item",{attrs:{label:"母亲姓名",prop:"mName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.mName,callback:function(t){e.$set(e.temp,"mName",t)},expression:"temp.mName"}})],1),a("el-form-item",{attrs:{label:"母亲电话",prop:"mMobileNumber"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.mWork,callback:function(t){e.$set(e.temp,"mWork",t)},expression:"temp.mWork"}})],1),a("el-form-item",{attrs:{label:"母亲工作单位",prop:"mWork"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.mMobileNumber,callback:function(t){e.$set(e.temp,"mMobileNumber",t)},expression:"temp.mMobileNumber"}})],1),a("el-form-item",{attrs:{label:"监护人姓名",prop:"gName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.gName,callback:function(t){e.$set(e.temp,"gName",t)},expression:"temp.gName"}})],1),a("el-form-item",{attrs:{label:"监护人电话",prop:"gMobileNumber"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.gMobileNumber,callback:function(t){e.$set(e.temp,"gMobileNumber",t)},expression:"temp.gMobileNumber"}})],1)],1)],1)]),a("el-tab-pane",{attrs:{label:"住址和户口",name:"home"}},[a("div",{staticStyle:{height:"380px",overflow:"auto"}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"20px","margin-top":"10px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"130px"}},[a("el-form-item",{attrs:{label:"家庭住址(省)",prop:"province"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.province,callback:function(t){e.$set(e.temp,"province",t)},expression:"temp.province"}})],1),a("el-form-item",{attrs:{label:"家庭住址(市)",prop:"city"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.city,callback:function(t){e.$set(e.temp,"city",t)},expression:"temp.city"}})],1),a("el-form-item",{attrs:{label:"家庭住址(区/县)",prop:"county"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.county,callback:function(t){e.$set(e.temp,"county",t)},expression:"temp.county"}})],1),a("el-form-item",{attrs:{label:"家庭详细住址",prop:"address"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.address,callback:function(t){e.$set(e.temp,"address",t)},expression:"temp.address"}})],1),a("el-form-item",{attrs:{label:"户口性质",prop:"registeredResidence"}},[a("el-radio-group",{model:{value:e.temp.registeredResidence,callback:function(t){e.$set(e.temp,"registeredResidence",t)},expression:"temp.registeredResidence"}},[a("el-radio",{attrs:{label:"0"}},[e._v("农村")]),a("el-radio",{attrs:{label:"1"}},[e._v("城市")])],1)],1),a("el-form-item",{attrs:{label:"邮政编码",prop:"postalCode"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.postalCode,callback:function(t){e.$set(e.temp,"postalCode",t)},expression:"temp.postalCode"}})],1)],1)],1)]),a("el-tab-pane",{attrs:{label:"校内信息",name:"inschool"}},[a("div",{staticStyle:{height:"380px",overflow:"auto"}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"20px","margin-top":"10px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"130px"}},[a("el-form-item",{attrs:{label:"学号",prop:"studentID"}},[a("el-input",{attrs:{placeholder:"请输入"},on:{input:function(t){e.temp.enrollmentYear=String(e.temp.studentID).slice(0,4)}},model:{value:e.temp.studentID,callback:function(t){e.$set(e.temp,"studentID",t)},expression:"temp.studentID"}})],1),a("el-form-item",{attrs:{label:"入学年份",prop:"enrollmentYear"}},[a("el-input",{attrs:{placeholder:"自动识别学号",disabled:""},model:{value:e.temp.enrollmentYear,callback:function(t){e.$set(e.temp,"enrollmentYear",t)},expression:"temp.enrollmentYear"}})],1),a("el-form-item",{attrs:{label:"职务",prop:"position"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.position,callback:function(t){e.$set(e.temp,"position",t)},expression:"temp.position"}})],1),a("el-form-item",{attrs:{label:"辅导员工号",prop:"instructor"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.instructor,callback:function(t){e.$set(e.temp,"instructor",t)},expression:"temp.instructor"}})],1),a("el-form-item",{attrs:{label:"专业",prop:"specialty"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.specialty,callback:function(t){e.$set(e.temp,"specialty",t)},expression:"temp.specialty"}})],1),a("el-form-item",{attrs:{label:"班级",prop:"studentClass"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.studentClass,callback:function(t){e.$set(e.temp,"studentClass",t)},expression:"temp.studentClass"}})],1),a("el-form-item",{attrs:{label:"宿舍楼号",prop:"dormitoryBuilding"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.dormitoryBuilding,callback:function(t){e.$set(e.temp,"dormitoryBuilding",t)},expression:"temp.dormitoryBuilding"}})],1),a("el-form-item",{attrs:{label:"宿舍号",prop:"dormitory"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.dormitory,callback:function(t){e.$set(e.temp,"dormitory",t)},expression:"temp.dormitory"}})],1)],1)],1)]),a("el-tab-pane",{attrs:{label:"课程",name:"lessons"}},[e._v("课程")]),a("el-tab-pane",{attrs:{label:"活动",name:"activities"}},[e._v("活动")]),a("el-tab-pane",{attrs:{label:"高考",name:"NCEE"}},[a("div",{staticStyle:{height:"380px",overflow:"auto"}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"20px","margin-top":"10px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"130px"}},[a("el-form-item",{attrs:{label:"语文",prop:"gkChinese"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.gkChinese,callback:function(t){e.$set(e.temp,"gkChinese",t)},expression:"temp.gkChinese"}})],1),a("el-form-item",{attrs:{label:"数学",prop:"gkMath"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.gkMath,callback:function(t){e.$set(e.temp,"gkMath",t)},expression:"temp.gkMath"}})],1),a("el-form-item",{attrs:{label:"英语",prop:"gkEnglish"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.gkEnglish,callback:function(t){e.$set(e.temp,"gkEnglish",t)},expression:"temp.gkEnglish"}})],1),a("el-form-item",{attrs:{label:"理综",prop:"gkScience"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.temp.gkScience,callback:function(t){e.$set(e.temp,"gkScience",t)},expression:"temp.gkScience"}})],1)],1)],1)])],1),a("div",{staticClass:"dialog-footer",staticStyle:{"padding-right":"20px","padding-left":"20px"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" 取消 ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(" 确定 ")])],1)],1),a("el-dialog",{attrs:{visible:e.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},i=[],n=(a("c740"),a("d81d"),a("13d5"),a("a434"),a("d3b7"),a("2423")),s=a("6724"),r=a("ed08"),o=a("333d"),p=[{key:"0",display_name:"汉族"},{key:"1",display_name:"壮族"},{key:"2",display_name:"满族"},{key:"3",display_name:"回族"},{key:"4",display_name:"苗族"},{key:"5",display_name:"维吾尔族"},{key:"6",display_name:"土家族"},{key:"7",display_name:"彝族"},{key:"8",display_name:"蒙古族"},{key:"9",display_name:"藏族"},{key:"10",display_name:"布依族"},{key:"11",display_name:"侗族"},{key:"12",display_name:"瑶族"},{key:"13",display_name:"朝鲜族"},{key:"14",display_name:"白族"},{key:"15",display_name:"哈尼族"},{key:"16",display_name:"哈萨克族"},{key:"17",display_name:"黎族"},{key:"18",display_name:"傣族"},{key:"19",display_name:"畲族"},{key:"20",display_name:"傈僳族"},{key:"21",display_name:"仡佬族"},{key:"22",display_name:"东乡族"},{key:"23",display_name:"高山族"},{key:"24",display_name:"拉祜族"},{key:"25",display_name:"水族"},{key:"26",display_name:"佤族"},{key:"27",display_name:"纳西族"},{key:"28",display_name:"羌族"},{key:"29",display_name:"土族"},{key:"30",display_name:"仫佬族"},{key:"31",display_name:"锡伯族"},{key:"32",display_name:"柯尔克孜族"},{key:"33",display_name:"达斡尔族"},{key:"34",display_name:"景颇族"},{key:"35",display_name:"毛南族"},{key:"36",display_name:"撒拉族"},{key:"37",display_name:"布朗族"},{key:"38",display_name:"塔吉克族"},{key:"39",display_name:"阿昌族"},{key:"40",display_name:"普米族"},{key:"41",display_name:"鄂温克族"},{key:"42",display_name:"怒族"},{key:"43",display_name:"京族"},{key:"44",display_name:"基诺族"},{key:"45",display_name:"德昂族"},{key:"46",display_name:"保安族"},{key:"47",display_name:"俄罗斯族"},{key:"48",display_name:"裕固族"},{key:"49",display_name:"乌孜别克族"},{key:"50",display_name:"门巴族"},{key:"51",display_name:"鄂伦春族"},{key:"52",display_name:"独龙族"},{key:"53",display_name:"塔塔尔族"},{key:"54",display_name:"赫哲族"},{key:"55",display_name:"珞巴族"}],m=[{key:"0",display_name:"健康"},{key:"1",display_name:"良好"},{key:"2",display_name:"及格"},{key:"3",display_name:"不及格"}],d=[{key:0,display_name:"学生"},{key:1,display_name:"教职工"}],c=[{key:0,display_name:"女"},{key:1,display_name:"男"}],u=[{key:"1",display_name:"中共党员"},{key:"2",display_name:"中共预备党员"},{key:"3",display_name:"共青团员"},{key:"4",display_name:"民革党员"},{key:"5",display_name:"民盟盟员"},{key:"6",display_name:"民建会员"},{key:"7",display_name:"民进会员"},{key:"8",display_name:"农工党党员"},{key:"9",display_name:"致公党党员"},{key:"10",display_name:"九三学社社员"},{key:"11",display_name:"台盟盟员"},{key:"12",display_name:"无党派人士"},{key:"13",display_name:"群众"}],y=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],f=y.reduce((function(e,t){return e[t.key]=t.display_name,e}),{}),b={name:"ComplexTable",components:{Pagination:o["a"]},directives:{waves:s["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]},typeFilter:function(e){return f[e]},genderFilter:function(e){return e?"男":"女"}},data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:30,name:void 0,id_code:void 0,gender:void 0,specialty:void 0,identity:void 0},importanceOptions:[1,2,3],healthTypeOptions:m,politicalTypeOptions:u,nationTypeOptions:p,genderTypeOptions:c,calendarTypeOptions:y,identityTypeOptions:d,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"添加"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"这个是必填项",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"这个是必填项",trigger:"change"}],title:[{required:!0,message:"这个是必填项",trigger:"blur"}]},downloadLoading:!1,activeName:"base"}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(n["c"])(this.listQuery).then((function(t){e.list=t.data.items,e.total=t.data.total,setTimeout((function(){e.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.temp.birthday=new Date(e.temp.birthday),e.temp.birthday=e.temp.birthday.getFullYear()+"-"+(e.temp.birthday.getMonth()+1)+"-"+e.temp.birthday.getDate(),Object(n["a"])(e.temp).then((function(){e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);a.timestamp=+new Date(a.timestamp),Object(n["e"])(a).then((function(){var t=e.list.findIndex((function(t){return t.id===e.temp.id}));e.list.splice(t,1,e.temp),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handleDelete:function(e,t){this.$notify({title:"操作成功",message:"人员已删除",type:"success",duration:2e3}),this.list.splice(t,1)},handleFetchPv:function(e){var t=this;Object(n["d"])(e).then((function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-6e83591c"),a.e("chunk-5164a781"),a.e("chunk-5b0190f0"),a.e("chunk-9a21ec70")]).then(a.bind(null,"4bf8")).then((function(t){var a=["timestamp","title","type","importance","status"],l=["timestamp","title","type","importance","status"],i=e.formatJson(l);t.export_json_to_excel({header:a,data:i,filename:"table-list"}),e.downloadLoading=!1}))},formatJson:function(e){return this.list.map((function(t){return e.map((function(e){return"timestamp"===e?Object(r["e"])(t[e]):t[e]}))}))},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"},handleClick:function(e,t){console.log(e,t)}}},h=b,g=a("2877"),k=Object(g["a"])(h,l,i,!1,null,null,null);t["default"]=k.exports}}]);