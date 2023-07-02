import * as React from 'react';

import { ScrollView, View } from '@/ui';

import { Catalogue } from './catalogue';
import { Header } from './header';
import { Post } from './post';
import { Videos } from './videos';

type Props = { onScroll: any };
export const Content = ({ onScroll }: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} onScroll={onScroll}>
      <View className=" mt-32 mb-8 flex-1 p-1">
        <Header />
        <Post title="New Posts" />
        <Post title="Awesome Posts" />
        <Videos title="New Videos" />
        <Videos title="Awesome Videos" />
        <Catalogue title="New Catalogue" />
        <Catalogue title="Awesome Catalogue" />
      </View>
    </ScrollView>
  );
};
