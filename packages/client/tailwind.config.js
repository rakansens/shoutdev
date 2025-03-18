/**
 * このファイルはTailwind CSSの設定ファイルです。
 * TONゲームプロジェクトのカラースキームを定義しています。
 */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 新しいカラースキーム
        'deep-purple': '#1E1033',
        'purple': {
          600: '#6C2BD9',
          700: '#5521B5',
          800: '#4A1D96',
          900: '#3A1773',
        },
        'blue': {
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
        },
        'green': {
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        // アクセントカラー
        'accent-color': '#E67E22',
        // 元のカラースキーム（互換性のため残す）
        user: {
          main: '#3B1E66',
          background: '#0A0518',
          text: '#FFFFFF',
          button: '#3A1F65',
          accent: '#FF7A00',
          secondary: '#0088FF',
          tertiary: '#00C853',
          highlight: '#FF00FF',
          card: {
            blue: '#0066CC',
            green: '#00994D',
            purple: '#6600CC',
            orange: '#FF6600',
          },
          progress: {
            blue: '#00CCFF',
            green: '#00FF99',
            purple: '#CC66FF',
            orange: '#FFCC00',
          },
        },
      },
      fontFamily: {
        'good-times': ['good-times', 'sans-serif'],
        'futuristic': ['Orbitron', 'good-times', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-neon-blue': 'linear-gradient(to right, #00C6FF, #0072FF)',
        'gradient-neon-green': 'linear-gradient(to right, #00FF9D, #00C853)',
        'gradient-neon-purple': 'linear-gradient(to right, #A742DF, #6A11CB)',
        'gradient-neon-orange': 'linear-gradient(to right, #FF9900, #FF5500)',
        'gradient-profile': 'linear-gradient(to bottom, #9C27B0, #3F51B5)',
      },
      boxShadow: {
        'neon-blue': '0 0 10px rgba(0, 123, 255, 0.7)',
        'neon-green': '0 0 10px rgba(0, 200, 83, 0.7)',
        'neon-purple': '0 0 10px rgba(106, 17, 203, 0.7)',
        'neon-orange': '0 0 10px rgba(255, 85, 0, 0.7)',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
}
