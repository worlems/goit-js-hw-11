import{S as u,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const d="49253539-084e8be9ad99f0e2743df86f8",h=o=>{const s=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?key=${d}&q=${o}&${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},p=new u(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),f=(o,s)=>{const r=o.map(t=>`<li class="card">
                <a class="card-link" href="${t.largeImageURL}">
                    <img  class="card-image" src="${t.webformatURL}" alt="${t.tags}" />
                </a>
                <div class="main-content">
                    <ul class="card-list">
                        <li class="card-list-li">
                            <h3>
                                likes
                            </h3>
                            <p>${t.likes}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                views
                            </h3>
                            <p>${t.views}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                comments
                            </h3>
                            <p>${t.comments}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                downloads
                            </h3>
                            <p>${t.downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`);s.insertAdjacentHTML("beforeend",r.join("")),p.refresh()},m=document.querySelector("form"),y=document.querySelector("input[data-search]"),n=document.querySelector(".loader-div"),c=document.querySelector(".list");m.addEventListener("submit",o=>{o.preventDefault(),n.style.visibility="visible";const s=y.value.trim();if(c.innerHTML="",s===""){l.error({message:"The input should not be empty"});return}h(s).then(r=>{const t=r.hits;t.length!==0?f(t,c):l.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}).catch(r=>{console.error(r),l.show({title:"",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}).finally(()=>{n.style.visibility="hidden",o.target.reset()})});
//# sourceMappingURL=index.js.map
