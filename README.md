# Chat Widget Configurator

A React-based configuration tool for customizing chat widget appearances with real-time preview functionality. This application allows users to customize various aspects of a chat widget interface and export/import configurations through JSON files.

![Chat Widget Configurator Preview](/api/placeholder/800/400)

## Features

- 🎨 Real-time preview of chat widget customization
- 💾 Import/Export configuration as JSON
- 🎯 Live color picker for various elements
- 📱 Fully responsive design
- 🔄 Dynamic font family selection
- 🖼️ Custom avatar and launcher image support

## Technologies Used

- React 18
- Tailwind CSS
- Lucide React Icons
- React Hooks

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chat-widget-configurator.git
```

2. Install dependencies:
```bash
cd chat-widget-configurator
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

### Basic Configuration

The configurator allows customization of:

- Config Name
- Bot Name
- Font Family
- Header Color
- Header Font Color
- Background Color
- Chat Font Color
- Avatar Image URL
- Launcher Image URL

### Importing Configuration

1. Click the "Load Config" button
2. Select a valid JSON configuration file
3. The widget preview will update automatically

### Exporting Configuration

1. Customize the widget using the available options
2. Click "Download Config"
3. A JSON file will be downloaded with your current configuration

## Responsive Design

The application is fully responsive with breakpoints at:
- Mobile: Default
- Tablet: 768px (md)
- Desktop: 1024px (lg)

Key responsive features:
- Single column layout on mobile
- Two column layout on desktop
- Flexible input containers
- Adaptive preview sizing

## Customization
## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
