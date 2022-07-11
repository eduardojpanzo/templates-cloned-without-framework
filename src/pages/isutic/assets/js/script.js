const c = (sel)=>document.querySelector(sel);
const cll = (sel)=>document.querySelectorAll(sel);

/*toggle_HEADER*/
let toggle_bar = c('.navigation-menu');
let header = c('#header');
toggle_bar.addEventListener('click',toggle);
header.addEventListener('click',toggle);

function toggle(){
	document.body.classList.toggle('nav-active');
}

//Gallery
let item_menu = cll('.menu-gallery li');
let item_gallery = cll('.itens-gallery .item');
item_menu.forEach((itemLi)=>{
	itemLi.addEventListener('click',()=>{
		c('.menu-gallery li.li-ative').classList.remove('li-ative');
		itemLi.classList.add('li-ative');
		let numLi = itemLi.getAttribute('data-li');
		
		item_gallery.forEach((itemGl)=>{
			numGl = itemGl.getAttribute('data-GItem');
			if (numLi == numGl) {
				itemGl.classList.add('g-ative')
			}else{
				itemGl.classList.remove('g-ative')
			}
		});
	});
});


/*Animarion*/
let top_context = cll('#header,#destaque')
top_context.forEach((cont)=>{
	let anime_top = cont.querySelectorAll('[data-anime]');
	anime_top.forEach((el)=>{
		setTimeout(()=>{
			el.classList.add('animeted')
		}, 1000)
	});
});
/*-*/
const target_anime = c('main').querySelectorAll('[data-anime]');
function animeScroll(){
	const pos = window.pageYOffset + window.innerHeight*(3/4);
	target_anime.forEach((item)=>{
		/*console.log(`${item.offsetTop} = ${item.tagName} ${pos}`)*/
		if (pos > item.offsetTop) {
			item.classList.add('animeted');
		}else{
			item.classList.remove('animeted');
		}
	});
}
/*about us*/
const target_about = c('#about').querySelectorAll('[about-anime]');
window.addEventListener('scroll',()=>{
	const posA = window.pageYOffset - 45;
	target_about.forEach((about)=>{
		/*console.log(`${posA} and ${about.offsetTop}`);*/
		if (posA > about.offsetTop) {
			about.classList.add('animeted');
		}else{
			about.classList.remove('animeted');
		}
	});
});
animeScroll();
window.addEventListener('scroll',animeScroll)