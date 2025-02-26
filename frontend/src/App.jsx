import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";

function App() {
    const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);

    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        prism.highlightAll();
    }, []);

    async function reviewCode() {
        setLoading(true);
        try {
            const response = await axios.post(
                "http://localhost:3000/ai/get-review",
                { code }
            );
            setReview(response.data);
        } catch (error) {
            console.error("Error fetching review:", error);
            setReview("An error occurred while fetching the review.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
            {/* Header */}
            <header className="bg-gray-800 py-6 text-center shadow-lg">
                <h1 className="text-3xl font-bold text-blue-400">ReviewBot</h1>
                <p className="mt-2 text-gray-300">Get your code reviewed instantly.</p>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col md:flex-row gap-6 p-6 overflow-hidden">
                {/* Left Panel - Code Editor */}
                <div className="flex-1 bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">Code Editor</h2>
                    <div className="flex-1 overflow-auto bg-gray-700 rounded-lg p-4">
                        <Editor
                            value={code}
                            onValueChange={(code) => setCode(code)}
                            highlight={(code) =>
                                prism.highlight(
                                    code,
                                    prism.languages.javascript,
                                    "javascript"
                                )
                            }
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 16,
                                color: "#ffffff",
                                backgroundColor: "transparent",
                                border: "none",
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    </div>
                    <button
                        onClick={reviewCode}
                        disabled={loading}
                        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
                    >
                        {loading ? "Reviewing..." : "Review Code"}
                    </button>
                </div>

                {/* Right Panel - Review Output */}
                <div className="flex-1 bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col">
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">Review Output</h2>
                    <div className="flex-1 overflow-auto bg-gray-700 rounded-lg p-4">
                        {loading ? (
                            <div className="flex justify-center items-center h-full text-gray-300 text-xl animate-pulse">
                                Loading...
                            </div>
                        ) : (
                            <Markdown rehypePlugins={[rehypeHighlight]}>
                                {review}
                            </Markdown>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 py-4 text-center text-gray-300">
                <p>© 2023 ReviewBot. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;