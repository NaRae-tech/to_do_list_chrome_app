const quotes=[
  {
    quote : "I'm brave, I'm bruised. I'm who I'm meant to be, this is me.",
    music : "This is me",
  },
  {
    quote : "I'm not scared to be seen. I make no apologies, this is me.",
    music : "This is me",
  },
  {
    quote : "I don't care what their going to say.",
    music : "Let it go",
  },
  {
    quote : "It's time to see what I can do.",
    music : "Let it go",
  },
  {
    quote : "The past is in the past",
    music : "Let it go",
  },
  {
    quote : "To test the limits and break through. No right, No wrong, No rules for me. I'm free.",
    music : "Let it go",
  },
  {
    quote : "Whenever they try to shut me or cut me down, I won't be silenced.",
    music : "Speechless",
  },
  {
    quote : "Don't you underestimate me. Cause I know that I won't go speechless.",
    music : "Speechless",
  },
  {
    quote : "I will never fit in your mold. If you want you can, call somebody else. Or do it by yourself.",
    music : "When a girl",
  },
  {
    quote : "A voice is a voice. And it needs to be heard. Now I'm done with holding back. I've had enough.",
    music : "When a girl",
  },
  {
    quote : "I'm not what you want. I am little and much. When a girl is good, she's always good enough.",
    music : "When a girl",
  }
]
const quote = document.querySelector("#quote span:first-child");
const music = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuotes.quote;
music.innerText = `\n${todaysQuotes.music}`;