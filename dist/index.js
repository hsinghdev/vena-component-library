!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("@material-ui/core/styles"),require("@material-ui/core/Button"),require("@material-ui/core/CircularProgress"),require("@material-ui/core/TextField"),require("@material-ui/core/MenuItem"),require("@material-ui/core/FormControlLabel"),require("@material-ui/core/Switch"),require("@material-ui/core/InputAdornment")):"function"==typeof define&&define.amd?define(["react","@material-ui/core/styles","@material-ui/core/Button","@material-ui/core/CircularProgress","@material-ui/core/TextField","@material-ui/core/MenuItem","@material-ui/core/FormControlLabel","@material-ui/core/Switch","@material-ui/core/InputAdornment"],r):"object"==typeof exports?exports["vena-component-library"]=r(require("react"),require("@material-ui/core/styles"),require("@material-ui/core/Button"),require("@material-ui/core/CircularProgress"),require("@material-ui/core/TextField"),require("@material-ui/core/MenuItem"),require("@material-ui/core/FormControlLabel"),require("@material-ui/core/Switch"),require("@material-ui/core/InputAdornment")):e["vena-component-library"]=r(e.React,e["@material-ui/core/styles"],e["@material-ui/core/Button"],e["@material-ui/core/CircularProgress"],e["@material-ui/core/TextField"],e["@material-ui/core/MenuItem"],e["@material-ui/core/FormControlLabel"],e["@material-ui/core/Switch"],e["@material-ui/core/InputAdornment"])}(window,function(e,r,o,t,n,a,i,l,c){return function(e){var r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=r,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)o.d(t,n,function(r){return e[r]}.bind(null,n));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=12)}([function(e,r,o){e.exports=o(10)()},function(r,o){r.exports=e},function(e,o){e.exports=r},function(e,r){e.exports=o},function(e,r){e.exports=t},function(e,r){e.exports=n},function(e,r){e.exports=a},function(e,r){e.exports=i},function(e,r){e.exports=l},function(e,r){e.exports=c},function(e,r,o){"use strict";var t=o(11);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,r,o,n,a,i){if(i!==t){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function r(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:n};return o.PropTypes=o,o}},function(e,r,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,r,o){"use strict";o.r(r);var t=o(1),n=o.n(t),a=o(0),i=o.n(a),l=o(2),c=o(3),s=o.n(c),d=o(4),u=o.n(d),p="#FFFFFF",b="#333333",f="#D8D8D8",h="#FF5555";function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function g(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function y(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function x(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?y(o,!0).forEach(function(r){C(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):y(o).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function C(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var v={root:{minHeight:"36px",borderRadius:"6px",fontWeight:"bold"}},O={root:{minHeight:"32px",borderRadius:"0",lineHeight:"20px",boxShadow:"none"}};function F(e){var r=e.classes,o=e.color,t=e.disabled,a=e.isLoading,i=e.iconClass,l=e.onClick,c=e.children,d=g(e,["classes","color","disabled","isLoading","iconClass","onClick","children"]),p="";switch(o){case"primary":p=r.primary;break;case"secondary":p=r.secondary;break;case"confirmation":p=r.confirmation;break;case"danger":p=r.danger;break;default:p=r.primary}return n.a.createElement(s.a,m({classes:{root:r.root,contained:p,label:a?r.loadingButtonLabel:null},variant:"contained",disabled:t||a,onClick:l},d),i&&n.a.createElement("i",{className:i+" "+r.icon}),a&&n.a.createElement("div",{className:r.loadingIconContainer},n.a.createElement(u.a,{color:"inherit",size:14})),c)}F.defaultProps={color:"primary",disabled:!1,isLoading:!1,iconClass:""},F.propTypes={classes:i.a.object.isRequired,color:i.a.oneOf(["primary","secondary","confirmation","danger"]),disabled:i.a.bool,isLoading:i.a.bool,iconClass:i.a.string,onClick:i.a.func.isRequired,children:i.a.node};var w=Object(l.withStyles)(function(e){return{root:x({minWidth:"80px",paddingLeft:"16px",paddingRight:"16px",fontSize:"14px",color:p,textTransform:"none","&:disabled":{cursor:"not-allowed",pointerEvents:"auto"}},"addin"===e.venaTheme?O.root:v.root),primary:{backgroundColor:"#0061BB","&:hover":{backgroundColor:"#00316E"},"&:disabled":{backgroundColor:"#76BDF5",color:p},"&:disabled&:hover":{backgroundColor:"#76BDF5",color:p}},secondary:{backgroundColor:f,color:b,"&:hover":{backgroundColor:"#B4B4B4"},"&:disabled":{backgroundColor:f,color:"#B4B4B4"},"&:disabled&:hover":{backgroundColor:f,color:"#B4B4B4"}},confirmation:{backgroundColor:"#009C49","&:hover":{backgroundColor:"#006E2A"},"&:disabled":{backgroundColor:"#7EAA93",color:p},"&:disabled&:hover":{backgroundColor:"#7EAA93",color:p}},danger:{backgroundColor:h,"&:hover":{backgroundColor:"#BC3C3C"},"&:disabled":{backgroundColor:"#FF7F84",color:p},"&:disabled&:hover":{backgroundColor:"#FF7F84",color:p}},icon:{marginRight:"8px"},loadingButtonLabel:{visibility:"hidden"},loadingIconContainer:{position:"absolute",top:"6px",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"calc(100% - 12px)",visibility:"visible"}}})(F);function k(){return(k=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function j(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function T(e){var r=e.classes,o=e.color,t=e.disabled,a=e.isLoading,i=e.iconClass,l=e.onClick,c=e.children,d=j(e,["classes","color","disabled","isLoading","iconClass","onClick","children"]),p="";switch(o){case"primary":p=r.primary;break;case"secondary":p=r.secondary;break;case"danger":p=r.danger;break;default:p=r.primary}return n.a.createElement(s.a,k({classes:{root:r.root,text:p,label:a?r.loadingButtonLabel:null},variant:"text",disabled:t||a,onClick:l},d),i&&n.a.createElement("i",{className:i+" "+r.icon}),a&&n.a.createElement("div",{className:r.loadingIconContainer},n.a.createElement(u.a,{color:"inherit",size:14})),c)}T.defaultProps={color:"primary",disabled:!1,isLoading:!1,iconClass:""},T.propTypes={classes:i.a.object.isRequired,color:i.a.oneOf(["primary","secondary","danger"]),disabled:i.a.bool,isLoading:i.a.bool,iconClass:i.a.string,onClick:i.a.func.isRequired,children:i.a.node};var S=Object(l.withStyles)(function(e){return{root:{minHeight:"36px",minWidth:"80px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"6px",fontSize:"14px",fontWeight:"bold",textTransform:"none","&:disabled":{cursor:"not-allowed",pointerEvents:"auto",color:f},"&:disabled&:hover":{color:f}},primary:{color:"#0085FF","&:hover":{backgroundColor:"#D0E8FC"}},secondary:{color:b,"&:hover":{backgroundColor:f}},danger:{color:h,"&:hover":{backgroundColor:"#FFD2D4"}},icon:{marginRight:"8px"},loadingButtonLabel:{visibility:"hidden"},loadingIconContainer:{position:"absolute",top:"6px",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"calc(100% - 12px)",visibility:"visible",color:b}}})(T),E=o(6),P=o.n(E),R=o(5),B=o.n(R);function q(){return(q=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function I(e){return function(e){if(Array.isArray(e)){for(var r=0,o=new Array(e.length);r<e.length;r++)o[r]=e[r];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function L(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function D(e){var r=e.classes,o=e.placeholder,t=e.options,a=e.value,i=e.helperText,l=e.onChange,c=e.disabled,s=e.error,d=e.fullWidth,u=e.required,p=e.id,b=e.label,f=L(e,["classes","placeholder","options","value","helperText","onChange","disabled","error","fullWidth","required","id","label"]),h=t;return o&&(h=[{value:"",menuListContent:n.a.createElement("div",{className:r.placeholder},o)}].concat(I(t))),n.a.createElement(B.a,q({id:p,select:!0,fullWidth:d,label:b,disabled:c,error:s,value:a||h[0].value,onChange:l,FormHelperTextProps:{classes:{root:r.helperTextRoot,error:r.helperTextError}},classes:{root:r.formControlRoot,fullWidth:r.formControlFullWidth},InputProps:{disableUnderline:!0,classes:{root:r.inputRoot,disabled:r.inputDisabled,error:r.inputError,formControl:r.inputFormControl,focused:r.inputFocused}},InputLabelProps:{shrink:!0,FormLabelClasses:{root:r.labelRoot,disabled:r.labelDisabled,error:r.labelError,focused:r.labelFocused},required:u},SelectProps:{classes:{select:r.selectSelect},displayEmpty:!0,MenuProps:{classes:{paper:r.paper},MenuListProps:{classes:{padding:r.listPadding}},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null,marginThreshold:0}},helperText:i},f),h.map(function(e){return n.a.createElement(P.a,{disableGutters:!0,classes:{root:r.listItem},key:e.value,value:e.value},e.menuListContent)}))}D.defaultProps={value:"",disabled:!1,required:!1,error:!1},D.propTypes={classes:i.a.object.isRequired,value:i.a.any,disabled:i.a.bool,required:i.a.bool,fullWidth:i.a.bool,helperText:i.a.node,options:i.a.array.isRequired,placeholder:i.a.string,onChange:i.a.func,error:i.a.bool,id:i.a.string,label:i.a.string};var W=Object(l.withStyles)(function(e){return{listItem:{padding:"0 8px 0 8px",minHeight:"32px",display:"flex",alignItems:"center",fontSize:"14px"},listPadding:{padding:0},paper:{boxShadow:"0 0 0 1px ".concat(f),borderRadius:0},selectSelect:{height:"30px",padding:"0 32px 0 8px",lineHeight:"30px","&:focus":{background:p}},placeholder:{color:"#6B6C67"},formControlRoot:{width:"320px","&$formControlFullWidth":{width:"100%"}},formControlFullWidth:{},inputRoot:{backgroundColor:p,border:"1px solid ".concat(f),boxSizing:"border-box",color:b,fontSize:"14px",height:"32px","$labelRoot + &":{marginTop:"8px"},"&:hover":{border:"1px solid ".concat("#6B6C67")},"&$inputDisabled":{border:"1px solid ".concat(f),backgroundColor:"#F2F2F2"},"&$inputError":{border:"1px solid ".concat(h)},"&$inputFocused":{border:"1px solid ".concat("#0085FF")}},inputDisabled:{},inputError:{},inputFormControl:{},inputFocused:{},helperTextRoot:{color:"#6B6C67",fontSize:"12px",fontStyle:"italic","&$helperTextError":{color:h}},helperTextError:{},labelRoot:{color:b,fontSize:"14px",transform:"none",transition:"none",position:"static","&$labelDisabled":{color:b},"&$labelError":{color:b},"&$labelFocused":{color:b}},labelDisabled:{},labelError:{},labelFocused:{}}})(D),$=o(7),A=o.n($),z=o(8),_=o.n(z),M=function(e){var r=e.classes,o=e.checked,t=e.onChange,a=e.enabledText,i=e.disabledText;return n.a.createElement(A.a,{control:n.a.createElement(_.a,{classes:{switchBase:r.switchBase,bar:r.switchBar,icon:r.switchIcon,iconChecked:r.switchIconChecked,checked:r.switchChecked},inputProps:{"aria-checked":o},checked:o,onChange:t}),label:o?a:i,classes:{label:o?r.switchLabelOn:r.switchLabelOff}})};M.defaultProps={checked:!1,onChange:function(){},enabledText:"ON",disabledText:"OFF"},M.propTypes={classes:i.a.object.isRequired,checked:i.a.bool,onChange:i.a.func.isRequired,enabledText:i.a.string,disabledText:i.a.string};var H=Object(l.withStyles)(function(e){return{switchBase:{"&$switchChecked":{color:p,"& + $switchBar":{backgroundColor:"#009C49"}},transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest,easing:e.transitions.easing.sharp})},switchChecked:{transform:"translateX(12px)","& + $switchBar":{opacity:1}},switchBar:{borderRadius:10,width:30,height:16,marginTop:-8,marginLeft:-4,backgroundColor:f,opacity:1},switchIcon:{width:12,height:12,marginLeft:23,boxShadow:"none"},switchLabelOn:{color:"#009C49",fontWeight:700,fontSize:12,marginTop:1,fontFamily:"Open Sans"},switchLabelOff:{color:"#B4B4B4",fontWeight:700,fontSize:12,marginTop:1,fontFamily:"Open Sans"}}})(M),N=o(9),U=o.n(N);function G(){return(G=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function V(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function X(e){var r=e.classes,o=e.disabled,t=e.endAdornment,a=e.error,i=e.fullWidth,l=e.helperText,c=e.id,s=e.label,d=e.onChange,u=e.placeholder,p=e.readOnly,b=e.required,f=e.value,h=V(e,["classes","disabled","endAdornment","error","fullWidth","helperText","id","label","onChange","placeholder","readOnly","required","value"]);return n.a.createElement(B.a,G({disabled:o,error:a,fullWidth:i,helperText:l,id:c,label:s,onChange:d,placeholder:u,value:f,variant:"standard",InputLabelProps:{shrink:!0,FormLabelClasses:{root:r.labelRoot,disabled:r.labelDisabled,error:r.labelError,focused:r.labelFocused},required:b},InputProps:{classes:{root:r.inputRoot,input:r.inputInput,disabled:r.inputDisabled,error:r.inputError,formControl:r.inputFormControl,focused:r.inputFocused},disableUnderline:!0,endAdornment:t?n.a.createElement(U.a,{position:"end"},t):null,readOnly:p},classes:{root:r.formControlRoot,fullWidth:r.formControlFullWidth},FormHelperTextProps:{classes:{root:r.helperTextRoot,error:r.helperTextError}}},h))}X.defaultProps={disabled:!1,error:!1,readOnly:!1,required:!1},X.propTypes={classes:i.a.object.isRequired,disabled:i.a.bool,error:i.a.bool,endAdornment:i.a.node,fullWidth:i.a.bool,helperText:i.a.node,id:i.a.string,label:i.a.node,onChange:i.a.func,placeholder:i.a.string,readOnly:i.a.bool,required:i.a.bool,value:i.a.any};var Y=Object(l.withStyles)(function(e){return{formControlRoot:{width:"320px","&$formControlFullWidth":{width:"100%"}},formControlFullWidth:{},helperTextRoot:{color:"#6B6C67",fontSize:"12px",fontStyle:"italic","&$helperTextError":{color:h}},helperTextError:{},inputInput:{padding:"1px 0 0 0"},inputRoot:{backgroundColor:p,border:"1px solid ".concat(f),boxSizing:"border-box",color:b,fontSize:"14px",height:"32px",paddingLeft:"8px",paddingRight:"8px","$labelRoot + &":{marginTop:"8px"},"&:hover":{border:"1px solid ".concat("#6B6C67")},"&$inputDisabled":{border:"1px solid ".concat(f),backgroundColor:"#F2F2F2"},"&$inputError":{border:"1px solid ".concat(h)},"&$inputFocused":{border:"1px solid ".concat("#0085FF")}},inputDisabled:{},inputError:{},inputFormControl:{},inputFocused:{},labelRoot:{color:b,fontSize:"14px",transform:"none",transition:"none",position:"static","&$labelDisabled":{color:b},"&$labelError":{color:b},"&$labelFocused":{color:b}},labelDisabled:{},labelError:{},labelFocused:{}}})(X);o.d(r,"Button",function(){return w}),o.d(r,"FlatButton",function(){return S}),o.d(r,"Select",function(){return W}),o.d(r,"Switch",function(){return H}),o.d(r,"TextField",function(){return Y})}])});