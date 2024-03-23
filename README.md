# Later + Mavrck Software Developer Candidate Assignment

## Introduction
Welcome! This assigment is designed for you to demonstrate mastery of software development fundamentals, knowledge of software development best practices, and ability to deliver a feature from start to finish. While we don't expect perfection, we expect your submission to reflect the breadth and depth of your experience. You should spend 5-6 hours on this project.

## Assignment

### Setup
#### Using Docker
- Make sure you have docker desktop installed. You can follow the instruction [here](https://docs.docker.com/desktop/) to install Docker Desktop.
- use command: `docker-compose up`
#### Without Docker
- make sure you have redis installed on your machine. You can follow the instruction [here](https://redis.io/docs/install/) to install and run Redis server on your machine.
- Install dependencies: `npm install`
- Run the app in development mode: `npm run dev`
- Run the app in production mode: `npm run build && npm run start`

#### Environment variables
- For development environment variables you can add or edit the variables in the .env file.
- For production environment variables you can add or edit the variables in the .production.env file.

### API
- '/user_profile' : It will return the instagram account information for the provided username
  - parameters: 
    - `username` : user's instagram account's handle
    - `force_update` : when it is true it will ignore the redis cache and returns the latest information
  - returns:
    - `biography`: string (optional) // the account holder's biography
    - `followers_count`: number (optional) // number of followers
    - `recent_posts`: // last three recent posts
        - `comments`: number (optional) // number of comments
        - `likes`: number (optional) // number of likes
        - `type`: enum[image, video] (optional) // type of the post
        - `url`: string (optional)// url to the post's media
    - `name`: string, (optional) // the account's handle
    - `timestamp`: number (optional)// the timestamp for when the data was retrieved
  - examples:
    - http://localhost/user_profile/?username=mavrckco&force_update=true // without using cache
    - http://localhost/user_profile/?username=mavrckco // using cache


### Requirements
Other than these requirements, you may use any packages and tools you prefer.

- Node.js
- TypeScript

### Specification
Develop a web app that responds with the following information as JSON when it receives a HTTP request with an Instagram account's handle:

- Biography
- Followers count
- 3 most recent timeline posts:
  - Comments
  - Likes
  - Type e.g. carousel, image, or video
  - URL
- Name
- Timestamp when data was last retrieved from Instagram

Data may be cached for up to 1 day, but clients must be provided with a method to request the latest data.

### Implementation
[Instagram](https://developers.facebook.com/docs/instagram) provides robust tools like Instagram Graph API and Instagram Basic Display API to help developers like Later + Mavrck interact with creators on Instagram. Do not apply for an Instagram app to complete this assignment. Instead, use http://i.instagram.com/api/v1/users/web_profile_info/?username= ("Public Web API") to fetch information about an account.

Although we refer to it as Public Web API, Instagram still needs info to authorize your app's requests. Research online how to use `User-Agent` and/or `X-Ig-App-Id` request headers.

At any time without warning, Public Web API may reject or throttle your app's requests. We've provided an example of the expected response from Instagram in `.examples/instagram-account.json` to unblock development.

## Submission
When you're done, create a GitHub repository, and email a link to your hiring manager notifying them you've completed this assignment. Give these GitHub users permission to read your work.

1. [haiyang-mavrck](https://github.com/haiyang-mavrck)
2. [imclarney](https://github.com/imclarney)
3. [markjsy](https://github.com/markjsy)
4. [otanikotani](https://github.com/otanikotani)
5. [robyy](https://github.com/robyy)
6. [vishvajit79](https://github.com/vishvajit79)
