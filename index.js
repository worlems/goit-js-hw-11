import{a as d,S as u,i as n}from"./assets/vendor-CYg6pwNI.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const p="49253539-084e8be9ad99f0e2743df86f8",h=async i=>{var o;const s=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await d.get(`https://pixabay.com/api/?${s}`)).data}catch(e){throw new Error(((o=e.response)==null?void 0:o.status)||e.message)}},m=new u(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),f=(i,s)=>{const o=i.map(e=>`<li class="card">
                <a class="card-link" href="${e.largeImageURL}">
                    <img  class="card-image" src="${e.webformatURL}" alt="${e.tags}" />
                </a>
                <div class="main-content">
                    <ul class="card-list">
                        <li class="card-list-li">
                            <h3>
                                likes
                            </h3>
                            <p>${e.likes}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                views
                            </h3>
                            <p>${e.views}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                comments
                            </h3>
                            <p>${e.comments}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                downloads
                            </h3>
                            <p>${e.downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`);s.insertAdjacentHTML("beforeend",o.join("")),m.refresh()},g=document.querySelector("form"),y=document.querySelector("input[data-search]"),c=document.querySelector(".loader-div"),l=document.querySelector(".list");g.addEventListener("submit",i=>{i.preventDefault(),c.style.visibility="visible";const s=y.value.trim();if(l.innerHTML="",s===""){n.error({message:"The input should not be empty"});return}h(s).then(o=>{const e=o.hits;e.length!==0?f(e,l):n.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}).catch(o=>{console.error(o.message),n.show({title:"",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}).finally(()=>{c.style.visibility="hidden",i.target.reset()})});
//# sourceMappingURL=index.js.map
