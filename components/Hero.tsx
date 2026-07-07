export default function Hero(){

    return(
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover">
            
                <source src="/videos/Hero.mp4" type="video/mp4"/>
            </video>
            <div className="absolute inset-0 bg-black/5"/>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold md:text-7xl">
                    Main Page
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                    Work in progress...
                </p>
            </div>
        </section>
    );
}