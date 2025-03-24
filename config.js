const config = {
    colors: {
        background: '#121212',
        card: '#1E1E1E',
        primary: '#b90f2e',
        header: {
            default: '#b90f2e',
            scrolled: {
                start: 'rgba(185, 15, 46, 0.8)', // Red (primary color)
                end: 'rgba(30, 67, 86, 0.8)'     // Blue
            }
        },
        text: {
            primary: '#ffffff',
            secondary: '#9ca3af',
            accent: '#b90f2e'
        }
    },
    typography: {
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem'
        },
        fontFamily: {
            body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }
    },
    transitions: {
        header: {
            scrollThreshold: 20,
            duration: '500ms'
        }
    },
    spacing: {
        header: {
            padding: '1.5rem'    // 24px
        },
        card: {
            padding: '1rem'      // 16px
        }
    }
}; 