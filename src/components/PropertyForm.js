import { useRef, useState } from "react"

const data = [];
const PropertyForm = () => {
    const dropZone = useRef(null);
    const fileInput = useRef(null);
    const [images, setImages] = useState([]);
    const [drag, setDrag] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Added new property");
    }

    const handleFileSelected = (e) => {
        let files = e.target.files
        if (files) {
            let filesAmount = files.length;;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function () {
                    let filesUrl = [reader.result];
                    data.push(filesUrl)
                    setImages(data);
                };
                reader.readAsDataURL(e.target.files[i]);
            }
        }
    }

    const dragStart = (e) => {
        e.preventDefault()
        setDrag(true);
    }

    const dropImage = (e) => {
        e.preventDefault()
        // e.dataTransfer.files = fileInput.current.target.files
        // handleFileSelected(e)
        setDrag(false)
    }
    return (
        <section className="form-wrapper container flow">
            <h6 className="text-center">
                Your property with us and be Confident that Your Room will be Filled Out!
            </h6>
            <form className="property-form bg-neutral-100" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name" placeholder="enter name" />
                </div>
                <div className="form-control">
                    <label htmlFor="address">address</label>
                    <input type="text" name="address" id="address" placeholder="enter address" />
                </div>
                <div className="form-control">
                    <label htmlFor="unit">unit number</label>
                    <input type="number" min="1" name="unit" id="unit" placeholder="enter unit" />
                </div>
                <div className="form-control">
                    <label htmlFor="city">city</label>
                    <select required name="city" id="city">
                        <option value="" disabled selected hidden>select city</option>
                        <option value="abuja">abuja</option>
                        <option value="lagos">lagos</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="state">state</label>
                    <select required name="state" id="state">
                        <option value="" disabled selected hidden>select state</option>
                        <option value="abuja">abuja</option>
                        <option value="lagos">lagos</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="type">type</label>
                    <select required name="type" id="type">
                        <option value="" disabled selected hidden>select room type</option>
                        <option value="abuja">abuja</option>
                        <option value="lagos">lagos</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="price">price</label>
                    <input type="number" min="1" name="price" id="price" placeholder="enter price" />
                </div>
                <div className="form-control">
                    <label htmlFor="bedroom">bedroom number</label>
                    <input type="number" min="1" name="bedroom" id="bedroom" placeholder="enter bedroom" />
                </div>
                <div className="form-control">
                    <label htmlFor="description">description</label>
                    <textarea
                        type="text" name="description" id="description" cols="30" rows="5" placeholder="enter description"
                    >
                    </textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="image-input__container">upload photos</label>
                    <div className={drag ? "drop-zone-active drop-zone" : "drop-zone"} id="image-input__container" ref={dropZone}
                        onDragLeave={() => setDrag(false)}
                        onDragOver={dragStart}
                        onDragEnd={() => setDrag(false)}
                        onDrop={(e) => dropImage(e)}>
                        {drag ? <div>
                            <h6>
                                Drop an image here
                            </h6>
                        </div> :
                            <div>
                                <h6 className="text-center">
                                    Drag your images here, or <label htmlFor="image">browse</label>
                                </h6>
                                <p className="text-center">Supported:  JPG, JPEG, PNG</p>
                            </div>}
                        <input ref={fileInput} accept=".jpg, .png, .jpeg" type="file" multiple name="image" id="image" onChange={handleFileSelected} style={{ display: "none" }} />
                    </div>
                    <div className="input-images flex">
                        {images.map((image, index) => {
                            console.log(images);
                            return <img key={index} src={image} alt="image" />
                        })}
                    </div>
                </div>
                <button type="submit" className="btn submit-btn">add new property</button>
            </form>
        </section>
    )
}

export default PropertyForm;