import React, {useState, useRef} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require('./assets/images/1.jpeg'),
  image2: require('./assets/images/2.jpeg'),
  image3: require('./assets/images/3.jpeg'),
  image4: require('./assets/images/4.jpeg'),
  image5: require('./assets/images/5.jpeg'),
  image6: require('./assets/images/6.jpeg'),
  image7: require('./assets/images/7.jpeg'),
};

const App = () => {
  const carouselRef = useRef();
  const flatListRef = useRef();
  const [images, setImages] = useState([
    {id: '1', image: IMAGES.image1},
    {id: '2', image: IMAGES.image2},
    {id: '3', image: IMAGES.image3},
    {id: '4', image: IMAGES.image4},
    {id: '5', image: IMAGES.image5},
    {id: '6', image: IMAGES.image6},
    {id: '7', image: IMAGES.image7},
  ]);
  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = (indexSelected) => {
    setIndexSelected(indexSelected);

    /**
     * if you want to position the thumbnail in * the middle of the screen on selection
     * do the following
     * Calculation done by awesome Catalin Miron
     * Source: https://www.youtube.com/watch?v=gjC2oUJhePE&t=1097s
     */
    // if (indexSelected * (THUMB_SIZE + 10) - THUMB_SIZE / 2 > width / 2) {
    //   flatListRef?.current?.scrollToOffset({
    //     offset: indexSelected * (THUMB_SIZE + 10) - width / 2 + THUMB_SIZE / 2,
    //     animated: true,
    //   });
    // } else {
    //   flatListRef?.current?.scrollToOffset({
    //     offset: 0,
    //     animated: true,
    //   });
    // }

    //  my initial solution
    flatListRef?.current?.scrollToOffset({
      offset: indexSelected * THUMB_SIZE,
      animated: true,
    });
  };

  const onTouchThumbnail = (touched) => {
    if (touched === indexSelected) return;

    carouselRef?.current?.snapToItem(touched);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
      <Text
        style={{color: 'white', fontSize: 32, marginTop: 50, marginBottom: 25}}
      >
        Custom Gallery
      </Text>
      {/* Carousel View */}
      <View style={{flex: 1 / 2, marginTop: 20}}>
        <Carousel
          ref={carouselRef}
          layout="default"
          data={images}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => onSelect(index)}
          renderItem={({item, index}) => (
            <Image
              key={index}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
              source={item.image}
            />
          )}
        />
        <Pagination
          inactiveDotColor="gray"
          dotColor={'orange'}
          activeDotIndex={indexSelected}
          dotsLength={images.length}
          animatedDuration={150}
          inactiveDotScale={1}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 32,
          alignSelf: 'flex-end',
        }}
      >
        <Text style={{color: 'white', fontSize: 22}}>
          {indexSelected + 1}/{images.length}
        </Text>
      </View>
      {/* Thumbnail component using FlatList */}
      <FlatList
        ref={flatListRef}
        horizontal={true}
        data={images}
        style={{position: 'absolute', bottom: 80}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SPACING,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => onTouchThumbnail(index)}
            activeOpacity={0.9}
          >
            <Image
              style={{
                width: THUMB_SIZE,
                height: THUMB_SIZE,
                marginRight: SPACING,
                borderRadius: 16,
                borderWidth: index === indexSelected ? 4 : 0.75,
                borderColor: index === indexSelected ? 'orange' : 'white',
              }}
              source={item.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default App;
