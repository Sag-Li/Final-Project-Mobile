export function useQRResolver() {
  const resolveQRCode = (data: string): string | null => {
    try {
      // Verifica se o QR Code é compativel
      if (data.includes('pet/')) {
        const parts = data.split('pet/');
        return parts[1]; // Retorna o ID do animal
      }
      
      // Se for apenas texto com o ID por engano
      if (data.startsWith('p') && data.length <= 3) {
        return data;
      }
      
      return null;
    } catch (error) {
      return null;
    }
  };

  return { resolveQRCode };
}