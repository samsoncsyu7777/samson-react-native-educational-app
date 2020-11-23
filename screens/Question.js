import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import CustomColors from "../CustomColors";
const Entities = require('html-entities').AllHtmlEntities;

export default function Question(props) {
  const entities = new Entities();
  const { question } = props.route.params;
  const [colors, setColors] = useState([]);
  let answers = question.incorrect_answers;

  useEffect(() => {
    answers.push(question.correct_answer);
    let i = answers.length;
    while (i--) {

      const ri = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[ri]] = [answers[ri], answers[i]];
    }
    setColors(["#ffffff", "#ffffff", "#ffffff", "#ffffff"]);
  }, []);

  const onPress = (e, index) => {
    console.log(index);
    let tmp = ["#ffffff", "#ffffff", "#ffffff", "#ffffff"];

    if (answers[index] === question.correct_answer) {
      tmp[index] = CustomColors.green.toLowerCase();
      setColors(tmp);
    } else {
      tmp[index] = CustomColors.orange.toLowerCase();
      setColors(tmp);
    }
    console.log(colors[0]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.questionBox}>
        <Text style={styles.question}>{entities.decode(question.question)}</Text>
      </View>
      <View style={styles.row}>
        {
          answers.slice(0, 2).map((item, index) => {
            return <TouchableOpacity
              key={index}
              style={[styles.box, { backgroundColor: colors[index] }]}
              onPress={e => {
                onPress(e, index);
              }}
            >
              <Text style={styles.boxText}>{entities.decode(item)}</Text>
            </TouchableOpacity>
          })
        }
      </View>
      {(answers.length > 2) &&
        <View style={styles.row}>
          {
            answers.slice(2, 4).map((item, index) => {
              return <TouchableOpacity
                key={index}
                style={[styles.box, { backgroundColor: colors[index + 2] }]}
                onPress={e => {
                  onPress(e, index + 2);
                }}
              >
                <Text style={styles.boxText}>{entities.decode(item)}</Text>
              </TouchableOpacity>
            })
          }
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: CustomColors.grey,
    justifyContent: "center",
    alignItems: "center"
  },

  questionBox: {
    width: wp2dp('85%'),
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: hp2dp('3%'),
    backgroundColor: "#fff",
    margin: hp2dp('3%'),
  },

  question: {
    fontSize: hp2dp('3.5%'),
    color: CustomColors.blue,
    padding: hp2dp('5%'),
    textAlign: "center",
  },

  box: {
    width: wp2dp('40%'),
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: hp2dp('1.5%'),
    margin: hp2dp('1%'),
  },

  boxText: {
    fontSize: hp2dp('2.5%'),
    padding: hp2dp('2%'),
    textAlign: "center",
  },

  row: {
    flexDirection: "row"
  },
});
