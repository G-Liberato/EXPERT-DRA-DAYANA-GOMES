
import React, { useState } from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="resultados" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-2 font-bold tracking-tight">Resultados Reais</h2>
        <div className="w-16 h-1 bg-yellow-600 mx-auto mb-10"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {IMAGES.gallery.map((img, idx) => (
            <div 
              key={idx} 
              className="aspect-square relative overflow-hidden rounded-lg shadow-sm bg-gray-100 cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white bg-black/40 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-center text-gray-400 text-xs italic">
          *Resultados podem variar de pessoa para pessoa.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white text-3xl">&times;</button>
          <img 
            src={selectedImage} 
            alt="Resultado ampliado" 
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
