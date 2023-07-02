/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */
import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import React, { useMemo, useRef, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Image, Input, Text, TouchableOpacity, View } from '@/ui';

import { dummyData } from './data';

export const Search = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState({ category: [], color: [] });
  const [filteredProducts, setFilteredProducts] = useState(dummyData);

  const handleClosePress = () => bottomSheetModalRef.current?.close();
  const handlePresentPress = () => bottomSheetModalRef.current?.expand();
  const toggleFilter = (filterType: any, filterValue: any) => {
    const updatedFilters = { ...filters };
    const index = updatedFilters[filterType].indexOf(filterValue);

    if (index > -1) {
      updatedFilters[filterType].splice(index, 1);
    } else {
      updatedFilters[filterType].push(filterValue);
    }

    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const handleSearch = (text: React.SetStateAction<string>) => {
    setSearchText(text);
    filterProducts(text);
  };

  const filterProducts = (text: any) => {
    const filtered = dummyData.filter((product) => {
      const lowercaseValue = {
        name: product.name.toLowerCase(),
        category: product.category.toLowerCase(),
        subCategory: product.subCategory.toLowerCase(),
        color: product.color.toLowerCase(),
        size: product.size.toLowerCase(),
      };
      const lowercaseSearchText = text.toLowerCase();

      return Object.values(lowercaseValue).some((value) =>
        value.includes(lowercaseSearchText)
      );
    });

    setFilteredProducts(filtered);
  };

  const applyFilters = (filters: { category: any; color: any }) => {
    const filtered = dummyData.filter((product) => {
      const categoryFilter =
        filters.category.length === 0 ||
        filters.category.includes(product.category);
      const colorFilter =
        filters.color.length === 0 || filters.color.includes(product.color);

      return categoryFilter && colorFilter;
    });

    setFilteredProducts(filtered);
  };

  const renderCheckbox = (
    label:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | null
      | undefined,
    value: string,
    filterType: string,
    color: string | undefined
  ) => {
    const isActive = filters[filterType].includes(value);

    return (
      <TouchableOpacity
        key={value}
        className="h-10 flex-row items-center border-2 rounded-lg border-neutral-950 p-1 m-0.5"
        style={[isActive && styles.activeCheckbox]}
        onPress={() => toggleFilter(filterType, value)}
      >
        {color && (
          <View className="mr-1 h-7 w-7" style={{ backgroundColor: color }} />
        )}
        <Text className="text-sm">{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 p-1">
        {/* Search Bar */}
        <View className="m-2 p-2">
          <Input
            className="h-10 rounded-lg border-b border-orange-600 pl-4 pr-16"
            placeholder="Search Ex. Rose Handle"
            value={searchText}
            onChangeText={handleSearch}
          />
          <TouchableOpacity
            className="absolute right-12 top-5"
            onPress={() => handleSearch(searchText)}
          >
            <MaterialIcon name="search" size={24} color="#f26700" />
          </TouchableOpacity>
          <TouchableOpacity
            className="absolute right-5 top-5"
            onPress={() => handlePresentPress()}
          >
            <MaterialIcon name="tune" size={24} color="#f26700" />
          </TouchableOpacity>
        </View>
        {/* Search Bar */}
        {/* Filters */}

        {/* Filters */}
        <View className="flex-1">
          {filteredProducts.length > 0 ? (
            <FlatList
              data={filteredProducts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={styles.cardBody}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    {/* <Text>Category: {item.category}</Text>
                    <Text>Subcategory: {item.subCategory}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.address}>{item.address}</Text> */}
                    <Text>Color: {item.color}</Text>
                    {/* <Text>Size: {item.size}</Text>
                    <Text>Price: ${item.price}</Text>
                    <Text style={styles.squareMeters}>
                      {item.squareMeters} sq. m.
                    </Text> */}
                  </View>
                  {/* <View style={styles.cardFooter}>
                    <Text>Star: {item.star}</Text>
                    <Text>Views: {item.views}</Text>
                    <Text>Sales: {item.sales}</Text>
                  </View> */}
                </View>
              )}
            />
          ) : (
            <Text>No search results</Text>
          )}
        </View>
        <BottomSheet
          ref={bottomSheetModalRef}
          index={-1}
          snapPoints={snapPoints}
        >
          <View className="flex-row justify-between p-3 border-b">
            <Text>Filters</Text>
            <TouchableOpacity onPress={handleClosePress}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <View className="p-2">
            <Text className="text-md font-bold">Finishing</Text>
            <View className="flex-row flex-wrap gap-2 m-1">
              {renderCheckbox('Red', 'Red', 'color', 'red')}
              {renderCheckbox('Blue', 'Blue', 'color', 'blue')}
              {renderCheckbox('Green', 'Green', 'color', 'green')}
            </View>

            <Text className="text-md font-bold">Categories</Text>
            <View className="flex-row flex-wrap gap-2 m-1">
              {renderCheckbox('Category 1', 'Category 1', 'category', '')}
              {renderCheckbox('Architecture', 'Architecture', 'category', '')}
              {renderCheckbox('Furniture', 'Furniture', 'category', '')}
              {renderCheckbox('Kitchen', 'Kitchen', 'category', '')}
              {renderCheckbox('Bathroom', 'Bathroom', 'category', '')}
              {renderCheckbox('Security', 'Security', 'category', '')}
              {renderCheckbox(
                'Stair & Railing',
                'Stair & Railing',
                'category',
                ''
              )}
              {renderCheckbox('Screw & Nails', 'Screw & Nails', 'category', '')}
            </View>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  propertyListContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  image: {
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    marginBottom: 10,
    padding: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
  },
  squareMeters: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  cardFooter: {
    padding: 10,
    flexDirection: 'row',

    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
    justifyContent: 'space-between',
  },
  beds: {
    fontSize: 14,
    color: '#ffa500',
    fontWeight: 'bold',
  },
  baths: {
    fontSize: 14,
    color: '#ffa500',
    fontWeight: 'bold',
  },
  parking: {
    fontSize: 14,
    color: '#ffa500',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  filtersContainer: {
    marginBottom: 16,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  checkboxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
  },
  activeCheckbox: {
    backgroundColor: '#f26700',
  },
  checkboxLabel: {
    marginLeft: 4,
  },
  productContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
