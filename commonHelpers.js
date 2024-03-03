import{a as h,S as g,i as c}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const u=document.querySelector(".input");async function p(){let r=u.value.split(" ").join("+");const t=new URLSearchParams({key:"42539548-54a8d83eadfda97e0fcb53b56",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:1});return(await h.get(`https://pixabay.com/api/?${t}`)).data}const m=document.querySelector(".img-list");function f(r){const t=r.hits.map(o=>`<li class="list-item">
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
            </li>`).join("");m.insertAdjacentHTML("beforeend",t),new g(".list-item a",{captionDelay:250,captionSelector:"img",scrollZoom:!1,captionsData:"alt",fadeSpeed:250}).refresh()}const d=document.querySelector(".loader"),n=document.querySelector(".load-btn"),l=document.querySelector(".form");l.addEventListener("submit",y);async function y(r){if(r.preventDefault(),u.value.trim()===""){l.reset();return}v();try{const i=await p();f(i),l.reset(),d.classList.remove("hidden"),n.classList.remove("hidden"),i.hits.length===0&&(n.classList.add("hidden"),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),setTimeout(()=>{d.classList.add("hidden")},800);return}catch(i){console.log(i)}}n.addEventListener("click",L);async function L(r){r.preventDefault();try{const t=await p();f(t),b(750),t.hits.length===0&&(n.classList.add("hidden"),c.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t),c.error({message:"An error occurred while fetching more images. Please try again later.",position:"topRight"})}}function v(){m.innerHTML=""}function b(r){window.scrollBy({top:r,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
