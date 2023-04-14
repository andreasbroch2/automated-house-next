export default function TextAndBox() {
    return (
        <section className="bg-lightblue alignfull">
            <div className="md:flex items-center max-w-[1280px] mx-auto py-8 md:py-16">
                <div className="textbox basis-1/2">
                    <h2>New to smart homes?</h2>
                    <p>Check out our complete smart home starter guide. This will take you through the basics concepts and prepare you for the world of smart homes.</p>
                </div>
                <div className="bg-secondary rounded-xl shadow-xl p-6 md:p-12 basis-1/2">
                    <h3>Ultimate Guide to Smart Homes: Make Your Home Smarter</h3>
                    <p>The main goal of a smart home is to improve the overall functionality of the home, making it more efficient, convenient and comfortable to live in. Read everything you need to know right here!</p>
                    <div className="btn">Read More</div>
                </div>
            </div>
        </section>
    )
}