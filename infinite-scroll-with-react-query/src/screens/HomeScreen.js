import React from 'react';
import { Box, Text, FlatList, Divider, Spinner } from 'native-base';
import { useQuery } from 'react-query';

import { gamesApi } from '../api';

export const HomeScreen = () => {
  const { isLoading, data } = useQuery('games', gamesApi.fetchAllGames);

  const gameItemExtractorKey = (item, index) => {
    return index.toString();
  };

  const renderData = item => {
    return (
      <Text fontSize='20' py='2'>
        {item.item.name}
      </Text>
    );
  };

  return isLoading ? (
    <Box
      flex={1}
      backgroundColor='white'
      alignItems='center'
      justifyContent='center'
    >
      <Spinner color='emerald.500' size='lg' />
    </Box>
  ) : (
    <Box flex={1} safeAreaTop backgroundColor='white'>
      <Box height={16} justifyContent={'center'} px={2}>
        <Text fontSize={28} fontWeight={'600'} color={'emerald.500'}>
          Explore Games
        </Text>
      </Box>
      <Divider />
      <Box px={2}>
        <FlatList
          data={data.results}
          keyExtractor={gameItemExtractorKey}
          renderItem={renderData}
        />
      </Box>
    </Box>
  );
};
