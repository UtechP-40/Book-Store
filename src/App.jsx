import { useState,useEffect } from 'react'
import axios from "axios"
// import './App.css'
import Navbar from './Components/Navbar'
function App() {
const [bookData,setBookData] = useState(null)  
const [searchValue,setSearchValue] = useState("")


useEffect(()=>{
   async function getDefaultBooks(){
    try {
      const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=sherlock+Homes")
      setBookData(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data);
    }
    // console.log(bookData);
  }
  getDefaultBooks()
},[])

  return (
    <div className='app'>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='expandCard'>
        {bookData?.items.map((book,index) => {
          return (
            <div key={index} className='card'>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
              <div className="data">
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors}</p>
              <p>{book.volumeInfo.publishedDate}</p>
              <p>{book.volumeInfo.pageCount}</p>
              <p>{book.volumeInfo.language}</p>
              <a
                href={book.volumeInfo.previewLink}
                target='_blank'
                rel='noreferrer'
              >
                Preview Link
              </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

// data after hitting bookstore api 
/**
 {
    "kind": "books#volumes",
    "totalItems": 697,
    "items": [
        {
            "kind": "books#volume",
            "id": "DtIuswEACAAJ",
            "etag": "4e9PYUoDUHU",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/DtIuswEACAAJ",
            "volumeInfo": {
                "title": "Aventurile lui Sherlock Holmes",
                "authors": [
                    "Chris Sasaki"
                ],
                "publishedDate": "2014",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "6065886742"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9786065886742"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 158,
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "language": "ro",
                "previewLink": "http://books.google.ro/books?id=DtIuswEACAAJ&dq=sherlock+homes&hl=&cd=1&source=gbs_api",
                "infoLink": "http://books.google.ro/books?id=DtIuswEACAAJ&dq=sherlock+homes&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Aventurile_lui_Sherlock_Holmes.html?hl=&id=DtIuswEACAAJ"
            },
            "saleInfo": {
                "country": "RO",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "RO",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=DtIuswEACAAJ&hl=&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            }
        },
        {
            "kind": "books#volume",
            "id": "KnA0q_f1bq0C",
            "etag": "VYvxVL0VFqU",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/KnA0q_f1bq0C",
            "volumeInfo": {
                "title": "Six Great Sherlock Holmes Stories",
                "authors": [
                    "Arthur Conan Doyle"
                ],
                "publisher": "Courier Dover Publications",
                "publishedDate": "1992-01",
                "description": "A selection of six of the finest of the Sherlock Holmes mystery stories.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "0486270556"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780486270555"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 107,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "averageRating": 3,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.0.1.0.preview.0",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=KnA0q_f1bq0C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=KnA0q_f1bq0C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.ro/books?id=KnA0q_f1bq0C&dq=sherlock+homes&hl=&cd=2&source=gbs_api",
                "infoLink": "http://books.google.ro/books?id=KnA0q_f1bq0C&dq=sherlock+homes&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Six_Great_Sherlock_Holmes_Stories.html?hl=&id=KnA0q_f1bq0C"
            },
            "saleInfo": {
                "country": "RO",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "RO",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=KnA0q_f1bq0C&hl=&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "A selection of six of the finest of the Sherlock Holmes mystery stories."
            }
        },
        {
            "kind": "books#volume",
            "id": "qR0QAgAAQBAJ",
            "etag": "su7wTjNXrnI",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/qR0QAgAAQBAJ",
            "volumeInfo": {
                "title": "The Complete Sherlock Holmes",
                "authors": [
                    "Sir Arthur Conan Doyle",
                    "Daniel Stashower"
                ],
                "publishedDate": "2013-09-19",
                "description": "The perfect gift for the Sir Arthur Conan Doyle fan, The Complete Sherlock Holmes is an elegant edition boasting the entire Sherlock Holmes catalog including 4 full-length novels and 56 short stories.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781937994303"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1937994309"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 1203,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.2.2.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=qR0QAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=qR0QAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.ro/books?id=qR0QAgAAQBAJ&printsec=frontcover&dq=sherlock+homes&hl=&cd=3&source=gbs_api",
                "infoLink": "http://books.google.ro/books?id=qR0QAgAAQBAJ&dq=sherlock+homes&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/The_Complete_Sherlock_Holmes.html?hl=&id=qR0QAgAAQBAJ"
            },
            "saleInfo": {
                "country": "RO",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "RO",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ro/books/download/The_Complete_Sherlock_Holmes-sample-pdf.acsm?id=qR0QAgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=qR0QAgAAQBAJ&hl=&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "The perfect gift for the Sir Arthur Conan Doyle fan, The Complete Sherlock Holmes is an elegant edition boasting the entire Sherlock Holmes catalog including 4 full-length novels and 56 short stories."
            }
        },
        {
            "kind": "books#volume",
            "id": "uEfbAgAAQBAJ",
            "etag": "dg82gGozc58",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/uEfbAgAAQBAJ",
            "volumeInfo": {
                "title": "Sherlock Holmes. Selected Stories",
                "authors": [
                    "Arthur Conan Doyle"
                ],
                "publisher": "Oxford University Press, USA",
                "publishedDate": "2014-04",
                "description": "This new selection of 12 of the best Sherlock Holmes stories is designed to give a full sense of their world, taking Holmes's career from its early days to its close. It includes the book-length The Sign of the Four and an introduction and notes by Barry McCrea that give a sense of the different currents running beneath the stories' surface.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780199672066"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0199672067"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 401,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.4.3.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=uEfbAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=uEfbAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.ro/books?id=uEfbAgAAQBAJ&printsec=frontcover&dq=sherlock+homes&hl=&cd=4&source=gbs_api",
                "infoLink": "http://books.google.ro/books?id=uEfbAgAAQBAJ&dq=sherlock+homes&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Sherlock_Holmes_Selected_Stories.html?hl=&id=uEfbAgAAQBAJ"
            },
            "saleInfo": {
                "country": "RO",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "RO",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ro/books/download/Sherlock_Holmes_Selected_Stories-sample-pdf.acsm?id=uEfbAgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=uEfbAgAAQBAJ&hl=&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "It includes the book-length The Sign of the Four and an introduction and notes by Barry McCrea that give a sense of the different currents running beneath the stories&#39; surface."
            }
        },
        {
            "kind": "books#volume",
            "id": "6hDMzgEACAAJ",
            "etag": "UHFlz9ug6Kk",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/6hDMzgEACAAJ",
            "volumeInfo": {
                "title": "Arhiva lui Sherlock Holmes",
                "authors": [
                    "Adrian Conan Doyle"
                ],
                "publishedDate": "2015",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "6066950487"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9786066950480"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 305,
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "language": "ro",
                "previewLink": "http://books.google.ro/books?id=6hDMzgEACAAJ&dq=sherlock+homes&hl=&cd=5&source=gbs_api",
                "infoLink": "http://books.google.ro/books?id=6hDMzgEACAAJ&dq=sherlock+homes&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Arhiva_lui_Sherlock_Holmes.html?hl=&id=6hDMzgEACAAJ"
            },
            "saleInfo": {
                "country": "RO",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "RO",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=6hDMzgEACAAJ&hl=&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            }
        },
        {
            "kind": "books#volume",
            "id": "976_6rQDqjMC",
            "etag": "MrrD3PqWyeU",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/976_6rQDqjMC",
            "volumeInfo": {
                "title": "Adventures of Sherlock Holmes",
                "authors": [
                    "Arthur Conan Doyle"
                ],
                "publisher": "ReadHowYouWant.com",
                "publishedDate": "2006",
                "description": "To Sherlock Holmes she is always THE woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer-excellent for drawing the veil from men's motives and actions. But for the trained teasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781425016562"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1425016561"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 670,
                "printType": "BOOK",
                "averageRating": 4.5,
                "ratingsCount": 4,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.4.2.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=976_6rQDqjMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=976_6rQDqjMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.ro/books?id=976_6rQDqjMC&printsec=frontcover&dq=sherlock+homes&hl=&cd=6&source=gbs_api",
                "infoLink": "http://books.google.ro/books?id=976_6rQDqjMC&dq=sherlock+homes&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Adventures_of_Sherlock_Holmes.html?hl=&id=976_6rQDqjMC"
            },
            "saleInfo": {
                "country": "RO",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "RO",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ro/books/download/Adventures_of_Sherlock_Holmes-sample-pdf.acsm?id=976_6rQDqjMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=976_6rQDqjMC&hl=&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "To Sherlock Holmes she is always THE woman."
            }
        },
        {
            "kind": "books#volume",
            "id": "JDAM92Sxg1MC",
            "etag": "yRuVVyG5PEA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/JDAM92Sxg1MC",
            "volumeInfo": {
                "title": "Sherlock Holmes",
                "subtitle": "A Comedy in Two Acts",
                "authors": [
                    "Arthur Conan Doyle",
                    "William Gillette"
                ],
                "publisher": "Samuel French, Inc.",
                "publishedDate": "1976",
                "description": "\"Case involving incriminating letters written by European prince to the English girl he betrayed leads to Holmes-Moriarty confrontation.\"--",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "057361606X"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780573616068"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": false
                },
                "pageCount": 148,
                "printType": "BOOK",
                "categories": [
                    "Drama"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.6.9.0.preview.2",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=JDAM92Sxg1MC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=JDAM92Sxg1MC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.ro/books?id=JDAM92Sxg1MC&dq=sherlock+homes&hl=&cd=7&source=gbs_api",
                "infoLink": "http://books.google.ro/books?id=JDAM92Sxg1MC&dq=sherlock+homes&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Sherlock_Holmes.html?hl=&id=JDAM92Sxg1MC"
            },
            "saleInfo": {
                "country": "RO",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "RO",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=JDAM92Sxg1MC&hl=&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "&quot;Case involving incriminating letters written by European prince to the English girl he betrayed leads to Holmes-Moriarty confrontation.&quot;--"
            }
        },
        {
            "kind": "books#volume",
            "id": "F5IAUkW2EHsC",
            "etag": "5ndsob9R6CM",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/F5IAUkW2EHsC",
            "volumeInfo": {
                "title": "Sherlock Holmes For Dummies",
                "authors": [
                    "Steven Doyle",
                    "David A. Crowder"
                ],
                "publisher": "John Wiley & Sons",
                "publishedDate": "2010-02-22",
                "description": "Get a comprehensive guide to this important literary figure and his author. A classic literary character, Sherlock Holmes has fascinated readers for decades -- from his repartee with Dr. Watson and his unparalleled powers of deduction to the settings, themes, and villains of the stories. Now, this friendly guide offers a clear introduction to this beloved figure and his author, Sir Arthur Conan Doyle, presenting new insight into the detective stories and crime scene analysis that have has made Sherlock Holmes famous. Inside you'll find easy-to-understand yet thorough information on the characters, recurring themes, and locations, and social context of the Sherlock Holmes stories, the relationship of these stories to literature, and the forensics and detective work they feature. You'll also learn about the life of the author. Better understand and enjoy this influential literary character with this plain-English guide. Gain insight on these classic Doyle tales -- from the classic Hound of the Baskervilles to the lesser-known short stories to Holmes stories written by other mystery writers. Explore the appearance of Sherlock Holmes on film, TV, and stage. Examine Holmes today -- from the ever-expanding network of fans worldwide to story locations that fans can visit. It's elementary! Sherlock Holmes For Dummies is an indispensable guide for students and fans alike!",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780470647370"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "047064737X"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": false
                },
                "pageCount": 384,
                "printType": "BOOK",
                "categories": [
                    "Literary Criticism"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.3.3.0.preview.2",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=F5IAUkW2EHsC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=F5IAUkW2EHsC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.ro/books?id=F5IAUkW2EHsC&dq=sherlock+homes&hl=&cd=8&source=gbs_api",
                "infoLink": "http://books.google.ro/books?id=F5IAUkW2EHsC&dq=sherlock+homes&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Sherlock_Holmes_For_Dummies.html?hl=&id=F5IAUkW2EHsC"
            },
            "saleInfo": {
                "country": "RO",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "RO",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=F5IAUkW2EHsC&hl=&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Now, this friendly guide offers a clear introduction to this beloved figure and his author, Sir Arthur Conan Doyle, presenting new insight into the detective stories and crime scene analysis that have has made Sherlock Holmes famous."
            }
        },
        {
            "kind": "books#volume",
            "id": "zRDijQZmnioC",
            "etag": "CiQMM9Z0CUc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/zRDijQZmnioC",
            "volumeInfo": {
                "title": "The Memoirs of Sherlock Holmes",
                "authors": [
                    "Arthur Conan Doyle"
                ],
                "publisher": "Chatto & Windus",
                "publishedDate": "1996",
                "description": "The Memoirs of Sherlock Holmes are overshadowed by the event with which they close-the meeting of the great detective and Moriarty, the Napoleon of Crime. Their struggle, seemingly to the death, was to leave many readers desolate at the loss of Holmes, but was also to lead to his immortality as a literary figure. However illogical as a detective story, The Final Problem has proved itself an unforgettable tale. The stories that precede it included two narratives fromHolmes himself, on a mutiny at sea and a treasure hunt in a Sussex country house, as well as a meeting with his brilliant brother Mycroft, of whom Holmes says, \"If the art of the detective began and ended in reasoning from any armchair, my brother would be the greatest criminal agent that ever lived.\"",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "0752903810"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780752903811"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 274,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.4.1.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=zRDijQZmnioC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=zRDijQZmnioC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.ro/books?id=zRDijQZmnioC&q=sherlock+homes&dq=sherlock+homes&hl=&cd=9&source=gbs_api",
                "infoLink": "http://books.google.ro/books?id=zRDijQZmnioC&dq=sherlock+homes&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/The_Memoirs_of_Sherlock_Holmes.html?hl=&id=zRDijQZmnioC"
            },
            "saleInfo": {
                "country": "RO",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "RO",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=zRDijQZmnioC&hl=&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "The stories that precede it included two narratives fromHolmes himself, on a mutiny at sea and a treasure hunt in a Sussex country house, as well as a meeting with his brilliant brother Mycroft, of whom Holmes says, &quot;If the art of the ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "1zSnAwAAQBAJ",
            "etag": "wPhITpqRtPs",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/1zSnAwAAQBAJ",
            "volumeInfo": {
                "title": "The Complete Sherlock Holmes",
                "subtitle": "Illustrated—All 4 Novels and 56 Stories",
                "authors": [
                    "Arthur Conan Doyle"
                ],
                "publisher": "Top Five Books LLC",
                "publishedDate": "2014-05-28",
                "description": "The Complete Sherlock Holmes: Illustrated from Top Five Classics is the only fully illustrated, single-volume edition of the entire Sherlock Holmes Canon available, featuring: • All 4 Sherlock Holmes novels and 56 short stories, including the final 1927 collection, The Case-Book of Sherlock Holmes • More than 480 illustrations, including all 357 Holmes illustrations by Sidney Paget • Alphabetical index of titles & timeline of cases • A helpful introduction, author bio, and bibliography Presenting all of the stories in the order they were first published with the illustrations that accompanied the original Strand Magazine monthly editions, The Complete Sherlock Holmes: Illustrated brings the Sherlock Holmes adventures to you the way they were meant to be read.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781938938160"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "193893816X"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": false
                },
                "pageCount": 1890,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "2.10.10.0.preview.2",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=1zSnAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=1zSnAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.ro/books?id=1zSnAwAAQBAJ&printsec=frontcover&dq=sherlock+homes&hl=&cd=10&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=1zSnAwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=1zSnAwAAQBAJ"
            },
            "saleInfo": {
                "country": "RO",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 14.46,
                    "currencyCode": "RON"
                },
                "retailPrice": {
                    "amount": 14.46,
                    "currencyCode": "RON"
                },
                "buyLink": "https://play.google.com/store/books/details?id=1zSnAwAAQBAJ&rdid=book-1zSnAwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 14460000,
                            "currencyCode": "RON"
                        },
                        "retailPrice": {
                            "amountInMicros": 14460000,
                            "currencyCode": "RON"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RO",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ro/books/download/The_Complete_Sherlock_Holmes-sample-epub.acsm?id=1zSnAwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=1zSnAwAAQBAJ&hl=&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "The Complete Sherlock Holmes: Illustrated from Top Five Classics is the only fully illustrated, single-volume edition of the entire Sherlock Holmes Canon available, featuring: • All 4 Sherlock Holmes novels and 56 short stories, including ..."
            }
        }
    ]
}
 */