import{a as d,S as u,i as n}from"./assets/vendor-CYg6pwNI.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="49253539-084e8be9ad99f0e2743df86f8",h=async o=>{const s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await d.get(`https://pixabay.com/api/?${s}`)).data}catch(i){throw new Error(i.message)}},m=new u(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),f=(o,s)=>{const i=o.map(t=>`<li class="card">
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
            </li>`);s.insertAdjacentHTML("beforeend",i.join("")),m.refresh()},g=document.querySelector("form"),y=document.querySelector("input[data-search]"),c=document.querySelector(".loader-div"),l=document.querySelector(".list");g.addEventListener("submit",o=>{o.preventDefault(),c.style.visibility="visible";const s=y.value.trim();if(l.innerHTML="",s===""){n.error({message:"The input should not be empty"});return}h(s).then(i=>{const t=i.hits;t.length!==0?f(t,l):n.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}).catch(i=>{console.error(i.message),n.show({title:"",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}).finally(()=>{c.style.visibility="hidden",o.target.reset()})});
//# sourceMappingURL=index.js.map
