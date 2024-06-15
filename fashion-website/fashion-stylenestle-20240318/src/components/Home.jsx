// createtime 20240319

import img from "../assets/img/hero.png";

const Home = () => {
    return (
        <div className="min-h-screen pt-24 px-5 flex flex-col justify-center items-center md:flex-row md:justify-between md:px-20 ">
            {/* content section */}
            <div className="flex flex-col space-y-4">
                <h1 className="text-5xl font-semibold leading-tight text-ExtraDarkColor w-full md:w-3/4">
                    Discovering and Defining Your Own Fashion!
                </h1>
                <p className="w-full md:w-3/4 text-DarkColor font-medium">
                    Each item is a carefully chosen masterpiece, promising not
                    just fashion but a reflection of your unique style.
                </p>
                <button className="bg-ExtraDarkColor  w-auto text-white px-4 py-2 font-medium active:bg-amber-800">
                    shop now
                </button>
            </div>
            {/* img section */}
            <div className="bg-DarkColor p-5 rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl mt-10">
                <img
                    src={img}
                    alt="imgage"
                    className="-ml-5 -mb-5"
                    width={680}
                />
            </div>
        </div>
    );
};

export default Home;
