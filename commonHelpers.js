import{S as g,a as L,i as p}from"./assets/vendor-da186403.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const m=document.querySelector(".img-list");function f(t){const r=t.hits.map(o=>`<li class="list-item">
              <a href="${o.largeImageURL}" class="list-item-link">
                <img class="list-item-img" src="${o.webformatURL}" alt="${o.tags}">
              </a>
              <div class="list-item-description">
                <h2 class="description-name">Likes
                  <p class="description-value">${o.likes}</p>
                </h2>
                <h2 class="description-name">Views 
                  <p class="description-value">${o.views}</p>
                </h2>
                <h2 class="description-name">Comments 
                  <p class="description-value">${o.comments}</p>
                </h2>
                <h2 class="description-name">Downloads 
                  <p class="description-value">${o.downloads}</p>
                </h2>
              </div>
            </li>`).join("");m.insertAdjacentHTML("beforeend",r),new g(".list-item a",{captionDelay:250,captionSelector:"img",scrollZoom:!1,captionsData:"alt",fadeSpeed:250}).refresh()}const h=document.querySelector(".input");async function y(){let t=h.value.split(" ").join("+");const r=new URLSearchParams({key:"42539548-54a8d83eadfda97e0fcb53b56",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:v,page:d});return(await L.get(`https://pixabay.com/api/?${r}`)).data}const u=document.querySelector(".loader"),a=document.querySelector(".load-btn"),l=document.querySelector(".form");let d=1;const v=15;let i;l.addEventListener("submit",b);async function b(t){if(d=1,h.value.trim()===""){t.preventDefault(),l.reset();return}t.preventDefault(),w();try{i=await y(),f(i),l.reset(),u.classList.remove("hidden"),a.classList.remove("hidden"),i.hits.length===0&&(a.classList.add("hidden"),p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),setTimeout(()=>{u.classList.add("hidden")},800);return}catch(n){console.log(n)}}a.addEventListener("click",S);async function S(t){t.preventDefault(),d+=1;try{i=await y(),f(i),q(750),i.hits.length===0&&(a.classList.add("hidden"),p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(r){console.log(r)}}function w(){m.innerHTML=""}function q(t){window.scrollBy({top:t,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
