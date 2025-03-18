/**
 * このファイルはTailwind CSSの設定ファイルです。
 * TONゲーム管理者パネルのカラースキームを定義しています。
 */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 管理者UI用カラースキーム
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
        'red': {
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        admin: {
          background: '#181225',
          text: '#FFFFFF',
          accent: '#3B1E66',
          button: '#3A1F65',
          warning: '#E74C3C',
        },
      },
      fontFamily: {
        'good-times': ['good-times', 'sans-serif'],
        'futuristic': ['Orbitron', 'good-times', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-admin': 'linear-gradient(to right, #3A1F65, #1E1033)',
      },
      boxShadow: {
        'admin': '0 4px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
