import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
function Showmodal({ closeModal }) {
    
    const firebaseConfig = {
        apiKey: "AIzaSyBzcJu4HHq-u5bSp4LSpARU5Cy5Rzfdawg",
        authDomain: "biopsyai-4706b.firebaseapp.com",
        databaseURL: "https://biopsyai-4706b-default-rtdb.firebaseio.com",
        projectId: "biopsyai-4706b",
        storageBucket: "biopsyai-4706b.appspot.com",
        messagingSenderId: "310203808544",
        appId: "1:310203808544:web:edab98189c4d9a6cd43545",
        measurementId: "G-DGD5JMZQVF"
    };
    
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    
    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            "name": document.getElementById("name").value,
            "email": document.getElementById("email").value,
            "message": document.getElementById("message").value
        }

        database.ref("Feedback").push({
            name: data.name,
            email: data.email,
            message: data.message
        });
        alert("Thanks For the Feeback")
    }

    return (
        <>
            <div className='modalBack bg-black bg-opacity-80 bg-cover top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center'>
                <div className='container fixed rounded-md bg-white flex flex-col w-[350px] h-[450px] border-l-4 border-l-[#4285F4] border-t-4 border-t-[#DB4437] border-r-4 border-r-[#F4B400] border-b-4 border-b-[#0F9D58] lg:w-[430px] lg:h-[500px]'>
                    <div>
                        <i className="fa-solid fa-xmark flex justify-end text-[#4f2a28] mr-2 text-2xl" onClick={() => closeModal(false)}></i>
                    </div>
                    {/* form */}
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='text-black font-raleway tracking-wider text-xl font-bold uppercase lg:text-2xl'>Feedback Form</h2>
                        <form className='w-full px-2 lg:px-6'>
                            <div className='text-black mt-3 lg:mt-5'>
                                <label htmlFor="name" className="lg:text-lg lg:font-raleway lg:font-medium">Your Name</label>
                                <div className='relative pt-[2px]'>
                                    <i className="fa-solid fa-user absolute text-gray-500 pt-3 pl-2 lg:pt-4"></i>
                                    <input type='text' id='name' className='border py-2 rounded-lg w-full outline-none pl-8 text-sm focus:ring-2 font-raleway tracking-wide border-neutral-400 lg:py-3' placeholder="your name" required minLength={3} maxLength={100} name="name" />
                                </div>
                            </div>

                            <div className='text-black mt-3 lg:mt-5'>
                                <label htmlFor="email" className="lg:text-lg lg:font-raleway lg:font-medium">Your Email</label>
                                <div className='relative pt-[2px]'>
                                    <i className="fa-solid fa-envelope absolute text-gray-500 pt-3 pl-2 lg:pt-4"></i>
                                    <input type='email' id='email' className='border py-2 rounded-lg w-full outline-none pl-8 text-sm focus:ring-2 font-raleway tracking-wide border-neutral-400 lg:py-3' placeholder="youremail@address.com" required />
                                </div>
                            </div>

                            <div className='text-black mt-3 lg:mt-5'>
                                <label htmlhtmlFor="name" className="lg:text-lg lg:font-raleway lg:font-medium">Your Message</label>
                                <div className='relative pt-[2px]'>
                                    <textarea type='text' rows={4} id='message' className='border py-2 rounded-lg w-full outline-none px-[4px] placeholder:text-sm pl-4 text-sm focus:ring-2 font-raleway tracking-wide border-neutral-400 lg:py-3' placeholder='Leave your message...' />
                                </div>
                            </div>

                            <div className="flex justify-center items-center bg-blue-600 py-3 mt-2 rounded-xl mx-2 hover:scale-105 cursor transition duration-700 ease-in-out lg:mx-20">
                                <button type="submit" className="font-medium tracking-wider uppercase cursor" onClick={submitHandler}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showmodal;