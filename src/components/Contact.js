const Contact = ()=>{
    return (
        <div> 
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>

                <input type="text" className="border border-black p-1 m-1" placeholder="name" />
                <input type="text" className="border border-black p-1 m-1" placeholder="message" />
                <button className="border border-black p-1 m-1 bg-amber-600 rounded-lg ">submit</button>
            </form>
            <p >This is Namaste - React web series - Contact us page </p>
        </div>
    )
}

export default Contact;