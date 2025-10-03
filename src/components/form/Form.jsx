import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then(res => {
                console.log(res.data);
                setFormData({
                    author: "",
                    title: "",
                    body: "",
                    public: false
                });

                setShowAlert(true);

                setTimeout(() => {
                    setShowAlert(false);
                }, 3000);
            })
            .catch(error => console.log("error"))
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* parte nome autore */}
            <div className="my-4 mx-5">
                <label htmlFor="author" className="form-label">
                    Nome Autore
                </label>
                <input
                    name="author"
                    type="text"
                    className="form-control"
                    id="author"
                    aria-describedby="authorlHelp"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />
                <div id="authorlHelp" className="form-text">
                    Inserisci il nome dell'autore del post
                </div>
            </div>

            {/* parte titolo */}
            <div className="my-4 mx-5">
                <label htmlFor="title" className="form-label">
                    Titolo
                </label>
                <input
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="titlelHelp"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <div id="titlelHelp" className="form-text">
                    Inserisci il titolo del post
                </div>
            </div>

            {/* parte contenuto del post */}
            <div className="my-4 mx-5">
                <label htmlFor="text-area" className="form-label">
                    Contenuto
                </label>
                <textarea
                    name="body"
                    className="form-control"
                    id="text-area"
                    rows="3"
                    aria-describedby="textAreaHelp"
                    value={formData.body}
                    onChange={handleChange}
                    required
                ></textarea>
                <div id="textAreaHelp" className="form-text">
                    Inserisci il contenuto del post
                </div>
            </div>

            {/* parte della checkbox */}
            <div className="my-4 mx-5 form-check">
                <input
                    name="public"
                    type="checkbox"
                    className="form-check-input"
                    id="checkBox"
                    checked={formData.public}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="checkBox">
                    Pubblica sul blog
                </label>
            </div>

            {/* parte bottone invia form */}
            <button
                type="submit"
                className="my-4 mx-5 btn btn-primary"
            >
                Invia
            </button>

            {/* BONUS parte alert di richiesta inoltrata correttamente */}
            {showAlert && (
                <div className="mt-4 p-3 bg-green-500 rounded shadow">
                    Articolo creato correttamente
                </div>
            )}
        </form>
    );
};

export default Form;
