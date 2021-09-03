import {useState} from 'react'


export default function useVisualMode (initial) {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial]);

  function transition (mode, replace = false) {
    if(!replace) {
      setHistory(prev => [...prev, mode])
      setMode(mode)
    } else {
      setHistory(prev => [...prev.slice(0, history.length - 1), mode])
      setMode(mode)
    }
  }

  function back() {
    if(history.length < 2) {
      return;
    }

    setHistory(history.slice(0, history.length - 1))
    setMode(history[history.length - 2])
  }

  return {mode, transition, back};
}

