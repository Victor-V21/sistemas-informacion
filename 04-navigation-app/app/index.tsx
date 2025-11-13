import { Redirect } from "expo-router";
import React from "react";

const index = () => {
  // error?
  return <Redirect href="/(tabs)/home" />;

  // return (
  //   <View className="text-center items-center">
  //     {/* Fuente Black */}
  //     <Text className="text-4xl font-work_black text-primary">Hola Mundo</Text>
  //     {/* Fuente Medium */}
  //     <Text className="text-4xl font-work_medium text-secondary-100">
  //       Hola Mundo
  //     </Text>

  //     <Text className="text-4xl font-work_medium text-secondary-200">
  //       Hola Mundo
  //     </Text>
  //     {/* Fuente Light */}
  //     <Text className="text-4xl font-work_light text-tertiary">Hola Mundo</Text>

  //     <Link href='/pro'></Link>
  //   </View>
  // );
};

export default index;
