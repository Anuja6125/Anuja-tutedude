const checkBook = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5
        ? resolve("Book available")
        : reject("Book unavailable")
    }, 1000);
});

async function libraryVisit() {
    console.log("Going to library....");

    try {
        const result = await checkBook;
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
    console.log("Leaving library....");
}

libraryVisit();