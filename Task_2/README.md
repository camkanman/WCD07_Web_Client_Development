# 🚀 Git & GitHub Workflow Guide

Hey there! For my assignment on version control systems, I have created a tutorial guide on GitHub's README.md. This tutorial is packed with clear steps, code snippets, and a friendly atmosphere, making learning Git and GitHub easier. Whether you're just starting out or looking to brush up on your skills, this guide will help you initialize repositories, manage changes, work with branches, and understand workflows on GitHub-all in a fun and engaging way. Let's get started! 🎉

## Table of Contents

- [🚀 Git \& GitHub Workflow Guide](#-git--github-workflow-guide)
  - [Table of Contents](#table-of-contents)
  - [🛠 Prerequisites](#-prerequisites)
  - [Step 1: Initializing a Repository](#step-1-initializing-a-repository)
    - [Here’s How:](#heres-how)
  - [Step 2: Making Changes and Committing](#step-2-making-changes-and-committing)
    - [Let’s Do It:](#lets-do-it)
  - [Step 3: Working with Branches](#step-3-working-with-branches)
    - [Branch Time! 🌿](#branch-time-)
  - [Step 4: Pushing to GitHub](#step-4-pushing-to-github)
    - [Share It!](#share-it)
  - [Step 5: Pull Requests and Merging](#step-5-pull-requests-and-merging)
    - [Collaborate Like a Pro! 🤝](#collaborate-like-a-pro-)
  - [🎉 Wrap-Up](#-wrap-up)


## 🛠 Prerequisites

Before we dive in, let’s make sure you’ve got the basics covered:
-   **Git**: Installed on your machine. Verify with:
	```bash
	git --version
	```
-   **GitHub Account**: Sign up at [github.com](https://github.com) and create a new repository (e.g., my-first-repo).
-   **Tools**: A terminal (like Bash or PowerShell) and a text editor (VS Code works great!).

>💡 **Pro Tip**: Stuck on setup? Check out [Git’s official docs](https://git-scm.com/doc) or [GitHub’s Quickstart](https://docs.github.com/en/get-started/quickstart).

## Step 1: Initializing a Repository

**Goal**: Set up a new Git repository and add some starting files.

### Here’s How:

1.  **Make a Project Folder**
    -   In your terminal, navigate to your projects directory and create a new one:
        ```bash
        mkdir WCD07_Web_Client_Development
        cd WCD07_Web_Client_Development
	```
2.  **Initialize Git**
    -   Turn this folder into a Git repository:
        ```bash
        git init
        ```
    -   This creates a hidden .git folder—your version control hub!
3.  **Add Some Files**
    -   Create a simple file and a README:
        ```bash
        ## Coment untuk mac/linux
        touch script.js README.md

        ## Comment untuk windows
        mkdir Task_2 && cd Task_2 && echo. > script.js && echo. > README.md

        ```
    -   Edit them in your text editor:
        -   script.js:
            ```js
            console.log("Hello, World!");
            ```
            
        -   README.md:
            ```markdown
            # My Web Client Development Repo
            Project to save Web Client Development tasks
            ```
            
> 🔑 **What’s Happening?**: git init sets the stage for tracking changes. You’re now ready to version your project!

## Step 2: Making Changes and Committing
**Goal**: Edit files, stage changes, commit them, and connect to GitHub.

### Let’s Do It:

1.  **Tweak a File**
    -   Update script.js:
        ```javascript
        console.log("Hello, World!");
		function sayHi() {
		    return "Hi from Git!";
		}
		console.log(sayHi());
        ```
2.  **Stage Your Changes**
    -   Tell Git which changes to track:
        ```bash
        git add .
        ```
3.  **Commit Them**
    -   Save the snapshot with a message:
        ```bash
        git commit -m "Add sayHi function to script.js"
        ```
4.  **Link to GitHub**
    -   Create a new repository on GitHub (e.g., WCD07_Web_Client_Development).
    -   Connect your local repo to your GitHub repository (replace your-username):
        ```bash
        git remote add origin https://github.com/your-username/your-repo-name.git
        ```
    -   Push to the main branch:
        ```bash
        git push -u origin master
        ```

> 🔑 **Key Takeaways**:
> 
> -   git add: Preps changes.
> -   git commit: Locks them in locally.
> -   git push: Shares them with GitHub.

## Step 3: Working with Branches

**Goal**: Create a branch for new features and switch between them.

### Branch Time! 🌿

1.  **Start a New Branch**
    -   Create and switch to branch-feature:
        ```bash
        git checkout -b branch-feature
        ```
2.  **Add a Feature**
    -   Edit script.js again:
        ```javascript
        console.log("Hello, World!");
		function sayHi() {
		    return "Hi from Git!";
		}
		console.log(sayHi());
		function coolStuff() {
		    return "This is so cool!";
		}
		console.log(coolStuff());
        ```
3.  **Commit the Update**
    -   Stage and commit:
        ```bash
        git add .
		git commit -m "Add coolStuff function"
        ```
4.  **Switch Back and Forth**
    -   Go back to main:
        ```bash
        git checkout master
        ```
    -   Notice coolStuff is gone! Return to your branch:
        ```bash
        git checkout branch-feature
        ```
        
> 🔑 **Why Branches?**: They let you experiment safely without messing up your main code.

## Step 4: Pushing to GitHub

**Goal**: Upload your branch to GitHub for collaboration.

### Share It!

1.  **Push the Branch**
    -   Send it to GitHub:
        ```bash
        git push origin branch-feature
        ```
        
> 💡 **Fun Fact**: Now your branch is live on GitHub—perfect for teamwork or showing off!

----------

## Step 5: Pull Requests and Merging

**Goal**: Propose your changes, review them, and merge into main.

### Collaborate Like a Pro! 🤝

1.  **Open a Pull Request (PR)**
    -   On GitHub, go to your repo.
    -   Click **Pull requests** > **New pull request**.
    -   Choose:
        -   **Base**: master
        -   **Compare**: branch-feature
    -   Add a title like “Add coolStuff function” and a description, then hit **Create pull request**.
2.  **Review It**
    -   Check the “Files changed” tab to see your updates.
    -   In a team, others could leave feedback here.
3.  **Merge It**
    -   Click **Merge pull request** > **Confirm merge**.
    -   Clean up by deleting the branch on GitHub (optional).
4.  **Sync Locally**
    -   Update your local main:
        ```bash
        git checkout master
        git pull origin master
        ```
    -   Ditch the old branch:
        ```bash
        git branch -d branch-feature
        ```
        
> 🔑 **Big Wins**:
> 
> -   **PRs**: A chance to review before merging.
> -   **Merging**: Combines your work into the main codebase.

## 🎉 Wrap-Up
Great job! You’ve just mastered the Git and GitHub basics:

-   Set up a repo with git init.
-   Committed and pushed changes.
-   Used branches for new ideas.
-   Shared your work via pull requests and merged it like a pro.

This is the GitHub flow in action—used by developers worldwide to build awesome stuff together.

> 💡 **What’s Next?**: Add more features, try multiple branches, or invite a friend to collaborate. The sky’s the limit!

Happy coding! 🚀
