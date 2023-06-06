# quickread-nyt

## Project Proposal

1. This will be a React/Node project hosted on Render.com, with a PostgresQL database on ElephantSQL.

2. I'd like to focus on both front and backend parts of this app, though I do want to make it look very polished.

3. This will be a website.

4. The goal is to create a full-stack site that allows search and AI-powered summary for any New York Times articles. You will store these summaries to your reading list, and can click through to view the complete article.

5. I'd like for this to be popular with a broad group of people. No particular demographic.

6. I will use both the NYT API as well as a AI summary API found on RapidAPI.

7. This project will have users sign up and store the following to the database: {email, password, firstName, [summaries...]}. After log in, the main home page will be a search box that interfaces with the NYT API. As a brief example, users can search the NYT API for all frontpage articles on their birthday. This should return a list of headlines as 'headline cards'. Part of this card will include a button that sends that headline data to an AI summary service. This summary will be saved to the users profile, along with a link to read the entire article text. In general, users will assemble a reading list of summarized articles to see if they want to read the full text.
