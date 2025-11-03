# GitHub Flow

## Main Branches:

**Main Branches:**

**Main**: Contains only stable, production-ready code.

**Feature (feature/branch-name)**: Used for developing new features or test cases.

## Workflow

1. Creating a New Feature Branch

git checkout feature/branch-name
git pull origin feature/branch-name

2. Committing Changes

Follow the Conventional Commits format:

git commit -m "add new login test case"

3. Pushing and Creating a Merge Request

git push origin feature/new-test-case

Open a merge request (MR) to develop.

4. Review and Merge

Ensure tests pass before merging.

Use squash and merge to keep a clean history.

Delete the branch after merging.

## Git Strategy

- **Direct commits to the main branch are declined.**
- **One approver is (me) required per Pull Request (PR).**
- **Only squash merges are allowed.**
- **Source branches are stored after PR merge.**