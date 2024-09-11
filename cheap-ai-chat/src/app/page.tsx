"use client";

import { useChat } from "ai/react";
import Markdown from "react-markdown";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-screen w-full">
      <header className="bg-gray-800 text-white p-6 text-center w-full shadow-md">
        <h1 className="text-3xl font-semibold">AI Assistant</h1>
        <p className="text-sm mt-2 text-gray-300">Powered by Llama-3</p>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4" id="chat-window">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            } mb-4 animate-fadeIn`}
          >
            <div
              className={`max-w-3/4 p-3 rounded-lg ${
                m.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <Markdown>{m.content}</Markdown>
            </div>
          </div>
        ))}

        {messages.length === 0 && (
          <div className="text-center text-gray-500 animate-pulse">
            Start a conversation...
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-300 w-full">
        <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto">
          <input
            className="w-full p-3 pr-12 border border-gray-300 rounded-full shadow-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
