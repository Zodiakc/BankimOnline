import "./App.css";
import Form from "./components/Form/Form";
function App() {
    return (
        <>
            <main className="bg-dark min-h-screen">
                <div className="container mx-auto px-2 ">
                    <h1 className="sm:text-5xl pt-32 text-[31px] text-center">
                        Рассчитайте ипотеку быстро и просто
                    </h1>

                    <Form />
                </div>
            </main>
        </>
    );
}

export default App;
