var requiredPage = [
    { name: 'book1', page: 100, quantity: 4 },
    { name: 'book1', page: 200, quantity: 5 },
    { name: 'book1', page: 300, quantity: 6 }
]

function totalPage(pages) {
    let sum = 0;
    for (let i = 0; i < pages.length; i++) {
        let pageNum = pages[i].page;
        let quantity = pages[i].quantity;
        let perBookPage = pageNum * quantity;


        sum = sum + perBookPage;
    }
    return sum;
}
const required = totalPage(requiredPage);
console.log(required);
