const loadcetagory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displaycat(data.data));
}
const displaycat = dicatagory => {
    const dcatagory = document.getElementById('catagory')
    dicatagory.news_category.forEach(catagory => {
        console.log(catagory.category_name);
        const div = document.createElement('div');
        dcatagory.appendChild(div);
        div.innerHTML = `
        <button type="button" class="btn ">${catagory.category_name}</button>`
    });

}
loadcetagory()