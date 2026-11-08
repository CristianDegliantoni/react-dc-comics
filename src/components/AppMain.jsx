import comics from "./comics";

function AppMain() {
    return (
        <main>
            <div className="comics-container">
                {comics.map((comic) => (
                    <div key={comic.id} className="comic-card">
                        <h3>{comic.title}</h3>
                        <img src={comic.thumb} alt={comic.title} />
                    </div>
                ))}
            </div>
        </main>
    );
}

export default AppMain;