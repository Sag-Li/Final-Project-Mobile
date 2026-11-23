import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

// Coordenadas do Marco Zero
const DEFAULT_LOCATION = {
  latitude: -8.0631,
  longitude: -34.8711,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export function useAppLocation() {
  const [currentRegion, setCurrentRegion] = useState(DEFAULT_LOCATION);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // Pede autorização ao sistema
        let { status } = await Location.requestForegroundPermissionsAsync();
        
        // Se o utilizador recusar, encerra a função e mantém o Marco Zero
        if (status !== 'granted') {
          setErrorMsg('Permissão de localização negada. A mostrar o centro do Recife.');
          setIsLoading(false);
          return;
        }

        // Se aceitar, recolhe as coordenadas exatas do telemóvel
        let location = await Location.getCurrentPositionAsync({});
        setCurrentRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      } catch (error) {
        setErrorMsg('Erro ao obter localização.');
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { currentRegion, errorMsg, isLoading };
}