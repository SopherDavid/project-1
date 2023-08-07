function createLibery(bookName,  date, genere, first,last, age) {
    return {
        name: bookName,
        date: date,
        genere: genere,
        author: {
            firstName: first,
            lastName: last,
            age,
    }
}

//2-print deatiels
function printDeatiels(book) {
    console.log($(book.name)\n$(book.name)\n$(book.date)\n$(book.genere)/n$(book.author.firstName)/n$(book.author.lastName)/n$(book.author.age))
}




const book = {
    name: "Rich dad poor dad",
    date: new Date ("1998-03-25"),
    genere: "Finance",
    author: {
        firstName: "Robert",
        lastName: "Kewsakky",
        age: 45,
    },
    
};

console.log(Object.entries(book))

