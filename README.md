## This project is a Wedding RSVP page. 
- Features:
    - Our Story 
    - When & Where with pin in google maps
    - RSVP page where guest name and number of additional guests are shown
        - Checkbox for attending guests and submit button
    - FAQs
    - Contact Us

[Public Website](https://jeju-3271f.web.app)

[Guest Website](https://jeju-3271f.web.app/ezC3MCrxP9p93O6bH2sn)

## Prerequisites:
- node
- firebase-cli
- set up in firebase (free plan)
- has a user in firebase auth
- firestore

### For this project to work you need to create a .env file to connect it to firebase.
  - The following needs to be added to the .env file with the corresponding values supplied:

      ```
      SASS_PATH=node_modules:src
      REACT_APP_API_KEY=
      REACT_APP_AUTH_DOMAIN=
      REACT_APP_PROJECT_ID=
      REACT_APP_STORAGE_BUCKET=
      REACT_APP_MESSAGING_SENDER_ID=
      REACT_APP_ID=
      REACT_APP_SITE_KEY=
      REACT_APP_LOGIN_EMAIL=
      REACT_APP_LOGIN_PASSWORD=
      
## Modifications

  ### Styling
    - Just go to `src/styles/variables/colors` to change theming

  ### FAQs
    - Just go to `src/pages/Faqs/faq.ts` to change FAQs

  ### Story timeline
    - Just go to `src/components/TimelineStory/timeline.ts` to change timeline details

### How to run on local machine
1. inside project folder run `yarn`
2. `yarn start`

### How to deploy on firebase(assuming it has been configured and initialized)
1. `yarn build`
2. `firebase deploy --only hosting`

### Token:
- The token is appended to the URL and is verified if it exists in the database


