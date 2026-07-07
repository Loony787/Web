const features = [
    {
        title: "Data Analysis",
        description: "Correlations and Explanations",
    },
    {
        title: "About",
        description: "What, Who, Why",
    },
    {
        title: "Application Statistics",
        description: "Hall of Shame",
    }
];

export default function Features() {
    return(
        <section className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover">
                <source src="/videos/Hero.mp4" type="video/mp4"/>
            </video>
            
            <div className="absolute inset-0 flex">
                {features.map((feature) => (
                    <div key={feature.title} className="group relative h-full w-1/3">
                        <div className="absolute inset-0 bg-white/0 transition-colors duration-200 group-hover:bg-white/20"/>
                    
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="mt-3 text-sm md:text-base">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}