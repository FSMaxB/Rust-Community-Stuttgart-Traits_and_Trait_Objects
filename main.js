import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css'
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";

const highlightPlugin = RevealHighlight();
highlightPlugin.hljs.configure({tabReplace: '  '})

const deck = new Reveal();
deck.initialize({
	hash: true,
	slideNumber: true,
	plugins: [highlightPlugin, RevealNotes]
})
