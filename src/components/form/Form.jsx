import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        pubblic: "",
    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <form>
            {/* parte nome autore */}
            <div className="my-4 mx-5">
                <label htmlFor="author" className="form-label">
                    Nome Autore
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="author"
                    aria-describedby="authorlHelp"
                    value={formData.name}
                    onChange={handleChange}
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
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="titlelHelp"
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
                    className="form-control"
                    id="text-area"
                    rows="3"
                    aria-describedby="textAreaHelp"
                ></textarea>
                <div id="textAreaHelp" className="form-text">
                    Inserisci il contenuto del post
                </div>
            </div>

            {/* parte della checkbox */}
            <div className="my-4 mx-5 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkBox"
                />
                <label className="form-check-label" htmlFor="checkBox">
                    Pubblica sul blog
                </label>
            </div>

            {/* parte bottone invia form */}
            <button type="submit" className="my-4 mx-5 btn btn-primary">
                Invia
            </button>
        </form>
    );
};

export default Form;
