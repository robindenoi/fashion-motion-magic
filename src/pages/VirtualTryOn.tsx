import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Image, Folder, Plus, Bot, Sparkles } from 'lucide-react';
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
    { id: 'sneakers', label: 'Sneakers' },
    { id: 'heels', label: 'Heels' },
    { id: 'boots', label: 'Boots' },
  ];

  const jewelryTypes = [
    { id: 'ring', label: 'Ring (soon)', disabled: true },
    { id: 'bracelet', label: 'Bracelet', disabled: false },
    { id: 'earrings', label: 'Earrings', disabled: false },
    { id: 'sunglasses', label: 'Sunglasses', disabled: false },
  ];

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-background to-gray-50">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center mb-8">
            <div className="bg-white/50 backdrop-blur-sm p-1 rounded-lg shadow-lg">
              <Tabs value={activeTab} className="w-full max-w-md">
                <TabsList className="grid grid-cols-3 w-full">
                  {tabs.map((tab) => (
                    <TabsTrigger 
                      key={tab.id} 
                      value={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`transition-all duration-300 ${activeTab === tab.id ? "bg-primary text-primary-foreground shadow-lg scale-105" : ""}`}
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Folder className="text-primary" size={20} />
                  <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Collection : AI Virtual Try On (All)
                  </span>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border-l-4 border-primary transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center shadow-lg">
                    <Sparkles className="text-white" size={16} />
                  </div>
                  <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Mode : AI Virtual try on {activeCategory}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`py-2.5 px-4 text-center rounded-lg text-sm transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-primary text-white shadow-lg scale-105'
                          : 'bg-white/80 text-gray-800 hover:bg-primary/5'
                      } ${category.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
                      onClick={() => !category.disabled && setActiveCategory(category.id)}
                      disabled={category.disabled}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
                
                <div className="text-xs text-gray-500 italic">
                  Note : To create an AI model wearing your items, go to the <span className="text-primary font-medium">Models</span> section
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center shadow-lg">
                      <Plus className="text-white" size={16} />
                    </div>
                    <span className="font-medium">
                      Add a model and {activeCategory} to try on
                    </span>
                  </div>
                </div>
                
                <div className="bg-white/90 rounded-xl p-4 mb-6 shadow-sm">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/50">
                    <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                      <Image size={24} className="text-gray-400" />
                    </div>
                    {activeCategory === 'jewelry' ? (
                      <span className="text-sm font-medium text-gray-700">With eyes visible</span>
                    ) : (
                      <span className="text-sm font-medium text-gray-700">Select human model</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-3 text-center italic">
                    Use good resolution images for best results
                  </div>
                </div>

                {activeCategory === 'jewelry' ? (
                  <>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {jewelryTypes.map((type) => (
                        <button
                          key={type.id}
                          disabled={type.disabled}
                          className={`flex flex-col items-center justify-center py-4 rounded-lg transition-all duration-300 ${
                            type.id === 'sunglasses' 
                              ? 'bg-primary text-white shadow-lg scale-105' 
                              : 'bg-white/90 text-gray-800 hover:bg-primary hover:text-white'
                          } ${type.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
                        >
                          <span className="text-sm">{type.label}</span>
                        </button>
                      ))}
                    </div>
                    
                    <div className="bg-white/90 rounded-xl p-4 shadow-sm">
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/50">
                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                          <Image size={24} className="text-gray-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">New sunglasses</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-3 text-center italic">
                        Use good resolution images for best results
                      </div>
                    </div>
                  </>
                ) : activeCategory === 'shoes' ? (
                  <>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {shoeTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedShoeType(type.id)}
                          className={`py-4 px-3 rounded-lg transition-all duration-300 ${
                            selectedShoeType === type.id 
                              ? 'bg-primary text-white shadow-lg scale-105' 
                              : 'bg-white/90 text-gray-800 hover:bg-primary hover:text-white'
                          }`}
                        >
                          <span className="text-sm">{type.label}</span>
                        </button>
                      ))}
                    </div>
                    
                    <div className="bg-white/90 rounded-xl p-4 shadow-sm">
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/50">
                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                          <Image size={24} className="text-gray-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Select shoes</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-3 text-center italic">
                        Use good resolution images for best results
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {garmentTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedGarmentType(type.id)}
                          className={`flex flex-col items-center justify-center py-4 rounded-lg transition-all duration-300 ${
                            selectedGarmentType === type.id 
                              ? 'bg-primary text-white shadow-lg scale-105' 
                              : 'bg-white/90 text-gray-800 hover:bg-primary hover:text-white'
                          }`}
                        >
                          <span className="text-xl mb-1">{type.icon}</span>
                          <span className="text-xs">{type.label}</span>
                        </button>
                      ))}
                    </div>
                    
                    <div className="bg-white/90 rounded-xl p-4 mb-6 shadow-sm">
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/50">
                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                          <Image size={24} className="text-gray-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Select {selectedGarmentType}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-3 text-center italic">
                        Use good resolution images for best results
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <Button variant="outline" size="sm" className="flex items-center gap-2 border-primary/20 hover:border-primary/40">
                        <Bot size={16} />
                        <span>Tutorials</span>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="flex flex-col items-start">
                <h2 className="text-3xl font-light mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Select a model and {activeCategory} to get started
                </h2>
                <p className="text-gray-600">
                  Use the sidebar on the left to select your model and {activeCategory} for the AI virtual try-on.
                </p>
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
