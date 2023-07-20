# quickread-nyt

## Project Proposal

1. This will be a React/Node project hosted on Render.com, with a PostgresQL database on ElephantSQL.

2. I'd like to focus on both front and backend parts of this app, though I do want to make it look very polished.

3. This will be a website.

4. The goal is to create a full-stack site that allows AI-powered summary for today's New York Times front page articles. You can store these summaries to your personal reading list.

5. I'd like for this to be popular with a broad group of people. No particular demographic.

6. I will use both the NYT API as well as the ChatGPT API.

7. This project will have users sign up and store the following to the database: {email, password, firstName,readingLevel, [summaries...]}. After log in, the app will check if there is a new NYT front page. On a click,headline data will be sent to ChatGPT for summarization based on user's reading level preference. This summary can be saved to the user's profile, along with a link to the current front page. In general, users will assemble a summarzied list of snapshots of the day's news.
