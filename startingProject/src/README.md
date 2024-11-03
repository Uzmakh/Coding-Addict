###Folder Structure

index.html is outside the src folder

src In simplest form it's the brain of our app. This is where we will do all of our work. src/App.jsx is the JavaScript entry point.

.gitignore Specifies which files source control (Git) should ignore

package.json Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

package-lock.json A snapshot of the entire dependency tree

README The markdown file where you can share more info about the project for example build instructions and summary


<!-- In main.jsx -->
<!-- This code specifies the "Sucker" of all components in App.jsx -->
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>)

  <!-- We inject the components into App.jsx -->