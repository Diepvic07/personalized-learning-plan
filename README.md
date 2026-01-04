# eJOY English - Personalized Learning Plan

A Single-Page Application (SPA) for creating personalized English learning plans based on user goals, level, and learning preferences.

## 🚀 Features

- **7-Screen Onboarding Flow**: Native language selection → Questionnaire → Study plan → Email submission → Confirmation → Commitment → First lesson
- **Multi-language Support**: English, Vietnamese, and Spanish
- **12 Predefined Learning Plans**: Matched based on goal (Communication/IELTS/TOEIC), level (Beginner/Intermediate), and device preference
- **Google Forms Integration**: Automatic submission of user data for follow-up
- **Responsive Design**: Works on mobile, tablet, and desktop

## 📋 Quick Start

### Running Locally

1. Clone the repository
2. Open `index.html` in a web browser (no build process needed!)

```bash
# Simple HTTP server
python -m http.server 8000
# or
npx serve
```

3. Navigate to `http://localhost:8000`

### Deployment to GitHub Pages

1. Push code to your GitHub repository
2. Go to Repository Settings → Pages
3. Set Source to `main` branch, `/ (root)` folder
4. Save and wait for deployment
5. Access at: `https://[username].github.io/[repo-name]`

## 🛠️ Tech Stack

- **Vanilla JavaScript (ES6+)** - No framework dependencies
- **TailwindCSS** (CDN) - Utility-first CSS
- **Hash-based Routing** - Client-side navigation
- **localStorage** - State persistence
- **Google Forms** - Data collection

## 📁 Project Structure

```
├── index.html              # Main entry point
├── app.js                  # Application controller & router
├── config.js               # Configuration (Google Forms)
├── translations.js         # i18n translations
├── styles.css              # Custom styles
│
├── src/
│   ├── models/
│   │   ├── user-data.js      # User data model
│   │   └── study-plans.js    # 12 learning plans
│   │
│   ├── screens/
│   │   ├── screen-01-language.js
│   │   ├── screen-02-questionnaire.js
│   │   ├── screen-03-study-plan.js
│   │   ├── screen-04-email.js
│   │   ├── screen-05-confirmation.js
│   │   ├── screen-06-commitment.js
│   │   └── screen-07-first-lesson.js
│   │
│   ├── utils.js              # Utility functions
│   ├── storage.js            # localStorage wrapper
│   └── google-forms.js       # Forms integration
│
└── README.md
```

## ⚙️ Configuration

### Google Forms Setup

1. Create a Google Form with these fields:
   - Native Language, Current Level, Goal, Target Level, etc.
   
2. Get your form's entry IDs:
   - Right-click form → Inspect
   - Find `entry.XXXXXX` IDs for each field
   
3. **Update `config.js`**:
   ```javascript
   googleForm: {
     baseUrl: 'YOUR_FORM_URL/formResponse',
     fields: {
       nativeLanguage: 'entry.XXXXXX',
       // ... update all entry IDs
     }
   }
   ```

**Note**: Current entry IDs in `config.js` are already configured for your form.

## 🎯 User Flow

1. **Screen 01**: Select native language (Vietnamese/Spanish/Other)
2. **Screen 02**: Complete questionnaire (9 questions)
   - Feasibility check: Green Light → Continue | Red Alert → Adjust plan
3. **Screen 03**: View personalized study plan
   - Plans 1-12 based on goal/level/device
   - Or custom plan if no match
4. **Screen 04**: Enter contact information
   - Data submitted to Google Forms
5. **Screen 05**: Confirmation message
6. **Screen 06**: 3-step commitment flow
7. **Screen 07**: First lesson (Video or AI Roleplay)

## 🔧 Development

### Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

### No Build Process

This project uses vanilla JavaScript and doesn't require Node.js, npm, or any build tools. Simply edit files and refresh the browser!

### Debug Mode

Enable debug mode in `config.js`:
```javascript
features: {
  debugMode: true
}
```

## 📊 Study Plans

The application includes 12 predefined learning plans:

| Goal          | Level       | Device  | Plan ID |
|---------------|-------------|---------|---------|
| Communication | Beginner    | Mobile  | 1       |
| Communication | Intermediate| Mobile  | 2       |
| Communication | Beginner    | Laptop  | 3       |
| Communication | Intermediate| Laptop  | 4       |
| IELTS         | Beginner    | Mobile  | 5       |
| IELTS         | Intermediate| Mobile  | 6       |
| IELTS         | Beginner    | Laptop  | 7       |
| IELTS         | Intermediate| Laptop  | 8       |
| TOEIC         | Beginner    | Mobile  | 9       |
| TOEIC         | Intermediate| Mobile  | 10      |
| TOEIC         | Beginner    | Laptop  | 11      |
| TOEIC         | Intermediate| Laptop  | 12      |

Each plan has 3 phases with specific tasks tailored to the learning context.

## 🐛 Troubleshooting

**Google Forms not receiving data?**
- Verify entry IDs in `config.js` match your form
- Check browser console for errors
- Test form submission manually

**Styles not loading?**
- Ensure TailwindCSS CDN is accessible
- Check browser console for 404 errors

**Navigation not working?**
- Clear localStorage and refresh
- Check browser console for JavaScript errors

## 📝 License

MIT License - feel free to use for your own projects!

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome!

---

**Made with ❤️ for English learners worldwide**
