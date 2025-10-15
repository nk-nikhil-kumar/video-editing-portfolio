const pic = document.querySelectorAll(".pic1");
const cover1 = document.querySelectorAll(".cover1");
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const modal=document.querySelector("#modal");
const modalImg=document.querySelector("#modal-Img");


let current = 0;


// pic.forEach((pic,index)  => {
//     pic.addEventListener('dblclick',() => {
//         current=index;
//         const bg = pic.style.backgroundImage;   // yhe pe pics nhi karna tha qnki ye special change kar rha hai html thumbnail pe jake pics 
//         modalImg.src= bg.slice(5,-2);       // pics koi id ya class nhi thi isliye kaam nhi kar rha tha
//         modal.classList.add('active');
//     });
// });
// next.onclick = () =>{
//     current = (current+1)%pic.length;
//     const bg = pic[current].style.backgroundImage;
//     modalImg.src = bg.slice(5,-2);
// };

// prev.onclick = () => {
//     current  =(current -1 + pic.length)%pic.length;
//     const bg = pic[current].style.backgroundImage;
//     modalImg.src = bg.slice(5,-2);
    
// };

//Reels cover ke liye

// cover1.forEach((cover1,index)  => {
//     cover1.addEventListener('dblclick',() => {
//         current=index;
//         const bg = cover1.style.backgroundImage;   // yhe pe pics nhi karna tha qnki ye special change kar rha hai html thumbnail pe jake pics 
//         modalImg.src= bg.slice(5,-2);       // pics koi id ya class nhi thi isliye kaam nhi kar rha tha
//         modal.classList.add('active');
//     });
// });

// next.onclick = () =>{
//     current = (current+1)%cover1.length;
//     const bg = cover1[current].style.backgroundImage;
//     modalImg.src = bg.slice(5,-2);
// };

// prev.onclick = () => {
//     current  =(current -1 + cover1.length)%cover1.length;
//     const bg = cover1[current].style.backgroundImage;
//     modalImg.src = bg.slice(5,-2);
    
// };

//let current = 0;
let activeGroup = "pic"; // ya "cover1"

// // Pic ke liye
pic.forEach((p, index) => {
    p.addEventListener('dblclick', () => {
        current = index;
        activeGroup = "pic";
        const bg = p.style.backgroundImage;
        modalImg.src = bg.slice(5, -2);
        modal.classList.add('active');
    });
});

// Cover1 ke liye
cover1.forEach((c, index) => {
    c.addEventListener('dblclick', () => {
        current = index;
        activeGroup = "cover1";
        const bg = c.style.backgroundImage;
        modalImg.src = bg.slice(5, -2);
        modal.classList.add('active');
    });
});

// Next button
next.onclick = () => {
    if (activeGroup === "pic") {
        current = (current + 1) % pic.length;
        const bg = pic[current].style.backgroundImage;
        modalImg.src = bg.slice(5, -2);
    } else {
        current = (current + 1) % cover1.length;
        const bg = cover1[current].style.backgroundImage;
        modalImg.src = bg.slice(5, -2);
    }
};

// Prev button
prev.onclick = () => {
    if (activeGroup === "pic") {
        current = (current - 1 + pic.length) % pic.length;
        const bg = pic[current].style.backgroundImage;
        modalImg.src = bg.slice(5, -2);
    } else {
        current = (current - 1 + cover1.length) % cover1.length;
        const bg = cover1[current].style.backgroundImage;
        modalImg.src = bg.slice(5, -2);
    }
};


modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('active'); });

