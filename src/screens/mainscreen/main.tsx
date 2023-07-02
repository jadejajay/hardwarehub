/* eslint-disable react-native/no-inline-styles */
import { useColorScheme } from 'nativewind';
import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import Stories1 from 'react-native-stories-instagram';

import { LogoStack } from '@/screens';
import {
  GradientText,
  ImageCard,
  MainCarousel,
  ProductSwiper,
  View,
} from '@/ui';
import { CategorySwiper } from '@/ui/core/category-carousel/category-swiper';

import { Credit } from './credit';
import Navbar from './navbar';

const data = [
  {
    username: 'Bruno',
    profile: 'https://avatars2.githubusercontent.com/u/45196619?s=460&v=4',
    title: 'Travel',
    stories: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isReadMore: true,
        url_readmore: 'https://google.com',
        created: '2021-01-07T03:24:00',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1476292026003-1df8db2694b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isReadMore: false,
        url_readmore: '',
        created: '2021-01-07T03:24:00',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isReadMore: true,
      },
    ],
  },
  {
    username: 'Steve Jobs',
    profile:
      'https://s3.amazonaws.com/media.eremedia.com/uploads/2012/05/15181015/stevejobs.jpg',
    title: 'Tech',
    stories: [
      {
        id: 7,
        url: 'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isReadMore: true,
        url_readmore: 'https://github.com/iguilhermeluis',
        created: '2021-01-07T03:24:00',
      },
      {
        id: 8,
        url: 'https://images.unsplash.com/photo-1496287437689-3c24997cca99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,

        isReadMore: true,
        url_readmore: 'https://github.com/iguilhermeluis',
        created: '2021-01-07T03:24:00',
      },
      {
        id: 9,
        url: 'https://images.unsplash.com/photo-1514870262631-55de0332faf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,

        isReadMore: true,
        url_readmore: 'https://github.com/iguilhermeluis',
        created: '2021-01-07T03:24:00',
      },
    ],
  },
  {
    username: 'Jacob',
    profile:
      'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
    title: 'News',
    stories: [
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isReadMore: true,
        url_readmore: 'https://github.com/iguilhermeluis',
        created: '2021-01-07T03:24:00',
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,

        isReadMore: true,
        url_readmore: 'https://github.com/iguilhermeluis',
        created: '2021-01-07T03:24:00',
      },
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
        type: 'image',
        duration: 2,
        isReadMore: true,
        url_readmore: 'https://github.com/iguilhermeluis',
        created: '2021-01-07T03:24:00',
      },
    ],
  },
];

export function MainScreenView() {
  const [refreshing, setRefreshing] = React.useState(false);
  const { colorScheme } = useColorScheme();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* <Carousel3 /> */}
        <MainCarousel />
        <View className="h-30 w-full">
          <View className="m-4">
            <GradientText t="Stories" h={28} />
          </View>
          <Stories1
            data={data}
            titleStyle={{ color: colorScheme === 'dark' ? 'white' : 'black' }}
          />
        </View>
        {/* <ProductSwiper text="Recently Viewed" /> */}
        <ImageCard
          imageSource="http://getdrawings.com/jhuj.jpg"
          text="Hardware"
        />
        <CategorySwiper />
        <LogoStack />
        {/* advertise */}
        <ProductSwiper text="New Products" width={150} />
        {/* carousel  */}
        <ProductSwiper text="Best Deals" width={125} />
        <ImageCard
          imageSource="http://getdrawings.com/jhuj.jpg"
          text="Wooden"
        />
        <CategorySwiper />
        <LogoStack />
        {/* advertise */}
        <ProductSwiper text="New Products" width={150} />
        {/* carousel  */}
        <ProductSwiper text="Best Deals" width={125} />
        <ImageCard imageSource="http://getdrawings.com/jhuj.jpg" text="Tiles" />
        <CategorySwiper />
        <LogoStack />
        {/* advertise */}
        <ProductSwiper text="New Products" width={150} />
        {/* carousel  */}
        <ProductSwiper text="Best Deals" width={125} />
        <ImageCard
          imageSource="http://getdrawings.com/jhuj.jpg"
          text="Sanitary"
        />
        <CategorySwiper />
        <LogoStack />
        {/* advertise */}
        <ProductSwiper text="New Products" width={150} />
        {/* carousel  */}
        <ProductSwiper text="Best Deals" width={125} />
        <ImageCard
          imageSource="http://getdrawings.com/jhuj.jpg"
          text="Home Decore"
        />
        <CategorySwiper />
        <LogoStack />
        {/* advertise */}
        <ProductSwiper text="New Products" width={150} />
        {/* carousel  */}
        <ProductSwiper text="Best Deals" width={125} />

        {/* Add other components, such as the "New Products" header and the product list */}
        <Credit />
      </ScrollView>
    </>
  );
}
