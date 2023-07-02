import * as React from 'react';

import { Image, Text, View } from '@/ui';

type Props = { posts: Number; followers: Number; videos: Number };
export const Header = ({ posts = 0, followers = 0, videos = 0 }: Props) => {
  return (
    <View className="h-36 w-full flex-row items-center">
      <View className="flex-column m-5 content-center">
        <Image
          className="h-20 w-20 rounded-full"
          source={{ uri: 'https://picsum.photos/30' }}
        />
        <Text variant="sm" className="self-center" numberOfLines={1}>
          Jane Doe
        </Text>
      </View>
      <View className="flex-column justify-center">
        <View className="mt-3 flex-row gap-2 rounded">
          <View className="flex-column">
            <Text variant="h3" className="text-center">
              {followers}
            </Text>
            <Text variant="md">Followers</Text>
          </View>
          <View className="flex-column">
            <Text variant="h3" className="text-center">
              {posts}
            </Text>

            <Text variant="md">Posts</Text>
          </View>
          <View className="flex-column">
            <Text variant="h3" className="text-center">
              {videos}
            </Text>
            <Text variant="md">Videos</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
