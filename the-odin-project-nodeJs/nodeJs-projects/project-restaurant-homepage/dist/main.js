(()=>{"use strict";!function(){const e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),i=document.createElement("img"),r=document.createElement("div"),a=document.createElement("ul"),l=document.createElement("div");l.classList="orderList";const s=document.createElement("footer"),m=document.createElement("button");m.classList="orderListBtn",m.textContent="Order now!",m.addEventListener("click",(function(){alert("order has been placed!")}));const u=document.createElement("div");u.textContent="Shopping cart",u.classList="orderListHeader",n.textContent="About",c.textContent="Menu",o.textContent="Contact",n.classList="aboutHeader",c.classList="menuHeader",o.classList="contactHeader",t.appendChild(n),t.appendChild(c),t.appendChild(o),t.classList="header",i.src="https://thumbs.dreamstime.com/b/pasta-logo-hand-drawn-vector-illustration-plate-spaghetti-stock-italian-163269011.jpg",i.classList="img",r.textContent="This is some description about our restaurant",d.classList="desc",d.appendChild(i),d.appendChild(r),l.appendChild(u),l.appendChild(m),document.querySelector(".contactHeader")||e.appendChild(t),e.appendChild(d),e.appendChild(a),e.appendChild(s),e.appendChild(l)}();const e=document.querySelector(".aboutHeader"),t=document.querySelector(".menuHeader"),n=document.querySelector(".contactHeader");e.addEventListener("click",(function(){!function(){const e=document.createElement("div");e.classList="desc";const t=document.createElement("img"),n=document.createElement("div"),c=document.createElement("footer"),o=document.querySelector(".content");if(!document.querySelector(".desc")){if(document.querySelector(".list")){const e=document.querySelector(".list");o.removeChild(e);const t=document.querySelector("footer");o.removeChild(t)}if(document.querySelector(".contact")){const e=document.querySelector(".contact");o.removeChild(e);const t=document.querySelector("footer");o.removeChild(t)}t.src="https://thumbs.dreamstime.com/b/pasta-logo-hand-drawn-vector-illustration-plate-spaghetti-stock-italian-163269011.jpg",n.textContent="This is some description about our restaurant",e.appendChild(t),e.appendChild(n),o.appendChild(e),o.appendChild(c)}}()})),t.addEventListener("click",(function(){!function(){const e=document.createElement("div");e.classList="list";const t=document.createElement("footer"),n=document.querySelector(".content"),c=document.createElement("button"),o=document.querySelector(".orderList"),d=document.createElement("div");d.classList="orderedItemsList",o.appendChild(d);let i=[{name:"ITEM",price:"PRICE"}],r=[{name:"salad",img:"https://images-platform.99static.com//5GaMaD5-NhCb1svuLQilXu3Vf8M=/0x0:960x960/fit-in/500x500/99designs-contests-attachments/62/62480/attachment_62480756",description:"healthy salad",price:"€5"},{name:"spaghetti",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoMdLGVxNbFgKNiw3jWiQDpOU8xrSTHo4NOByaAQVpA&s",description:"spaghetti healthy Veggie, gluten free, plant based, paleo Low sodium, low protein, very low fat Low Sodium, high starch diet",price:"€10"},{name:"lasagna",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnC9MPTj71YdfqbzrmffoP9LMYfKsRxc6ygaBqH23Q&s",description:"lasagna healthy and a great vegan option to eat whenever you like!",price:"€15"}];if(!document.querySelector(".list")){if(document.querySelector(".desc")){const e=document.querySelector(".desc");n.removeChild(e);const t=document.querySelector("footer");n.removeChild(t)}if(document.querySelector(".contact")){const e=document.querySelector(".contact");n.removeChild(e);const t=document.querySelector("footer");n.removeChild(t)}for(let t in r){const n=document.createElement("li"),c=document.createElement("div"),o=document.createElement("img"),d=document.createElement("div"),i=document.createElement("div"),l=document.createElement("button"),s=document.createElement("button"),m=document.createElement("div"),u=document.createElement("div");u.classList="card",c.textContent=r[t].name,o.src=r[t].img,d.textContent=r[t].price,i.textContent=r[t].description,l.textContent="Add to cart",l.classList="addBtn",l.addEventListener("click",(function(){a(c.textContent,d.textContent)})),s.textContent="Remove from cart",s.classList="rmvBtn",s.addEventListener("click",(()=>{alert(`removed ${c.textContent} from cart`)})),m.appendChild(l),m.appendChild(s),n.appendChild(c),n.appendChild(o),n.appendChild(d),n.appendChild(i),n.appendChild(m),n.classList="itemList",u.appendChild(n),e.appendChild(u)}c.textContent="Place order now!",c.addEventListener("click",(()=>{alert("Thanks for ordering! Your food is being processed")})),c.classList="orderBtn",e.appendChild(c),n.appendChild(e),n.appendChild(t)}function a(e,t){let n={name:e,price:t};i.push(n),function(){for(;d.firstChild;)d.removeChild(d.lastChild);for(let e in i){const t=document.createElement("div");t.classList="foodDiv";const n=document.createElement("div");n.classList="priceDiv";const c=document.createElement("div");c.classList="nameDiv",n.textContent=i[e].price,c.textContent=i[e].name,t.appendChild(c),t.appendChild(n),d.appendChild(t)}}()}}()})),n.addEventListener("click",(function(){!function(){document.createElement("div").classList="contact";const e=document.createElement("footer"),t=document.querySelector(".content"),n=document.createElement("form");n.classList="contact";const c=document.createElement("input"),o=document.createElement("label"),d=document.createElement("input"),i=document.createElement("label"),r=document.createElement("textarea"),a=document.createElement("label"),l=document.createElement("img"),s=document.createElement("div"),m=document.createElement("button"),u=document.createElement("button");if(!document.querySelector(".contact")){if(document.querySelector(".desc")){const e=document.querySelector(".desc");t.removeChild(e);const n=document.querySelector("footer");t.removeChild(n)}if(document.querySelector(".list")){const e=document.querySelector(".list");t.removeChild(e);const n=document.querySelector("footer");t.removeChild(n)}c.setAttribute("type","text"),c.setAttribute("placeholder","Bob the Builder"),c.setAttribute("id","name"),o.setAttribute("for","name"),o.textContent="Name",d.setAttribute("type","number"),d.setAttribute("placeholder","123 456 789"),d.setAttribute("id","number"),i.setAttribute("for","number"),i.textContent="Telephone nr",r.setAttribute("type","text"),r.setAttribute("size","20"),r.setAttribute("placeholder","The food stinks.."),r.setAttribute("id","comment"),a.setAttribute("for","comment"),a.textContent="Comment",l.src="https://cdn-icons-png.flaticon.com/512/4813/4813913.png",m.setAttribute("type","submit"),m.textContent="Submit Form",m.classList="submitBtn",u.setAttribute("type","reset"),u.textContent="Reset Fields",u.classList="resetBtn",s.appendChild(m),s.appendChild(u),n.appendChild(o),n.appendChild(c),n.appendChild(i),n.appendChild(d),n.appendChild(a),n.appendChild(r),n.appendChild(l),n.appendChild(s),t.appendChild(n),t.appendChild(e)}}()}))})();