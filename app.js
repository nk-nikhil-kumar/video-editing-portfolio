const pics = document.querySelectorAll(".pic1");
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const modal=document.querySelector("#modal");
const modalImg=document.querySelector("#modal-Img");


let current = 0;


pics.forEach((pic,index)  => {
    pics.addEventListener('dblclick',() => {
        current=index;
        const bg = pic.style.backgroundImage;
        modalImg.src= bg.slice(5,-2);
        modal.classList.add('active');
    });
});
next.onclick = () =>{
    current = (current+1)%pics.length;
    const bg = pics[current].style.backgroundImage;
    modalImg.src = bg.slice(5,-2);
};

prev.onclick = () => {
    current  =(current -1 + pics.length)%pics.length;
    const bg = pics[current].style.backgroundImage;
    modalImg.src = bg.slice(5,-2);
    
};
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('active'); });