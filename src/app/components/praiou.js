"use client";

import { useState } from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import praiou from '../../../public/praiou logo.svg';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';

const cidadesLitoraneas = [
  { estado: 'Rio de Janeiro', cidade: 'Rio de Janeiro' },
  { estado: 'Bahia', cidade: 'Salvador' },
  { estado: 'Ceará', cidade: 'Fortaleza' },
  { estado: 'Pernambuco', cidade: 'Recife' },
  { estado: 'Maranhão', cidade: 'São Luís' },
  { estado: 'Rio de Janeiro', cidade: 'São Gonçalo' },
  { estado: 'Alagoas', cidade: 'Maceió' },
  { estado: 'Rio de Janeiro', cidade: 'Duque de Caxias' },
  { estado: 'Rio Grande do Norte', cidade: 'Natal' },
  { estado: 'Paraíba', cidade: 'João Pessoa' },
  { estado: 'Pernambuco', cidade: 'Jaboatão dos Guararapes' },
  { estado: 'Sergipe', cidade: 'Aracaju' },
  { estado: 'Espírito Santo', cidade: 'Serra' },
  { estado: 'Rio de Janeiro', cidade: 'Niterói' },
  { estado: 'Rio de Janeiro', cidade: 'Campos dos Goytacazes' },
  { estado: 'Amapá', cidade: 'Macapá' },
  { estado: 'Santa Catarina', cidade: 'Florianópolis' },
  { estado: 'Espírito Santo', cidade: 'Vila Velha' },
  { estado: 'São Paulo', cidade: 'Santos' },
  { estado: 'Pernambuco', cidade: 'Olinda' },
  { estado: 'São Paulo', cidade: 'São Vicente' },
  { estado: 'Espírito Santo', cidade: 'Vitória' },
  { estado: 'Ceará', cidade: 'Caucaia' },
  { estado: 'Pernambuco', cidade: 'Paulista' },
  { estado: 'São Paulo', cidade: 'Praia Grande' },
  { estado: 'São Paulo', cidade: 'Guarujá' },
  { estado: 'Bahia', cidade: 'Camaçari' },
  { estado: 'Rio Grande do Norte', cidade: 'Parnamirim' },
  { estado: 'Rio de Janeiro', cidade: 'Macaé' },
  { estado: 'Rio de Janeiro', cidade: 'Magé' },
  { estado: 'Rio de Janeiro', cidade: 'Itaboraí' },
  { estado: 'Rio de Janeiro', cidade: 'Cabo Frio' },
  { estado: 'Santa Catarina', cidade: 'Itajaí' },
  { estado: 'Rio Grande do Sul', cidade: 'Rio Grande' },
  { estado: 'Pernambuco', cidade: 'Cabo de Santo Agostinho' },
  { estado: 'Rio de Janeiro', cidade: 'Angra dos Reis' },
  { estado: 'Bahia', cidade: 'Lauro de Freitas' },
  { estado: 'Maranhão', cidade: 'São José de Ribamar' },
  { estado: 'Espírito Santo', cidade: 'Linhares' },
  { estado: 'Santa Catarina', cidade: 'Palhoça' },
  { estado: 'Bahia', cidade: 'Ilhéus' },
  { estado: 'Rio de Janeiro', cidade: 'Maricá' },
  { estado: 'Paraná', cidade: 'Paranaguá' },
  { estado: 'Piauí', cidade: 'Parnaíba' },
  { estado: 'Rio de Janeiro', cidade: 'Rio das Ostras' },
  { estado: 'Bahia', cidade: 'Porto Seguro' },
  { estado: 'Santa Catarina', cidade: 'Balneário Camboriú' },
  { estado: 'Paraíba', cidade: 'Santa Rita' },
  { estado: 'Rio de Janeiro', cidade: 'Itaguaí' },
  { estado: 'Rio de Janeiro', cidade: 'Araruama' },
  { estado: 'Espírito Santo', cidade: 'São Mateus' },
  { estado: 'Ceará', cidade: 'Itapipoca' },
  { estado: 'Pará', cidade: 'Bragança' },
  { estado: 'Espírito Santo', cidade: 'Guarapari' },
  { estado: 'Maranhão', cidade: 'Paço do Lumiar' },
  { estado: 'São Paulo', cidade: 'Caraguatatuba' },
  { estado: 'Pernambuco', cidade: 'Igarassu' },
  { estado: 'São Paulo', cidade: 'Itanhaém' },
  { estado: 'Espírito Santo', cidade: 'Aracruz' },
  { estado: 'Bahia', cidade: 'Valença' },
  { estado: 'Pernambuco', cidade: 'Ipojuca' },
  { estado: 'São Paulo', cidade: 'Ubatuba' },
  { estado: 'Rio de Janeiro', cidade: 'Saquarema' },
  { estado: 'São Paulo', cidade: 'São Sebastião' },
  { estado: 'Santa Catarina', cidade: 'Navegantes' },
  { estado: 'Ceará', cidade: 'Aquiraz' },
  { estado: 'Pernambuco', cidade: 'Goiana' },
  { estado: 'Ceará', cidade: 'Aracati' },
  { estado: 'Rio Grande do Norte', cidade: 'Ceará-Mirim' },
  { estado: 'Ceará', cidade: 'Cascavel' },
  { estado: 'Sergipe', cidade: 'Estância' },
  { estado: 'São Paulo', cidade: 'Peruíbe' },
  { estado: 'Santa Catarina', cidade: 'Araranguá' },
  { estado: 'Paraíba', cidade: 'Cabedelo' },
  { estado: 'Santa Catarina', cidade: 'Itapema' },
  { estado: 'Ceará', cidade: 'Camocim' },
  { estado: 'São Paulo', cidade: 'Bertioga' },
  { estado: 'Ceará', cidade: 'Acaraú' },
  { estado: 'Maranhão', cidade: 'Barreirinhas' },
  { estado: 'Pará', cidade: 'Viseu' },
  { estado: 'Rio de Janeiro', cidade: 'Guapimirim' },
  { estado: 'Maranhão', cidade: 'Tutóia' },
  { estado: 'Alagoas', cidade: 'Coruripe' },
  { estado: 'São Paulo', cidade: 'Mongaguá' },
  { estado: 'Ceará', cidade: 'Trairi' },
  { estado: 'Pará', cidade: 'Vigia' },
  { estado: 'Ceará', cidade: 'Beberibe' },
  { estado: 'Rio Grande do Sul', cidade: 'Capão da Canoa' },
  { estado: 'Santa Catarina', cidade: 'São Francisco do Sul' },
  { estado: 'Alagoas', cidade: 'Marechal Deodoro' },
  { estado: 'Rio Grande do Sul', cidade: 'Tramandaí' },
  { estado: 'Ceará', cidade: 'São Gonçalo do Amarante' },
  { estado: 'Bahia', cidade: 'Mata de São João' },
  { estado: 'Maranhão', cidade: 'Araioses' },
  { estado: 'Pará', cidade: 'Augusto Corrêa' },
  { estado: 'Rio Grande do Sul', cidade: 'Osório' },
  { estado: 'Pernambuco', cidade: 'Sirinhaém' },
  { estado: 'Santa Catarina', cidade: 'Laguna' },
  { estado: 'Santa Catarina', cidade: 'Imbituba' },
  { estado: 'Rio de Janeiro', cidade: 'Mangaratiba' },
  { estado: 'Rio de Janeiro', cidade: 'Casimiro de Abreu' },
  { estado: 'Ceará', cidade: 'Amontada' },
  { estado: 'Bahia', cidade: 'Nova Viçosa' },
  { estado: 'Bahia', cidade: 'Vera Cruz' },
  { estado: 'Rio de Janeiro', cidade: 'Paraty' },
  { estado: 'Maranhão', cidade: 'Rosário' },
  { estado: 'Pernambuco', cidade: 'Barreiros' },
  { estado: 'Rio de Janeiro', cidade: 'São Francisco de Itabapoana' },
  { estado: 'Ceará', cidade: 'Itarema' },
  { estado: 'Bahia', cidade: 'Entre Rios' },
  { estado: 'Bahia', cidade: 'Mucuri' },
  { estado: 'Pará', cidade: 'Salinópolis' },
  { estado: 'Rio de Janeiro', cidade: 'Armação dos Búzios' },
  { estado: 'Pará', cidade: 'Curuçá' },
  { estado: 'Rio Grande do Sul', cidade: 'Torres' },
  { estado: 'Espírito Santo', cidade: 'Marataízes' },
  { estado: 'Santa Catarina', cidade: 'Tijucas' },
  { estado: 'Santa Catarina', cidade: 'Araquari' },
  { estado: 'Maranhão', cidade: 'Santa Rita' },
  { estado: 'Bahia', cidade: 'Esplanada' },
  { estado: 'Paraná', cidade: 'Guaratuba' },
  { estado: 'Rio de Janeiro', cidade: 'São João da Barra' },
  { estado: 'Maranhão', cidade: 'Turiaçu' },
  { estado: 'Bahia', cidade: 'Camamu' },
  { estado: 'Ceará', cidade: 'Paracuru' },
  { estado: 'São Paulo', cidade: 'Ilhabela' },
  { estado: 'Paraná', cidade: 'Matinhos' },
  { estado: 'Sergipe', cidade: 'Itaporanga d\'Ajuda' },
  { estado: 'Espírito Santo', cidade: 'Itapemirim' },
  { estado: 'Rio Grande do Norte', cidade: 'Canguaretama' },
  { estado: 'Rio Grande do Norte', cidade: 'Touros' },
  { estado: 'Ceará', cidade: 'Paraipaba' },
  { estado: 'Alagoas', cidade: 'Maragogi' },
  { estado: 'Maranhão', cidade: 'Cururupu' },
  { estado: 'Santa Catarina', cidade: 'Penha' },
  { estado: 'Rio Grande do Norte', cidade: 'Macau' },
  { estado: 'Bahia', cidade: 'Canavieiras' },
  { estado: 'Espírito Santo', cidade: 'Conceição da Barra' },
  { estado: 'Pará', cidade: 'Tracuateua' },
  { estado: 'São Paulo', cidade: 'Iguape' },
  { estado: 'Maranhão', cidade: 'Raposa' },
  { estado: 'Sergipe', cidade: 'Barra dos Coqueiros' },
  { estado: 'Rio de Janeiro', cidade: 'Arraial do Cabo' },
  { estado: 'Piauí', cidade: 'Luís Correia' },
  { estado: 'Rio Grande do Sul', cidade: 'Santa Vitória do Palmar' },
  { estado: 'Pará', cidade: 'Maracanã' },
  { estado: 'Espírito Santo', cidade: 'Anchieta' },
  { estado: 'Santa Catarina', cidade: 'Barra Velha' },
  { estado: 'Maranhão', cidade: 'Humberto de Campos' },
  { estado: 'Bahia', cidade: 'Ituberá' },
  { estado: 'Rio Grande do Norte', cidade: 'Extremoz' },
  { estado: 'Pará', cidade: 'Marapanim' },
  { estado: 'Bahia', cidade: 'Itacaré' },
  { estado: 'Bahia', cidade: 'Prado' },
  { estado: 'Bahia', cidade: 'Santa Cruz Cabrália' },
  { estado: 'Rio Grande do Norte', cidade: 'Areia Branca' },
  { estado: 'Rio Grande do Norte', cidade: 'Nísia Floresta' },
  { estado: 'Rio Grande do Sul', cidade: 'São José do Norte' },
  { estado: 'Paraná', cidade: 'Pontal do Paraná' },
  { estado: 'Amapá', cidade: 'Oiapoque' },
  { estado: 'Maranhão', cidade: 'Icatu' },
  { estado: 'Pernambuco', cidade: 'Ilha de Itamaracá' },
  { estado: 'Bahia', cidade: 'Conde' },
  { estado: 'Pará', cidade: 'Soure' },
  { estado: 'Ceará', cidade: 'Cruz' },
  { estado: 'Rio de Janeiro', cidade: 'Quissamã' },
  { estado: 'Paraíba', cidade: 'Conde' },
  { estado: 'Paraíba', cidade: 'Rio Tinto' },
  { estado: 'Maranhão', cidade: 'Carutapera' },
  { estado: 'Pará', cidade: 'Salvaterra' },
  { estado: 'Pará', cidade: 'Chaves' },
  { estado: 'Pernambuco', cidade: 'Tamandaré' },
  { estado: 'Bahia', cidade: 'Belmonte' },
  { estado: 'Santa Catarina', cidade: 'Balneário Piçarras' },
  { estado: 'Santa Catarina', cidade: 'Garopaba' },
  { estado: 'Pará', cidade: 'São João de Pirabas' },
  { estado: 'Rio Grande do Sul', cidade: 'Imbé' },
  { estado: 'Bahia', cidade: 'Alcobaça' },
  { estado: 'Maranhão', cidade: 'Alcântara' },
  { estado: 'Bahia', cidade: 'Caravelas' },
  { estado: 'Espírito Santo', cidade: 'Piúma' },
  { estado: 'Espírito Santo', cidade: 'Fundão' },
  { estado: 'Santa Catarina', cidade: 'Porto Belo' },
  { estado: 'Pernambuco', cidade: 'São José da Coroa Grande' },
  { estado: 'Maranhão', cidade: 'Bequimão' },
  { estado: 'Maranhão', cidade: 'São João Batista' },
  { estado: 'Santa Catarina', cidade: 'Itapoá' },
  { estado: 'Bahia', cidade: 'Maraú' },
  { estado: 'Bahia', cidade: 'Uruçuca' },
  { estado: 'Maranhão', cidade: 'Cândido Mendes' },
  { estado: 'Santa Catarina', cidade: 'Jaguaruna' },
  { estado: 'Ceará', cidade: 'Icapuí' },
  { estado: 'Ceará', cidade: 'Jijoca de Jericoacoara' },
  { estado: 'Santa Catarina', cidade: 'Bombinhas' },
  { estado: 'Paraíba', cidade: 'Pitimbu' },
  { estado: 'Bahia', cidade: 'Una' },
  { estado: 'Bahia', cidade: 'Jaguaripe' },
  { estado: 'Maranhão', cidade: 'Bacuri' },
  { estado: 'Bahia', cidade: 'Cairu' },
  { estado: 'Pará', cidade: 'São Caetano de Odivelas' },
  { estado: 'Alagoas', cidade: 'Piaçabuçu' },
  { estado: 'Maranhão', cidade: 'Apicum-Açu' },
  { estado: 'Maranhão', cidade: 'Bacabeira' },
  { estado: 'Ceará', cidade: 'Fortim' },
  { estado: 'Rio Grande do Sul', cidade: 'Xangri-Lá' },
  { estado: 'Rio de Janeiro', cidade: 'Carapebus' },
  { estado: 'Rio Grande do Sul', cidade: 'Cidreira' },
  { estado: 'Maranhão', cidade: 'Paulino Neves' },
  { estado: 'Alagoas', cidade: 'Barra de Santo Antônio' },
  { estado: 'Maranhão', cidade: 'Santo Amaro do Maranhão' },
  { estado: 'Rio Grande do Norte', cidade: 'Guamaré' },
  { estado: 'Maranhão', cidade: 'Primeira Cruz' },
  { estado: 'Alagoas', cidade: 'Passo de Camaragibe' },
  { estado: 'Ceará', cidade: 'Barroquinha' },
  { estado: 'Santa Catarina', cidade: 'Governador Celso Ramos' },
  { estado: 'Sergipe', cidade: 'Pacatuba' },
  { estado: 'Rio Grande do Norte', cidade: 'Tibau do Sul' },
  { estado: 'Rio Grande do Sul', cidade: 'Balneário Pinhal' },
  { estado: 'Bahia', cidade: 'Nilo Peçanha' },
  { estado: 'Pará', cidade: 'Quatipuru' },
  { estado: 'Bahia', cidade: 'Igrapiúna' },
  { estado: 'Alagoas', cidade: 'Paripueira' },
  { estado: 'Paraíba', cidade: 'Lucena' },
  { estado: 'Santa Catarina', cidade: 'Balneário Arroio do Silva' },
  { estado: 'Rio Grande do Sul', cidade: 'Mostardas' },
  { estado: 'Santa Catarina', cidade: 'Balneário Rincão' },
  { estado: 'São Paulo', cidade: 'Cananéia' },
  { estado: 'Rio Grande do Norte', cidade: 'Maxaranguape' },
  { estado: 'Maranhão', cidade: 'Axixá' },
  { estado: 'Pará', cidade: 'Colares' },
  { estado: 'Maranhão', cidade: 'Guimarães' },
  { estado: 'Maranhão', cidade: 'Godofredo Viana' },
  { estado: 'Alagoas', cidade: 'Jequiá da Praia' },
  { estado: 'Espírito Santo', cidade: 'Presidente Kennedy' },
  { estado: 'Rio Grande do Sul', cidade: 'Palmares do Sul' },
  { estado: 'Rio Grande do Sul', cidade: 'Terra de Areia' },
  { estado: 'Maranhão', cidade: 'Cajapió' },
  { estado: 'São Paulo', cidade: 'Ilha Comprida' },
  { estado: 'Amapá', cidade: 'Calçoene' },
  { estado: 'Santa Catarina', cidade: 'Balneário Gaivota' },
  { estado: 'Rio Grande do Norte', cidade: 'Rio do Fogo' },
  { estado: 'Santa Catarina', cidade: 'Balneário Barra do Sul' },
  { estado: 'Bahia', cidade: 'Jandaíra' },
  { estado: 'Maranhão', cidade: 'Cedral' },
  { estado: 'Rio Grande do Norte', cidade: 'Grossos' },
  { estado: 'Rio Grande do Norte', cidade: 'São Miguel do Gostoso' },
  { estado: 'Maranhão', cidade: 'Serrano do Maranhão' },
  { estado: 'Rio Grande do Sul', cidade: 'Arroio do Sal' },
  { estado: 'Piauí', cidade: 'Ilha Grande' },
  { estado: 'Sergipe', cidade: 'Pirambu' },
  { estado: 'Rio Grande do Norte', cidade: 'Baía Formosa' },
  { estado: 'Amapá', cidade: 'Amapá' },
  { estado: 'Paraíba', cidade: 'Baía da Traição' },
  { estado: 'Santa Catarina', cidade: 'Passo de Torres' },
  { estado: 'Paraíba', cidade: 'Marcação' },
  { estado: 'Pará', cidade: 'Magalhães Barata' },
  { estado: 'Paraíba', cidade: 'Mataraca' },
  { estado: 'Alagoas', cidade: 'Japaratinga' },
  { estado: 'Alagoas', cidade: 'Barra de São Miguel' },
  { estado: 'Sergipe', cidade: 'Brejo Grande' },
  { estado: 'Alagoas', cidade: 'São Miguel dos Milagres' },
  { estado: 'Alagoas', cidade: 'Porto de Pedras' },
  { estado: 'Piauí', cidade: 'Cajueiro da Praia' },
  { estado: 'Paraná', cidade: 'Guaraqueçaba' },
  { estado: 'Santa Catarina', cidade: 'Paulo Lopes' },
  { estado: 'Maranhão', cidade: 'Luís Domingues' },
  { estado: 'Alagoas', cidade: 'Roteiro' },
  { estado: 'Rio Grande do Norte', cidade: 'Caiçara do Norte' },
  { estado: 'Rio Grande do Norte', cidade: 'Porto do Mangue' },
  { estado: 'Maranhão', cidade: 'Porto Rico do Maranhão' },
  { estado: 'Maranhão', cidade: 'Bacurituba' },
  { estado: 'Rio Grande do Sul', cidade: 'Tavares' },
  { estado: 'Alagoas', cidade: 'Feliz Deserto' },
  { estado: 'Rio Grande do Norte', cidade: 'Senador Georgino Avelino' },
  { estado: 'Rio Grande do Norte', cidade: 'Tibau' },
  { estado: 'Rio Grande do Norte', cidade: 'Pedra Grande' },
  { estado: 'Pernambuco', cidade: 'Fernando de Noronha' },
  { estado: 'Rio Grande do Norte', cidade: 'Galinhos' },
  { estado: 'Rio Grande do Norte', cidade: 'São Bento do Norte' },
];

export default function AppPraiou() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState({ city: '', state: '' });
  const [openSnackbar, setOpenSnackbar] = useState({ open: false, message: '' });
  const [weatherMessage, setWeatherMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const isLitoranea = (cidade) => {
    return cidadesLitoraneas.some(item => item.cidade.toLowerCase() === cidade.toLowerCase());
  };

  const fetchWeather = async (city) => {
    const apiKey = '1ccbda3a624a71e837f945d0eb67d34c'; // Chave da API
    setLoading(true);
    try {
      const geoRes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}&lang=pt`);
      const geoData = await geoRes.json();

      if (geoData.length === 0) {
        setOpenSnackbar({ open: true, message: 'Cidade não encontrada' });
        setLoading(false);
        return;
      }

      const { lat, lon, name, state, country } = geoData[0];

      if (country !== 'BR') {
        setOpenSnackbar({ open: true, message: 'Essa cidade não fica no Brasil' });
        setLoading(false);
        return;
      }

      if (!isLitoranea(name)) {
        setOpenSnackbar({ open: true, message: 'A cidade que você pesquisou não é litorânea' });
        setLoading(false);
        return;
      }

      setLocation({ city: name, state });

      const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt`);
      const weatherData = await weatherRes.json();

      setWeather(weatherData);
      generateWeatherMessage(weatherData);
    } catch (error) {
      console.error('Erro ao buscar dados do clima:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateWeatherMessage = (weatherData) => {
    const temp = weatherData.main.temp;
    const condition = weatherData.weather[0].main.toLowerCase();
    const currentTime = new Date().getTime() / 1000; // Tempo atual em segundos desde a época
    const sunrise = weatherData.sys.sunrise; // Tempo do nascer do sol em segundos desde a época
    const sunset = weatherData.sys.sunset; // Tempo do pôr do sol em segundos desde a época
    const isNight = currentTime < sunrise || currentTime > sunset;
    const description = weatherData.weather[0].description.toLowerCase();

    if (condition === 'clear' && temp >= 25 && temp <= 32) {
      setWeatherMessage(isNight ? 'Um bom momento para dar uma boa caminhada na beira do mar.' : 'Está ótimo para ir à praia.');
    } else if (['few clouds', 'scattered clouds', 'broken clouds', 'overcast clouds'].includes(description) && temp >= 25 && temp <= 32) {
      setWeatherMessage(isNight ? 'Um bom momento para dar uma boa caminhada na beira do mar.' : 'É um ótimo dia para ir para a praia mais tranquilo.');
    } else {
      setWeatherMessage('Melhor ficar em casa por enquanto, talvez não seja um bom momento para ir a praia.');
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar({ open: false, message: '' });
  };

  return (
    <>
      <Container
        fixed
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          padding: 2,
        }}
      >
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Image src={praiou} width={347} height={160} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            {/* Barra de pesquisa */}
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                backdropFilter: 'blur(10px)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '10px',
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Pesquisar cidade litóranea no Brasil"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => fetchWeather(city)}
                sx={{ height: '56px', color: 'black', bgcolor: '#FFF' }}
              >
                Buscar
              </Button>
            </Box>
          </Grid>

          {loading ? (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CircularProgress />
            </Grid>
          ) : (
            weather && (
              <>
                <Grid item xs={12} md={5}>
                  {/* Clima e ícone de clima */}
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(30px)',
                      borderRadius: '8px',
                      padding: '20px',
                    }}
                  >
                    <Typography sx={{ fontSize: '30px', fontWeight: '400', color: '#374357' }}>
                      {location.city}
                    </Typography>
                    <Box
                      sx={{
                        width: '100%',
                        height: '240px',
                        bgcolor: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(5px)',
                        borderRadius: '8px',
                        padding: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '60px', fontWeight: '400', marginRight: '20px', color: '#374357' }}>
                        {Math.round(weather.main.temp)}º
                      </Typography>
                      <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="Weather icon"
                        style={{ width: '100px', height: '100px' }}
                      />
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', gap: '28px', mb: '30px' }}>
                  {/* Informações adicionais sobre o clima */}
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(30px)',
                      borderRadius: '8px',
                      padding: '20px',
                    }}
                  >
                    <Typography sx={{ fontSize: '18px', fontWeight: '400', color: '#374357' }}>
                      {capitalizeFirstLetter(weather.weather[0].description)}
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: '400', color: '#374357' }}>
                      Velocidade do vento: {weather.wind.speed} m/s
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: '400', color: '#374357' }}>
                      Temperatura mínima: {Math.round(weather.main.temp_min)}º
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: '400', color: '#374357' }}>
                      Temperatura máxima: {Math.round(weather.main.temp_max)}º
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(30px)',
                      borderRadius: '8px',
                      padding: '20px',
                    }}
                  >
                    <Typography sx={{ fontSize: '18px', fontWeight: '400', color: '#374357' }}>
                      {weatherMessage}
                    </Typography>
                  </Box>
                </Grid>
              </>
            )
          )}
        </Grid>
      </Container>
      <Snackbar open={openSnackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {openSnackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}