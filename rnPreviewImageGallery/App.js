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
  const [images, setImages] = useState([
    {id: '1', image: IMAGES.image1, selected: true},
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
        horizontal={true}
        // ref={flatListRef}
        data={images}
        style={{position: 'absolute', bottom: 80}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SPACING,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity activeOpacity={0.9}>
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
