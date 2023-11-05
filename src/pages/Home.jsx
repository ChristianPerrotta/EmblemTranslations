import PetraStudying from "../assets/chibi/petra-studying.png";
import data from '../data/works.json';
import { BookCard } from "../components/BookCard";

export function HomePage() {

    return (
        <main className="container mt-4 mb-4 flex-shrink-0">
            <img src={PetraStudying} className="img-fluid d-block mx-auto float-sm-start" alt="Petra studying." width="200px" />      
            <h2 className="text-center">Welcome to Emblem Translations!</h2>
            <p>
                Here, we strive to bring you the enchanting world of Fire Emblem by translating Japanese-exclusive material into English. As a passionate fan of the franchise, I am dedicated to providing you with access to a range of captivating content that was previously unavailable to English-speaking audiences. From novels and manga to artbooks, I am committed to bridging the language barrier and ensuring that fellow Fire Emblem enthusiasts can fully immerse themselves in the rich lore and stories that make this series so beloved.    
            </p>
            <p>
                At Emblem Translations, my goal is to deliver translations that capture the essence of the original material, allowing you to experience the magic of Fire Emblem in English. Whether you're craving the epic adventures of your favorite characters, eager to explore untold backstories, or simply want to dive deeper into the intricate world-building, I am here to share these treasures with you. Join me on this journey as we unlock the hidden gems of the Fire Emblem universe, one translation at a time. 
            </p>

            <hr />
        
            <div className="d-flex gap-5 flex-wrap justify-content-evenly">
                {data.map(book => {
                    return (
                        <BookCard 
                            key={book.id}
                            title={book.title}
                            img={book.img}
                            path={book.path}
                            alt={book.alt}
                            working={book.working}
                        />
                    )
                })}
            </div>

        </main>
    )
}