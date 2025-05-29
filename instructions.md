### Objective
In this coding exercise, you will create a JavaScript function that takes a list of button inputs (like and/or dislike) and returns the final state of a YouTube like or dislike button based on given rules.

For example, after implementing the function, you should be able to produce the following output:

### Example Outputs:
- `likeOrDislike(["Dislike"])` should return "Dislike".
  - **Explanation:** The initial state is "Nothing". The first input is "Dislike", so the state changes to "Dislike".

- `likeOrDislike(["Like", "Like"])` should return "Nothing".
  - **Explanation:** The initial state is "Nothing". The first input is "Like", so the state changes to "Like". The second input is "Like" again, which toggles the state back to "Nothing".

- `likeOrDislike(["Dislike", "Like"])` should return "Like".
  - **Explanation:** The initial state is "Nothing". The first input is "Dislike", so the state changes to "Dislike". The second input is "Like", so the state changes to "Like".

- `likeOrDislike(["Like", "Dislike", "Dislike"])` should return "Nothing".
  - **Explanation:** The initial state is "Nothing". The first input is "Like", so the state changes to "Like". The second input is "Dislike", so the state changes to "Dislike". The third input is "Dislike" again, which toggles the state back to "Nothing".

<details>
<summary>Hints</summary>

1. Create a function `likeOrDislike(buttonInputs)` that accepts an array of button input strings as an argument (use "Like" and "Dislike" as the strings).
2. Initialize a variable `currentState` with the value "Nothing" to store the current state of likes and dislikes.
3. Iterate through the input `buttonInputs` array using a for loop. For each element, check if it is equal to the `currentState`. If it is, set `currentState` to "Nothing". Otherwise, set `currentState` to the current input (either "Like" or "Dislike").
4. After the loop, return the value stored in `currentState`.
5. Call the function with appropriate input arrays and log the result using template literals.
</details>