Operation,Query Description,MongoDB Command (Example)
Find,Find all books in a specific genre (Thriller),"db.books.find({ genre: ""Thriller"" })"
Find,Find books published after a certain year (2020),db.books.find({ published_year: { $gt: 2020 } })
Find,Find books by a specific author (Andy Weir),"db.books.find({ author: ""Andy Weir"" })"
Update,Update the price of a specific book (Project Hail Mary),"db.books.updateOne( { title: ""Project Hail Mary"" }, { $set: { price: 19.99 } } )"
Delete,Delete a book by its title (The Guest List),"db.books.deleteOne({ title: ""The Guest List"" })"