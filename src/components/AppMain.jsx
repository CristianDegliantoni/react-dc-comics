import comics from "./comics";

function AppMain() {
    return (
        <main className="app-main">
            <div className="comics-container">
                {comics.map((comic) => (
                    <div key={comic.id} className="comic-card">
                        <img src={comic.thumb} alt={comic.title} className="comic-img" />
                        <h4 className="comic-title">{comic.title}</h4>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default AppMain;