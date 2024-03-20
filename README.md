# Later + Mavrck Software Developer Candidate Assignment

## Introduction
Welcome! This assigment is designed for you to demonstrate mastery of software development fundamentals, knowledge of software development best practices, and ability to deliver a feature from start to finish. While we don't expect perfection, we expect your submission to reflect the breadth and depth of your experience. You should spend 5-6 hours on this project.

## Assignment

### Setup
- Install dependencies: `npm install`
- Run the app in development mode: `npm run dev`

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
