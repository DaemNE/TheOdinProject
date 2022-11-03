(()=>{"use strict";let e=[],t=0,n=0,c=0;!function(){const e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),i=document.createElement("img"),r=document.createElement("div"),a=document.createElement("ul"),s=document.createElement("div");s.classList="orderList";const l=document.createElement("footer"),m=document.createElement("button");m.classList="orderListBtn",m.textContent="Order now!";const u=document.createElement("button");u.classList="removeListBtn",u.textContent="Clear Cart";const p=document.createElement("div");p.textContent="Shopping cart",p.classList="orderListHeader";const h=document.createElement("div");h.classList="orderedItemsList";const C=document.createElement("div");C.classList="totalAmount",n.textContent="About",c.textContent="Menu",o.textContent="Contact",n.classList="aboutHeader",c.classList="menuHeader",o.classList="contactHeader",t.appendChild(n),t.appendChild(c),t.appendChild(o),t.classList="header",i.src="https://thumbs.dreamstime.com/b/pasta-logo-hand-drawn-vector-illustration-plate-spaghetti-stock-italian-163269011.jpg",i.classList="img",r.textContent="This is some description about our restaurant",d.classList="desc",d.appendChild(i),d.appendChild(r),s.appendChild(p),s.appendChild(h),s.appendChild(m),s.appendChild(u),s.appendChild(C),document.querySelector(".contactHeader")||e.appendChild(t),e.appendChild(d),e.appendChild(a),e.appendChild(l),e.appendChild(s)}();const o=document.querySelector(".aboutHeader"),d=document.querySelector(".menuHeader"),i=document.querySelector(".contactHeader");o.addEventListener("click",(function(){!function(){const e=document.createElement("div");e.classList="desc";const t=document.createElement("img"),n=document.createElement("div"),c=document.createElement("footer"),o=document.querySelector(".content");if(!document.querySelector(".desc")){if(document.querySelector(".list")){const e=document.querySelector(".list");o.removeChild(e);const t=document.querySelector("footer");o.removeChild(t)}if(document.querySelector(".contact")){const e=document.querySelector(".contact");o.removeChild(e);const t=document.querySelector("footer");o.removeChild(t)}t.src="https://thumbs.dreamstime.com/b/pasta-logo-hand-drawn-vector-illustration-plate-spaghetti-stock-italian-163269011.jpg",n.textContent="This is some description about our restaurant",e.appendChild(t),e.appendChild(n),o.appendChild(e),o.appendChild(c)}}()})),d.addEventListener("click",(function(){!function(){const o=document.createElement("div");o.classList="list";const d=document.createElement("footer"),i=document.querySelector(".content"),r=document.createElement("button"),a=document.querySelector(".orderedItemsList");a.classList="orderedItemsList",document.querySelector(".removeListBtn").addEventListener("click",(function(){e=[],u()})),document.querySelector(".orderListBtn").addEventListener("click",(function(){console.log(e),e.length>0?confirm("do you want to order?")&&(alert("Thanks for ordering, we are preparing your meal!"),e=[],u()):alert("there is nothing in your cart")}));let s=[{name:"salad",img:"https://images-platform.99static.com//5GaMaD5-NhCb1svuLQilXu3Vf8M=/0x0:960x960/fit-in/500x500/99designs-contests-attachments/62/62480/attachment_62480756",description:"healthy salad",price:"5"},{name:"spaghetti",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoMdLGVxNbFgKNiw3jWiQDpOU8xrSTHo4NOByaAQVpA&s",description:"spaghetti healthy Veggie, gluten free, plant based, paleo Low sodium, low protein, very low fat Low Sodium, high starch diet",price:"10"},{name:"lasagna",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnC9MPTj71YdfqbzrmffoP9LMYfKsRxc6ygaBqH23Q&s",description:"lasagna healthy and a great vegan option to eat whenever you like!",price:"15"}];if(!document.querySelector(".list")){if(document.querySelector(".desc")){const e=document.querySelector(".desc");i.removeChild(e);const t=document.querySelector("footer");i.removeChild(t)}if(document.querySelector(".contact")){const e=document.querySelector(".contact");i.removeChild(e);const t=document.querySelector("footer");i.removeChild(t)}for(let e in s){const t=document.createElement("li"),n=document.createElement("div"),c=document.createElement("img"),d=document.createElement("div");d.classList="priceDiv";const i=document.createElement("div"),r=document.createElement("button"),a=document.createElement("button"),u=document.createElement("div"),p=document.createElement("div");p.classList="card",n.textContent=s[e].name,c.src=s[e].img,d.textContent=s[e].price,i.textContent=s[e].description,r.textContent="Add to cart",r.classList="addBtn",r.addEventListener("click",(function(){m(n.textContent,d.textContent)})),a.textContent="Remove from cart",a.classList="rmvBtn",a.addEventListener("click",(()=>{l(n.textContent,d.textContent)})),u.appendChild(r),u.appendChild(a),t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(i),t.appendChild(u),t.classList="itemList",p.appendChild(t),o.appendChild(p)}r.textContent="Place order now!",r.addEventListener("click",(()=>{alert("Thanks for ordering! Your food is being processed")})),r.classList="orderBtn",o.appendChild(r),i.appendChild(o),i.appendChild(d)}function l(o){if("lasagna"===o&&c>0){const t=e.findIndex((e=>e.name===o));e.splice(t,1),c--,u()}else if("spaghetti"===o&&n>0){const t=e.findIndex((e=>e.name===o));e.splice(t,1),n--,u()}else if("salad"===o&&t>0){const n=e.findIndex((e=>e.name===o));e.splice(n,1),t--,u()}}function m(o,d){switch(o){case"salad":t++;break;case"spaghetti":n++;break;case"lasagna":c++}let i={name:o,price:d};e.push(i),u()}function u(){const t=document.querySelector(".totalAmount");let n=0;for(;a.firstChild;)a.removeChild(a.lastChild);for(let t in e){const c=document.createElement("div");c.classList=`${e[t].name} item`;const o=document.createElement("div");o.classList="priceDiv";const d=document.createElement("div");d.classList="nameDiv",o.textContent=e[t].price,d.textContent=e[t].name,e[t].price.length<5&&(n+=parseInt(e[t].price)),c.appendChild(d),c.appendChild(o),a.appendChild(c)}t.textContent=n}}()})),i.addEventListener("click",(function(){!function(){document.createElement("div").classList="contact";const e=document.createElement("footer"),t=document.querySelector(".content"),n=document.createElement("form");n.classList="contact";const c=document.createElement("input"),o=document.createElement("label"),d=document.createElement("input"),i=document.createElement("label"),r=document.createElement("textarea"),a=document.createElement("label"),s=document.createElement("img"),l=document.createElement("div");l.classList="buttonDiv";const m=document.createElement("button"),u=document.createElement("button");if(!document.querySelector(".contact")){if(document.querySelector(".desc")){const e=document.querySelector(".desc");t.removeChild(e);const n=document.querySelector("footer");t.removeChild(n)}if(document.querySelector(".list")){const e=document.querySelector(".list");t.removeChild(e);const n=document.querySelector("footer");t.removeChild(n)}c.setAttribute("type","text"),c.setAttribute("placeholder","Bob the Builder"),c.setAttribute("id","name"),o.setAttribute("for","name"),o.textContent="Name",d.setAttribute("type","number"),d.setAttribute("placeholder","123 456 789"),d.setAttribute("id","number"),i.setAttribute("for","number"),i.textContent="Telephone nr",r.setAttribute("type","text"),r.setAttribute("size","20"),r.setAttribute("placeholder","The food stinks.."),r.setAttribute("id","comment"),a.setAttribute("for","comment"),a.textContent="Comment",s.src="https://cdn-icons-png.flaticon.com/512/4813/4813913.png",m.setAttribute("type","submit"),m.textContent="Submit Form",m.classList="submitBtn",u.setAttribute("type","reset"),u.textContent="Reset Fields",u.classList="resetBtn",l.appendChild(m),l.appendChild(u),n.appendChild(o),n.appendChild(c),n.appendChild(i),n.appendChild(d),n.appendChild(a),n.appendChild(r),n.appendChild(s),n.appendChild(l),t.appendChild(n),t.appendChild(e)}}()}))})();