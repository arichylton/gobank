import { InputForm } from "../../components/form";

export const LoginPage = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-2xl flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Welcome Back
                    </h1>
                    <p className="text-gray-600">
                        Please log in to your account using the form.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <InputForm />
                </div>
            </div>
        </section>
    );
};
