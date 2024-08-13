import React, {useRef} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import photoCards from './constants/PhotoCards';
import Card from './Components/Card/Card';
import Overlay from './Components/OverLay/Overlay';
import AppStyles from './Styles/AppStyles';
import IconButton from './Components/IconButton';

const App = () => {
  const swiperRef = useRef(null);

  const handleOnSwipedLeft = () => swiperRef.current.swipeLeft();
  const handleOnSwipedTop = () => swiperRef.current.swipeTop();
  const handleOnSwipedRight = () => swiperRef.current.swipeRight();

  return (
    <View>
      <Swiper
        ref={swiperRef}
        animateCardOpacity
        cards={photoCards}
        renderCard={card => <Card card={card} />}
        cardIndex={0}
        backgroundColor="white"
        stackSize={2}
        infinite
        showSecondCard
        animateOverlayLabelsOpacity
        overlayLabels={{
          left: {
            title: 'NOPE',
            element: <Overlay label="NOPE" color="red" />,
            style: {
              wrapper: AppStyles.overlayWrapper,
              label: AppStyles.overlayLabel,
            },
          },
          right: {
            title: 'LIKE',
            element: <Overlay label="LIKE" color="green" />,
            style: {
              wrapper: AppStyles.overlayWrapper,
              label: AppStyles.overlayLabel,
            },
          },
        }}
      />
      <View style={AppStyles.buttonsContainer}>
        <IconButton
          name="close"
          onPress={handleOnSwipedLeft}
          color="white"
          backgroundColor="#E5566D"
        />
        <IconButton
          name="star"
          onPress={handleOnSwipedTop}
          color="white"
          backgroundColor="#3CA3FF"
        />
        <IconButton
          name="heart"
          onPress={handleOnSwipedRight}
          color="white"
          backgroundColor="#4CCC93"
        />
      </View>
    </View>
  );
};

export default App;
