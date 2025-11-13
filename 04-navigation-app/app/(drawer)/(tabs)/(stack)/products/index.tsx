import { products } from "@/store/porducts.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  return (
    <View className="felx flex-1">
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className=" textt-2xl font-work_black">{item.title}</Text>
            <Text>{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
            </View>
            <Link
              href={`/(drawer)/(tabs)/(stack)/products/${item.id}`}
              className="text-primary"
            >
              Ver Detalles
            </Link>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
