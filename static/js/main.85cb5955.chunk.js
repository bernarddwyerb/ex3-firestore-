(this["webpackJsonpex3-firestore"]=this["webpackJsonpex3-firestore"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(27),r=c.n(s),i=c(21),o=(c(53),c(54),c(12));c(55);var j=c(44),l=c.n(j),u=c(89),b=(c(56),c(3));function d(e){var t=function(e){var t={nbArticles:0,totalItems:0,st:0,tps:0,tvq:0,total:0};t.nbArticles=e.length,t.totalItems=e.reduce((function(e,t){return e+t.qte}),0);var c=e.reduce((function(e,t){return e+t.prix*t.qte}),0);t.st=c.toFixed(2);var n=.05*c;t.tps=n.toFixed(2);var a=.09975*c;return t.tvq=a.toFixed(2),t.total=(c+n+a).toFixed(2),t}(e.articles);return Object(b.jsxs)("div",{className:"SommairePanier",children:[Object(b.jsxs)("span",{children:["Articles diff\xe9rents : ",t.nbArticles]}),Object(b.jsxs)("span",{children:["Total # items : ",t.totalItems]}),Object(b.jsxs)("span",{children:["Sous-total : ",t.st]}),Object(b.jsxs)("span",{children:["TPS : ",t.tps]}),Object(b.jsxs)("span",{children:["TVQ : ",t.tvq]}),Object(b.jsxs)("span",{children:["Total : ",t.total]})]})}function O(e){var t=e.etatPanier,c=Object(o.a)(t,1)[0],a=Object.values(c),s=Object(n.useState)(!1),r=Object(o.a)(s,2),j=r[0],O=r[1];return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)(i.b,{to:"/",children:"Magasin"})}),Object(b.jsxs)("ul",{className:"navPrincipale",children:[Object(b.jsx)("li",{children:Object(b.jsx)(i.c,{to:"/nos-produits",activeClassName:"navActive",children:"Produits"})}),Object(b.jsx)("li",{children:Object(b.jsx)(i.c,{to:"/a-propos-de-nous",activeClassName:"navActive",children:"\xc0 propos de nous"})}),Object(b.jsx)("li",{children:Object(b.jsx)(i.c,{to:"/contactez-nous",activeClassName:"navActive",children:"Contactez-nous"})})]}),Object(b.jsxs)("ul",{className:"navUtilisateur",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(u.a,{onClick:function(){return O(!j)},badgeContent:a.reduce((function(e,t){return e+t.qte}),0),color:"secondary",children:Object(b.jsx)(l.a,{})}),j&&Object(b.jsx)(d,{articles:a})]}),Object(b.jsx)("li",{children:"Mon compte"})]})]})}var x=c(20),p=c(37),h=c.n(p),f=c(45),v=(c(67),c(18));c(68);function m(e){var t=e.onClick,c=e.qte,n=e.texte,a=e.classeCss;return Object(b.jsx)(u.a,{badgeContent:c,color:"primary",children:Object(b.jsx)("button",{onClick:t,className:"BtnAjoutPanier ".concat(a),children:n})})}var g=c(46),N=c.n(g);c(69);function P(e){var t=e.etatPanier,c=e.id,n=e.nom,a=e.prix,s=Object(o.a)(t,2),r=s[0],i=s[1];var j=r[c]?[r[c].qte,Object(b.jsx)(N.a,{}),"rouge"]:[0,"Ajouter au panier",""],l=Object(o.a)(j,3),u=l[0],d=l[1],O=l[2];return Object(b.jsxs)("li",{className:"Produit",children:[Object(b.jsx)("img",{src:"images-produits/"+c+".webp",alt:""}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("p",{className:"nom",children:n}),Object(b.jsx)("p",{className:"prix",children:a})]}),Object(b.jsx)(m,{onClick:function(){r[c]?i(Object(x.a)(Object(x.a)({},r),{},Object(v.a)({},c,Object(x.a)(Object(x.a)({},r[c]),{},{qte:r[c].qte+1})))):i(Object(x.a)(Object(x.a)({},r),{},Object(v.a)({},c,{nom:n,prix:a,qte:1})))},qte:u,texte:d,classeCss:O})]})}var C=c(31);c(74);C.a.apps.length||C.a.initializeApp({apiKey:"AIzaSyCaPCa7QOYW0H1vOLA1Au-3qx6Fl7WalOU",authDomain:"panier-achats-bdb.firebaseapp.com",projectId:"panier-achats-bdb",storageBucket:"panier-achats-bdb.appspot.com",messagingSenderId:"670733747915",appId:"1:670733747915:web:84b3004983ee4e13a2bd4e",measurementId:"G-CX1RX1RHFC"});var A=C.a.firestore();function q(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,A.collection("ex3-produits").get();case 3:e.sent.forEach((function(e){return t.push(e.data())})),console.log(t),s(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{className:"ListeProduits",children:[Object(b.jsx)("h2",{children:"Produits disponibles"}),Object(b.jsx)("ul",{children:a.map((function(t){return Object(b.jsx)(P,Object(x.a)({etatPanier:e.etatPanier},t),t.id)}))})]})}function w(){return Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsx)("h2",{children:"Magasin"}),Object(b.jsx)("p",{children:"Page d'accueil en construction"})]})}function S(){return Object(b.jsxs)("div",{className:"Apropos",children:[Object(b.jsx)("h2",{children:"\xc0 propos de nous"}),Object(b.jsx)("p",{children:"Patati et patata"})]})}function I(){return Object(b.jsxs)("div",{className:"Contact",children:[Object(b.jsx)("h2",{children:"Contactez-nous"}),Object(b.jsx)("p",{children:"Formulaire de contact \xe0 venir"})]})}c(71);var k=(new Date).getFullYear();function y(e){return Object(b.jsxs)("footer",{className:"PiedDePage",children:["\xa9",k," - TIM - Tous droits r\xe9serv\xe9s."]})}var F=c(5);function z(){var e=function(e,t){var c=Object(n.useState)((function(){return JSON.parse(window.localStorage.getItem(t))||e})),a=Object(o.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(s))}),[s,t]),[s,r]}({},"pvt-ex3-panier");return Object(b.jsxs)("div",{className:"Appli",children:[Object(b.jsx)(O,{etatPanier:e}),Object(b.jsx)("section",{className:"contenuPrincipal",children:Object(b.jsxs)(F.c,{children:[Object(b.jsx)(F.a,{path:"/",component:w,exact:!0}),Object(b.jsx)(F.a,{path:"/nos-produits",children:Object(b.jsx)(q,{etatPanier:e,exact:!0})}),Object(b.jsx)(F.a,{path:"/a-propos-de-nous",exact:!0,children:Object(b.jsx)(S,{})}),Object(b.jsx)(F.a,{path:"/contactez-nous",component:I,exact:!0})]})}),Object(b.jsx)(y,{})]})}var T=-1!==window.location.href.search(/github\.io/)?"/".concat("ex3-firestore-"):"";r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(i.a,{basename:T,children:Object(b.jsx)(z,{})})}),document.getElementById("racine"))}},[[73,1,2]]]);
//# sourceMappingURL=main.85cb5955.chunk.js.map