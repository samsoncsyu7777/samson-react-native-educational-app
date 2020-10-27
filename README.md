# Paper React Native Test

- The specifications of the problem are listed below. 
- You are free to use **any packages or libraries**. 
- You can create as many files as you like. 
- All related implementation code should be in the `src` folder

## Dev Environment

At Paper we do not use *Expo*, but for simplicity, it is used in this assessment

## Evaluation Criteria

1. Code readability and organization
2. Problem solving skills
3. How you use React features
4. How well the guidelines provided were followed

# Assessment: Trivia App 

## API Instructions
Your goal is to create a very basic trivia app. We will be using data from [Open Trivia Database](https://opentdb.com/api_config.php)

When consulting the API, make sure to follow these guidelines when generating the API endpoint we want to call
- Number of questions : 10
- Any category
- Any difficulty
- Any Type
- Default Encoding

## Webapp Instructions
### List Screen
- With the response that you receive from the API, you are to create a `scrollable list` of all the questions.
- The questions are divided based on their difficulty: `easy, medium & hard`
- The box displays the `category` of the question
- When clicking a box, it should `redirect the user to a new screen`
### Question Screen
- In that new screen, it displays the `question` and the `choices`. It is possible that the question can have 2, 3 or 4 multiple choices. In the case of an `odd number` of choices, make sure the 
`box size remains the same`, in other words, the third choice should `not fill the width of 2 boxes`
- That new screen will `display the question along with the choices`
- When clicking on a choice, the box should `change color`

# Mockups
## There is a live video demo of the app located in the `public` folder so make sure to take a look at that to understand the exact behavior
![alt text](./public/mock-home-default.PNG)
![alt text](./public/mock-home-scroll.PNG)
![alt text](./public/mock-default-question.PNG)
![alt text](./public/mock-incorrect-answer.PNG)
![alt text](./public/mock-good-answer.PNG)

# Important Notes

## Colors
Use these codes for the colors displayed on the mockup
- Blue: #0e0fe0
- Green: #009D40
- Orange : #FF570D
- Grey: #f4f3f1

## Dimensions
Do not worry about getting the exact dimesions and spacing. Just try to get it as close to the mockups as possible.

## Maintanibility
If I were to change my input in the API, eg. I choose only multiple choice questions OR I choose 30 questions, your app should still behave the same