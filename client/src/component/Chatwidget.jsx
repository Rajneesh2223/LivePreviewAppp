import React, { useState } from 'react';
import { X, Mic } from 'lucide-react';

const ChatWidgetConfigurator = () => {
  const [config, setConfig] = useState({
    configName: 'config-1',
    botName: 'Greebo',
    fontFamily: 'Space Grotesk, sans-serif',
    headerColor: '#E63A1E',
    headerFontColor: '#FFFFFF',
    backgroundColor: '#E8E1DB',
    chatFontColor: '#323130',
    avatarImage: '/api/placeholder/40/40',
    launcherImage: '/api/placeholder/40/40'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDownloadConfig = () => {
    const dataStr = JSON.stringify(config, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${config.configName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleLoadConfig = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const loadedConfig = JSON.parse(event.target.result);
          setConfig(loadedConfig);
        } catch (error) {
          console.error('Error parsing config file:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Configuration Panel */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="mb-6">
              <label 
                htmlFor="configFile" 
                className="inline-block px-4 py-2 bg-black text-white rounded-md cursor-pointer hover:bg-gray-800"
              >
                Load Config
              </label>
              <input
                id="configFile"
                type="file"
                accept=".json"
                onChange={handleLoadConfig}
                className="hidden"
              />
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Config Name</label>
                <input
                  type="text"
                  name="configName"
                  value={config.configName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Bot Name</label>
                <input
                  type="text"
                  name="botName"
                  value={config.botName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Font Family</label>
                <select
                  name="fontFamily"
                  value={config.fontFamily}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option>Space Grotesk, sans-serif</option>
                  <option>Arial, sans-serif</option>
                  <option>Roboto, sans-serif</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Header Color</label>
                <div className="flex items-center">
                  <input
                    type="color"
                    name="headerColor"
                    value={config.headerColor}
                    onChange={handleInputChange}
                    className="w-12 h-8"
                  />
                  <input
                    type="text"
                    name="headerColor"
                    value={config.headerColor}
                    onChange={handleInputChange}
                    className="ml-2 p-2 border rounded flex-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Header Font Color</label>
                <div className="flex items-center">
                  <input
                    type="color"
                    name="headerFontColor"
                    value={config.headerFontColor}
                    onChange={handleInputChange}
                    className="w-12 h-8"
                  />
                  <input
                    type="text"
                    name="headerFontColor"
                    value={config.headerFontColor}
                    onChange={handleInputChange}
                    className="ml-2 p-2 border rounded flex-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Background Color</label>
                <div className="flex items-center">
                  <input
                    type="color"
                    name="backgroundColor"
                    value={config.backgroundColor}
                    onChange={handleInputChange}
                    className="w-12 h-8"
                  />
                  <input
                    type="text"
                    name="backgroundColor"
                    value={config.backgroundColor}
                    onChange={handleInputChange}
                    className="ml-2 p-2 border rounded flex-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Chat Font Color</label>
                <div className="flex items-center">
                  <input
                    type="color"
                    name="chatFontColor"
                    value={config.chatFontColor}
                    onChange={handleInputChange}
                    className="w-12 h-8"
                  />
                  <input
                    type="text"
                    name="chatFontColor"
                    value={config.chatFontColor}
                    onChange={handleInputChange}
                    className="ml-2 p-2 border rounded flex-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Avatar Image URL</label>
                <input
                  type="text"
                  name="avatarImage"
                  value={config.avatarImage}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Launcher Image URL</label>
                <input
                  type="text"
                  name="launcherImage"
                  value={config.launcherImage}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="w-full lg:w-1/2">
          <div className="lg:sticky lg:top-8">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Live Preview
            </h2>

            <div 
              className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden"
              style={{ fontFamily: config.fontFamily }}
            >
              {/* Header */}
              <div 
                className="p-4 flex items-center justify-between"
                style={{ backgroundColor: config.headerColor }}
              >
                <div className="flex items-center">
                  <img
                    src={config.avatarImage}
                    alt="Bot Avatar"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span style={{ color: config.headerFontColor }}>{config.botName}</span>
                </div>
                <X className="cursor-pointer" style={{ color: config.headerFontColor }} />
              </div>

              {/* Chat Content */}
              <div 
                className="h-96 p-4 overflow-y-auto"
                style={{ backgroundColor: config.backgroundColor }}
              >
                <div className="flex items-start mb-4">
                  <img
                    src={config.avatarImage}
                    alt="Bot Avatar"
                    className="w-8 h-8 rounded-full mr-2 flex-shrink-0"
                  />
                  <div 
                    className="bg-white rounded-lg p-3 max-w-[calc(100%-2.5rem)]"
                    style={{ color: config.chatFontColor }}
                  >
                    Hi! I'm {config.botName}, your friendly concierge monster, here to answer questions, show you around, and automatically perform tasks on the site for you. How can I help?
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t">
                <div className="flex items-center bg-gray-100 rounded-lg p-2">
                  <input
                    type="text"
                    placeholder="Need help? Just type or say it"
                    className="flex-1 bg-transparent outline-none min-w-0"
                  />
                  <Mic className="text-gray-400 ml-2 flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center mt-4">
              <button
                onClick={handleDownloadConfig}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Download Config
              </button>
              <div className="text-sm text-gray-500 mt-2">{config.configName}.json</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidgetConfigurator;