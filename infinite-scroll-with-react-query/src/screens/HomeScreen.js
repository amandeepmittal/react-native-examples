import React from 'react';
import { Box, Text, FlatList, Divider, Spinner } from 'native-base';
import { useInfiniteQuery } from 'react-query';

import { gamesApi } from '../api';

export const HomeScreen = () => {
  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery('games', gamesApi.fetchAllGames, {
      getNextPageParam: lastPage => {
        if (lastPage.next !== null) {
          return lastPage.next;
        }

        return lastPage;
      }
    });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderSpinner = () => {
    return <Spinner color='emerald.500' size='lg' />;
  };

  const gameItemExtractorKey = (item, index) => {
    return index.toString();
  };

  const renderData = item => {
    return (
      <Box px={2} mb={8}>
        <Text fontSize='20'>{item.item.name}</Text>
      </Box>
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
          data={data.pages.map(page => page.results).flat()}
          keyExtractor={gameItemExtractorKey}
          renderItem={renderData}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
        />
      </Box>
    </Box>
  );
};
