import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

function App() {
    const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);

    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false); // State for loader

    useEffect(() => {
        prism.highlightAll();
    }, []);

    async function reviewCode() {
        setLoading(true); // Start loading
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
            setLoading(false); // Stop loading
        }
    }

    return (
        <>
            {/* Added Welcome Message */}
            <header className="welcome">
                <h1>Welcome to ReviewBot</h1>
                <p>Get your code reviewed instantly.</p>
            </header>

            {/* Original Layout Stays the Same */}
            <main>
                <div className="left">
                    <div className="code">
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
                                fontFamily:
                                    '"Fira code", "Fira Mono", monospace',
                                fontSize: 18,
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    </div>
                    {/* Replaced div with button */}
                    <button onClick={reviewCode} className="review" disabled={loading}>
                        {loading ? "Reviewing..." : "Review"}
                    </button>
                </div>
                <div className="right">
                    {loading ? (
                        <div className="loader">Loading...</div> // Loader while waiting for response
                    ) : (
                        <Markdown rehypePlugins={[rehypeHighlight]}>
                            {review}
                        </Markdown>
                    )}
                </div>
            </main>
        </>
    );
}

export default App;