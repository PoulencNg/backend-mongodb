const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/bookstore_books";
const port = process.env.PORT || 3000;


//Connect with MongoDB Compass

mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));


    //Create a template with 3 main values : title, author, year

    const bookSchema = new mongoose.Schema({
        title: String,
        author: String,
        year: Number
      });
      const Book = mongoose.model('Book', bookSchema);




    //   Function to create a new book
    // Book.insertMany([
    //     {
    //       title: "Cha Giàu Cha Nghèo",
    //       author: "Robert T. Kiyosaki",
    //       year: 1997
    //     },
    //     {
    //       title: "Tư Duy Nhanh Và Chậm",
    //       author: "Daniel Kahneman",
    //       year: 2011
    //     },
    //     {
    //         title: "Đừng làm việc chăm chỉ, hãy làm việc thông minh",
    //         author: "Tony Schwartz",
    //         year: 2007
    //     },
    //     {
    //         title: "Hành Động Như Đàn Ông, Cư Xử Như Đàn Bà",
    //         author: "Steve Harvey",
    //         year: 2009
    //     },
    //     {
    //         title: "Thế giới phẳng",
    //         author: "Thomas Friedman",
    //         year: 2005
    //     }
    //   ]);
      

    // Saving
    //   newBook.save()
    //       .then(() => console.log("Document inserted"))
    //       .catch(err => console.error("Error inserting document:", err));

      // Find
    // Book.find({ year: { $gt: 2000 } })
    //     .then(books => {
    //         console.log("Books published after 2000:", books);
    //     })
    //     .catch(err => {
    //         console.error("Error fetching books:", err);
    //     });


    // Delete
    // Book.deleteMany({})
    // .then(result => console.log("All documents deleted:", result))
    // .catch(err => console.error("Error deleting all documents:", err));
    
    // const authorName = 'Daniel Kahneman';
    // Book.distinct('title', { author: authorName })
    //     .then(titles => {
    //         console.log(`Unique book titles by ${authorName}:`, titles);
    //     })
    //     .catch(err => {
    //         console.error("Error fetching distinct book titles:", err);
    //     });
    

//     const startingCharacter = 't';  // Thay thế bằng ký tự bạn muốn tìm

// // Truy vấn tất cả sách có tiêu đề bắt đầu bằng ký tự cụ thể
//     Book.find({ title: { $regex: `^${startingCharacter}`, $options: 'i' } })
//         .then(books => {
//             console.log(`Books with titles starting with "${startingCharacter}":`, books);
//         })
//         .catch(err => {
//             console.error("Error fetching books:", err);
//         });
// // Định nghĩa route chính
//     app.get('/', (req, res) => {
//     res.send('Hello World!');
//     });

    // Khởi động server
    // const newYear = 2024;
    // const bookTitle = 'Cha Giàu Cha Nghèo';
    // Book.updateOne({ title: bookTitle }, { $set: { year: newYear } })
    //     .then(result => {
    //         console.log("Update result:", result);
    //     })
    //     .catch(err => {
    //         console.error("Error updating book:", err);
    //     });


    // const bookTitle = 'Cha Giàu Cha Nghèo';  
    // const newAuthor = 'Poulenc Ngo';
    // Book.updateOne({ title: bookTitle }, { $set: { author: newAuthor } })
    //     .then(result => {
    //         console.log("Update result:", result);
    //     })
    //     .catch(err => {
    //         console.error("Error updating book:", err);
    //     });

    const bookTitle = 'Cha Giàu Cha Nghèo'; 
    Book.deleteOne({ title: bookTitle })
        .then(result => {
            if (result.deletedCount > 0) {
            console.log(`Book with title "${bookTitle}" has been deleted.`);
            } else {
            console.log(`No book found with title "${bookTitle}".`);
            }
        })
        .catch(err => {
            console.error("Error deleting book:", err);
        });
    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });