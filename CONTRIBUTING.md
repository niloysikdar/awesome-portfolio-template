This is a workflow you can use to add, commit, push and create a pull request to the project.

- [ ] Fork the **awesome-portfolio-template**.
      Click on the fork button.
- [ ] Clone the forked repo to your computer.
      Open a terminal and cd into the desired folder to download (clone) the project.
      `git clone <yourUsername>/awesome-portfolio-template`
- [ ] Set an upstream remote. [Video Upstream Remote](https://youtu.be/deEYHVpE1c8).
      `git remote -v` to see the remotes you have.
      `git remote add upstream https://github.com/niloysikdar/awesome-portfolio-template.git`
- [ ] Create a branch from **dev** from your forked repo.
      `git checkout -b yourBranchName`
      `git push --set-upstream origin yourBranchName`
- [ ] Change some code.
- [ ] Add, commit, push and create a pull request.
      `git add .`
      `git commit -m "message"`
      `git push`
      This pushed the changes to your forked repo.
      Go to the github website and you will get a message at the top of the page with a pull request call to action.
      The pull request should be requested to the **dev** branch. Never to **master** branch. Master branch is only for production. Never do anything with that branch.

if your repo is not updated from the original repo, then you should need to fetch the new changes and merge them with your repo.
This is how its done.
`git checkout dev` this will take you to your forked dev branch.
`git fetch upstream` make sure you already add the remote.
`git merge upstream/dev`
`git push`
