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

### Sample Configuration Format

```json
{
  "configName": "config-1",
  "botName": "Greebo",
  "fontFamily": "Space Grotesk, sans-serif",
  "headerColor": "#E63A1E",
  "headerFontColor": "#FFFFFF",
  "backgroundColor": "#E8E1DB",
  "chatFontColor": "#323130",
  "avatarImage": "/path/to/avatar.png",
  "launcherImage": "/path/to/launcher.png"
}
```

## Component Structure

```
ChatWidgetConfigurator/
├── Configuration Panel/
│   ├── Config Name Input
│   ├── Bot Name Input
│   ├── Font Family Select
│   ├── Color Pickers
│   └── Image URL Inputs
└── Preview Panel/
    ├── Header
    ├── Chat Content
    └── Input Area
```

## Key Features Implementation

### State Management
```javascript
const [config, setConfig] = useState({
  configName: 'config-1',
  botName: 'Greebo',
  // ... other properties
});
```

### Configuration Updates
```javascript
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setConfig(prev => ({
    ...prev,
    [name]: value
  }));
};
```

### File Operations
```javascript
const handleDownloadConfig = () => {
  const dataStr = JSON.stringify(config, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  // ... download logic
};
```

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

### Adding New Font Options

Modify the font family select options in the component:

```javascript
<select name="fontFamily" value={config.fontFamily} onChange={handleInputChange}>
  <option>Space Grotesk, sans-serif</option>
  <option>Your New Font, sans-serif</option>
</select>
```

### Adding New Configuration Options

1. Add the new option to the initial state:
```javascript
const [config, setConfig] = useState({
  // ... existing options
  newOption: 'default value'
});
```

2. Add the corresponding input field in the configuration panel
3. Update the preview component to use the new option

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Best Practices

- Keep configuration options logically grouped
- Maintain real-time preview synchronization
- Ensure proper error handling for file operations
- Follow React hooks best practices
- Maintain responsive design principles

## Future Enhancements

- [ ] Add configuration presets
- [ ] Implement undo/redo functionality
- [ ] Add form validation
- [ ] Implement error boundaries
- [ ] Add loading states
- [ ] Add TypeScript support
- [ ] Add unit tests
- [ ] Add theme export/import
- [ ] Add accessibility features

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)
Project Link: [https://github.com/yourusername/chat-widget-configurator](https://github.com/yourusername/chat-widget-configurator)
