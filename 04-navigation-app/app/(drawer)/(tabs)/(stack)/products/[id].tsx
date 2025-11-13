import { products } from "@/store/porducts.store";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  console.log("====================================");
  console.log(id);
  console.log("====================================");

  const product = products.find((p) => p.id === id);
  console.log(product);

  return (
    <View className="px-5 mt-2 flex flex-1 gap-2">
      <Text className="font-work_black text-2xl">{product?.title}</Text>
      <Text>{product?.description}</Text>
      <Text className="font-work_black">{product?.price}</Text>
    </View>
  );
};

export default ProductScreen;
