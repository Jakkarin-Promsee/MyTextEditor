# My Text Editor (In progress)

A modern, lightweight rich text editor, inspiration by medium blog website. Built with React, TypeScript, and Slate.js. This project represents my first venture into frontend development, combining clean design with powerful text editing capabilities.

## 🌟 Features

- **Rich Text Formatting**: Bold, italic, and underline text styling
- **Font Size Control**: Three size options (small, medium, large) for flexible typography
- **Text Alignment**: Left, center, and right alignment options
- **Live Preview Mode**: Toggle between edit and preview modes
- **Dark/Light Theme**: Complete theme switching with persistent preferences
- **Responsive Design**: Clean, modern interface that works across devices
- **Type-Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and better developer experience
- **Slate.js** - Powerful framework for building rich text editors
- **Tailwind CSS (4.1)** - Utility-first CSS framework for styling with no confic file
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/medium-editor.git
   cd medium-editor
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run web2
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:8080` to see the application running

## 📁 Project Structure

```
src/
├── components/
│   ├── Page/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ThemeToggle.tsx
│   ├── TextEditor/
│   │   ├── SlateToolbar.tsx/
│   │   │   ├── PreviewToggle.tsx
│   │   │   ├── SlateButton.tsx
│   │   │   └── SlateToolbar.tsx
│   │   ├── TextEditor.tsx
│   │   └── TextEditorRender.tsx
│   └── ui/
│       ├── ToggleButton.tsx
│       └── ToolbarButton.tsx
├── context/
│   └── ThemeContext.tsx
├── hooks/
│   └── useTheme.ts
├── types/
│   └── textEditor.ts
├── utils/
│   └── editorUtils.ts
├── constants/
│   └── textEditor.ts
└── main.tsx
```

## 🎯 Key Components

### TextEditor

The main editor component built with Slate.js, featuring:

- Custom element and leaf rendering
- Keyboard shortcuts support
- Real-time content updates

### SlateToolbar

A comprehensive toolbar providing:

- Text formatting buttons (bold, italic, underline)
- Font size controls
- Text alignment options
- Preview mode toggle

### Theme System

Context-based theming with:

- Persistent theme preferences
- Smooth transitions between themes
- System-wide dark/light mode support

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

The editor is highly customizable through:

- **Tailwind Classes**: Easy styling modifications
- **Theme Context**: Centralized theme management
- **Type Definitions**: Extensible type system for new features
- **Utility Functions**: Modular helper functions for editor operations

## 📚 Learning Journey

This project represents my first serious frontend development endeavor. Through building this editor, I've learned:

- **React Fundamentals**: Component composition, hooks, and state management
- **TypeScript Integration**: Type safety in React applications
- **Modern CSS**: Tailwind CSS utility-first approach
- **Rich Text Editing**: Understanding of contentEditable and Slate.js architecture
- **Project Structure**: Organizing a medium-scale React application

## 🤝 Contributing

As this is a learning project, I welcome feedback, suggestions, and contributions! Please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Known Issues

- Keyboard shortcuts implementation could be more robust
- Limited undo/redo functionality
- No table or list support yet (planned for future versions)

## 🔮 Future Enhancements

- [ ] Markdown export/import
- [ ] More text formatting options (strikethrough, code)
- [ ] List support (ordered and unordered)
- [ ] Image insertion
- [ ] Table creation and editing
- [ ] Collaborative editing features
- [ ] Auto-save functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Slate.js Community** - For the excellent documentation and examples
- **React Team** - For creating such an intuitive framework
- **Tailwind CSS** - For making styling enjoyable
- **All the open-source contributors** who make learning and building possible

---

_Built with ❤️ by a passionate beginner developer_
