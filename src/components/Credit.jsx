import { useState } from "react";

const Credit = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    const themes = [
      "light",
      "dark",
    ];
    let theme = themes[Math.floor(Math.random() * themes.length)];
    setTheme(theme);
    document.querySelector("html").dataset.theme = theme;
  };
  
  return (
    <p className="absolute top-1 right-1 flex flex-col gap-2">
      <button onClick={changeTheme} className="btn btn-sm">
        {theme}
      </button>
    </p>
  );
};

export default Credit;
