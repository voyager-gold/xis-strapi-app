# Contributing

## Overview

SovTech contributing guidelines.

## Commit Message Guidelines

### Introduction

We follow the Angular Commit Message guildelines, which can be found here:

[https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)

We have very precise rules over how our git commit messages can be formatted. This leads toÂ **more readable messages**Â that are easy to follow when looking through theÂ **project history**. But also, we use the git commit messages toÂ **auto-generate the change log**.

### Commit Message Format

Each commit message consists of aÂ **header**, aÂ **body**Â and aÂ **footer**. The header has a special format that includes aÂ **type**, aÂ **scope**Â and aÂ **subject**:

    <type>(<scope>): <subject>
    <BLANK LINE>
    <body>
    <BLANK LINE>
    <footer>

TheÂ **header**Â is mandatory and theÂ **scope**Â of the header is optional.

Any line of the commit message should not be longer than 100 characters! This allows the message to be easier to read on Bitbucket as well as in various git tools.

Samples:

    docs(changelog): update changelog to beta.5

    fix(release): need to depend on latest rxjs and zone.js

    The version in our package.json gets copied to the one we publish, and users need the latest of these.

#### Revert

If the commit reverts a previous commit, it should begin withÂ `revert:`Â , followed by the header of the reverted commit. In the body it should say:Â `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: webpack, npm)
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

#### Scope

The scope should be the name of the feature or package you that the change touches. If it multiple words, it should be camelCased.

For example:

- navbar
- adminPortal

#### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Body

Just as in theÂ **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer should contain any information aboutÂ **Breaking Changes**Â and is also the place to optionally reference Jira issues that this commitÂ **Closes**.

#### Breaking Changes

Should start with the wordÂ `BREAKING CHANGE:`Â with a space or two newlines. The rest of the commit message is then used for this.

---

## Pull Request Process

At SovTech we make use of a git workflow called Git Flow.

You can find a fantastic breakdown by Atlassian below

[Gitflow Workflow | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

We typically always have three environments, DEV, UAT and PROD

Where,

- DEV = Development
- UAT = User Acceptance Testing (Quality Assurance, QA)
- PROD = Production (Live)

As a result, we setup up repositories to follow the same pattern. There are three primary branches:

- develop
- uat
- prod

Clearly seen, each branch maps to an environment. Code is never directly pushed to each of the branches, a PR is always raised, reviewed and then merged into the respective branch.

### Pull Request Workflow

Refer to the Giflow specification for a detailed description of Gitflow.
The most common (daily) development workflow would encompass the following steps:

##### 1. Create a branch off of `develop`

Name the branch with your first `feature` pre-pended:
`feature/cool-feature`

The branch name should describe the feature you're working on. Either delimited with a dash (`-`) or underscore (`_`);

- `feature/cool-new-feature`
- `feature/update_main_header`

##### 2. Writing code

Write your code in your new branch.

##### 3. Commit your changes

Commit frequently, while adhering to SovTech's standard [commit message guidelines](#commit-message-guidelines)

##### 4. Create a pull request on Bitbucket

Include the Jira ticket number (if applicable) in either the PR title or description body

##### 5. Submit for review

- Assign the PR to the appropriate reviewer, often default reviewers are set.

##### 6. Merge changes

Once at least one approval has been made (project dependant), the changes can then be merged into the destination branch. The PR opener is responsible for merging their PR.

### Pull Request Template

The following template should be used as the default PR template.

```
## Overview ðŸš€

Include a summary of the change and which issues it addresses.

## Type of change ðŸ§™â€

- ðŸŽ‰ Initial commit (area): a brief description of change.

- âœ¨ New feature (area): a brief description of change.

- ðŸ› Bugfix (area): a brief description of change.

- ðŸ“š Documentation (area): a brief description of change.

- ðŸ’¡ Documenting source code (area): a brief description of change.

- ðŸŽ Performance (area): a brief description of change.

- ðŸš¨ Tests (area): a brief description of change.

- ðŸ’š Continuous Integration (area): a brief description of change.

- ðŸ”’ Security (area): a brief description of change.

- ðŸ‘• Lint (area): a brief description of change.

- ðŸš€ Deploying stuff (area): a brief description of change.

- ðŸš§ Work in progress (area): a brief description of change.

- ðŸ”§ Configuration files (area): a brief description of change.

- ðŸ’© Bad code / need improv. (area): a brief description of change.

- ðŸ’¥ Breaking changes (area): a brief description of change.

- ðŸ‘Œ Code review changes (area): a brief description of change.

## How Has This Been Tested? ðŸš¨

Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce. Please also list any relevant details for your test configuration

- âœ… Test A

- âŒ Test B

## Screenshots ðŸ“¸

If you changed the UI or UX include a screenshot, video or gif

## Checklist âœ…

- [ ] My code follows the style guidelines of this project

- [ ] I have performed a self-review of my own code

- [ ] I have commented my code, particularly in hard-to-understand areas

- [ ] I have made corresponding changes to the documentation

- [ ] My changes generate no new warnings

- [ ] I have added tests that prove my fix is effective or that my feature works

- [ ] New and existing unit tests pass locally with my changes

- [ ] Any dependent changes have been merged & published in downstream modules
```

## Meta

| Version | Author                       | Date       |
| ------- | ---------------------------- | ---------- |
| 0.0.1   | Yatin Badal <yatin@sov.tech> | 17/03/2020 |
