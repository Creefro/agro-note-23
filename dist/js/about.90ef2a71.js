"use strict";(self["webpackChunkmuh_tas"]=self["webpackChunkmuh_tas"]||[]).push([[443],{3773:function(a,t,l){l.r(t),l.d(t,{default:function(){return y}});var e=l(3396),r=l.p+"img/zararlı_1.d8f6f21e.jpeg",n=l.p+"img/zararlı_2.6b2d0f00.jpeg",i=l.p+"img/zararlı_3.de0bab20.jpeg";const s={class:"card"},u=(0,e._)("h5",{class:"card-header"},"Arazideki Sorunlar",-1),o={class:"card-body"},d=(0,e.uE)('<table class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Kontrolün Yapıldığı Yer</th><th scope="col">Fotoğraf</th><th scope="col">Önemli Notlar</th></tr></thead><tbody><tr><th scope="row">1</th><td>İzmir</td><td><img class="img-thumbnail" width="100" height="100" src="'+r+'"></td><td>Patates böcekleri</td></tr><tr><th scope="row">2</th><td>Manisa</td><td><img class="img-thumbnail" width="100" height="100" src="'+n+'"></td><td>Zararlı 2</td></tr><tr><th scope="row">3</th><td>Aydın</td><td><img class="img-thumbnail" width="100" height="100" src="'+i+'"></td><td>Zararlı 3</td></tr></tbody></table>',1),c={class:"mb-3"},b=(0,e._)("label",{for:"formFileMultiple",class:"form-label"},"Multiple files input example",-1);function p(a,t,l,r,n,i){return(0,e.wg)(),(0,e.iD)("div",s,[u,(0,e._)("div",o,[d,(0,e._)("div",c,[b,(0,e._)("input",{class:"form-control",type:"file",id:"formFileMultiple",onChange:t[0]||(t[0]=a=>r.onFileChanged(a)),multiple:"",accept:"image/*"},null,32)])])])}var _=l(4870),m={name:"AraziSection",setup(){function a(a){console.log(a.target.value)}const t=(0,_.iH)();return(0,e.bv)((()=>{})),{image:t,onFileChanged:a}}},h=l(89);const f=(0,h.Z)(m,[["render",p]]);var y=f},8741:function(a,t,l){l.r(t),l.d(t,{default:function(){return N}});var e=l(3396),r=l(7139),n=l(9242);const i={class:"card"},s=(0,e._)("h5",{class:"card-header"},"Zirai Depo",-1),u={class:"card-body"},o={class:"table table-striped"},d=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",{scope:"col"},"İlacın Adı"),(0,e._)("th",{scope:"col"},"Adet"),(0,e._)("th",{scope:"col"},"Son alınma tarihi"),(0,e._)("th",{scope:"col"},"Son alınma adedi"),(0,e._)("th",{scope:"col"},"Son kullanılma tarihi"),(0,e._)("th",{scope:"col"},"Son kullanılan adet")])],-1),c={scope:"row"},b={class:""},p={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},_={class:"modal-dialog"},m={class:"modal-content"},h={class:"modal-header"},f={class:"modal-title fs-5",id:"staticBackdropLabel"},y=(0,e._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),g={class:"modal-body"},v={class:"mb-2 d-flex flex-row justify-content-between"},k=(0,e._)("label",{for:""},"QR",-1),w={class:"mb-2 d-flex flex-row justify-content-between"},A=(0,e._)("label",{for:""},"Adet",-1),D={key:0,class:"mb-2 d-flex flex-row justify-content-between"},z=(0,e._)("label",{for:""},"Ürün Adı",-1),B={class:"modal-footer"};function C(a,t,l,C,x,R){return(0,e.wg)(),(0,e.iD)("div",i,[s,(0,e._)("div",u,[(0,e._)("table",o,[d,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(C.tableData,(a=>((0,e.wg)(),(0,e.iD)("tr",{key:a.id},[(0,e._)("th",c,(0,r.zw)(a.adı),1),(0,e._)("td",null,(0,r.zw)(a.adet),1),(0,e._)("td",null,(0,r.zw)(a.giris.tarih),1),(0,e._)("td",null,(0,r.zw)(a.giris.adet),1),(0,e._)("td",null,(0,r.zw)(a.cikis.tarih),1),(0,e._)("td",null,(0,r.zw)(a.cikis.adet),1)])))),128))])]),(0,e._)("div",b,[(0,e._)("button",{onClick:t[0]||(t[0]=a=>C.islem="Giriş"),type:"button",class:"btn btn-primary me-2","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"}," Alınan Ürün "),(0,e._)("button",{onClick:t[1]||(t[1]=a=>C.islem="Çıkış"),type:"button",class:"btn btn-primary ms-2","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"}," Kullanılan Ürün ")]),(0,e._)("div",p,[(0,e._)("div",_,[(0,e._)("div",m,[(0,e._)("div",h,[(0,e._)("h1",f," İlaç "+(0,r.zw)(C.islem)+" İşlemi ",1),y]),(0,e._)("div",g,[(0,e._)("div",v,[k,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>C.ilac.id=a),type:"text"},null,512),[[n.nr,C.ilac.id]])]),(0,e._)("div",w,[A,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>C.ilac.adet=a),type:"number"},null,512),[[n.nr,C.ilac.adet]])]),C.isExists?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",D,[z,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>C.ilac.adı=a),type:"number"},null,512),[[n.nr,C.ilac.adı]])]))]),(0,e._)("div",B,[(0,e._)("button",{onClick:t[5]||(t[5]=a=>C.close()),type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Çık "),(0,e._)("button",{onClick:t[6]||(t[6]=a=>C.submit()),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," Ürün girişi ")])])])])])])}var x=l(4870),R=JSON.parse('[{"id":"ilac_1","adet":12,"adı":"Azimut","giris":{"tarih":"14.12.2023","adet":5},"cikis":{"tarih":"14.12.2023","adet":10},"qr_path":"src/assets/qr/ilac_1.png"},{"id":"ilac_2","adet":12,"adı":"Lamdex","giris":{"tarih":"10.08.2023","adet":7},"cikis":{"tarih":"13.06.2023","adet":18},"qr_path":"src/assets/qr/ilac_2.png"},{"id":"ilac_3","adet":35,"adı":"Mastercop","giris":{"tarih":"21.08.2023","adet":7},"cikis":{"tarih":"24.07.2023","adet":18},"qr_path":"src/assets/qr/ilac_3.png"}]'),F={name:"DepoSection",components:{},setup(){const a=(0,x.iH)(),t=(0,x.iH)(!0),l=(0,x.iH)({id:String,"adı":String,adet:Number});(0,e.bv)((()=>{r.value=R,l.value={}})),(0,e.ic)((()=>{}));const r=(0,x.iH)({});function n(){const t=new Date;let e=t.getDate(),n=t.getMonth()+1,i=t.getFullYear(),s=`${e}.${n}.${i}`,u={};"Giriş"==a.value?r.value.filter((a=>a.id==l.value.id))[0]?(u=r.value.filter((a=>a.id==l.value.id))[0],u.adet+=l.value.adet,u.giris.tarih=s,u.giris.adet=l.value.adet,l.value={}):console.log("yeni ürün giriş"):r.value.filter((a=>a.id==l.value.id))[0]?(u=r.value.filter((a=>a.id==l.value.id))[0],u.adet-=l.value.adet,u.cikis.tarih=s,u.cikis.adet=l.value.adet,l.value={}):window.alert("Ürün Bulunamadı")}function i(){l.value={}}return{tableData:r,islem:a,submit:n,ilac:l,close:i,isExists:t}}},M=l(89);const S=(0,M.Z)(F,[["render",C]]);var N=S},3004:function(a,t,l){l.r(t),l.d(t,{default:function(){return T}});var e=l(3396),r=l(9242),n=l(7139);const i={class:"card"},s=(0,e._)("h5",{class:"card-header"},"Depodaki Ürünler",-1),u={class:"card-body"},o={class:"row"},d={class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},c=(0,e._)("label",{class:"btn btn-outline-primary",for:"btnradio1"},"Günlük",-1),b=(0,e._)("label",{class:"btn btn-outline-primary",for:"btnradio2"},"Aylık",-1),p=(0,e._)("label",{class:"btn btn-outline-primary",for:"btnradio3"},"Yıllık",-1),_={class:"table table-striped"},m=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",{scope:"col"},"İlacın Adı"),(0,e._)("th",{scope:"col"},"A ürünü"),(0,e._)("th",{scope:"col"},"B ürünü"),(0,e._)("th",{scope:"col"},"C ürünü"),(0,e._)("th",{scope:"col"},"D ürünü"),(0,e._)("th",{scope:"col"},"E ürünü")])],-1),h={scope:"row"},f={key:0,type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"},y={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},g={class:"modal-dialog"},v={class:"modal-content"},k=(0,e._)("div",{class:"modal-header"},[(0,e._)("h1",{class:"modal-title fs-5",id:"staticBackdropLabel"}," Ürün giriş "),(0,e._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),w={class:"modal-body"},A={for:""},D=["onUpdate:modelValue"],z={class:"modal-footer"};function B(a,t,l,B,C,x){return(0,e.wg)(),(0,e.iD)("div",i,[s,(0,e._)("div",u,[(0,e._)("div",o,[(0,e._)("div",d,[(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>B.spanRadio=a),value:"1",type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""},null,512),[[r.G2,B.spanRadio]]),c,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>B.spanRadio=a),value:"2",type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off"},null,512),[[r.G2,B.spanRadio]]),b,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>B.spanRadio=a),value:"3",type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",autocomplete:"off"},null,512),[[r.G2,B.spanRadio]]),p])]),(0,e._)("table",_,[m,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(B.tableData,(a=>((0,e.wg)(),(0,e.iD)("tr",{key:a.Tarih},[(0,e._)("th",h,(0,n.zw)(a.Tarih),1),(0,e._)("td",null,(0,n.zw)(a.A_urunu),1),(0,e._)("td",null,(0,n.zw)(a.B_urunu),1),(0,e._)("td",null,(0,n.zw)(a.C_urunu),1),(0,e._)("td",null,(0,n.zw)(a.D_urunu),1),(0,e._)("td",null,(0,n.zw)(a.E_urunu),1)])))),128))])]),"1"==B.spanRadio?((0,e.wg)(),(0,e.iD)("button",f," Günlük giriş ")):(0,e.kq)("",!0),(0,e._)("div",y,[(0,e._)("div",g,[(0,e._)("div",v,[k,(0,e._)("div",w,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(B.urunlerArr,(a=>((0,e.wg)(),(0,e.iD)("div",{key:a.adı,class:"mb-2 d-flex flex-row justify-content-between"},[(0,e._)("label",A,(0,n.zw)(a.adı),1),(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t=>a.miktar=t,type:"number",min:"0"},null,8,D),[[r.nr,a.miktar]])])))),128))]),(0,e._)("div",z,[(0,e._)("button",{onClick:t[3]||(t[3]=a=>B.close()),type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Çık "),(0,e._)("button",{onClick:t[4]||(t[4]=a=>B.submit()),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," Ürün girişi ")])])])])])])}l(560);var C=l(4870),x=JSON.parse('[{"Tarih":"14.03.2023","A_urunu":"200","B_urunu":"450","C_urunu":"860","D_urunu":"0","E_urunu":"100"},{"Tarih":"22.03.2023","A_urunu":"200","B_urunu":"300","C_urunu":"860","D_urunu":"520","E_urunu":"150"},{"Tarih":"25.03.2023","A_urunu":"300","B_urunu":"120","C_urunu":"500","D_urunu":"250","E_urunu":"150"}]'),R=JSON.parse('[{"Tarih":"1. Ay","A_urunu":"200","B_urunu":"450","C_urunu":"860","D_urunu":"0","E_urunu":"100"},{"Tarih":"2. Ay","A_urunu":"200","B_urunu":"300","C_urunu":"860","D_urunu":"520","E_urunu":"150"},{"Tarih":"3. Ay","A_urunu":"300","B_urunu":"120","C_urunu":"500","D_urunu":"250","E_urunu":"150"}]'),F=JSON.parse('[{"Tarih":"2021","A_urunu":"200","B_urunu":"450","C_urunu":"860","D_urunu":"0","E_urunu":"100"},{"Tarih":"2022","A_urunu":"200","B_urunu":"300","C_urunu":"860","D_urunu":"520","E_urunu":"150"},{"Tarih":"2023","A_urunu":"300","B_urunu":"120","C_urunu":"500","D_urunu":"250","E_urunu":"150"}]'),M={name:"DepodakiUrunler",components:{},setup(){const a=(0,C.iH)([]),t=(0,C.iH)([{"adı":String,miktar:Number}]);(0,e.bv)((()=>{l.value=x,t.value={};let e={};for(const t of Object.keys(l.value[l.value.length-1]))"Tarih"!=t&&(e.adı=t,e.miktar=l.value[l.value.length-1][t],a.value.push(e),e={})})),(0,e.ic)((()=>{switch(parseInt(r.value)){case 1:l.value=x;break;case 2:l.value=R;break;case 3:l.value=F;break;default:break}}));const l=(0,C.iH)({}),r=(0,C.iH)("1");function n(){const t=new Date;let e=t.getDate(),r=t.getMonth()+1,n=t.getFullYear(),i=`${e}.${r}.${n}`,s={};s.Tarih=i,a.value.forEach((a=>{s[a.adı]=a.miktar})),l.value.push(s)}function i(){t.value={}}return{tableData:l,submit:n,urun:t,close:i,urunlerArr:a,spanRadio:r}}},S=l(89);const N=(0,S.Z)(M,[["render",B]]);var T=N},6271:function(a,t,l){l.r(t),l.d(t,{default:function(){return P}});var e=l(3396),r=l(9242),n=l(7139);const i={class:"card"},s=(0,e._)("h5",{class:"card-header"}," Maaliyet Çizelgesi ",-1),u={class:"card-body"},o={class:"row"},d={class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},c=(0,e._)("label",{class:"btn btn-outline-primary",for:"btnradio1"},"Günlük",-1),b=(0,e._)("label",{class:"btn btn-outline-primary",for:"btnradio2"},"Aylık",-1),p=(0,e._)("label",{class:"btn btn-outline-primary",for:"btnradio3"},"Yıllık",-1),_={class:"table table-striped"},m=(0,e._)("th",{scope:"col"},"Tarih",-1),h=(0,e._)("th",{scope:"col"},"BİTKİ KORUMA ÜRÜNLERİ MASRAFI",-1),f=(0,e._)("th",{scope:"col"},"YAKIT MASRAFI",-1),y=(0,e._)("th",{scope:"col"},"ÇALIŞAN MASRAFI",-1),g=(0,e._)("th",{scope:"col"},"TOPLAM",-1),v=(0,e._)("th",{scope:"col"},"GELİR",-1),k={key:0,scope:"col"},w={scope:"row"},A={key:0},D={key:0,type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"},z={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},B={class:"modal-dialog"},C={class:"modal-content"},x=(0,e._)("div",{class:"modal-header"},[(0,e._)("h1",{class:"modal-title fs-5",id:"staticBackdropLabel"}," Modal title "),(0,e._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),R={class:"modal-body"},F={class:""},M={class:"mb-2 d-flex flex-row justify-content-between"},S=(0,e._)("label",{class:"me-2",for:""},"Bitki Koruma Ürünleri Masrafı",-1),N={class:"mb-2 d-flex flex-row justify-content-between"},T=(0,e._)("label",{class:"me-2",for:""},"Yakıt Masrafı",-1),E={class:"mb-2 d-flex flex-row justify-content-between"},U=(0,e._)("label",{class:"me-2",for:""},"Çalışan Masrafı",-1),V={class:"mb-2 d-flex flex-row justify-content-between"},H=(0,e._)("label",{class:"me-2",for:""},"Toplam",-1),Y={class:"mb-2 d-flex flex-row justify-content-between"},G=(0,e._)("label",{class:"me-2",for:""},"Gelir",-1),j={class:"modal-footer"};function q(a,t,l,q,K,L){return(0,e.wg)(),(0,e.iD)("div",i,[s,(0,e._)("div",u,[(0,e._)("div",o,[(0,e._)("div",d,[(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>q.spanRadio=a),value:"1",type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""},null,512),[[r.G2,q.spanRadio]]),c,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>q.spanRadio=a),value:"2",type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off"},null,512),[[r.G2,q.spanRadio]]),b,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>q.spanRadio=a),value:"3",type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",autocomplete:"off"},null,512),[[r.G2,q.spanRadio]]),p])]),(0,e._)("table",_,[(0,e._)("thead",null,[(0,e._)("tr",null,[m,h,f,y,g,v,1!=q.spanRadio?((0,e.wg)(),(0,e.iD)("th",k,"NET KAZANÇ")):(0,e.kq)("",!0)])]),(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(q.tableData,(a=>((0,e.wg)(),(0,e.iD)("tr",{key:a.tarih},[(0,e._)("th",w,(0,n.zw)(a.tarih),1),(0,e._)("td",null,(0,n.zw)(a.urun_masraf),1),(0,e._)("td",null,(0,n.zw)(a.yakit),1),(0,e._)("td",null,(0,n.zw)(a.calisan),1),(0,e._)("td",null,(0,n.zw)(a.toplam),1),(0,e._)("td",null,(0,n.zw)(a.gelir),1),a.net?((0,e.wg)(),(0,e.iD)("td",A,(0,n.zw)(a.net),1)):(0,e.kq)("",!0)])))),128))])]),"1"==q.spanRadio?((0,e.wg)(),(0,e.iD)("button",D," Masraf Giriş ")):(0,e.kq)("",!0),(0,e._)("div",z,[(0,e._)("div",B,[(0,e._)("div",C,[x,(0,e._)("div",R,[(0,e._)("div",F,[(0,e._)("div",M,[S,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>q.tableForm.urun_masraf=a),type:"number"},null,512),[[r.nr,q.tableForm.urun_masraf]])]),(0,e._)("div",N,[T,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>q.tableForm.yakit=a),type:"number"},null,512),[[r.nr,q.tableForm.yakit]])]),(0,e._)("div",E,[U,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[5]||(t[5]=a=>q.tableForm.calisan=a),type:"number"},null,512),[[r.nr,q.tableForm.calisan]])]),(0,e._)("div",V,[H,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[6]||(t[6]=a=>q.tableForm.toplam=a),type:"number"},null,512),[[r.nr,q.tableForm.toplam]])]),(0,e._)("div",Y,[G,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[7]||(t[7]=a=>q.tableForm.gelir=a),type:"number"},null,512),[[r.nr,q.tableForm.gelir]])])])]),(0,e._)("div",j,[(0,e._)("button",{onClick:t[8]||(t[8]=a=>q.closeModal()),type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Çık "),(0,e._)("button",{onClick:t[9]||(t[9]=a=>q.submitForm()),type:"button",class:"btn btn-primary"}," Veri gir ")])])])])])])}l(560);var K=l(4870),L=JSON.parse('[{"tarih":"14.03.2023","urun_masraf":"123123","yakit":"123123","calisan":"123123","toplam":"123123","gelir":"123123"},{"tarih":"22.03.2023","urun_masraf":"123123","yakit":"123123","calisan":"123123","toplam":"123123","gelir":"123123"},{"tarih":"25.03.2023","urun_masraf":"123123","yakit":"123123","calisan":"123123","toplam":"123123","gelir":"123123"}]'),O=JSON.parse('[{"tarih":"1. Ay","urun_masraf":"123123","yakit":"33333","calisan":"123123","toplam":"123123","gelir":"123123","net":"222222"},{"tarih":"2. Ay","urun_masraf":"123123","yakit":"123123","calisan":"123123","toplam":"123123","gelir":"123123","net":"222222"},{"tarih":"3. Ay","urun_masraf":"123123","yakit":"123123","calisan":"123123","toplam":"123123","gelir":"123123","net":"222222"}]'),$=JSON.parse('[{"tarih":"1. Yıl","urun_masraf":"123123","yakit":"33333","calisan":"123123","toplam":"123123","gelir":"123123","net":"222222"},{"tarih":"2. Yıl","urun_masraf":"123123","yakit":"123123","calisan":"123123","toplam":"123123","gelir":"123123","net":"222222"},{"tarih":"3. Yıl","urun_masraf":"123123","yakit":"123123","calisan":"123123","toplam":"123123","gelir":"123123","net":"222222"}]'),Z={name:"MaaliyetCizelgesi",components:{},setup(){(0,e.bv)((()=>{a.value=L})),(0,e.ic)((()=>{switch(parseInt(n.value)){case 1:a.value=L;break;case 2:a.value=O;break;case 3:a.value=$;break;default:break}}));const a=(0,K.iH)({}),t=(0,K.iH)({tarih:String,urun_masraf:Number,yakit:Number,calisan:Number,toplam:Number,gelir:Number});function l(){t.value={}}function r(){const l=new Date;let e=l.getDate(),r=l.getMonth()+1,n=l.getFullYear(),i=`${e}.${r}.${n}`;t.value.tarih=i,a.value.push(t.value),console.log(a.value)}const n=(0,K.iH)("1");return{tableData:a,tableForm:t,spanRadio:n,closeModal:l,submitForm:r}}},I=l(89);const J=(0,I.Z)(Z,[["render",q]]);var P=J}}]);
//# sourceMappingURL=about.90ef2a71.js.map