function ThemeToggle({ theme, toggleTheme }) {
  try {
    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        data-name="theme-toggle"
        data-file="components/ThemeToggle.js"
      >
        <div className={`icon-${theme === 'light' ? 'moon' : 'sun'} text-lg`}></div>
      </button>
    );
  } catch (error) {
    console.error('ThemeToggle component error:', error);
    return null;
  }
}