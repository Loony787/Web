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

        <section className="bg-white px-6 py-24">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="group rounded-2x1 border border-gray-200 p-8 transition-all duration-200 hover:-translate-y-2 hover:shadow-xl">
                        <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover: text-blue-600">
                            {feature.title}
                        </h3>
                        <p className="mt-3 text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}