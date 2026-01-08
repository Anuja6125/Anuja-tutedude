const checkBook = new Promise((resolve, reject) => {
    console.log("Checking for the book...");
    setTimeout(() => {
        const bookAvailable = true;  
        
        if (bookAvailable) {
            resolve("The book is available for borrowing.");
        } else { 
            reject("The book is not available right now.");
        }
}, 1000);

});

async function borrowBook() {
    try {
        const message = await checkBook;
        console.log(message);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Thank you for using our library service.");
    }
};

borrowBook();