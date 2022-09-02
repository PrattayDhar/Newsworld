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

    ctagories.forEach(ctagory => {
        console.log(ctagory.title);
        const newsportal = document.getElementById('news');
        const portalbody = document.createElement('div');
        newsportal.appendChild(portalbody);
        portalbody.innerHTML = `
        <div>
        <div class="col-lg-12 col-md-12 col-sm-12 mb-3">
                    <div class="card shadow-lg p-3 mb-3 bg-white rounded  ">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the
                                card's
                                content.</p>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-around">
                                <div><img src="#" alt="..."><span>Name</span></div>
                                <i class="fa-regular fa-eye"></i>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
              
        `;
    });
}