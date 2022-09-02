const loadcetagory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displaycat(data.data));
}
const displaycat = dicatagory => {
    const dcatagory = document.getElementById('catagory')
    dicatagory.news_category.forEach(catagory => {
        const div = document.createElement('div');
        dcatagory.appendChild(div);
        div.innerHTML = `
        <button type="button" class="btn " onclick="call('${catagory.category_id}')">${catagory.category_name}</button>`
    });

}
loadcetagory()


const call = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => CardDisplay(data.data))
}
const CardDisplay = ctagories => {
    const newsportal = document.getElementById('news');
    newsportal.innerHTML=""
    ctagories.forEach(ctagory => {
        const portalbody = document.createElement('div');
        newsportal.appendChild(portalbody);
        portalbody.innerHTML = `
        <div>
        <div class="col-lg-12 col-md-12 col-sm-12 mb-3 ">
                    <div class="card shadow-lg p-3 mb-3 bg-white rounded  ">
                    <div class="d-lg-flex justify-content-around ">
                    <div>
                    <img class="thum" src="${ctagory.thumbnail_url}" class="card-img-top" alt="...">
                    </div>
                        
                        <div class="card-body">
                            <h5 class="card-title">${ctagory.title}</h5>
                            <p class="card-text">${ctagory.details.slice(0, 100)}</p>
                        </div>
                    </div>
                    
                        <div class="card-body">
                            <div class="d-flex justify-content-around">
                                <div><img class="author" src="${ctagory.author.img}" alt=""><span>${ctagory.author.name}</span></div>
                                <i class="fa-regular fa-eye">${ctagory.total_view}</i>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
              
        `;
    });
}