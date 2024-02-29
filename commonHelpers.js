import{a as y,S as g,i as u}from"./assets/vendor-da186403.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const p=document.querySelector(".input");async function m(){let t=p.value.split(" ").join("+");const r=new URLSearchParams({key:"42539548-54a8d83eadfda97e0fcb53b56",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:1});return(await y.get(`https://pixabay.com/api/?${r}`)).data}const f=document.querySelector(".img-list");function h(t){const r=t.hits.map(o=>`<li class="list-item">
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
            </li>`).join("");f.insertAdjacentHTML("beforeend",r),new g(".list-item a",{captionDelay:250,captionSelector:"img",scrollZoom:!1,captionsData:"alt",fadeSpeed:250}).refresh()}const d=document.querySelector(".loader"),a=document.querySelector(".load-btn"),l=document.querySelector(".form");let i;l.addEventListener("submit",L);async function L(t){if(p.value.trim()===""){t.preventDefault(),l.reset();return}t.preventDefault(),b();try{i=await m(),h(i),l.reset(),d.classList.remove("hidden"),a.classList.remove("hidden"),i.hits.length===0&&(a.classList.add("hidden"),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),setTimeout(()=>{d.classList.add("hidden")},800);return}catch(n){console.log(n)}}a.addEventListener("click",v);async function v(t){t.preventDefault();try{i=await m(),h(i),S(750),i.hits.length===0&&(a.classList.add("hidden"),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(r){console.log(r)}}function b(){f.innerHTML=""}function S(t){window.scrollBy({top:t,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
