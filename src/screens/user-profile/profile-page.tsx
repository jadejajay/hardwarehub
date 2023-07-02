import * as React from 'react';

import { View } from '@/ui';

import { Footer } from './footer';
import { Header } from './header';
import { Saved } from './saved';
import { Setting } from './setting';

type Props = {};

export const UserProfileScreen = ({}: Props) => {
  return (
    <View className="mt-8 flex-1">
      <Header posts={undefined} followers={undefined} videos={undefined} />
      <Saved />
      <Setting />
      <Footer />
    </View>
  );
};
