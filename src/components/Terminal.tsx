import React, { useState, useRef, useEffect } from 'react';
import { commands } from '../utils/commands';
import '../styles/terminal.css';

const WELCOME_MESSAGE = `
Welcome to Mohana's Terminal Portfolio
Type 'help' to see available commands
`;

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHistory([WELCOME_MESSAGE]);
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, `> ${cmd}`];

    if (trimmedCmd) {
      setCommandHistory(prev => [...prev, trimmedCmd]);
      const command = commands[trimmedCmd];
      
      if (command) {
        newHistory.push(command());
      } else if (trimmedCmd === 'clear') {
        setHistory([WELCOME_MESSAGE]);
        return;
      } else {
        newHistory.push(`Command not found: ${trimmedCmd}. Type 'help' for available commands.`);
      }
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-content">
        {history.map((line, i) => (
          <div key={i} className="output">{line}</div>
        ))}
        <div className="prompt">
          <span>{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="command-input"
            spellCheck="false"
            autoComplete="off"
          />
          <div className="cursor" />
        </div>
      </div>
    </div>
  );
};