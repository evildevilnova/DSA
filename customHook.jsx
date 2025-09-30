import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

export default function App() {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Toggle" onPress={toggleVisible} />
      {isVisible && <Text style={{ marginTop: 20, fontSize: 20 }}>Hello 👋</Text>}
    </View>
  );
}
