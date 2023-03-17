const Book = require('../models/Book');
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/myLibraryDb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connected....")
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const bookSeeds = [
  {
    title: "Hop on Pop",
    author: "Dr. Seuss'",
    isbn: "9780553496796",
    genre: "fiction",
    description: "A sturdy board-book edition of Dr. Seuss’s Hop on Pop, now available in a larger size perfect for babies and toddlers! This abridged version of the classic Beginner Book Hop on Pop introduces the youngest readers to the wonderful world of Seussian wordplay. See RED and NED and TED and ED in BED. And giggle as PAT sits on a HAT and a CAT and a BAT . . . and almost on a cactus! (NO PAT NO, don’t sit on that.) A perfect gift for baby showers, birthdays, and happy occasions of all kinds, it is also a great way to show Pop some love on Father’s Day!",
    image: "http://books.google.com/books/content?id=_XeJDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2015-04-14",
    price: 22.56,
  },
  {
    title: "The Last Week of May",
    author: "Roisin Meaney",
    isbn: "9781444725612",
    genre: "fiction",
    description: "THE NUMBER ONE BESTSELLER -- a warm engrossing tale of friendship and new beginnings ... 'Like chatting with a good friend over a cup of tea' Irish Mail on Sunday May O'Callaghan has decided that life's too short and she's decided to throw in the towel in her predictable nine-to-five job. Now what? As May fits into her new life we meet her friend Pam and her husband Jack - but why is Pam terrified to tell Jack that she's pregnant? And then there's Denis and Bernard, May's next-door neighbours, going about their business oblivious to the deadly threat that lurks close by. There's Paddy, who lives on his own yet never seems to be at home. And Paul, three doors up, willing to risk everything for an affair with Carmel, the young teacher who has yet to learn that there's a price to pay for having something that shouldn't be yours. But what May can't figure out is who gave her the beautiful shell necklace and was it really meant for her? On this one particular week, all is about to change for the inhabitants of Kilpatrick and May discovers that while only love can break your heart, only love can put it back together.",
    image: "http://books.google.com/books/content?id=Xz05AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2007-05-17",
    price: 15.22,
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    isbn: "9780735219113",
    genre: "fiction",
    description: "NOW A MAJOR MOTION PICTURE—The #1 New York Times bestselling worldwide sensation with more than 15 million copies sold, hailed by The New York Times Book Review as “a painfully beautiful first novel that is at once a murder mystery, a coming-of-age narrative and a celebration of nature.” For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life—until the unthinkable happens. Where the Crawdads Sing is at once an exquisite ode to the natural world, a heartbreaking coming-of-age story, and a surprising tale of possible murder. Owens reminds us that we are forever shaped by the children we once were, and that we are all subject to the beautiful and violent secrets that nature keeps.",
    image: "http://books.google.com/books/content?id=CGVDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2018-08-14",
    price: 19.55,
  },
  {
    title: "The Almond in the Apricot",
    author: "Sara Goudarzi",
    isbn: "9781646051090",
    genre: "fiction",
    description: "The Almond in the Apricot, a debut novel by Iranian-American Goudarzi, is about two individuals whose paths cross in the most unusual of ways: a woman coming to terms with the wreckage of her once-orderly life and a tween girl struggling to live an everyday in a war-torn country. Emma had the perfect trifecta: a long-term, albeit boring, job as an engineer in wastewater management; a steady relationship with her reliable boyfriend; and an adoring and creative best friend (about whom she wasn't quite ready to admit her unrequited feelings). However, after one crackling, long-distance phone call, her world changed forever. Now she's having nightmares that threaten to disrupt the space-time continuum -- nightmares of hiding from missiles in basements, of glass shattering in the night from nearby explosions. But these nightmares, featuring a young girl named Lily, seem all too real, and Emma's waking life begins to be affected by the events that transpire in this mysterious wartime landscape. The Almond in the Apricot explores love, grief, and the possibility that the universe might be bigger than either Emma or Lily ever imagined.",
    image: "http://books.google.com/books/content?id=8J0nzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedDate: "2022-01-17",
    price: 21.63,
  },
  {
    title: "The People’s Princess",
    author: "Flora Harding",
    isbn: "9780008446932",
    genre: "fiction",
    description: "Step behind the palace doors in this gripping historical novel that is a must read for fans of The Crown and Princess Diana!",
    image: "http://books.google.com/books/content?id=ulsjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2022-03-31",
    price: 13.44,
  },
  {
    title: "Aleister Crowley",
    author: "Tobias Churto",
    isbn: "9781780283845",
    genre: "Biography",
    description: "At last, the unexpurgated, true story of the amazing Aleister Crowley—philosopher, poet, artists, writer, magus, explorer, parapsychology—and spy. Packed with fresh research and previously unpublished ‘Crowleyana.’ For 100 years, Aleister Crowley’s true achievements have been suppressed and his true character defaced in a campaign of vilification unparalleled in British history. Until now, Crowley’s life has not been written—it has been written over. Tobias Churton is a world authority on Freemasonry, Rosicrucianism, and Gnosticism. In writing Aleister Crowley, he enjoyed complete access to all Crowley’s restricted papers, unpublished letters and personal diaries kept in a trust at London’s Warburg Institute and in the Ordo Templi Orientis archives. Ninety percent of the authentic material here has never before been published.",
    image: "http://books.google.com/books/content?id=NFjZCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    publishedDate: "2014-05-20",
    price: 17.55,
  },
]

/*
  {
    title: "",
    author: "",
    isbn: "",
    genre: "",
    description: "",
    image: "",
    publishedDate: "",
    price: "",
  },
*/

const seedDB = async () => {
  await Book.deleteMany({});
  await Book.insertMany(bookSeeds);
}

seedDB().then(()=> {
  mongoose.connection.close()
})