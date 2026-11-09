const originalProjects=[
 {id:'oju',number:'01',name:'OJU Brew',category:'brand',label:'BRAND IDENTITY & PACKAGING',tab:'A BRAND, BROUGHT TO LIFE',color:'#d4b8a5',image:'oju-4.webp',alt:'OJU coffee pouches in brown, rust, cream and burgundy',description:'A warm, richly textured world for a coffee brand.',intro:'A visual identity explored across coffee packaging, cups, apparel, and a café setting. OJU brings a rich brown, burgundy, and cream palette into a connected brand world.',type:'Brand design exploration',focus:'Identity · Packaging · Applications',note:'The expressive wordmark and repeating motifs connect the applications. Warm tones and tactile surfaces create a consistent visual language across the collection.',media:[['image','oju-1.webp','The wordmark and colour system',true],['image','oju-4.webp','Coffee packaging applications',true],['image','oju-5.webp','Cups and repeating brand details',true],['image','oju-3.webp','Apparel and accessories',true],['image','oju-2.webp','The identity in a café setting',true],['image','oju-6.webp','Takeaway packaging',true]]},
 {id:'gwong',number:'02',name:'Financial Education',category:'graphic',label:'CAMPAIGN & SOCIAL DESIGN',tab:'A MESSAGE THAT CONNECTS',color:'#bfd5bd',image:'gwong-1.webp',alt:'Financial education graphic with illustrated city and character',contain:true,description:'Making everyday money conversations visual.',intro:'A collection of financial education graphics, a promotional poster, and motion content. The work brings illustration, typography, and a consistent green palette into everyday conversations about money.',type:'Campaign design collection',focus:'Social graphics · Layout · Motion',note:'Conversational headlines lead the story, with illustrations making the topic approachable. The repeating palette, type hierarchy, and brand details keep the pieces connected.',media:[['image','gwong-1.webp','Financial education: opening question',false],['image','gwong-2.webp','Financial education: planning your spending',false],['image','gwong-3.webp','Financial education: starting a conversation',false],['image','gwong-poster.webp','Banking and financing poster',false],['video','gwong-motion.mp4','Needs vs wants: motion piece',true,'gwong-motion.webp']]},
 {id:'headphones',number:'03',name:'Sound in Motion',category:'motion',label:'PERSONAL PRODUCT ANIMATION',tab:'TURN THE VOLUME UP',color:'#bac9f0',image:'headphones-teal.webp',video:'headphones-teal.mp4',background:'#d1e2de',alt:'Teal headphones floating in a cloudy product scene',description:'Two moods. One product. A little movement.',intro:'A personal animation study featuring headphones in two visual directions: a teal scene filled with clouds and a deep red product setting. Each version explores a different mood around the same product.',type:'Personal project',focus:'Product animation · Composition',note:'The floating product, pedestal, and contrasting colour worlds give each version its own atmosphere. Watch both variations to see how the setting changes the presentation.',media:[['video','headphones-teal.mp4','Cloudscape / teal variation',false,'headphones-teal.webp'],['video','headphones-red.mp4','Studio / red variation',false,'headphones-red.webp']]},
 {id:'lays',number:'04',name:'A Little Crunch',category:'motion',label:'PERSONAL PRODUCT ANIMATION',tab:'PLAYFUL BY DESIGN',color:'#f6d45b',image:'lays.webp',video:'lays.mp4',background:'#d5d9ef',alt:'Lay’s packet with floating crisps and a blue and white spiral',description:'A bright, playful product motion study.',intro:'A personal Lay’s animation built around bold product colour, floating ingredients, and an energetic spiral composition. The product stays at the centre of a playful visual world.',type:'Personal project',focus:'Product motion · Visual rhythm',note:'The repeated curves, crisps, and colour contrasts bring energy to the composition. This is a personal creative study, not a commissioned advertisement.',media:[['video','lays.mp4','The full product animation',true,'lays.webp']]},
 {id:'jewellery',number:'05',name:'Golden Details',category:'brand',label:'SOCIAL VISUAL DIRECTION',tab:'SMALL DETAILS. BIG FEELING.',color:'#e5d4a4',image:'jewellery.webp',alt:'Nine jewellery social graphics in cream, brown and gold',contain:true,description:'A cohesive visual world for a jewellery feed.',intro:'A jewellery social design collection combining product imagery, expressive typography, and warm metallic tones. The pieces work together as a coordinated feed while giving each post its own composition.',type:'Social design collection',focus:'Art direction · Typography · Layout',note:'Cream, gold, and chocolate tones tie the collection together. Editorial type and close views of product details create a consistent rhythm across the grid.',media:[['image','jewellery.webp','The complete social design collection',true]]},
 {id:'whistle',number:'06',name:'Beyond the Whistle',category:'graphic',label:'EDITORIAL POSTER DESIGN',tab:'TYPE WITH SOMETHING TO SAY',color:'#efa8b9',image:'whistle.webp',alt:'Beyond the Whistle poster with a basketball player and layered typography',contain:true,description:'Sport, storytelling, and expressive typography.',intro:'A sports poster with an editorial style combining a basketball portrait, layered headline typography, and restrained red accents. The composition brings the subject and the message into one visual story.',type:'Graphic design piece',focus:'Poster design · Typography · Composition',note:'The headline moves behind and around the figure to create depth. Small editorial details and a limited colour palette frame the central portrait without competing with it.',media:[['image','whistle.webp','Beyond the Whistle: final poster',true]]}
];
const collections=[
 {id:'motion',title:'Motion & Video',subtitle:'Stories, rhythm, and things that move.',number:'01'},
 {id:'graphic',title:'Flyers & Graphics',subtitle:'Posters, campaigns, and ideas on a page.',number:'02'},
 {id:'brand',title:'Brand & Packaging',subtitle:'Visual identities and the worlds around them.',number:'03'}
];
function film(id,name,file,description,focus='Motion design · Video editing'){
 return {id,name,category:'motion',label:'MOTION & VIDEO',tab:'PRESS PLAY',color:'#f0c8c3',image:`${file}.webp`,video:`${file}.mp4`,background:'#22221e',alt:`${name}: video still`,description,intro:description,type:'Video portfolio',focus,note:'Watch the full piece above to explore its pacing, transitions, and visual treatment.',media:[['video',`${file}.mp4`,name,true,`${file}.webp`]]};
}
function artwork(id,name,file,description,category='graphic',focus='Layout · Typography · Composition'){
 return {id,name,category,label:category==='brand'?'BRAND & PACKAGING':'FLYERS & GRAPHICS',tab:category==='brand'?'BRAND DETAILS':'ON THE PAGE',color:'#f0c8c3',image:file,alt:name,contain:true,description,intro:description,type:'Design collection',focus,note:'Explore the colour, typography, and composition in the artwork above.',media:[['image',file,name,true]]};
}
const intro=film('intro','Meet SHEDITS','intro','A little introduction to my creative world. Start here, then explore the work.','Creative introduction · Motion · Editing');
intro.label='MY INTRODUCTION';intro.featured=true;intro.type='Personal introduction';intro.note='My introductory video, presented in its original portrait format.';
const gwong=originalProjects.find(p=>p.id==='gwong');
gwong.media=gwong.media.filter(m=>m[0]!=='video');gwong.intro='A collection of financial education graphics and a promotional poster. Illustration, typography, and a consistent green palette bring everyday money conversations into focus.';gwong.focus='Social graphics · Layout · Illustration';
const emails=artwork('email-design','Email Design','welcome-email.webp','Welcome and loan email layouts built around a consistent visual identity.');
emails.media.push(['image','loan-email.webp','Loan email layout',true]);
const exercise=artwork('exercise-book','World Food Day','exercise-1.webp','A coordinated front and back exercise book cover, with a World Food Day theme, a map, and a multiplication chart.','brand','Print design · Brand application');
exercise.media.push(['image','exercise-2.webp','Back cover: map and multiplication chart',true]);
const additions=[
 film('gwong-motion','Needs vs Wants','gwong-motion','An animated financial education piece that brings the conversation about needs and wants to the screen.'),
 film('chase','Chase Imperfection','chase','A short typographic motion piece with an urban collage treatment.','Kinetic typography · Composition'),
 film('agriculture-1','The Savings Conversation','agriculture-1','A short explainer bringing the savings conversation into motion.'),
 film('agriculture-2','A Different View of Agriculture','agriculture-2','A video about agriculture combining typography, imagery, and an edited narrative.'),
 film('recap','Moments in Motion','recap','A recap edit bringing people, moments, and memories together.','Video editing · Recap · Storytelling'),
 film('lost','Oops, We’re Lost','lost','A playful animated 404 screen featuring a composition built around a character.'),
 film('blure','Blure Skincare','blure','A skincare product motion piece in a fresh green visual setting.','Product motion · Composition'),
 film('schweppes','Schweppes in Motion','schweppes','A beverage motion piece exploring bold typography, citrus colour, and product presentation.','Product motion · Typography'),
 artwork('anok','Anok Yai','anok.webp','A portrait collage blending fashion imagery, flowers, and expressive typography.'),
 artwork('brutalism','Brutalism','brutalism.webp','An architectural poster built around a bold red field and strong typographic edges.'),
 artwork('haaland','Erling Haaland','haaland.webp','A sports collage combining layered portraits, action imagery, and club colour.'),
 artwork('independence','Independence Day','independence.webp','A commemorative graphic combining photography, a map silhouette, and green and white colour.'),
 artwork('vacancy','We’re Hiring','vacancy.webp','A recruitment flyer balancing a clear headline, role details, and a visual focal point.'),
 emails,
 artwork('dano','Brand Packaging','dano.webp','A food packaging presentation in warm orange and green, shown in a natural product setting.','brand','Packaging · Product presentation'),
 artwork('lucid','Lucid Cycle','lucid.webp','A pink packaging layout showing the flat carton design.','brand','Packaging · Layout'),
 exercise
];
const allProjects=[intro,...originalProjects,...additions];
const projects=collections.flatMap(c=>allProjects.filter(p=>p.category===c.id));
projects.forEach((p,i)=>{p.number=String(i+1).padStart(2,'0');if(p.color==='#f6d45b'||p.color==='#e5d4a4')p.color='#f0c8c3';});
const media=(name)=>`media/${name}`;
const grid=document.querySelector('#project-grid');
function projectCard(p){
 if(p.featured)return `<article class="project-card intro-feature" data-category="motion"><div class="intro-feature-copy"><span class="micro intro-eyebrow">01 / START HERE</span><p class="scribble">press play. meet me.</p><h3>MEET<br><span class="outline">SHEDITS.</span></h3><p>${p.description}</p><span class="intro-duration">18 SECONDS INSIDE MY WORLD ↗</span><a href="#project-intro" class="text-button">ABOUT THIS VIDEO ↗</a></div><div class="intro-player"><video controls playsinline preload="metadata" poster="${media(p.image)}" aria-label="Meet SHEDITS introductory video"><source src="${media(p.video)}" type="video/mp4"><a href="${media(p.video)}">Watch my introduction</a></video><span class="intro-video-caption">FAVOUR PAUL / CREATIVE INTRODUCTION</span></div></article>`;
 return `<article class="project-card" data-category="${p.category}" style="--tab:${p.color};--card-background:${p.background||'#e9e6dc'}"><a class="project-link" href="#project-${p.id}" aria-label="View ${p.name}"><span class="folder-tab">${p.tab}</span><div class="project-visual ${p.contain?'contain':''} ${p.video?'video-visual':''}"><img src="${media(p.image)}" alt="${p.alt}" loading="lazy" width="800" height="650">${p.video?`<video muted loop playsinline preload="none" poster="${media(p.image)}" aria-hidden="true" tabindex="-1" data-src="${media(p.video)}"></video><span class="play-label">▶ PLAY VIDEO</span>`:''}<span class="project-number">NO. ${p.number}</span><span class="project-open" aria-hidden="true">↗</span></div><div class="project-caption"><h3>${p.name}</h3><span>${p.label}</span></div><p class="project-description">${p.description}</p></a></article>`;
}
grid.innerHTML=collections.map(c=>{const items=projects.filter(p=>p.category===c.id);return `<section class="project-group" data-collection="${c.id}" aria-labelledby="collection-${c.id}"><div class="collection-heading"><span class="collection-icon" aria-hidden="true">↳</span><div><span class="micro">FOLDER ${c.number} / ${String(items.length).padStart(2,'0')} PROJECTS</span><h3 id="collection-${c.id}">${c.title}</h3><p>${c.subtitle}</p></div></div><div class="project-grid">${items.map(projectCard).join('')}</div></section>`;}).join('');
document.querySelectorAll('.filter').forEach(button=>{const count=button.dataset.filter==='all'?projects.length:projects.filter(p=>p.category===button.dataset.filter).length;button.querySelector('sup').textContent=String(count).padStart(2,'0');});
document.querySelector('.intro-player video').addEventListener('play',e=>{document.querySelectorAll('video').forEach(v=>{if(v!==e.target)v.pause();});});
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const coarsePointer=window.matchMedia('(pointer: coarse)');
document.querySelectorAll('.project-link').forEach(link=>{
 const video=link.querySelector('video');if(!video)return;
 const play=()=>{if(reduceMotion.matches||coarsePointer.matches)return;if(!video.src)video.src=video.dataset.src;video.play().then(()=>video.classList.add('is-playing')).catch(()=>{});};
 const pause=()=>{video.pause();video.classList.remove('is-playing');};
 link.addEventListener('pointerenter',play);link.addEventListener('focus',play);link.addEventListener('pointerleave',pause);link.addEventListener('blur',pause);
});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 const chosen=button.dataset.filter;
 document.querySelectorAll('.project-group').forEach(group=>{group.hidden=chosen!=='all'&&group.dataset.collection!==chosen;});
 pauseAll();
 const count=chosen==='all'?projects.length:projects.filter(p=>p.category===chosen).length;
 document.querySelector('#filter-status').textContent=`Showing ${count} projects in ${chosen==='all'?'all folders':collections.find(c=>c.id===chosen).title}.`;

}));
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}});
const sectionsObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a.hash===`#${entry.target.id}`));}});},{rootMargin:'-10% 0px -65% 0px',threshold:0});
document.querySelectorAll('main>section[id]').forEach(el=>sectionsObserver.observe(el));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:.06});
document.querySelectorAll('.project-card,.about-layout,.service-list,.contact-center').forEach(el=>{el.classList.add('reveal');revealObserver.observe(el);});

const dialog=document.querySelector('#project-dialog');let currentProject=null,lastTrigger=null;
function pauseAll(){document.querySelectorAll('video').forEach(v=>v.pause());}
function renderProject(project){
 currentProject=project;pauseAll();
 document.querySelector('#case-content').innerHTML=`<div class="case-header"><span class="tag" style="background:${project.color}">${project.number} / ${project.label}</span><h2 id="case-title">${project.name.toUpperCase()}</h2><p class="case-intro">${project.intro}</p><div class="case-meta"><span>PROJECT<strong>${project.type}</strong></span><span>DESIGN FOCUS<strong>${project.focus}</strong></span></div></div><div class="case-gallery">${project.media.map(([type,file,caption,full,poster])=>`<figure class="${full?'full':''}">${type==='video'?`<video controls playsinline preload="metadata" poster="${media(poster)}" aria-label="${caption}"><source src="${media(file)}" type="video/mp4">Your browser does not support this video. <a href="${media(file)}">Open the video</a>.</video>`:`<img src="${media(file)}" alt="${caption}" loading="lazy">`}<figcaption>${caption}</figcaption></figure>`).join('')}</div><div class="case-note"><h3>THE DESIGN<br>DETAILS.</h3><p>${project.note}</p></div>`;
 document.querySelectorAll('#case-content video').forEach(video=>video.addEventListener('play',()=>{document.querySelectorAll('video').forEach(v=>{if(v!==video)v.pause();});}));
 dialog.scrollTop=0;
 if(!dialog.open){lastTrigger=document.activeElement;dialog.showModal();document.body.classList.add('modal-open');}
 document.querySelector('#close-project').focus({preventScroll:true});
}
function closeProject(){pauseAll();if(dialog.open)dialog.close();document.body.classList.remove('modal-open');if(location.hash.startsWith('#project-'))history.replaceState(null,'','#work');if(lastTrigger&&lastTrigger!==document.body&&document.contains(lastTrigger))lastTrigger.focus({preventScroll:true});currentProject=null;}
function route(){const id=location.hash.replace('#project-','');const p=projects.find(project=>project.id===id);if(location.hash.startsWith('#project-')&&p){renderProject(p);}else if(dialog.open){closeProject();}}
window.addEventListener('hashchange',route);
document.querySelector('#close-project').addEventListener('click',closeProject);
document.querySelector('#back-to-work').addEventListener('click',()=>{closeProject();document.querySelector('#work').scrollIntoView({behavior:reduceMotion.matches?'instant':'smooth'});});
document.querySelector('#dialog-brand').addEventListener('click',closeProject);
dialog.addEventListener('cancel',e=>{e.preventDefault();closeProject();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeProject();}});
document.querySelector('#next-project').addEventListener('click',()=>{const next=projects[(projects.indexOf(currentProject)+1)%projects.length];location.hash=`project-${next.id}`;});
route();

// Pointer-driven image trail: bounded, local assets, no perpetual render loop.
const stage=document.querySelector('#trail-stage'),trailLayer=stage.querySelector('.trail-layer');
const trailImages=['whistle.webp','headphones-teal.webp','oju-4.webp','jewellery.webp','gwong-1.webp','lays.webp','anok.webp','headphones-red.webp','brutalism.webp','dano.webp'];
let trailIndex=0,lastPoint=null,lastTime=0;
function spawnTrail(x,y){
 if(reduceMotion.matches)return;
 const bounds=trailLayer.getBoundingClientRect(),width=coarsePointer.matches?115:155,height=coarsePointer.matches?140:185;
 const image=document.createElement('img');image.src=media(trailImages[trailIndex%trailImages.length]);image.alt='';image.className='trail-card';image.draggable=false;
 const left=Math.max(0,Math.min(x-bounds.left-width/2,bounds.width-width));const top=Math.max(0,Math.min(y-bounds.top-height/2,bounds.height-height));
 image.style.left=`${left}px`;image.style.top=`${top}px`;
 const angle=[-9,6,-4,10,-7,3][trailIndex%6];trailIndex++;
 while(trailLayer.children.length>=10)trailLayer.firstElementChild.remove();trailLayer.append(image);
 const animation=image.animate([{opacity:0,transform:`translateY(15px) scale(.72) rotate(${angle-7}deg)`},{opacity:1,transform:`translateY(0) scale(1) rotate(${angle}deg)`,offset:.15},{opacity:1,transform:`translateY(-5px) scale(1) rotate(${angle}deg)`,offset:.62},{opacity:0,transform:`translateY(-30px) scale(.92) rotate(${angle+4}deg)`}],{duration:1450,easing:'cubic-bezier(.2,.7,.3,1)',fill:'forwards'});
 animation.onfinish=()=>image.remove();
}
stage.addEventListener('pointermove',e=>{
 if(e.pointerType==='touch'||reduceMotion.matches||e.target.closest('a,button'))return;
 const now=performance.now(),distance=lastPoint?Math.hypot(e.clientX-lastPoint.x,e.clientY-lastPoint.y):Infinity;
 if(now-lastTime>90&&(distance>65||(distance>24&&now-lastTime>220))){spawnTrail(e.clientX,e.clientY);lastPoint={x:e.clientX,y:e.clientY};lastTime=now;}
});
stage.addEventListener('pointerleave',()=>{lastPoint=null;});
stage.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&!e.target.closest('a,button'))spawnTrail(e.clientX,e.clientY);});
stage.addEventListener('pointerenter',()=>{trailImages.forEach(src=>{const img=new Image();img.src=media(src);});},{once:true});
if(coarsePointer.matches)stage.querySelector('.hand-note').innerHTML='tap the cover.<br>meet my work. <span aria-hidden="true">↴</span>';
reduceMotion.addEventListener('change',()=>{if(reduceMotion.matches){trailLayer.replaceChildren();pauseAll();}});
document.addEventListener('visibilitychange',()=>{if(document.hidden){pauseAll();trailLayer.replaceChildren();}});

let config={email:'abiobeberu26@gmail.com',instagram:'https://www.instagram.com/whoisabio_/',linkedin:'https://www.linkedin.com/in/abiobeberu-paul-4506513a3',software:['After Effects','Photoshop','Figma','CapCut','Canva']};
function renderConfig(){
 const list=document.querySelector('#software-list');list.replaceChildren();const initials={'After Effects':'Ae','Photoshop':'Ps','Figma':'Fi','CapCut':'Cc','Canva':'Ca'};
 config.software.forEach((name,i)=>{const li=document.createElement('li'),span=document.createElement('span');span.textContent=initials[name]||'✳';span.style.color=['#5d39a0','#245e96','#af5d2c','#35352d','#287e7c'][i%5];li.append(span,document.createTextNode(name));list.append(li);});
 const socials=document.querySelector('#social-links');socials.replaceChildren();[['INSTAGRAM',config.instagram],['LINKEDIN',config.linkedin]].forEach(([label,url])=>{if(!url||!url.startsWith('https://'))return;const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=label+' ↗';socials.append(a);});
 const emailLink=document.querySelector('.email-link');emailLink.href=`mailto:${config.email}`;emailLink.replaceChildren(document.createTextNode(config.email.toUpperCase()+' ↗'));
}
renderConfig();fetch('site-config.json').then(r=>{if(!r.ok)throw Error('Configuration unavailable');return r.json();}).then(data=>{config={...config,...data};renderConfig();}).catch(()=>{});
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(config.email);status.textContent='Copied. Let’s make something good.';}catch{status.textContent=`Email: ${config.email}`;}});
document.querySelector('#year').textContent=new Date().getFullYear();
