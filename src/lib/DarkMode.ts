export const toggleDarkMode = () => {
    const root = document.getElementsByTagName("html")[0];
    if (root.classList.contains("dark")) {
        root.classList.remove("dark");
    } else {
        root.classList.add("dark");
    }
}

export const darkModeOn = () => {
    const root = document.getElementsByTagName("html")[0];
    if (root.classList.contains("dark")) {
        return
    } else {
        root.classList.add("dark");
    }
}

export const darkModeOff = () => {
    const root = document.getElementsByTagName("html")[0];
    if (root.classList.contains("dark")) {
        root.classList.remove("dark");
    }
}

export const isDarkMode = () => {
    const root = document.getElementsByTagName("html")[0];
    return root.classList.contains("dark");
}
