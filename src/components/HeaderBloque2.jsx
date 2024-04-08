import React, { useState } from 'react';

export const HeaderBloque2 = () => {
  const [showImportModal, setShowImportModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const openImportModal = () => {
    setShowImportModal(true);
  };

  const closeImportModal = () => {
    setShowImportModal(false);
  };

  const openExportModal = () => {
    setShowExportModal(true);
  };

  const closeExportModal = () => {
    setShowExportModal(false);
  };

  return (
    <div className='flex justify-between items-center px-6 py-3'>
      <strong className='text-lg text-purple-dark font-nunito'>Calendario</strong>
      <div className='flex items-center gap-3'>
        <button className='bg-violet-blue flex text-white font-nunito rounded-xl justify-center w-28 h-11 items-center px-3 py-3' onClick={openImportModal}>Importar</button>
        <button className='bg-violet-blue flex text-white font-nunito rounded-xl justify-center w-28 h-11 items-center px-3 py-3' onClick={openExportModal}>Exportar</button>
      </div>
      
      {/* Modal de importación */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-20">
          <div className="bg-white rounded-2xl p-8">
            <strong className="text-lg font-nunito mb-9 justify-center flex">¿Importar calendario?</strong>
            <div className="flex justify-center gap-4">
              <button className="rounded-xl h-9 border items-center flex border-black py-1 px-4 font-nunito text-lg" onClick={closeImportModal}>Cancelar</button>
              <button className="rounded-xl w-32 h-9 border items-center flex justify-center border-violet-blue text-white bg-violet-blue py-1 px-6 font-nunito text-lg" onClick={closeImportModal}>Confirmar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de exportación */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-20">
          <div className="bg-white rounded-2xl p-8">
            <strong className="text-lg font-nunito mb-9 justify-center flex">¿Exportar calendario?</strong>
            <div className="flex justify-center gap-4">
              <button className="rounded-xl h-9 border items-center flex border-black py-1 px-4 font-nunito text-lg" onClick={closeExportModal}>Cancelar</button>
              <button className="rounded-xl w-32 h-9 border items-center flex justify-center border-violet-blue text-white bg-violet-blue py-1 px-6 font-nunito text-lg" onClick={closeExportModal}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

