import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Image, Folder, Plus, Shoe, BookOpen, Boot, Bot } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VirtualTryOn = () => {
  const [activeCategory, setActiveCategory] = useState('clothes');
  const [activeTab, setActiveTab] = useState('try-on');
  const [selectedShoeType, setSelectedShoeType] = useState('sneakers');
  const [selectedGarmentType, setSelectedGarmentType] = useState('top');

  const categories = [
    { id: 'clothes', label: 'Clothes', disabled: false },
    { id: 'shoes', label: 'Shoes', disabled: false },
    { id: 'jewelry', label: 'Jewelry', disabled: false },
    { id: 'head', label: 'Head (soon)', disabled: true },
    { id: 'bag', label: 'Bag (soon)', disabled: true },
  ];

  const tabs = [
    { id: 'try-on', label: 'AI Virtual Try On' },
    { id: 'model-uploads', label: 'Model uploads' },
    { id: 'item-uploads', label: 'Item uploads' },
  ];

  const garmentTypes = [
    { id: 'top', label: 'Top', icon: '👚' },
    { id: 'bottom', label: 'Bottom', icon: '👖' },
    { id: 'one-piece', label: 'One-piece', icon: '👗' },
  ];

  const shoeTypes = [
    { id: 'sneakers', label: 'Sneakers', icon: Shoe },
    { id: 'heels', label: 'Heels', icon: BookOpen },
    { id: 'boots', label: 'Boots', icon: Boot },
  ];

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          
          <div className="flex justify-center mb-6">
            <Tabs value={activeTab} className="w-full max-w-md">
              <TabsList className="grid grid-cols-3 w-full">
                {tabs.map((tab) => (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={activeTab === tab.id ? "bg-primary text-primary-foreground" : ""}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <Folder className="text-primary" size={20} />
                  <span className="font-medium">Collection : AI Virtual Try On (All)</span>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-xl p-4 mb-4 border-l-4 border-primary">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <span className="font-medium">
                    Mode : AI Virtual try on {activeCategory}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`py-2 px-4 text-center rounded-full text-sm transition-colors ${
                        activeCategory === category.id
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-800'
                      } ${category.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-white'}`}
                      onClick={() => !category.disabled && setActiveCategory(category.id)}
                      disabled={category.disabled}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
                
                <div className="text-xs text-gray-500 mt-4">
                  Note : To create an AI model wearing your items, go to the <span className="text-primary">Models</span> section
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Plus className="text-white" size={16} />
                    </div>
                    <span className="font-medium">
                      Add a model and {activeCategory === 'shoes' ? 'shoes' : 'clothes'} to try on
                    </span>
                  </div>
                  <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mb-2">
                      <Image size={24} className="text-gray-400" />
                    </div>
                    <span className="text-sm font-medium">Select human model</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 text-center">
                    Use good resolution images for best results
                  </div>
                </div>
                
                {activeCategory === 'shoes' ? (
                  <>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {shoeTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedShoeType(type.id)}
                          className={`flex flex-col items-center justify-center py-4 rounded-lg ${
                            selectedShoeType === type.id ? 'bg-primary text-white' : 'bg-white text-gray-800'
                          }`}
                        >
                          <type.icon className="mb-1" size={20} />
                          <span className="text-xs">{type.label}</span>
                        </button>
                      ))}
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mb-2">
                          <Image size={24} className="text-gray-400" />
                        </div>
                        <span className="text-sm font-medium">Select shoes</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2 text-center">
                        Use good resolution images for best results
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {garmentTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedGarmentType(type.id)}
                          className={`flex flex-col items-center justify-center py-4 rounded-lg ${
                            selectedGarmentType === type.id ? 'bg-primary text-white' : 'bg-white text-gray-800'
                          }`}
                        >
                          <span className="text-xl">{type.icon}</span>
                          <span className="text-xs mt-1">{type.label}</span>
                        </button>
                      ))}
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mb-2">
                          <Image size={24} className="text-gray-400" />
                        </div>
                        <span className="text-sm font-medium">Select {selectedGarmentType}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2 text-center">
                        Use good resolution images for best results
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <Button variant="outline" size="sm" className="flex items-center gap-2 border-black/20">
                        <Bot size={16} />
                        <span>Tutorials</span>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-gray-100 rounded-xl p-6">
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-medium mb-4">Select a model and {activeCategory === 'shoes' ? 'shoes' : 'clothes'} to get started</h2>
                <p className="text-gray-600">Use the sidebar on the left to select your model and {activeCategory === 'shoes' ? 'shoes' : 'clothes'} for the AI virtual try-on.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VirtualTryOn;
