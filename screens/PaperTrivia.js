import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import Question from "./Question";
import CustomColors from "../CustomColors";
import axios from 'axios';

export default class PaperTrivia extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      easy: [],
      medium: [],
      hard: [],

    };
  }

  fetchQuestions = async () => {
    await this.setState({ loading: true });
    let questions = [];
    try {
      questions = await axios.get('https://opentdb.com/api.php?amount=10')
    } catch(err) {
      console.log(err);
    }
    const { results } = questions.data;

    results.forEach(item => {
      switch (item.difficulty) {
        case "easy": this.setState({ easy: [...this.state.easy, item] }); break;
        case "medium": this.setState({ medium: [...this.state.medium, item] }); break;
        case "hard": this.setState({ hard: [...this.state.hard, item] }); break;
      }
    });
    await this.setState({ questions: results, loading: false });
  };

  onPress = (e, item) => {
    this.props.navigation.navigate('Question', { question: item });
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  render() {
    const { easy, medium, hard } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          {!!this.state.loading && (
            <View style={styles.loadingQuestions}>
              <ActivityIndicator size="large" color={CustomColors.blue} />
              <Text>We are loading questions for you</Text>
            </View>
          )}

          <Text style={styles.text}>Easy Questions</Text>

          <View style={styles.boxes}>
            {
              easy.map((item, index) => {
                return <TouchableOpacity
                  key={index}
                  style={[styles.box, styles.easy]}
                  onPress={e => {
                    this.onPress(e, item);
                  }}
                >
                  <Text style={styles.boxText}>{item.category}</Text>
                </TouchableOpacity>
              })
            }
          </View>

          <Text style={styles.text}>Medium Questions</Text>

          <View style={styles.boxes}>
            {
              medium.map((item, index) => {
                return <TouchableOpacity
                  key={index}
                  style={[styles.box, styles.medium]}
                  onPress={e => {
                    this.onPress(e, item);
                  }}
                >
                  <Text style={styles.boxText}>{item.category}</Text>
                </TouchableOpacity>
              })
            }
          </View>

          <Text style={styles.text}>Hard Questions</Text>

          <View style={styles.boxes}>
            {
              hard.map((item, index) => {
                return <TouchableOpacity
                  key={index}
                  style={[styles.box, styles.hard]}
                  onPress={e => {
                    this.onPress(e, item);
                  }}
                >
                  <Text style={styles.boxText}>{item.category}</Text>
                </TouchableOpacity>
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: CustomColors.grey
  },

  text: {
    fontSize: hp2dp('2.5%'),
    fontWeight: "bold",
    padding: 10,
    alignSelf: "center"
  },

  boxes: {
    alignItems: "center"
  },

  box: {
    borderWidth: 2,
    borderRadius: hp2dp('1.5%'),
    width: wp2dp('90%'),
    height: hp2dp('7%'),
    margin: 7,
    justifyContent: "center"
  },

  easy: {
    borderColor: CustomColors.green
  },

  medium: {
    borderColor: CustomColors.blue
  },

  hard: {
    borderColor: CustomColors.orange
  },

  boxText: {
    alignSelf: "center",
    fontSize: hp2dp('1.8%'),
  },

  loadingQuestions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
