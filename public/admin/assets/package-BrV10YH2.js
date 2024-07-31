
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as pe}from"./index.vue_vue_type_script_setup_true_lang-CHWp65cL.js";import{_ as me}from"./index.vue_vue_type_script_setup_true_lang-D6-4wUAO.js";import{d as ce,r as c,m as x,p as j,a as fe,n as u,q as _e,g as C,c as T,b as e,w as l,h as d,F as ge,s as be,i as h,y as ve,z as S,t as k,e as v,B as ye,E as y,G as we,j as Ve,_ as Ce,k as D}from"./index-CAe0BuuW.js";import{A as U}from"./package-DnQHQQ_C.js";import{k as he,I as ke}from"./index-DfBvkKrB.js";import{u as Ue}from"./utcformatTime-Bq4gDWNx.js";const Ie=v("div",{class:"flex items-center gap-4"},"套餐设置",-1),xe=v("div",{class:"text-sm/6"},[v("div",null," 套餐分为不限时套餐和限时套餐。不限时充值积分永不过期，限时套餐在规定时间未使用完毕将清空剩余积分。 "),v("div",null," 如果充值的套餐等级高于或等于当前套餐等级，则叠加充值额度并延长会员到期时间。 "),v("div",null," 如果充值的套餐等级低于当前套餐等级，则只叠加充值额度，不延长会员到期时间也不改变会员等级。 "),d(" 请仔细阅读以上内容并合理配置，套餐有效时间设为-1即为不限时套餐。 ")],-1),Me={class:"mr-5 flex justify-end"},qe=ce({__name:"package",setup(ze){const B=c(`/api/upload/file?dir=${encodeURIComponent("system/others")}`),M=c(),q=c(0),b=c(!1),w=c(!1),m=x({name:"",page:1,size:10,status:""}),V=c(),f=c(0),o=x({name:null,des:null,coverImg:null,price:null,order:null,status:null,weight:null,days:null,model3Count:null,model4Count:null,drawMjCount:null}),F=x({name:[{required:!0,message:"请填写套餐名称",trigger:"blur"}],des:[{required:!0,message:"请填写套餐的详细描述",trigger:"blur"}],deductionType:[{required:!0,message:"请选择扣费形式",trigger:"change"}],coverImg:[{required:!0,message:"请填写或上传封面图地址",trigger:"blur"}],price:[{required:!0,message:"请填写套餐价格",trigger:"blur"}],order:[{required:!0,message:"请填写套餐排序",trigger:"blur"}],status:[{required:!0,message:"请选择套餐开启状态",trigger:"change"}],days:[{required:!0,message:"请填写套餐有效期天数",trigger:"blur"}],model3Count:[{required:!0,message:"请填写套餐中基础模型可使用次数",trigger:"blur"}],model4Count:[{required:!0,message:"请填写套餐中高级模型可使用次数",trigger:"blur"}],drawMjCount:[{required:!0,message:"请填写套餐中抽奖次数",trigger:"blur"}]}),z=c([]);async function _(){try{w.value=!0;const n=await U.queryAllPackage(m);w.value=!1;const{rows:a,count:I}=n.data;q.value=I,z.value=a}catch{w.value=!1}}function N(n){n==null||n.resetFields(),_()}const R=n=>{if(["image/png","image/jpeg","image/gif","image/webp"].includes(n.type)){if(n.size/1024>2e3)return y.error("当前限制文件最大不超过 2000KB!"),!1}else return y.error("当前系统仅支持 PNG、JPEG、GIF、和 WebP 格式的图片!"),!1;return!0},G=(n,a)=>{o.coverImg=n.data};async function O(n){await U.delPackage({id:n}),y({type:"success",message:"删除套餐成功！"}),_()}function Y(n){f.value=n.id,we(()=>{Object.assign(o,n),o==null||delete o.createdAt,o==null||delete o.updatedAt,o==null||delete o.deletedAt,o==null||delete o.id}),b.value=!0}const H=j(()=>f.value?"更新套餐":"新增套餐"),K=j(()=>f.value?"确认更新":"确认新增");function L(){var n;f.value=0,b.value=!0,(n=V.value)==null||n.resetFields()}function J(n){f.value=0,n==null||n.resetFields()}async function W(n){n==null||n.validate(async a=>{a&&(f.value?(await U.updatePackage({id:f.value,...o}),y({type:"success",message:"更新套餐成功！"})):(await U.createPackage(o),y({type:"success",message:"创建新的套餐成功！"})),b.value=!1,_())})}return fe(()=>{_()}),(n,a)=>{const I=Ve,Q=Ce,X=me,Z=u("el-option"),E=u("el-select"),r=u("el-form-item"),g=u("el-button"),A=u("el-form"),P=pe,s=u("el-table-column"),ee=u("el-image"),le=u("el-tag"),te=u("el-popconfirm"),ae=u("el-table"),oe=u("el-pagination"),$=u("el-row"),i=u("el-input"),p=u("el-col"),ne=u("el-switch"),ue=u("el-icon"),re=u("el-upload"),se=u("el-dialog"),de=_e("loading");return C(),T("div",null,[e(X,null,{title:l(()=>[Ie]),content:l(()=>[xe]),default:l(()=>[e(Q,{outline:"",onClick:L},{default:l(()=>[e(I,{name:"ic:baseline-plus"}),d(" 创建套餐 ")]),_:1})]),_:1}),e(P,null,{default:l(()=>[e(A,{ref_key:"formRef",ref:M,inline:!0,model:m},{default:l(()=>[e(r,{label:"套餐状态",prop:"status"},{default:l(()=>[e(E,{modelValue:m.status,"onUpdate:modelValue":a[0]||(a[0]=t=>m.status=t),placeholder:"请选择套餐状态",clearable:"",style:{width:"160px"}},{default:l(()=>[(C(!0),T(ge,null,be(h(he),t=>(C(),S(Z,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(g,{type:"primary",onClick:_},{default:l(()=>[d(" 查询 ")]),_:1}),e(g,{onClick:a[1]||(a[1]=t=>N(M.value))},{default:l(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(P,{style:{width:"100%"}},{default:l(()=>[ve((C(),S(ae,{border:"",data:z.value,style:{width:"100%"},size:"large"},{default:l(()=>[e(s,{fixed:"",prop:"name",label:"套餐名称",width:"150"}),e(s,{prop:"order",label:"排序ID",align:"center",width:"100"}),e(s,{prop:"coverImg",label:"套餐封面",width:"150",align:"center"},{default:l(t=>[e(ee,{style:{height:"50px"},src:t.row.coverImg,fit:"fill"},null,8,["src"])]),_:1}),e(s,{prop:"price",label:"套餐价格",width:"100",align:"center"}),e(s,{prop:"weight",label:"套餐等级",width:"100",align:"center"}),e(s,{prop:"status",label:"套餐状态",width:"100"},{default:l(t=>[e(le,{type:"info"},{default:l(()=>[d(k(h(ke)[t.row.status]),1)]),_:2},1024)]),_:1}),e(s,{prop:"days",label:"套餐有效期",width:"120"},{default:l(t=>[d(k(t.row.days>0?`${t.row.days}天`:"永久"),1)]),_:1}),e(s,{prop:"model3Count",label:"基础模型额度",width:"100"}),e(s,{prop:"model4Count",label:"高级模型额度",width:"100"}),e(s,{prop:"drawMjCount",label:"绘画额度",width:"100"}),e(s,{prop:"des",label:"套餐描述",width:"300"}),e(s,{prop:"createdAt",label:"创建时间",width:"200"},{default:l(t=>[d(k(h(Ue)(t.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),e(s,{fixed:"right",label:"操作",width:"200"},{default:l(t=>[e(g,{link:"",type:"primary",size:"small",onClick:ie=>Y(t.row)},{default:l(()=>[d(" 修改套餐 ")]),_:2},1032,["onClick"]),e(te,{title:"确认删除此套餐么?",width:"200","icon-color":"red",onConfirm:ie=>O(t.row)},{reference:l(()=>[e(g,{link:"",type:"danger",size:"small"},{default:l(()=>[d(" 删除套餐 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[de,w.value]]),e($,{class:"mt-5 flex justify-end"},{default:l(()=>[e(oe,{"current-page":m.page,"onUpdate:currentPage":a[2]||(a[2]=t=>m.page=t),"page-size":m.size,"onUpdate:pageSize":a[3]||(a[3]=t=>m.size=t),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:q.value,onSizeChange:_,onCurrentChange:_},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(se,{modelValue:b.value,"onUpdate:modelValue":a[17]||(a[17]=t=>b.value=t),"close-on-click-modal":!1,title:H.value,width:"970",onClose:a[18]||(a[18]=t=>J(V.value))},{footer:l(()=>[v("span",Me,[e(g,{onClick:a[15]||(a[15]=t=>b.value=!1)},{default:l(()=>[d("取消")]),_:1}),e(g,{type:"primary",onClick:a[16]||(a[16]=t=>W(V.value))},{default:l(()=>[d(k(K.value),1)]),_:1})])]),default:l(()=>[e(A,{ref_key:"formPackageRef",ref:V,"label-position":"right","label-width":"120px",model:o,rules:F},{default:l(()=>[e($,null,{default:l(()=>[e(p,{span:11},{default:l(()=>[e(r,{label:"套餐详细名称",prop:"name"},{default:l(()=>[e(i,{modelValue:o.name,"onUpdate:modelValue":a[4]||(a[4]=t=>o.name=t),placeholder:"请填写套餐名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:3,offset:2},{default:l(()=>[e(r,{label:"套餐开启状态",prop:"status"},{default:l(()=>[e(ne,{modelValue:o.status,"onUpdate:modelValue":a[5]||(a[5]=t=>o.status=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:7,offset:1},{default:l(()=>[e(r,{label:"套餐等级",prop:"status"},{default:l(()=>[e(i,{modelValue:o.weight,"onUpdate:modelValue":a[6]||(a[6]=t=>o.weight=t),modelModifiers:{number:!0},type:"number",placeholder:"设置套餐等级"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:11},{default:l(()=>[e(r,{label:"设置套餐价格",prop:"price"},{default:l(()=>[e(i,{modelValue:o.price,"onUpdate:modelValue":a[7]||(a[7]=t=>o.price=t),modelModifiers:{number:!0},placeholder:"请填写套餐价格(￥)最多两位小数",type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:11,offset:2},{default:l(()=>[e(r,{label:"套餐有效时间",prop:"days"},{default:l(()=>[e(i,{modelValue:o.days,"onUpdate:modelValue":a[8]||(a[8]=t=>o.days=t),modelModifiers:{number:!0},type:"number",placeholder:"自卡密生成之日有效天数、-1为永久"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:9},{default:l(()=>[e(r,{label:"设置套餐封面",prop:"coverImg"},{default:l(()=>[e(i,{modelValue:o.coverImg,"onUpdate:modelValue":a[9]||(a[9]=t=>o.coverImg=t),class:"flex-1",placeholder:"填写封面地址或点击上传"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:2},{default:l(()=>[e(re,{class:"avatar-uploader",action:B.value,"show-file-list":!1,"on-success":G,"before-upload":R},{default:l(()=>[e(g,null,{default:l(()=>[e(ue,null,{default:l(()=>[e(h(ye))]),_:1})]),_:1})]),_:1},8,["action"])]),_:1}),e(p,{span:11,offset:2},{default:l(()=>[e(r,{label:"设置套餐排序",prop:"order"},{default:l(()=>[e(i,{modelValue:o.order,"onUpdate:modelValue":a[10]||(a[10]=t=>o.order=t),modelModifiers:{number:!0},type:"number",placeholder:"排序数字越大越靠前|套餐权重等级则反之"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:11},{default:l(()=>[e(r,{label:"设置套餐描述",prop:"des"},{default:l(()=>[e(i,{modelValue:o.des,"onUpdate:modelValue":a[11]||(a[11]=t=>o.des=t),type:"textarea",placeholder:"请填写套餐详细介绍信息、用于对外展示、建议控制套餐价格字数以便于用户端对齐格式...",rows:6},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:11,offset:2},{default:l(()=>[e(r,{label:"基础模型积分",prop:"model3Count"},{default:l(()=>[e(i,{modelValue:o.model3Count,"onUpdate:modelValue":a[12]||(a[12]=t=>o.model3Count=t),modelModifiers:{number:!0},type:"number",placeholder:"基础模型积分"},null,8,["modelValue"])]),_:1}),e(r,{label:"高级模型积分",prop:"model4Count"},{default:l(()=>[e(i,{modelValue:o.model4Count,"onUpdate:modelValue":a[13]||(a[13]=t=>o.model4Count=t),modelModifiers:{number:!0},type:"number",placeholder:"高级模型积分"},null,8,["modelValue"])]),_:1}),e(r,{label:"绘画模型积分",prop:"drawMjCount"},{default:l(()=>[e(i,{modelValue:o.drawMjCount,"onUpdate:modelValue":a[14]||(a[14]=t=>o.drawMjCount=t),modelModifiers:{number:!0},type:"number",placeholder:"绘画模型积分"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof D=="function"&&D(qe);export{qe as default};