workflow "deploy on push" {
  on = "push"
  resolves = ["deploy"]
}

action "npm-install" {
  uses = "actions/npm@master"
  args = "install"
}

action "deploy" {
  uses = "actions/npm@master"
  needs = ["npm-install"]
  args = "run-script deploy"
  screts = ["GITHUB_TOKEN"]
}
