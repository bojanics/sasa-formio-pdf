exports.calculate = function (co){
var eeisus=0;var eetrue="TRUE";var eefalse="FALSE";var eedec=",";var eeth=".";var eedecreg=new RegExp(",","g");var eethreg=new RegExp("\\.","g");var eecurrencyreg=new RegExp("RSD","g");var eepercentreg=new RegExp("%","g");
var fnCalls= new Array();
var EE= undefined
function calc(data){    
var eecm1=new Array();
var c1A4=data['inp_new'];var c1A3=data['tip_fin'];var c1A2=data['Inp_finance_amount'];var c1G2=(0.01914);var c1J2=(0.01716);var c1G3=(0.01914);var c1J3=(0.0165);var c1G4=(0.01914);var c1J4=(0.01595);var c1A16=(((str_eq((c1A2),("")))?(0):(substitute3((substitute3((c1A2),("."),(""))),(","),("")))));var c1A18=(((iserror((find2((","),(c1A2)))))?(0):(find2((","),(c1A2)))));var c1A19=(((((c1A18)==(0)))?(0):(((len((c1A2)))-(c1A18)))));var c1A17=(((iserror((((((s2n(left((v2s(c1A16)),(((len((v2s(c1A16))))-(c1A19))))))*(1)))+(((s2n(right((v2s(c1A16)),(c1A19))))/(Math.pow((10),(c1A19)))))))))?(0):(((((s2n(left((v2s(c1A16)),(((len((v2s(c1A16))))-(c1A19))))))*(1)))+(((s2n(right((v2s(c1A16)),(c1A19))))/(Math.pow((10),(c1A19)))))))));var tmp1=(str_eq((c1A3),("FL")));var tmp2=(str_eq((c1A4),("YES")));var tmp3=(((c1A17)<(100000)));var sumcnt4_sum=(((true&&tmp3)&&tmp2)&&tmp1);var sumcnt4_cnt=3;var tmp5=(str_eq((c1A3),("OF")));var tmp6=(str_eq((c1A3),("OL")));var sumcnt7_sum=((false||tmp6)||tmp5);var sumcnt7_cnt=2;var tmp8=(orgeneral(0,sumcnt7_sum,sumcnt7_cnt,eecm1));var tmp9=(str_eq((c1A4),("YES")));var tmp10=(((c1A17)<(100000)));var sumcnt11_sum=(((true&&tmp10)&&tmp9)&&tmp8);var sumcnt11_cnt=3;var tmp12=(str_eq((c1A3),("FL")));var tmp13=(str_eq((c1A4),("YES")));var tmp14=(((c1A17)>=(100000)));var tmp15=(((c1A17)<(200000)));var sumcnt16_sum=((((true&&tmp15)&&tmp14)&&tmp13)&&tmp12);var sumcnt16_cnt=4;var tmp17=(str_eq((c1A3),("OF")));var tmp18=(str_eq((c1A3),("OL")));var sumcnt19_sum=((false||tmp18)||tmp17);var sumcnt19_cnt=2;var tmp20=(orgeneral(0,sumcnt19_sum,sumcnt19_cnt,eecm1));var tmp21=(str_eq((c1A4),("YES")));var tmp22=(((c1A17)>=(100000)));var tmp23=(((c1A17)<(200000)));var sumcnt24_sum=((((true&&tmp23)&&tmp22)&&tmp21)&&tmp20);var sumcnt24_cnt=4;var tmp25=(str_eq((c1A3),("FL")));var tmp26=(str_eq((c1A4),("YES")));var tmp27=(((c1A17)>=(200000)));var sumcnt28_sum=(((true&&tmp27)&&tmp26)&&tmp25);var sumcnt28_cnt=3;var tmp29=(str_eq((c1A3),("OF")));var tmp30=(str_eq((c1A3),("OL")));var sumcnt31_sum=((false||tmp30)||tmp29);var sumcnt31_cnt=2;var tmp32=(orgeneral(0,sumcnt31_sum,sumcnt31_cnt,eecm1));var tmp33=(str_eq((c1A4),("YES")));var tmp34=(((c1A17)>=(200000)));var sumcnt35_sum=(((true&&tmp34)&&tmp33)&&tmp32);var sumcnt35_cnt=3;var c1A6=(round((((andgeneral(0,sumcnt4_sum,sumcnt4_cnt,eecm1))?(((c1A17)*(c1G2))):((andgeneral(0,sumcnt11_sum,sumcnt11_cnt,eecm1))?(((c1A17)*(c1G2))):(((andgeneral(0,sumcnt16_sum,sumcnt16_cnt,eecm1))?(((c1A17)*(c1G3))):((andgeneral(0,sumcnt24_sum,sumcnt24_cnt,eecm1))?(((c1A17)*(c1G3))):(((andgeneral(0,sumcnt28_sum,sumcnt28_cnt,eecm1))?(((c1A17)*(c1G4))):((andgeneral(0,sumcnt35_sum,sumcnt35_cnt,eecm1))?(((c1A17)*(c1G4))):(0)))))))))),(2)));
 var tmp36=(str_eq((c1A3),("FL")));var tmp37=(str_eq((c1A4),("YES")));var tmp38=(((c1A17)<(100000)));var sumcnt39_sum=(((true&&tmp38)&&tmp37)&&tmp36);var sumcnt39_cnt=3;var tmp40=(str_eq((c1A3),("OL")));var tmp41=(str_eq((c1A3),("OF")));var sumcnt42_sum=((false||tmp41)||tmp40);var sumcnt42_cnt=2;var tmp43=(orgeneral(0,sumcnt42_sum,sumcnt42_cnt,eecm1));var tmp44=(str_eq((c1A4),("YES")));var tmp45=(((c1A17)<(100000)));var sumcnt46_sum=(((true&&tmp45)&&tmp44)&&tmp43);var sumcnt46_cnt=3;var tmp47=(str_eq((c1A3),("FL")));var tmp48=(str_eq((c1A4),("YES")));var tmp49=(((c1A17)>=(100000)));var tmp50=(((c1A17)<(200000)));var sumcnt51_sum=((((true&&tmp50)&&tmp49)&&tmp48)&&tmp47);var sumcnt51_cnt=4;var tmp52=(str_eq((c1A3),("OF")));var tmp53=(str_eq((c1A3),("OL")));var sumcnt54_sum=((false||tmp53)||tmp52);var sumcnt54_cnt=2;var tmp55=(orgeneral(0,sumcnt54_sum,sumcnt54_cnt,eecm1));var tmp56=(str_eq((c1A4),("YES")));var tmp57=(((c1A17)>=(100000)));var tmp58=(((c1A17)<(200000)));var sumcnt59_sum=((((true&&tmp58)&&tmp57)&&tmp56)&&tmp55);var sumcnt59_cnt=4;var tmp60=(str_eq((c1A3),("FL")));var tmp61=(str_eq((c1A4),("YES")));var tmp62=(((c1A17)>=(200000)));var tmp63=(((c1A17)<=(300000)));var sumcnt64_sum=((((true&&tmp63)&&tmp62)&&tmp61)&&tmp60);var sumcnt64_cnt=4;var tmp65=(str_eq((c1A3),("OF")));var tmp66=(str_eq((c1A3),("OL")));var sumcnt67_sum=((false||tmp66)||tmp65);var sumcnt67_cnt=2;var tmp68=(orgeneral(0,sumcnt67_sum,sumcnt67_cnt,eecm1));var tmp69=(str_eq((c1A4),("YES")));var tmp70=(((c1A17)>=(200000)));var tmp71=(((c1A17)<=(300000)));var sumcnt72_sum=((((true&&tmp71)&&tmp70)&&tmp69)&&tmp68);var sumcnt72_cnt=4;var c1A7=(round((((andgeneral(0,sumcnt39_sum,sumcnt39_cnt,eecm1))?(((c1A17)*(c1J2))):((andgeneral(0,sumcnt46_sum,sumcnt46_cnt,eecm1))?(((c1A17)*(c1J2))):(((andgeneral(0,sumcnt51_sum,sumcnt51_cnt,eecm1))?(((c1A17)*(c1J3))):((andgeneral(0,sumcnt59_sum,sumcnt59_cnt,eecm1))?(((c1A17)*(c1J3))):(((andgeneral(0,sumcnt64_sum,sumcnt64_cnt,eecm1))?(((c1A17)*(c1J4))):((andgeneral(0,sumcnt72_sum,sumcnt72_cnt,eecm1))?(((c1A17)*(c1J4))):(0)))))))))),(2)));
 var c1A8=(round((((c1A17)*(1))),(2)));var c1A11=((''+eedisplayFloatNDTh((c1A6),2)));var c1A12=((''+eedisplayFloatNDTh((c1A7),2)));var c1A13=((''+eedisplayFloatNDTh((c1A8),2)));data['XLEW_1_19_1']=c1A19;data['XLEW_1_18_1']=c1A18;data['XLEW_1_17_1']=c1A17;data['XLEW_1_16_1']=c1A16;data['out_finance_amount_string']=c1A13;data['out_wiener_string']=c1A12;data['out_uniqa_string']=c1A11;data['out_finance_amount']=c1A8;data['out_wiener']=c1A7;data['out_uniqa']=c1A6; data['fnCalls']= fnCalls; if(typeof EE !== 'undefined') { data['EE'] = EE; } return JSON.stringify(data);};
function ssccf1n(op,id,css,data1) {
                                        var op = JSON.stringify(op);		
                                        var id = JSON.stringify(id);
                                        var css = JSON.stringify(css);
                                        var data1 = JSON.stringify(data1);
	                                    fnCalls.push('ssccf1n('+ op + ',' + id + ',' + css + ',' + data1 + ')');	
                                    }
                                    function ssccf4n(op,id,colors,data1,data2,data3,data4){
										var op = JSON.stringify(op);		
                                        var id = JSON.stringify(id);
										var colors = JSON.stringify(colors);                                
                                        var data1 = JSON.stringify(data1);
										var data2 = JSON.stringify(data2);
										var data3 = JSON.stringify(data3);
										var data4 = JSON.stringify(data4);
	                                    fnCalls.push('ssccf4n('+ op + ',' + id + ',' + colors + ',' + data1 + ',' + data2 + ',' + data3 + ',' + data4 + ')');
									}
function str_eq(x,y){if(isNaN(x)&&isNaN(y))return(x.toLowerCase()==y.toLowerCase());else return x==y;};





function eegetdropdownvalue(ctl){return ctl.selectedIndex>=0&&ctl[ctl.selectedIndex]?ctl[ctl.selectedIndex].value:0}

function myIsNaN(x){return(isNaN(x)||(typeof x=='number'&&!isFinite(x)));};

function toHex2(n){var out=n.toString(16);if(out.length==1){return "0"+out;}else{return out;}};function quoteString(s){var len=s.length;var res="";for(var ii=0;ii<len;ii++){res+="\\x"+toHex2(s.charCodeAt(ii));};return res;};function find3(r,s,n){if(n<1){return Number.NaN}else{var exact_match=quoteString(r);var hit=(s.substr(n-1)).search(exact_match);if(hit==-1){return Number.NaN;}else{return hit+n;}}};

function find2(r,s){return find3(r,s,1);};

function len(s){return s.length;};

function left(s,n){return s.substr(0,n);};

function right(str,n){var len=str.length;return str.substring(len-n,len);};

function toHex2_(n){var out=n.toString(16);if(out.length==1){return "0"+out;}else{return out;}};function quoteString_(s){var len=s.length;var res="";for(var ii=0;ii<len;ii++){res+="\\x"+toHex2_(s.charCodeAt(ii));};return res;};function substitute3(str,from,to){return str.replace(new RegExp(quoteString_(from),"g"),to);};

function round(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;var abs_n=Math.abs(n);var factor=Math.pow(10,nd);return sign_n*Math.round(abs_n*factor)/factor;}else{return NaN;}};

function andgeneral(cnt,vsum,vcnt,x){if(!vsum){return false;};for(var ii=0;ii<x.length;ii++){var arr=x[ii][0];for(var jj=x[ii][1];jj<=x[ii][3];jj++){for(var kk=x[ii][2];kk<=x[ii][4];kk++){if(!arr[jj][kk]){return false;};};};};return true;};

function orgeneral(cnt,vsum,vcnt,x){if(vsum){return true;};for(var ii=0;ii<x.length;ii++){var arr=x[ii][0];for(var jj=x[ii][1];jj<=x[ii][3];jj++){for(var kk=x[ii][2];kk<=x[ii][4];kk++){if(arr[jj][kk]){return true;};};};};return false;};

function s2n(str){str=String(str).replace(eedecreg,".");str=str.replace(eethreg,"");str=str.replace(eecurrencyreg,"");var res=parseFloat(str);if(myIsNaN(res))res=0;if(str.search(eepercentreg)>=0)res=res/100;return res;}

function n2s(x){return eedisplayFloat(x);}

function b2s(b){return b?eetrue:eefalse;};

function v2s(v){switch(typeof v){case "number":if(myIsNaN(v)){return "NaN";};return n2s(v);case "string":return v;case "boolean":return b2s(v);case "object":if(v.constructor==Number){if(myIsNaN(v)){return v;};return n2s(v);};if(v.constructor==String){return v;};if(v.constructor==Boolean){return b2s(v);};return "NaN";default:return "NaN";}};

var near0RegExp=new RegExp("[.](.*0000000|.*9999999)");function eedisplayFloat(x){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x);if(near0RegExp.test(str)){x=round(x,8);str=String(x);}return str.replace(/\./g,eedec);}};

function eedisplayFloatNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');var res2=eeinsertThousand(parts[0].toString());if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(res2+eedec+decimals);}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(res2+eedec+decimals);}}else{return(eeinsertThousand(res.toString()));}}};

function eeinsertThousand(whole){if(whole==""||whole.indexOf("e")>=0){return whole;}else{var minus_sign="";if(whole.charAt(0)=="-"){minus_sign="-";whole=whole.substring(1);};var res="";var str_length=whole.length-1;for(var ii=0;ii<=str_length;ii++){if(ii>0&&ii%3==0){res=eeth+res;};res=whole.charAt(str_length-ii)+res;};return minus_sign+res;}};

function eeisstring(v){switch(typeof v){case "string":return true;case "object":return v.constructor==String;default:return false;}};

function eeunpackdropdownvalue(val) {if (val.length<2) return val;var typ = val.substring(0, 2);var data = val.substring(2);if (typ == 'b:') return data.toLowerCase() == 'true';if (typ == 'n:') return parseFloat(data);if (typ == 's:') return data;return val;  };

function eeisnumber(v){if((v==null)||isNaN(v)||v==Number.NEGATIVE_INFINITY||v==Number.POSITIVE_INFINITY){return false;}else{switch(typeof v){case "number":return true;case "object":return v.constructor==Number;default:return false;}}};

function iserror(x){if(typeof x=='number'){return(isNaN(x)||!isFinite(x))}else return false;};
return calc(co);
}
