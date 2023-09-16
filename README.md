# StackOverflow Telegram bot

This project is made for fun as a part of the Netlify Functions learning process. Under the hood there are two functions:

- `check` - scheduled function that checks the number of consecutive days a user has visited StackOverflow. This function is scheduled to run every 6 hours. All the data is stored in a Notion database.
- `status` - regular function that sends a message to the Telegram bot with the results of the `check` function and the date of the upcoming scheduled check.

<!-- Last updated: Sat Sep 16 21:00:54 2023 -->