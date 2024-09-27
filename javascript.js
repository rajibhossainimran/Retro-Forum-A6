

const allPostApiDataLoad = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const result =data.posts;
    allPostDisplay(result);
}


const allPostDisplay =(posts) =>{

    const postContainer = document.getElementById('all-post-container');
    posts.forEach(post => {
        console.log(post)
    });
}






// call the data load function 

allPostApiDataLoad();