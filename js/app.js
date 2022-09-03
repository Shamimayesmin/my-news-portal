

const loadAllCategoris = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
    .then(res => res.json())
    .then(data =>displayCategory(data.data.news_category) )
    
}

const displayCategory = items => {
    console.log(items)
    const itemsContainer = document.getElementById('all-category')


//spinner    
         
        

    
  items.forEach( category =>{
        console.log(category)
        
        const li = document.createElement('li')

        
            li.innerHTML = `
            <div  ></div>
            <a  hrf="news_category" onclick ="loadAllNewsDetail('${category.category_id ? category.category_id :'no data found here'}')" >${category.category_name ? category.category_name : 'no data found here'}</a>
            `;
            itemsContainer.appendChild(li)
    })
    

}


// document.getElementById('add-spinner').addEventListener('click',function(){
//     
// })


const loadAllNewsDetail= (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayAllNews(data.data))
    
    
}


const displayAllNews = news =>{
    console.log(news)


    document.getElementById('total-news').innerHTML = news.length

   // spinner
    const spinner = document.getElementById('spinner')

    spinner.classList.remove('hidden')

    const newsContainer = document.getElementById('news-container')
        newsContainer.innerHTML =''

    news.forEach(item =>{
        console.log(item)
        const newsDiv = document.createElement('div')
        newsDiv.classList.add('news')
        newsDiv.innerHTML = ''

        const {category_id,details,image_url,thumbnail_url,title,author, published_date,rating,img,name,total_view} = item

        newsDiv.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl mt-8">
        
            
            <figure><img class="w-80 h-full " src="${thumbnail_url}" alt="Movie"></figure>
            <div class="card-body">
            <h2 class="card-title">${title}</h2>
                
                <p>${details.length > 300 ? details.slice(0,300) + '...': details}</p>
                <div class="inline-flex gap-4">
                <img class='w-10 h-10 rounded-2xl mt-5' src='${author.img}'> 
                <p class='font-semibold mt-5'>${author.name? author.name :'Not available'}</p>
                <p class='text-2xl mt-5 '>👁️‍🗨️: ${rating.number ? rating.number :'No data found'}M</p>
                
                </div>
                <h6 class=''>${author.published_date}</h6>
                <div class="card-actions justify-end">

                

                <label for="my-modal-3" onclick ="showModal('${title}','${image_url}','${total_view}')" class="btn modal-button">Show Details</label>
                </div>
            </div>
        </div>
        
        `;

        newsContainer.appendChild(newsDiv)
    })
    // stop spinner
    spinner.classList.add('hidden')
    
}



// const modalShowing = (_id) =>{
//     const url = `https://openapi.programming-hero.com/api/news/category/${_id}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>showModalDetails (data.data))
// }

// const showModalDetails = (title,image_url) =>{
// //   console.log(details[0])

//    const modal = document.getElementById('modal-body')

//    // modalBoday.innerHTML = '';
//    modal.innerHTML = `
    
//    <p class="py-4">${title >20? title.slice(0,20) +'...' :title}</p>
//    <img class="h-60 w-60" src ='${image_url}'>
//    `;
// }




const showModal = (title,image_url,total_view)  => {
    console.log(title,image_url)
    const modalBoday = document.getElementById('modal-body')
    
    // modalBoday.innerHTML = '';
    modalBoday.innerHTML = `
    
    
    <img class="h-60 w-60" src ='${image_url}'>
    <p class="py-4 font-semibold"> Title : ${title >20? title.slice(0,20) +'...' :title}</p>
    <p>Total View : ${total_view ? total_view : 'no data found'}K</p>
    `;
    
    // modalContainer.appendChild(modalDiv)
}




// displayNewsDetails()
loadAllNewsDetail()


loadAllCategoris()