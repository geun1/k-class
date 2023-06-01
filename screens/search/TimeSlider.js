import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import SliderCustomLabel from "./SliderCustomLabel";

const textTransformerTimes = (value) => {
  return value === 0
    ? "12am"
    : (value < 13 ? value : value - 12) + (value < 12 ? "am" : "pm");
};

const TIME = {  min: 9,  max: 22 }
const SliderPad = 12;

// our time slider component

const TimeSlider = ({value , onChange}) => {
  const { min, max } = TIME;
  const [width, setWidth] = useState(280);
  const [selected, setSelected] = useState(null);

  if (!selected) {
    setSelected([min, max]);
  }

  // Callbacks
  const onLayout = (event) => {
    setWidth(event.nativeEvent.layout.width - SliderPad * 2);
  };
  const onValuesChangeFinish = (values) => {
    onChange(values)
  };

  return (
    <View onLayout={onLayout} style={styles.wrapper}>
        <MultiSlider
          min={min}
          max={max}
          allowOverlap
          values={selected}
          sliderLength={width}
          onValuesChangeFinish={onValuesChangeFinish}
          enableLabel={true}
          customLabel={SliderCustomLabel(textTransformerTimes)}
          trackStyle={{
            height: 10,
            borderRadius: 8,
          }}
          markerOffsetY={3}
          selectedStyle={{
            backgroundColor: "#036B3F",
          }}
          unselectedStyle={{
            backgroundColor: "#EEF3F7",
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    width : "90%",
    justifyContent:"center",
    alignItems:"center",
  }
});

export default TimeSlider;