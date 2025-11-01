# Digital Chemistry Lab 🧪

An interactive web-based chemistry laboratory for Class 10 students, built with React, TypeScript, and modern web technologies.

![Home Page](https://github.com/user-attachments/assets/8089bf7e-5430-492a-98bc-247cf307f893)

## 🌟 Features

- **Interactive Experiments**: 6+ detailed chemistry experiments with step-by-step procedures
- **Digital Lab Playground**: Drag-and-drop lab equipment to create custom experiment setups
- **Comprehensive Learning**: Each experiment includes objectives, materials, procedures, observations, and conclusions
- **Safety First**: Detailed safety precautions for each experiment
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Easy Navigation**: Browse experiments by category with search functionality

## 📚 Experiments Included

### Chemical Reactions
1. Reaction of Zinc with Dilute Sulphuric Acid
2. Reaction Between Sodium Sulphate and Barium Chloride

### Acids, Bases and Salts
3. Testing pH of Different Solutions
4. Preparation of Soap

### Metals and Non-metals
5. Action of Water on Quicklime

### Carbon Compounds
6. Study of Properties of Ethanoic Acid

## 🎮 Interactive Lab Playground

![Lab Playground](https://github.com/user-attachments/assets/e09ca324-3502-465b-a1d8-3fc3618fdbdb)

The digital playground allows students to:
- Drag and drop 24+ lab equipment items
- Arrange equipment on a virtual lab bench
- Create custom experiment setups
- Move and position equipment freely
- Save setups for later use

## 🔬 Lab Equipment Available

- **Glassware**: Beakers (50ml, 100ml, 250ml), Test tubes, Conical flasks, Measuring cylinders, Petri dishes, Funnels
- **Heating**: Bunsen burner, Spirit lamp, Tripod stand, Wire gauze
- **Measurement**: Thermometer, pH paper, Litmus paper, Weighing balance
- **Safety**: Safety goggles, Gloves, Tongs, Test tube holder

## 🚀 Technology Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Drag & Drop**: @dnd-kit
- **Canvas Graphics**: React-Konva (ready for advanced visualizations)
- **State Management**: Zustand (ready when needed)

## 📸 Screenshots

### Experiments List
![Experiments Page](https://github.com/user-attachments/assets/8b124a09-5490-4613-aaa9-1d53ecafa009)

### Experiment Detail
![Experiment Detail](https://github.com/user-attachments/assets/04cb6c11-6549-4d06-adbb-9d26a7d3a3bc)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/manokrishnaabhiram/Digital_chemi_lab.git

# Navigate to project directory
cd Digital_chemi_lab

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This project is ready to deploy to:
- **Vercel** (Recommended) - See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Netlify** - See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **GitHub Pages** - See [DEPLOYMENT.md](./DEPLOYMENT.md)

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📖 Documentation

- **[REQUIREMENTS.md](./REQUIREMENTS.md)**: Complete requirements and step-by-step development procedure
- **[TECHNOLOGY_STACK.md](./TECHNOLOGY_STACK.md)**: Detailed technology selection and justification
- **[DEPLOYMENT.md](./DEPLOYMENT.md)**: Deployment guide for various platforms

## 🎯 Project Structure

```
Digital_chemi_lab/
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.tsx
│   │   ├── DraggableEquipment.tsx
│   │   ├── DroppableWorkspace.tsx
│   │   └── EquipmentPanel.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── ExperimentsList.tsx
│   │   ├── ExperimentDetail.tsx
│   │   └── LabPlayground.tsx
│   ├── data/              # Data files
│   │   ├── experiments.ts
│   │   └── equipment.ts
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── REQUIREMENTS.md        # Complete requirements document
├── TECHNOLOGY_STACK.md    # Technology stack documentation
├── DEPLOYMENT.md          # Deployment guide
└── package.json           # Dependencies
```

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Future Enhancements

- [ ] Add 14+ more experiments (targeting 20+ total)
- [ ] Implement visual effects for chemical reactions
- [ ] Add simulation of liquid pouring and mixing
- [ ] Implement heating effects with visual feedback
- [ ] Add user authentication and progress tracking
- [ ] Create quiz system for each experiment
- [ ] Add 3D molecular visualizations
- [ ] Support offline mode (PWA)
- [ ] Add video demonstrations
- [ ] Multi-language support (English, Telugu)
- [ ] Virtual lab assistant with AI

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Manokrishna Abhiram**
- GitHub: [@manokrishnaabhiram](https://github.com/manokrishnaabhiram)

## 🙏 Acknowledgments

- Chemistry syllabus based on Andhra Pradesh State Board Class 10
- Inspired by the need for safe, accessible chemistry education
- Built with modern web technologies for the best user experience

## 📧 Contact & Support

For questions, suggestions, or issues:
- Open an issue on [GitHub](https://github.com/manokrishnaabhiram/Digital_chemi_lab/issues)
- Contact the author through GitHub

## ⭐ Star This Repository

If you find this project useful, please consider giving it a star on GitHub!

---

**Built with ❤️ for students and educators**
