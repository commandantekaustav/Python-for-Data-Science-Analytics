---
transition: fade
align: centre
title: Extension of Git Session
layout: section
---
# We are ready to get started
---

## Git Deep Dive - `git init`: Start Fresh with Git

**`git init` -  Your Git Project's Birth**

**Explanation:**

  * **First Git command** for new projects.
  * **Initializes empty Git repo** in current folder.
  * Creates hidden **`.git` folder** (Git's core).
  * Turns folder into a **Git working directory**.
  * Run **once per project**.
  * For **local Git only**.

**Code Demo:**

```bash
mkdir demo_project
cd demo_project
git init  #  <--  Run this!
ls -a     #  See '.git' folder
```
---

## Your Turn : Initialize a Repo

* **Exercise:**
    1. Open VS Code terminal.
    2. `mkdir git_practice`.
    3. `cd git_practice`.
    4. Run: `git init`
    5. Check for `.git` folder.
    6. Note Git's confirmation message.
---

## Git Deep Dive - `git clone`: Get a Repo Copy

**`git clone` -  Download a Git Project**

**Explanation:**

  * **Copies existing Git repo** to your computer.
  * From **remote** (GitHub) or **local**.
  * Downloads **all history & files**.
  * Sets up working directory, linked to Git.
  * Sets remote as `origin` (for push/pull).
  * Use to join projects, contribute, backup.

**Code Demo:**

```bash
git clone [https://github.com/octocat/Spoon-Knife.git](https://github.com/octocat/Spoon-Knife.git)  #  <-- Run this!
cd Spoon-Knife
ls         # See project files
git status   # Repo status: clean
```
---

## Your Turn : Clone a GitHub Repo

* **Exercise:**
    1. VS Code terminal, Desktop/Documents.
    2. `git clone YOUR_REPO_URL`  (your GitHub repo).
    3. `cd YOUR_REPO_NAME`.
    4. `ls` (list files).
    5. `git status` (check output).
---

## Git Deep Dive - `git status`: Project Check-Up

**`git status` -  Know Your Git Project's State** 

**Explanation:**

  * **Shows Git project's current status.**
  * Tells you about:
      * **Changes:** Modified, staged, untracked files.
      * **Branch:** Current branch name.
      * **Cleanliness:** Working directory clean or not.
  * Use often to check before actions (commit, etc.).

**Code Demo:**

```bash
cd pro-python-scripts  # Your repo
git status             # <-- Run: Clean state?
# ...Modify 'hello_script.py' in VS Code...
git status             # <-- Run again: See changes
```

---

## Your Turn: Track Changes with status

* **Exercise:**
    1. Modify `hello_script.py`.
    2. `git status` (note 'modified').
    3. `git add hello_script.py`.
    4. `git status` (note 'staged').
    5. Modify `hello_script.py` again.
    6. `git status` (see staged vs. unstaged).
---
layout: two-cols-header
---

## Git Deep Dive - `git add`: Stage for Commit

**`git add` -  Get Files Ready for Commit. Key `git add` uses:** 
::left::
**Explanation:**
  * **Stages changes** for your *next commit*.
  * **Staging Area:** Prepare changes to be saved.
  * **Choose what to commit** using `git add`.

      * `git add <file>`: Stage one file.
      * `git add .`: Stage all in folder (careful!).
      * `git add -u`: Stage edits & deletes (no new files).
      * `git add -A`: Stage all changes (new, edits, deletes).
::right::
**Code Demo:**

```bash
git status         # 'hello_script.py' modified
git add hello_script.py  #  <-- Run: Stage it!
git status         # Now 'hello_script.py' staged
Your Turn: Practice Staging
```
---

## Your Turn: Practice Staging

* **Exercise:**
    1. Edit `hello_script.py`.
    2. `git status` ('not staged').
    3. `git add hello_script.py`.
    4. `git status` ('staged').
    5. Create `my_file.txt`.
    6. `git status` ('untracked').
    7. `git add my_file.txt`.
    8. `git status` ('staged').
    9. Test `git add .`, `git add -u`.
---
layout: two-cols-header
---

## Git Deep Dive - `git commit`: Save Your Work

**Headline:** `git commit` -  Record Changes in Git History
::left::
**Explanation:**

  * **Saves staged changes** to Git history.
  * Creates a **Commit**: project snapshot.
  * Commit = one logical change set.
  * **Commit ONLY staged changes** (`git add` is essential).
  * Commits include: ID, author, date, **message**.
  * **Commit message:**  Describe *what* and *why* changed.

  * **Commit Command:** `git commit -m "Your message"`
::right::
**Code Demo:**

```bash
# Show staged files
git status               

# Run: Create commit!
git commit -m "feat: Add greeting to script"
git status               # Working directory clean
Your Turn: Make Commits
```

---

## Your Turn: Make Commits

* **Exercise:**
    1. Stage `hello_script.py`.
    2. `git status` (staged?).
    3. `git commit -m "First commit"`.
    4. `git status` (clean?).
    5. Edit `hello_script.py`, stage, commit again ("Fix greeting typo").
    6. `git status` (clean again?).
    7. Try `git commit` (no staging).
---
layout: two-cols-header
---

### Git Deep Dive - `git log`: See Commit History

**Headline:** `git log` -  Your Project's Timeline
::left::
**Explanation:**

  * **View commit history.**
  * Shows commits in reverse chronological order.
  * Each commit entry includes:
      * Commit hash (SHA)
      * Author
      * Date
      * Commit message

  * Essential for understanding project evolution.

::right::

**Code Demo:**

```bash
git log   #  <-- Run this!
```

> (Scroll up/down to see full history)
---

## Your Turn: Explore `git log`

* **Exercise:**
    1. Open your VS Code terminal (in your repo).
    2. Run: `git log`
    3. Examine the output.
    4. Identify: commit hash, author, date, message for a few commits.
---
layout: two-cols-header
---

## Git Deep Dive - `git log --oneline`: Concise History

**Headline:** `git log --oneline` -  History Summary
::left::
**Explanation:**

  * **Condensed commit history.**
  * Each commit on a single line.
  * Shows:
      * Short commit hash (first 7 chars)
      * Commit message

  * Easier to quickly scan history.

::right::

**Code Demo:**

```bash
git log --oneline   #  <-- Run this!
```

> (Compare to git log output)
---

## Your Turn: Use `--oneline`

* **Exercise:**
    1. VS Code terminal (in your repo).
    2. Run: `git log --oneline`
    3. Compare output to regular `git log`.
    4. Which is easier to quickly read? Why?
---

### Git Deep Dive - `git log --graph --oneline --decorate`: Visualize Branches

**Headline:** `git log --graph --oneline --decorate` -  Branch Visualization

**Explanation:**

  * **Visual commit history graph.**
  * `--graph`:  Draws ASCII graph showing branches & merges.
  * `--oneline`:  Concise output per commit.
  * `--decorate`: Shows branch/tag names.

  * Powerful for understanding branching structure.

**Code Demo:**

```bash
git log --graph --oneline --decorate   #  <-- Run this!
```

> (Observe the visual branch structure)

---

## Your Turn: Explore the Commit Graph

* **Exercise:**
    1. VS Code terminal (in your repo - with some branches if you have them).
    2. Run: `git log --graph --oneline --decorate`
    3. Examine the graph.  Can you see branch points or merges?
    4. (If no branches yet, we'll create some later to see graph better).

---
layout: two-cols-header
---

## Commit Messages - Part 1: Why They Matter

**Headline:** Commit Messages:  Code's Story
::left::
**Explanation:**

  * **Commit messages = project history notes.**
  * Explain *why* of changes, not just *what*.
  * For yourself and collaborators.
  * Improve code understanding later.
  * Essential for:
      * Code reviews
      * Debugging (finding when bugs were introduced)
      * Understanding feature evolution
::right::
**Key Elements of a Good Message (Part 1):**

  * **Subject Line:**  Concise summary (50 chars max).
  * **Body (optional):**  Detailed explanation (why, context).

---
layout: two-cols-header
---

### Commit Messages - Part 2: Best Practices

**Headline:** Commit Messages:  Write Them Well
**Best Practices:**
::left::
  * **Subject Line:**
      * Imperative mood: "Fix bug", "Add feature" (not "Fixed bug", "Adding feature").
      * Capitalize first word.
      * No period at the end.
      * Limit to 50 characters.

  * **Body (if needed):**
      * Separate from subject by blank line.
      * Explain *why* change is needed.
      * Context, reasoning, details.
      * Wrap text at 72 characters.
::right::
**Example:**
feat: Implement user authentication

This commit introduces user authentication to the application.

The authentication system uses JWT (JSON Web Tokens) for secure session management.
This was implemented to enhance security and allow for user-specific data access.

> See issue #123 for detailed requirements.
---
layout: two-cols-header
---

### Git Deep Dive - `git diff`: See What Changed
**Headline:** `git diff` -  Compare Versions of Your Code

::left:: 
**Explanation:**

  * **Shows differences between versions.**
  * Compares:
      * Working directory vs. Staging Area
      * Staging Area vs. Last Commit
      * Commits with each other
      * Branches

  * Crucial for reviewing changes before committing or understanding history.
::right::
**Basic `git diff`:**

  * Compares **Working Directory** (your current edits)
  * ... against the **Staging Area** (what you've `git add`ed)

**Code Demo (Initial):**

```bash
# ...Modify 'hello_script.py' but DON'T stage yet...
git diff   #  <-- Run: See working directory changes
```

> (Output shows lines added/removed in working file)

---

# Your Turn: First `git diff`
* **Exercise:**
    1. Modify `hello_script.py` in VS Code (but don't `git add`).
    2. `git diff` (observe output - what changes are shown?).
    3. `git add hello_script.py`.
    4. `git diff` (run again - what output now? Why?).
---
layout: two-cols-header
---

### Git Deep Dive - `git diff`: Working Directory Changes

**Headline:** `git diff` -  Your Unstaged Edits
::left::
**Explanation (Detailed):**

  * `git diff` (without options) = **Working Directory vs. Staging Area**.
  * Shows changes you've made in your files
  * ...that are **NOT yet staged** with `git add`.
  * Highlights:
      * **Lines added** (green, prefixed with `+`)
      * **Lines removed** (red, prefixed with `-`)

  * Helps you review *unsaved* changes before staging.
::right::
**Code Demo (Working Dir Diff):**

```bash
# ...Ensure 'hello_script.py' has unstaged changes...
git diff   #  <-- Run: See unstaged changes
```

> (Output will show specific lines added/removed since last staging)

---

## Your Turn: Explore Working Dir Diff

* **Exercise:**
    1. Modify `hello_script.py` (add/remove lines).
    2. `git diff` (examine output - additions/deletions).
    3. Make *more* changes to `hello_script.py`.
    4. `git diff` again (does output update with new changes?).
    5. Stage `hello_script.py` (`git add hello_script.py`).
    6. `git diff` (run one last time - what output now? Why?).
---

## Git Deep Dive - `git diff --staged`: Staged Changes

**Headline:** `git diff --staged` -  Review What You've Staged

**Explanation:**

  * `git diff --staged` = **Staging Area vs. Last Commit**.
  * Shows changes you've **already staged** with `git add`.
  * Displays what will be included in your *next commit*.
  * Useful to double-check staged changes *before* `git commit`.

**Code Demo (`--staged` Diff):**

```bash
# ...Ensure 'hello_script.py' is STAGED (git add)...
git diff --staged   #  <-- Run: See staged changes
```

> (Output shows diff of staged changes compared to last commit)
---

## Your Turn: Check Staged Diff

* **Exercise:**
    1. Modify `hello_script.py`.
    2. Stage the changes (`git add hello_script.py`).
    3. `git diff --staged` (examine output - staged changes).
    4. Make *more* changes to `hello_script.py` (without staging).
    5. `git diff --staged` (run again - does output change? Why?).
    6. `git diff` (run regular `git diff` - compare output to `--staged`).
---
layout: two-cols-header
---

### Git Deep Dive - `git restore`: Undo Mistakes

**Headline:** `git restore` -  Your "Oops!" Button in Git
::left::
**Explanation:**

  * **Undo changes in your working directory or staging area.**
  * Modern Git command for undoing (replaces older `git checkout --`).
  * Key uses:
      * Discard **unstaged changes** in working directory.
      * Unstage **staged changes** (remove from staging area).
      * Revert files to a specific commit (later, more advanced).
::right::
**Basic `git restore` (Discard Working Changes):**

  * `git restore <filename>`
  * Discards **unstaged modifications** in `<filename>`.
  * Reverts file to the version in the Staging Area (or last commit if not staged).

**Code Demo (Restore Working Dir):**

```bash
# ...Modify 'hello_script.py' but DON'T stage...
git status        # Shows 'modified'
git restore hello_script.py  #  <-- Run: Discard changes!
git status        # Now 'working tree clean' again
```
---

## Your Turn: Discard Working Changes
* **Exercise:**
    1. Modify `hello_script.py` (make some changes).
    2. `git status` (verify 'modified').
    3. `git restore hello_script.py`
    4. `git status` (is 'hello_script.py' still modified? What happened?).
    5. Open `hello_script.py` in VS Code - are your changes gone?

---
layout: two-cols-header
---

## Git Deep Dive - `git restore --staged`: Unstage Files

**Headline:** `git restore --staged` -  Take Files Out of Staging
::left::
**Explanation:**

  * `git restore --staged <filename>`
  * **Unstages** `<filename>`.
  * Removes file from the **Staging Area**.
  * Reverts file in staging area to the version in the **Last Commit**.
  * Working directory remains unchanged.

  * Use when you accidentally `git add`ed a file, or want to remove changes from staging before committing.

::right::

**Code Demo (Unstage Files):**

```bash
# ...Stage 'hello_script.py' (git add)...
git status        # Shows 'hello_script.py' staged
git restore --staged hello_script.py  #  <-- Run: Unstage!
git status        # Now 'hello_script.py' is NOT staged
```
---

## Your Turn: Practice Unstaging

* **Exercise:**
    1. Modify `hello_script.py`.
    2. Stage it: `git add hello_script.py`.
    3. `git status` (verify 'staged').
    4. `git restore --staged hello_script.py`
    5. `git status` (is 'hello_script.py' still staged? What section is it in now?).
    6. `git diff --staged` (run - what output do you expect? Why?).
---
layout: two-cols-header
---

## Git Deep Dive - `git branch`:  Branching Out in Git

**Headline:** `git branch` -  Create Parallel Worlds for Development

::left::

**Explanation:**

  * **Branching = core Git feature.**
  * Create parallel, independent lines of development.
  * Isolate features, bug fixes, experiments.
  * Work on changes *without* affecting the main project (`main` or `master` branch).
  * Later, merge branches back together.

**Analogy: Branching Tree:**

  * Imagine a tree trunk (`main` branch).
  * Branches grow out for different tasks.
::right::

  * Changes on one branch don't affect others (initially).


**Basic `git branch` (List Branches):**

  * `git branch`
  * Lists *local* branches in your repository.
  * Shows current branch with an asterisk `*`.

**Code Demo (List Branches):**

```bash
git branch   #  <-- Run: See your local branches
```

> (Initially, you'll likely only see 'main' or 'master' branch listed)
---

## Your Turn: List Branches

* **Exercise:**
    1. VS Code terminal (in your repo).
    2. Run: `git branch`
    3. What branch is listed? Is there an asterisk `*`? What does it indicate?
---

### Git Deep Dive - `git branch <branch_name>`: Make a New Branch

**Headline:** `git branch <branch_name>` -  Create Your Own Development Path

**Explanation:**

  * `git branch <branch_name>`
  * **Creates a new branch.**
  * Branch name should be descriptive (e.g., `fix-login-bug`, `feature-user-profile`).
  * New branch is based on your *current* branch (where you are when you run the command).
  * **Important:**  `git branch` only *creates* the branch. It doesn't switch you to it.

**Code Demo (Create Branch):**

```bash
git branch feature-greeting  #  <-- Run: Create new branch
git branch                #  <-- Run again: List branches
```

> (Now you should see 'feature-greeting' listed, but * is still on 'main' or 'master')
---

## Your Turn: Create a Branch

* **Exercise:**
    1. VS Code terminal (in your repo).
    2. Run: `git branch my-new-feature` (or your own branch name).
    3. Run: `git branch` (verify your new branch is listed).
    4. Is the asterisk `*` on your new branch or the original branch? What does this tell you?

---

### Git Deep Dive - `git checkout <branch_name>`: Branch Switcheroo

**Headline:** `git checkout <branch_name>` -  Jump Between Branches

**Explanation:**

  * `git checkout <branch_name>`
  * **Switches** your working directory to the specified branch.
  * Makes the `<branch_name>` branch the *active*, current branch.
  * Changes files in your working directory to reflect the state of the checked-out branch.

**Code Demo (Switch Branch):**

```bash
git checkout feature-greeting  #  <-- Run: Switch to 'feature-greeting'
git branch                  #  <-- Run: Verify current branch
```

> (Now git branch output should show * on 'feature-greeting')
---

## Your Turn: Switch Branches

* **Exercise:**
    1. VS Code terminal (in your repo).
    2. Run: `git checkout my-new-feature` (or your branch name).
    3. Run: `git branch` (verify asterisk `*` is now on your new branch).
    4. Run: `git checkout main` (or `git checkout master`).
    5. `git branch` (confirm you switched back to main/master).
---

### Git Branching Workflow:  Work in Isolation

**Headline:** Branching Workflow -  Safe & Separate Development

**Explanation:**

  * **Typical Branching Workflow:**
    1. **Create a new branch** (`git branch <feature-branch>`) for each feature or bug fix.
    2. **Checkout the new branch** (`git checkout <feature-branch>`).
    3. **Work on your changes** on this branch (edit, add, commit).
    4. Changes are isolated to this branch. `main` branch remains clean and stable.
    5. **Switch back to `main` branch** (`git checkout main`) when needed.
---

### Git Branching Workflow:  Work in Isolation

**Headline:** Branching Workflow -  Safe & Separate Development

**Explanation:**

  * **Benefits of Branching:**
      * **Prevents breaking `main` branch.**
      * **Allows parallel development** of features.
      * **Easier code review** (review changes on a branch before merging).

**Diagram (Simple Branch Workflow):**

```
[main branch] --- (create feature-branch) --- [feature-branch] --- (work & commit) --- [feature-branch]
                                          \--- (checkout feature-branch) --- Working Directory now on feature-branch
```
---

### Git Branching:  Make Changes on Your Branch

**Headline:**  Branching in Action -  Coding on a Feature Branch

**Instructions:**

  * **Now you are on your `add-user-input` branch (from previous slide).**
  * **Modify `hello_script.py`:**
      * Add a new function or feature (e.g., a function to reverse the input name).
      * Call this new function in your script.

  * **Stage and Commit your changes** *on this branch*.
    * `git add hello_script.py`
    * `git commit -m "feat(hello_script): Add name reversal feature"`
---

### Git Branching:  Make Changes on Your Branch

**Headline:**  Branching in Action -  Coding on a Feature Branch

**Instructions:**

  * **Check `git status`** (working directory should be clean).
  * **Check `git log --oneline --graph --decorate`** (see commit on `add-user-input` branch).

**Code Demo (Modify & Commit on Branch):**

```bash
# ...Modify 'hello_script.py' in VS Code...
git add hello_script.py
git commit -m "feat(hello_script): Add name reversal feature"
git status
git log --oneline --graph --decorate
```

> (Observe commit history - commit is on 'add-user-input' branch)
---

## Your Turn: Code on Your Branch

* **Exercise:**
    1. Modify `hello_script.py` on your `add-user-input` branch.
    2. Stage your changes.
    3. Commit with a descriptive message.
    4. `git status` (clean?).
    5. `git log --oneline --graph --decorate` (verify commit on your branch).
    6. Switch back to `main` branch: `git checkout main`.
    7. Run `hello_script.py` - is your new feature there? Why or why not? (Hint: Branches are isolated!)
---
layout: two-cols-header
---

### Git Branching: `git checkout main` - Back to Base

**Headline:** `git checkout main` -  Home Sweet `main`
::left::
**Explanation:**

  * `git checkout main` (or `git checkout master`)
  * **Switches you back** to your `main` branch.
  * Essential to:
      * Integrate feature branches (later).
      * Start new features from a clean, stable base.
      * Ensure your working directory reflects the `main` branch state.
::right::
**Important:** Commit or stash changes on your feature branch *before* switching back to `main`.

**Code Demo (Checkout Main):**

```bash
git checkout main   #  <-- Run: Switch back to main
git branch        #  <-- Run: Verify current branch
```

> (Now `git branch` output should show `*` on 'main' or 'master')
---

## Your Turn: Return to Main
* **Exercise:**
    1. VS Code terminal (you should be on your feature branch from last exercise).
    2. Run: `git checkout main` (or `git checkout master`).
    3. `git branch` (confirm you are back on `main`).
    4. Run `hello_script.py` - is your new feature (name reversal) gone? Why? (Branch isolation!)
---
layout: two-cols-header
---

### Git Branching: `git merge`: Bring Branches Together

**Headline:** `git merge` -  Integrate Your Feature into `main`

::left::

**Explanation:**

  * `git merge <branch_name>`
  * **Combines** (integrates) the changes from `<branch_name>`
  * ... **into your *current* branch.**
  * Typically, you merge feature branches into `main`.
  * Brings isolated work back into the main project line.

::right::

**Analogy: Merge Branches:**

  * Tree branches grow separately, then rejoin the trunk.


**Basic `git merge` (Simple Scenario):**

  1. **Checkout `main` branch:** `git checkout main`
  2. **Merge feature branch:** `git merge <feature-branch>`

**Code Demo (Simple Merge):**

```bash
git checkout main                 #  <-- Run: Switch to 'main'
git merge add-user-input          #  <-- Run: Merge 'add-user-input' into main
```

> (Output will indicate a "merge commit" was created, if successful and no conflicts)
---

## Your Turn: Simple Merge

* **Exercise:**
    1. VS Code terminal, ensure you are on `main` branch.
    2. Run: `git merge add-user-input` (or your feature branch name).
    3. Observe the output. Was it a "merge commit"?
    4. Run `hello_script.py` - is your new feature (name reversal) now present in the `main` branch version?
---

### Git Branching Workflow:  Merging Your Feature

**Headline:** Branch Workflow -  Integrate Feature, Update `main`

**Workflow Steps (Merge):**

  1. **Checkout `main`:** `git checkout main` (ensure you're on `main`).
  2. **Update `main` (optional, but recommended):** `git pull origin main` (gets latest from remote - we'll cover remotes soon).  *For now, skip this step for local-only practice.*
  3. **Merge Feature Branch:** `git merge <feature-branch>` (integrates changes).
  4. **Test:** Run your application/scripts to ensure merge is successful and feature works on `main`.
  5. **Commit (if needed):** Git usually auto-commits merge. If not, you may need to commit the merge.
  6. **Push `main` (later, with remotes):** `git push origin main` (to update remote repo).

**Diagram (Merge Workflow):**
```
[feature-branch] --- (work & commit) --- [feature-branch]
/
[main branch] ------------------------- (git merge feature-branch) --- [main branch + feature]
```
---

## Your Turn: Complete the Merge Workflow

* **Exercise:**
    1. VS Code terminal, ensure you are on `main` branch.
    2. Run: `git merge add-user-input` (or your feature branch).
    3. Run `hello_script.py` and test your new feature.
    4. `git status` (check status after merge).
    5. `git log --oneline --graph --decorate` (observe the merge commit in history).

---

### Git Branching:  Uh Oh, Merge Conflicts! (Intro)

**Headline:** Merge Conflicts -  When Git Needs Your Help

**Explanation:**

  * **Merge Conflict:** Occurs when Git can't automatically merge changes.
  * Usually happens when:
      * Same lines in a file are changed on *different branches*.
      * Git doesn't know which change to keep.
  * Git marks conflicted files and pauses merge.
  * **You must manually resolve conflicts** in the files.

**Example Scenario (Conflict):**

  * Branch `main`: Line 10 of `hello_script.py` is changed to print "Hello!".
  * Branch `feature-x`: Line 10 of `hello_script.py` is changed to print "Greetings!".
  * Merging `feature-x` into `main` causes a conflict on line 10.
---

### Git Branching:  Uh Oh, Merge Conflicts! (Intro)

**Headline:** Merge Conflicts -  When Git Needs Your Help


###### **Visual (Conflict Markers):** (Not Parsing :'\) )

```md
< <<<<<< HEAD
Hello!  <-- Change on current branch (e.g., main)
=======
Greetings! <-- Change from branch being merged (e.g., feature-x)
> >>>>>> feature-x
```

> **(Git adds these markers in conflicted files to show you the conflicting changes)**
---

## Your Turn: Simulate a Conflict (Preparation)
* **Exercise (Preparation - Do NOT merge yet):**
    1. Checkout `main` branch: `git checkout main`.
    2. Edit `hello_script.py` - change the greeting message in the `greet()` function to something like "Hello from Main!". Commit this change to `main` (message: "fix: Change greeting in main").
    3. Checkout your feature branch (e.g., `add-user-input`): `git checkout add-user-input`.
    4. Edit `hello_script.py` *again* - change the greeting message in `greet()` to something *different* like "Greetings from Feature Branch!".  Commit this to your feature branch (message: "feat: Change greeting in feature branch").
    5. Now you have intentionally created diverging changes in `greet()` on `main` and your feature branch, setting up a conflict for the next slide.
---

### Git Branching:  Solve Merge Conflicts - You're the Boss!

**Headline:** Resolve Merge Conflicts -  Manual Conflict Resolution

**Instructions (Conflict Resolution):**

  1. **Checkout `main` branch:** `git checkout main`.
  2. **Merge feature branch (expect conflict):** `git merge add-user-input` (or your branch).
  3. Git will report a conflict and pause the merge.
  4. **Open the conflicted file** (`hello_script.py`) in VS Code.
  5. **Look for conflict markers:** `<<<<<<<`, `=======`, `>>>>>>>`.
  6. **Manually edit the file:**
      * Decide which change to keep (or combine them).
      * **Delete the conflict markers** (`<<<<<<< HEAD`, `=======`, `>>>>>>> feature-branch`) and the lines you *don't* want to keep.
      * Leave the code as you want it in the *merged* version.
  7. **Stage the resolved file:** `git add hello_script.py` (tell Git you've resolved the conflict in this file).
  8. **Commit the merge:** `git commit` (Git may auto-generate a merge commit message, edit if needed).
---

### Git Branching:  Solve Merge Conflicts - You're the Boss!

**Headline:** Resolve Merge Conflicts -  Manual Conflict Resolution

**Code Demo (Conflict Resolution):**

```bash
git checkout main
git merge add-user-input   # <-- Run - EXPECT A CONFLICT!
# ...Open conflicted 'hello_script.py' in VS Code, resolve manually...
git add hello_script.py      # <-- Run: Stage resolved file
git commit                 # <-- Run: Complete the merge
```
---

## Your Turn: Resolve a Conflict

* **Exercise:**
    1. Follow the instructions on this slide to resolve the merge conflict you set up in the previous exercise.
    2. After resolving and committing, run `hello_script.py`. What greeting message do you see? Is it what you intended after resolving the conflict?
    3. `git status` (working tree clean?).
    4. `git log --oneline --graph --decorate` (observe merge commit and conflict resolution).
---

### Git Branching: `git branch -d`: Clean Up Local Branches

**Headline:** `git branch -d <branch_name>` -  Declutter Your Branch List

**Explanation:**

  * `git branch -d <branch_name>`
  * **Deletes a local branch.**
  * Use to remove feature branches after they are merged and no longer needed.
  * Keeps your local repository clean and organized.

**Important:**

  * You must be *on a different branch* to delete the target branch. You cannot delete the branch you are currently checked out on.
  * Git will prevent you from deleting a branch that has not been merged (to avoid accidental data loss). Use `-D` (uppercase) to force delete even unmerged branches (use with caution!).
---

### Git Branching: `git branch -d`: Clean Up Local Branches

**Headline:** `git branch -d <branch_name>` -  Declutter Your Branch List

**Code Demo (Delete Branch):**

```bash
git branch        #  <-- Run: List branches, ensure you are NOT on 'add-user-input'
git checkout main  #  <-- Run: Switch to 'main' (if not already)
git branch -d add-user-input   #  <-- Run: Delete 'add-user-input' branch
git branch        #  <-- Run: Verify 'add-user-input' is gone
```
---

## Your Turn: Delete a Local Branch

* **Exercise:**
    1. VS Code terminal, ensure you are NOT on your feature branch (e.g., checkout `main`).
    2. Run: `git branch -d my-new-feature` (or the name of a branch you created and merged).
    3. `git branch` (verify the branch is deleted from your local repo).
    4. Try to delete the branch you are currently on (e.g., while on `main`, try `git branch -d main`). What happens? Why?

---

### Git Remotes:  Git Beyond Local - Meet Remotes

**Headline:** Git Remotes -  Connect to the Wider World

**Explanation:**

  * **Remote Repository:** A Git repository hosted *outside* your local machine.
  * Typically on platforms like: GitHub, GitLab, Bitbucket.
  * Allows:
      * **Collaboration:** Share code with others.
      * **Backup:**  Store your code remotely (safer than local only).
      * **Centralized Version Control:**  Team members sync to a common repo.
---

### Git Remotes:  Git Beyond Local - Meet Remotes

**Headline:** Git Remotes -  Connect to the Wider World

**Analogy: Remote Server:**

  * Like a shared folder on a server, but for Git repositories and version history.

**Common Remote Operations (Next Slides):**

  * `git remote add`: Connect to a remote repo.
  * `git push`:  Upload local commits to remote.
  * `git pull`: Download remote commits to local.
  * `git clone`: Copy a remote repo to local (we already used this!).

**Visual: Local vs. Remote Repo:**

```md
[Your Local Machine] <---> (Internet/Network) <---> [Remote Repository (e.g., GitHub)]
    Working Directory                      Central Code Storage & Collaboration
    .git Repository                        .git Repository (bare - no working dir)
```
---

## Your Turn: Think About Remotes

* **Exercise:**
    1. Think about why remote repositories are essential for software development, especially for teams.
    2. What are some advantages of using a remote repository like GitHub compared to just working with Git locally?
    3. Can you name other platforms besides GitHub that host Git repositories?

---

### Git Remotes: `git remote add`:  Linking Local to Remote

**Headline:** `git remote add` -  Establish the Remote Connection

**Explanation:**

  * `git remote add <name> <remote_url>`
  * **Connects your local Git repo to a remote repo.**
  * `<name>`: Short name for the remote (convention: `origin`).
  * `<remote_url>`: URL of the remote repository (e.g., GitHub repo URL).

  * You add a remote **once** per local repository.

**Code Demo (`git remote add`):**

```bash
git remote -v       #  <-- Run: List existing remotes (initially none)
git remote add origin [YOUR_GITHUB_REPO_URL]  #  <-- Run: Add 'origin' remote, replace with your repo URL
git remote -v       #  <-- Run again: Verify 'origin' remote is added
```

> (Output of `git remote -v` will now show 'origin' remote with fetch and push URLs)

---

## Your Turn: Add a Remote

* **Exercise:**
    1. VS Code terminal (in your local `pro-python-scripts` repo).
    2. Run: `git remote -v` (check existing remotes).
    3. If no remote named `origin`, add it: `git remote add origin YOUR_GITHUB_REPO_URL` (replace with *your* GitHub repo URL).
    4. Run `git remote -v` again to confirm 'origin' is set up correctly.  Note the fetch and push URLs.

---
layout: two-cols-header
---

### Git Remotes: `git remote -v`:  Check Your Connections

**Headline:** `git remote -v` -  List Your Remote Links
::left::
**Explanation:**

  * `git remote -v`
  * **Lists configured remote repositories** for your local Git repo.
  * `-v` (verbose) option shows:
      * Remote name (e.g., `origin`).
      * **Fetch URL:** URL Git uses to *download* (fetch) data from the remote.
      * **Push URL:** URL Git uses to *upload* (push) data to the remote.
::right::

  * Verify your remote connections with this command.

**Code Demo (`git remote -v` Output):**

```bash
git remote -v   #  <-- Run: View configured remotes
```
> (Example Output - Replace with your actual GitHub URL):

> origin  [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git) (fetch)
> origin  [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git) (push)
---

## Your Turn: Verify Your Remote

* **Exercise:**
    1. VS Code terminal (in your local `pro-python-scripts` repo).
    2. Run: `git remote -v`.
    3. Examine the output.
    4. Does it list `origin`?
    5. Are the fetch and push URLs correct for your GitHub repository?  (Double-check the URL).
---
layout: two-cols-header
---

### Git Remotes: `git push`: Share Your Local Work

**Headline:** `git push` -  Send Your Commits to the Remote

::left::

**Explanation:**

  * `git push <remote_name> <branch_name>`
  * **Uploads your local commits** to a remote repository.
  * `<remote_name>`:  Name of the remote (usually `origin`).
  * `<branch_name>`: Name of the local branch you want to push.

  * Use `git push origin main` to upload your `main` branch to the `origin` remote.

::right::

**First Time Push (Set Upstream):**

  * `git push -u origin main` (`-u` or `--set-upstream` sets up tracking, only needed the very first time you push a branch).
  * Subsequent pushes on the same branch: `git push origin main` (or just `git push` if branch is tracking).
---

### Git Remotes: `git push`: Share Your Local Work

**Headline:** `git push` -  Send Your Commits to the Remote

**Code Demo (`git push`):**

```bash
# ...Ensure you have local commits to push (e.g., from merge exercise)...
git push -u origin main   #  <-- Run: Push 'main' branch to 'origin' (first time)
# or
git push origin main      #  <-- Run: Subsequent pushes
```

> (Output will show upload progress. Check your GitHub repo online - commits should now be visible there!)

---

## Your Turn: Push to Remote

* **Exercise:**
    1. VS Code terminal (in your local `pro-python-scripts` repo).
    2. Ensure you have some *new local commits* that are not yet on the remote.
    3. Run: `git push -u origin main` (first time) or `git push origin main` (subsequent pushes).
    4. Examine the output - did it push successfully?
    5. **Crucially: Go to your GitHub repository in your web browser. Refresh the page. Do you see your latest commits there now?** This confirms your push to the remote was successful!
---

### Git Remotes: `git fetch`:  Get Remote Updates (But Don't Merge Yet)

**Headline:** `git fetch` -  Check for Remote Changes

**Explanation:**

  * `git fetch <remote_name>`
  * **Downloads information about branches and commits** from the remote.
  * **Does NOT merge** remote changes into your local branches.
  * Updates your *local copy* of the remote repository's state (remote branches).
  * Lets you see what's changed on the remote *before* integrating.

**Analogy: Check for Mail, Don't Open Yet:**

  * `git fetch` is like checking your mailbox for new mail, but not yet opening and reading the letters.
---

### Git Remotes: `git fetch`:  Get Remote Updates (But Don't Merge Yet)

**Headline:** `git fetch` -  Check for Remote Changes

**Code Demo (`git fetch`):**

```bash
git fetch origin   #  <-- Run: Get updates from 'origin' remote
git branch -r    #  <-- Run: List remote branches (see 'origin/main' updated)
```

> (Output of `git branch -r` will now show updated remote branch information, like `origin/main`)

---

## Your Turn: Fetch Remote Info

* **Exercise:**
    1. VS Code terminal (in your local `pro-python-scripts` repo).
    2. Run: `git fetch origin`.
    3. Run: `git branch -r` (list remote branches).
    4. Do you see `origin/main` (or similar) listed? What does this mean?
    5. Did `git fetch` change your *local* `main` branch files? (Run `hello_script.py` - are remote changes there yet?)
---

### Git Remotes: `git pull`:  Fetch AND Merge Remote Changes

**Headline:** `git pull` -  Get and Integrate Remote Updates

**Explanation:**

  * `git pull <remote_name> <branch_name>`
  * **Combines two actions:**
      1. `git fetch <remote_name>` (download remote info)
      2. `git merge origin/<branch_name>` (merge remote branch into your *current* local branch)

  * **Integrates remote changes** directly into your working branch.
  * Common workflow: `git checkout main`, then `git pull origin main` to update your local `main`.
---

### Git Remotes: `git pull`:  Fetch AND Merge Remote Changes

**Headline:** `git pull` -  Get and Integrate Remote Updates

**Analogy: Get and Read Mail:**

  * `git pull` is like going to the mailbox, getting new mail, *and* immediately opening and reading it.

**Code Demo (`git pull`):**

```bash
git checkout main         #  <-- Run: Switch to 'main' branch
git pull origin main      #  <-- Run: Fetch and merge remote 'main' into local 'main'
```

> (Output may show merge details if there were remote changes. Your local 'main' branch will now be updated with remote changes.)

---

## Your Turn: Pull Remote Changes

* **Exercise:**
    1. VS Code terminal (in your local `pro-python-scripts` repo).
    2. Checkout your `main` branch: `git checkout main`.
    3. Run: `git pull origin main`.
    4. Observe the output. Did it say "Already up to date" or did it download/merge changes?
    5. If it pulled changes, run `git log --oneline` to see the new commits that were pulled from the remote.
---

### Git Remotes:  Tracking Remote Branches - Stay Synced

**Headline:** Remote Branch Tracking -  Git's Way to Remember Remotes

**Explanation:**

  * **Tracking Branch:**  Local branch set up to directly correspond to a remote branch.
  * When you `git clone` or `git checkout -b <local-branch> origin/<remote-branch>`, Git automatically sets up tracking.
  * Tracking does two things:
      1. `git pull` and `git push` on a tracking branch work without needing to specify remote and branch names (Git knows the "upstream").
      2. `git status` on a tracking branch shows "Your branch is ahead of/behind 'origin/main'..." indicating sync status with remote.
---

### Git Remotes:  Tracking Remote Branches - Stay Synced

**Headline:** Remote Branch Tracking -  Git's Way to Remember Remotes

**Check Tracking (Example `git branch -vv`):**

```bash
git branch -vv   #  <-- Run: Show tracking info (if set up)
```

> (Output might show something like: `* main [origin/main] ...` indicating 'main' is tracking 'origin/main')

Implicit Tracking with `git push -u`:
- `git push -u origin main` (the `-u` or `--set-upstream` flag we used earlier) explicitly sets up tracking for the first `git push` of a new branch.

---

## Your Turn: Examine Tracking Info

* **Exercise:**
    1. VS Code terminal (in your local `pro-python-scripts` repo).
    2. Run: `git branch -vv`.
    3. Examine the output for your `main` branch.
    4. Does it show `[origin/main]` (or similar) after your `main` branch name? If so, tracking is set up.
    5. If not, try pushing your `main` branch again with `-u`: `git push -u origin main` and re-run `git branch -vv`.

---

### Git Collaboration:  Basic Teamwork with Git

**Headline:** Basic Collaboration -  Working Together via Git

**Simplified Collaborative Workflow:**

  1. **`git clone`:** Get the project from the remote repository (GitHub).
  2. **`git branch <feature-branch>`:** Create a new branch for your feature/fix.
  3. **`git checkout <feature-branch>`:** Switch to your branch.
  4. **Work, Stage, Commit:** Make your changes, commit them on your branch.
  5. **`git fetch origin`:** Check for updates from the remote repository while you were working.
  6. **`git merge origin/main`:**  *If* there are remote `main` branch changes, merge them into your feature branch to stay up-to-date and minimize later conflicts.
  7. **`git push origin <feature-branch>`:** Push your feature branch to the remote repository.
  8. **Create Pull Request (GitHub/GitLab/Bitbucket):**  Propose your changes to be merged into the main project (covered in next slides).
---

### Git Collaboration:  Basic Teamwork with Git

**Headline:** Basic Collaboration -  Working Together via Git

**Diagram (Basic Collaboration):**

```
[Remote Repository (GitHub)] --- clone --> 
[Local Repo - Main Branch] --- branch feature --> 
[Local Repo - Feature Branch] --- work & commit --- [Local Repo - Feature Branch] --- fetch & merge origin/main (if needed) --- [Local Repo - Feature Branch] --- push -->
[Remote Repository (GitHub) - Feature Branch] --- Pull Request --> Review & Merge to Main
```
---

## Your Turn: Think About Collaboration

* **Exercise:**
    1. Review the steps in the basic collaborative workflow.
    2. Why is it important to create feature branches when working in a team?
    3. Why is `git fetch` and merging remote `main` into your feature branch recommended *before* pushing?
    4. What is the purpose of a Pull Request?

---


## Slide 55: Git Collaboration:  Pull Requests - Propose Your Changes

**Headline:** Pull Requests (PRs) -  Suggest & Review Code Changes

**Explanation:**

  * **Pull Request (PR) =  Formal proposal to merge your branch.**
  * Mechanism for code review and collaboration on platforms like GitHub, GitLab, Bitbucket.
  * You create a PR to ask project maintainers to review and merge your feature branch into the `main` branch (or other target branch).
  * PR Page (on GitHub, etc.) includes:
      * Title & Description of changes.
      * List of commits in your branch.
      * Diffs (code changes).
      * Discussion area for code review comments.

**Pull Request Workflow:**

  1. **Push your feature branch to remote:** `git push origin <feature-branch>`.
  2. **Create Pull Request** on GitHub/GitLab/Bitbucket website for your branch.
  3. **Code Review:** Project maintainers review your code, provide feedback, suggest changes in the PR.
  4. **Iterate:** You may need to revise your code based on review feedback and push updates to your branch (PR auto-updates).
  5. **Merge:** Once approved, maintainers merge your PR into the target branch (`main`).

**Visual: Pull Request Flow:**
```
[Your Feature Branch (Remote)] --- Pull Request --> [Project's Main Branch (Remote)] --- (Code Review & Discussion) --- (Merge or Reject)
```
---

## Your Turn: Learn About Pull Requests**

* **Exercise:**
    1. If you have a GitHub account and repository set up, go to your repository on GitHub in a web browser.
    2. Look for the "Pull Requests" tab. Explore any existing pull requests (if any) or look for options to create a new one.
    3. Read GitHub's documentation or a tutorial on "How to create a Pull Request" to understand the process in more detail.
---

## Slide 56: Git Collaboration: Creating a Pull Request on GitHub

**Headline:** Creating a Pull Request -  Step-by-Step on GitHub

**Steps to Create a Pull Request (GitHub):**

  1. **Push your feature branch to your remote repository:** `git push origin <feature-branch>`.
  2. **Go to your repository on GitHub.com** in a web browser.
  3. **GitHub will often automatically detect** your newly pushed branch and show a "Compare & pull request" button. Click it.
  4. **Alternatively, click on the "Pull requests" tab** in your repository.
  5. **Click the "New pull request" button.**
  6. **Select the base branch** (usually `main`) you want to merge *into*.
  7. **Select your feature branch** as the "compare" branch (the branch with your changes).
  8. **Review the changes.** GitHub shows a diff of your branch compared to the base branch.
  9. **Add a Title and Description** for your pull request.  Write a clear, concise title and explain the changes in detail in the description (referencing issues if applicable).
  10. **Click "Create pull request".**

**Screenshot/Visual Aid:** *(Ideally, a screenshot here showing the GitHub "Create Pull Request" interface with key elements highlighted -  this would need to be added as an image in your slide deck)*
---

## Your Turn: Explore Pull Request Creation
* **Exercise:**
    1. If you have a GitHub repository with your feature branch pushed, go to your repository on GitHub in a browser.
    2. Try to start the process of creating a Pull Request for your feature branch (even if you don't fully create it).
    3. Familiarize yourself with the GitHub Pull Request creation interface. Identify the base branch, compare branch, title, and description fields.
---

## Slide 57: Git Collaboration: Code Review -  Feedback and Improvement

**Headline:** Code Review -  The Heart of Collaboration in Pull Requests

**Explanation:**

  * **Code Review =  Essential part of Pull Request process.**
  * Other developers (or project maintainers) review your code in the PR.
  * They provide feedback, suggestions, and look for:
      * Bugs, errors, potential issues
      * Code style and quality
      * Alignment with project goals
      * Security concerns
      * Areas for improvement

  * **Collaborative Improvement:** Code review helps catch issues early, improves code quality, and knowledge sharing within the team.

**Code Review Process (in Pull Request):**

  1. **Reviewers examine your code changes** (diffs in the PR).
  2. **Reviewers add comments** directly on lines of code in the PR, or general comments.
  3. **Discussion and Iteration:** You (the PR author) respond to comments, clarify, and revise your code based on feedback.
  4. **Updates:** You push updated commits to your branch; the PR automatically updates with new code and comments.
  5. **Approval/Merge:** Once reviewers are satisfied, they approve the PR, and it can be merged.

**Visual: Code Review Comments in a PR:** *(Ideally, a screenshot here showing a GitHub Pull Request with example code review comments -  this would need to be added as an image)*

---

## Your Turn: Experience Code Review (Simulated)
* **Exercise:**
    1. Imagine you have created a Pull Request for your `add-user-input` feature branch.
    2. Review your own code changes in the (simulated) PR.
    3. Think about potential feedback a reviewer might give you.  Are there any parts of your code that could be clearer, more efficient, or have potential issues?
    4. Write down some example "code review comments" you might receive on your PR.
---

## Slide 58: Git Collaboration:  Iterate and Improve - Responding to Review

**Headline:** Iterating on Pull Requests -  Refine Your Code Based on Feedback

**Explanation:**

  * **Iteration is Key:** Code review is rarely a one-shot process.
  * Expect to receive feedback and need to revise your code.
  * **Respond to Review Comments:**
      * **Understand the feedback:** Read comments carefully.
      * **Ask questions if unclear:**  Clarify reviewers' points.
      * **Address feedback:**  Revise your code based on suggestions.
      * **Respond to each comment:** Acknowledge feedback, explain changes, or justify why you didn't make a change.
      * **Resolve conversations:** Mark comments as "resolved" when addressed.

  * **Push Updates:** After revising code, commit and push the updates to your feature branch. The Pull Request automatically updates with your new commits.

**Visual: Pull Request Iteration Cycle:**
[Pull Request Created] --- (Code Review Comments) --> [Your Review/Revision] --- (Update Code & Push) --> [Pull Request Updated with New Code & Comments] --- (More Review?) --- [Merge or Further Iteration]

---

## Your Turn: Practice Responding to Review (Simulated)
* **Exercise:**
    1. Look at the "example code review comments" you wrote in the previous exercise.
    2. For *each* simulated comment, think about how you would respond as the PR author.
    3. Write down your responses. Would you:
        * Agree with the feedback and revise your code? How?
        * Ask for clarification? What questions would you ask?
        * Disagree with the feedback? Why? How would you justify your approach?
---

## Slide 59: Git Collaboration: Merging -  Bringing It All Together

**Headline:** Merging Pull Requests -  Integrate Approved Code

**Explanation:**

  * **Merging = Final Step of Pull Request.**
  * Once code review is complete and reviewers are satisfied:
      * A project maintainer (or you, if you have merge permissions) will merge the Pull Request.
  * Merging integrates the code from your feature branch into the target branch (usually `main`).
  * **Merge Methods (GitHub):**
      * **Merge Commit (default):** Creates a merge commit on `main` that records the merge. Preserves history.
      * **Squash and Merge:**  Combines all commits from your feature branch into a single new commit on `main`. Simplifies history.
      * **Rebase and Merge:**  Replays your feature branch commits onto `main` as if they were directly developed on `main`. Clean, linear history (but rewrites history).

**Post-Merge Actions:**

  * **Local `main` is now *behind* remote `main`.** You need to `git pull origin main` to update your local `main`.
  * **Feature branch is typically no longer needed** after merge. You can delete the remote feature branch on GitHub and your local feature branch (`git branch -d <feature-branch>`).

**Visual: Pull Request Merge:** *(Ideally, a screenshot here of the GitHub "Merge pull request" button and merge options - would need to be added as an image)*

---

## Your Turn: Think About Merging


* **Exercise:**
    1. Review the different merge methods (Merge Commit, Squash and Merge, Rebase and Merge). When might you choose each method? What are the trade-offs? (Research GitHub documentation on merge methods).
    2. After a Pull Request is merged on GitHub, what Git commands do you need to run locally to update your local repository and clean up?
---

## Slide 60: Git Collaboration: Clean Up - Delete Remote Feature Branches

**Headline:** Delete Remote Branches -  Keep Remotes Tidy

**Explanation:**

  * **Remote feature branches are often deleted after merging.**
  * Keeps the remote repository clean, with only active branches.
  * Deleted remote branches are still preserved in the commit history.

**Delete Remote Branch Command:**

  * `git push origin --delete <branch_name>`
  * Tells the `origin` remote to delete the branch named `<branch_name>`.

**Code Demo (Delete Remote Branch):**

```bash
git push origin --delete add-user-input   #  <-- Run: Delete remote 'add-user-input'
```
> (After this, the 'add-user-input' branch will no longer be listed on your GitHub repository)
---

## Your Turn: Delete a Remote Branch

* **Exercise:**
    1. VS Code terminal (in your local `pro-python-scripts` repo).
    2. Ensure you have a *remote feature branch* on your GitHub repository that has already been merged.
    3. Run: `git push origin --delete <your-feature-branch-name>`.
    4. Go to your GitHub repository in a browser, refresh the page, and check if the feature branch is indeed deleted from the remote repository's branch list.
---

## Slide 61: Git Deep Dive - `git stash`:  Save Your Work (Temporarily)

**Headline:** `git stash` -  The Git "Pause Button"

**Explanation:**

  * **`git stash` saves uncommitted changes temporarily.**
  * Cleans your working directory (reverts to last commit state).
  * Useful when:
      * Need to switch branches to fix a bug urgently, but your current work is not ready to commit.
      * Want to temporarily put aside current changes to experiment or try something else.
      * Need to pull remote changes, but have local unstaged modifications.

  * Stash creates a "stack" of saved changes (like putting items on a shelf).

**Basic `git stash` (Save Current Changes):**

  * `git stash`  or `git stash save "Descriptive message"` (good practice to add a message).

**Code Demo (`git stash`):**

```bash
# ...Modify 'hello_script.py' - make unstaged changes...
git status       # Shows 'modified'
git stash save "WIP: Adding name reversal feature"  #  <-- Run: Stash changes
git status       # Working directory CLEAN again! Changes are stashed.
```
> (Working directory is now clean. Your unstaged changes are saved away in the stash.)

---

## Your Turn: Stash Your Changes

* **Exercise:**
    1. VS Code terminal (in your repo - with unstaged changes in `hello_script.py`).
    2. Run: `git status` (verify 'modified').
    3. Run: `git stash save "My work in progress"`.
    4. `git status` (is your working directory clean now?).
    5. Open `hello_script.py` in VS Code - are your changes still there in your working directory? What happened to them?
---

### Git Deep Dive - `git stash list`:  See Your Saved Stashes

**Headline:** `git stash list` -  Check Your "Stash Shelf"

**Explanation:**

  * `git stash list`
  * **Lists all your saved stashes.**
  * Each stash entry is identified by:
      * `stash@{index}` (e.g., `stash@{0}`, `stash@{1}`, etc. - stack-like index).
      * Commit hash (of the commit stash is based on).
      * Optional message you provided when stashing.

  * Use to see what stashes you have saved and choose which one to restore.
---

### Git Deep Dive - `git stash list`:  See Your Saved Stashes

**Headline:** `git stash list` -  Check Your "Stash Shelf"

**Code Demo (`git stash list`):**

```bash
git stash list   #  <-- Run: See your stashes
```

> (Output will list stashes, if any are saved. Example: `stash@{0}: WIP: Adding name reversal feature`)
---

## Your Turn: List Your Stashes

* **Exercise:**
    1. VS Code terminal (in your repo - you should have created a stash in the last exercise).
    2. Run: `git stash list`.
    3. Do you see your stash listed?
    4. Note the `stash@{index}` and the message (if you added one).
    5. If you don't see any stashes, try creating another stash with `git stash save "Another stash"` and run `git stash list` again.
---

### Git Deep Dive - `git stash pop`:  Get Stash Back AND Remove

**`git stash pop` -  Restore AND Clear the Stash**

**Explanation:**

  * `git stash pop`
  * **Applies (restores) the *most recent* stash** to your working directory.
  * **AND removes that stash** from the stash list.
  * Like taking the top item off the "stash shelf" and discarding the shelf item.

  * Use when you want to restore a stash and don't need to keep it saved anymore.
---

### Git Deep Dive - `git stash pop`:  Get Stash Back AND Remove

**`git stash pop` -  Restore AND Clear the Stash**

**Code Demo (`git stash pop`):**

```bash
git stash list     #  <-- Run: See stashes (ensure you have at least one)
git stash pop      #  <-- Run: Restore the top stash AND remove it
git status         # Working directory should now have your stashed changes back
git stash list     #  <-- Run again: Verify stash list - top stash is gone
```

> (Your stashed changes are now back in your working directory, and the stash is removed from the list.)

---

## Your Turn: Pop a Stash

* **Exercise:**
    1. VS Code terminal (in your repo - you should have at least one stash listed in `git stash list`).
    2. Run: `git stash pop`.
    3. `git status` (are your stashed changes back in your working directory?).
    4. `git stash list` (is the stash you just popped gone from the list now?).
    5. Open `hello_script.py` in VS Code - are your stashed changes back in the file?

---

### Git Deep Dive - `git stash apply`:  Restore Stash BUT Keep It Saved

**`git stash apply` -  Restore AND Keep the Stash**

**Explanation:**

  * `git stash apply`
  * **Applies (restores) the *most recent* stash** to your working directory.
  * **BUT keeps the stash** in the stash list (it is *not* removed).
  * Like taking a *copy* of the top item from the "stash shelf" and using it, but leaving the original item on the shelf.

  * Use when you want to restore a stash but might need to re-apply it again later, or apply it to multiple branches.
---

### Git Deep Dive - `git stash apply`:  Restore Stash BUT Keep It Saved

**`git stash apply` -  Restore AND Keep the Stash**

**Code Demo (`git stash apply`):**

```bash
git stash list     #  <-- Run: See stashes (ensure you have at least one)
git stash apply    #  <-- Run: Restore the top stash BUT keep it saved
git status         # Working directory should now have your stashed changes
git stash list     #  <-- Run again: Verify stash list - top stash is STILL there
```

> (Your stashed changes are back in your working directory, and the stash remains in the stash list.)


---

### Git Deep Dive - `git stash apply stash@{index}`:  Restore a Specific Stash

**`git stash apply stash@{index}` -  Choose Which Stash to Restore**

**Explanation:**

  * `git stash apply stash@{index}`
  * **Applies (restores) a *specific stash* from the stash list**, identified by its index (e.g., `stash@{0}`, `stash@{1}`).
  * Keeps the stash in the stash list.
  * Use when you have multiple stashes and want to restore a stash other than the most recent one.

**Code Demo (`git stash apply stash@{index}`):**

```bash
git stash list     #  <-- Run: See stashes, note index (e.g., stash@{1})
git stash apply stash@{1}  #  <-- Run: Restore stash at index 1
git status         # Working directory should have changes from stash@{1}
git stash list     #  <-- Run again: Verify stash@{1} is still in list
```

> (Changes from the specified stash are now in your working directory, and the stash remains in the stash list.)
---

# Your Turn: Apply a Specific Stash

* **Exercise:**
    1. VS Code terminal (in your repo - you should have *multiple* stashes listed in `git stash list`, create a few if needed using `git stash save "Stash <number>" `).
    2. Run: `git stash list` and note the index of a stash you want to restore (e.g., `stash@{1}`).
    3. Run: `git stash apply stash@{1}` (replace `stash@{1}` with the index you noted).
    4. `git status` (are the changes from the specified stash in your working directory?).
    5. `git stash list` (is the stash you applied still in the list?).
---
layout: two-cols-header
---

### Git Deep Dive - `git tag`:  Mark Important Points in History

**`git tag` -  Git's Way to Say "This is Important!"**
::left::
**Explanation:**

  * **Tags mark specific points in your Git history as important.**
  * Typically used to:
      * Mark releases (e.g., `v1.0`, `v2.5-beta`).
      * Label significant versions.
      * Create permanent bookmarks in your project timeline.

  * Tags are like *immutable* pointers to specific commits. They don't move, even as the branch they point to evolves.
::right::
**Types of Tags:**

  * **Lightweight Tags:** Simple, just a name pointing to a commit.
  * **Annotated Tags:**  Recommended.  Stored as full Git objects. Include:
      * Tag name
      * Tag message (like commit message, explain the release/tag)
      * Tag author
      * Date
---

### Git Deep Dive - `git tag`:  Mark Important Points in History

**`git tag` -  Git's Way to Say "This is Important!"**

**Basic `git tag` (List Tags):**

  * `git tag`
  * Lists existing tags in your repository (alphabetical order).

**Code Demo (`git tag` - list):**

```bash
git tag   #  <-- Run: See existing tags (initially none)
```

> (Output will list tags, if any are created. Initially, likely empty.)
---

## Your Turn: List Tags

* **Exercise:**
    1. VS Code terminal (in your repo).
    2. Run: `git tag`.
    3. Do you see any tags listed initially? (Probably not, if you haven't created any yet).
---

### Git Deep Dive - `git tag -a`:  Create Meaningful Tags

**Headline:** `git tag -a <tag_name> -m "<message>"` -  Make a Tag with a Note

**Explanation:**

  * `git tag -a <tag_name> -m "<message>"`
  * **Creates an *annotated* tag.** (Recommended tag type).
  * `-a`:  Indicates "annotated" tag.
  * `<tag_name>`:  Name for your tag (e.g., `v1.0`, `release-candidate-2`).
  * `-m "<message>"`:  Tag message - explain what this tag represents (release notes, version details, etc.).

  * Annotated tags are full Git objects and store extra information (author, date, message).
---

### Git Deep Dive - `git tag -a`:  Create Meaningful Tags

**Headline:** `git tag -a <tag_name> -m "<message>"` -  Make a Tag with a Note

**Code Demo (`git tag -a` - create):**

```bash
git tag -a v1.0 -m "Release version 1.0 - initial stable release with core features"  
# ^  <-- Run: Create annotated tag 'v1.0'
git tag         #  <-- Run: List tags - 'v1.0' should now be listed
git show v1.0   #  <-- Run: Show details of tag 'v1.0'
```

> (Output of `git show v1.0` will display tag details: tagger, date, message, and the commit the tag points to.)
---

## Your Turn: Create an Annotated Tag
* **Exercise:**
    1. VS Code terminal (in your repo).
    2. Run: `git tag -a v0.1 -m "Initial project setup, basic hello script"` (or your own tag name and message).
    3. Run: `git tag` (verify your new tag is listed).
    4. Run: `git show v0.1` (or your tag name) - examine the tag details: tagger, date, message, commit.

---

### Git Deep Dive - `git tag -s`:  Secure Tags with Signatures

**`git tag -s <tag_name> -m "<message>"` -  Tags You Can Trust**

**Explanation:**

  * `git tag -s <tag_name> -m "<message>"`
  * **Creates a *GPG-signed annotated tag*.**
  * `-s`:  Indicates "signed" tag.
  * Requires you to have GPG (GNU Privacy Guard) set up and a GPG key.
  * Cryptographically signs the tag, verifying its authenticity and integrity.
  * Provides strong assurance that the tag was created by you and hasn't been tampered with.

  * Used for releases where security and verification are critical.
---

### Git Deep Dive - `git tag -s`:  Secure Tags with Signatures

**`git tag -s <tag_name> -m "<message>"` -  Tags You Can Trust**
**Code Demo (`git tag -s` - create signed tag):**

```bash
# ...Ensure you have GPG set up...
git tag -s v1.0-signed -m "Signed Release version 1.0 - cryptographically verified"  
# ^  <-- Run: Create signed tag 'v1.0-signed'
git tag                  #  <-- Run: List tags - 'v1.0-signed' listed
git verify-tag v1.0-signed #  <-- Run: Verify the signature of the tag
```

> (Output of `git verify-tag` will confirm "Good signature" if signature is valid.)
---

## Your Turn: Create a Signed Tag (Optional - GPG Setup Needed)

* **Exercise (Optional, GPG setup required):**
    1. If you have GPG set up, try creating a signed tag: `git tag -s v0.2-signed -m "Second signed tag example"`.
    2. Run: `git tag` (verify your new signed tag is listed).
    3. Run: `git verify-tag v0.2-signed` (verify the signature).
    4. If you don't have GPG set up, you can skip this exercise for now, but understand the concept of signed tags for security.
---

### Git Deep Dive - `git push --tags`:  Share Your Tags with the World

**Headline:** `git push --tags` -  Make Tags Public on the Remote

**Explanation:**

  * `git push --tags`
  * **Pushes your local tags to the remote repository.**
  * Tags are *not* pushed automatically with `git push origin <branch_name>`. You need to push tags explicitly.
  * Makes your tags visible to collaborators and on platforms like GitHub (Releases section).

  * Essential for sharing release markers and version labels with your team and in your remote repository.
---

### Git Deep Dive - `git push --tags`:  Share Your Tags with the World

**`git push --tags` -  Make Tags Public on the Remote**

**Code Demo (`git push --tags`):**

```bash
git tag        #  <-- Run: List local tags (ensure you have created some tags locally)
git push --tags  #  <-- Run: Push all local tags to 'origin' remote
```

> (Output will show tags being pushed to the remote repository. Check your GitHub repository online - you should now see your tags listed in the "Releases" or "Tags" section.)
---

## Your Turn: Push Tags to Remote

* **Exercise:**
    1. VS Code terminal (in your repo - you should have created some tags locally in previous exercises).
    2. Run: `git tag` (verify you have local tags).
    3. Run: `git push --tags`.
    4. Go to your GitHub repository in a web browser.
    5. Look for a "Releases" or "Tags" section (usually under "Code" tab, or in "Releases" tab). Do you see your newly pushed tags listed there? This confirms your tags are now on the remote repository.

---
layout: two-cols-header
---

### Git Deep Dive - Checkout Tags:  Revisit Past Releases

**Headline:** Checkout Tags -  Go Back in Time to a Tagged Version
::left::
**Explanation:**

  * You can `git checkout` a tag, just like a branch.
  * `git checkout <tag_name>`
  * **Checks out the commit that the tag points to.**
  * Puts your repository in a special "detached HEAD" state 
  * because you are not on a branch anymore, but directly on a 
  * specific commit (pointed to by the tag).
::right::
  * Use to:
      * Examine the code at a specific release version.
      * Build or test a specific tagged release.
      * Create a branch starting from a tagged release.

**Code Demo (`git checkout <tag_name>`):**

```bash
git tag          #  <-- Run: List tags (ensure you have tags)
git checkout v1.0  #  <-- Run: Checkout tag 'v1.0' (replace with your tag name)
```

> (Output will warn you about "detached HEAD" state.  `git branch` will show you are not on any branch.)
---

## Your Turn: Checkout a Tag

* **Exercise:**
    1. VS Code terminal (in your repo - you should have created some tags).
    2. Run: `git tag` (verify you have tags).
    3. Run: `git checkout v1.0` (or one of your tag names).
    4. Examine the output - do you see a warning about "detached HEAD"?
    5. Run: `git branch` - what branches are listed? Are you on a branch? What does this tell you about checking out tags?
    6. Run: `git checkout main` (or your main branch) to go back to working on a branch.
---

### Git Deep Dive - Git Aliases:  Your Git Command Shortcuts

**Headline:** Git Aliases -  Make Git Work Faster for You

<!-- **Explanation:** -->

  * **Git Aliases = Custom shortcuts for Git commands.**
  * Create shorter, easier-to-remember commands for frequently used Git operations.
  * Save typing and reduce errors.
  * Configured in your Git configuration file (`~/.gitconfig` - user-global, or `.git/config` - repo-local).

**Example Aliases:**

  * `git config --global alias.st status`  (Alias `git status` to `git st`)
  * `git config --global alias.ci commit`  (Alias `git commit` to `git ci`)
  * `git config --global alias.co checkout` (Alias `git checkout` to `git co`)
  * `git config --global alias.br branch`  (Alias `git branch` to `git br`)
  * `git config --global alias.hist "log --oneline --graph --decorate --all"` (Complex alias for history graph)
---

### Git Deep Dive - Git Aliases:  Your Git Command Shortcuts

**Headline:** Git Aliases -  Make Git Work Faster for You

**Code Demo (Create & Use Alias):**

```bash
git config --global alias.st status  #  <-- Run: Create 'st' alias for 'status'
git config --global alias.co checkout #  <-- Run: Create 'co' alias for 'checkout'
git st        #  <-- Run: Use 'git st' - it's the same as 'git status' now!
git co main   #  <-- Run: Use 'git co main' - same as 'git checkout main'
git config --get alias.st # <-- Run: Verify alias setting
```

> (Now you can use `git st` and `git co` as shortcuts for `git status` and `git checkout`.)
---

## Your Turn: Create Your Own Aliases

* **Exercise:**
    1. VS Code terminal.
    2. Create aliases for `git branch` as `git br`, and `git log --oneline` as `git lol`.  Use `git config --global alias.<alias_name> "<command>"` for each.
    3. Use your new aliases: `git br`, `git lol`. Do they work as expected?
    4. Verify your aliases are set using `git config --get alias.br` and `git config --get alias.lol`.
---
layout: two-cols-header
---

### Git Deep Dive - Git Configuration:  Customize Git's Behavior

**Headline:** `git config` -  Tailor Git to Your Preferences

::left::
**Explanation:**

  * `git config` command is used to set and view Git configuration options.
  * Configuration levels:
      * **`--system`:** System-wide config (rarely used, affects all users on system).
      * **`--global`:** User-specific config (`~/.gitconfig`). Applies to all Git repos for your user.
      * **`--local`:** Repository-specific config (`.git/config` in a repo).  Applies only to the current Git repository.  Overrides global and system settings.
::right::
  * Common configurations:
      * `user.name`: Your name for commits.
      * `user.email`: Your email for commits.
      * `core.editor`: Default text editor for commit messages, merges, etc.
      * `alias.<alias_name>`:  Git command aliases (as we just saw).
---

### Git Deep Dive - Git Configuration:  Customize Git's Behavior

**Headline:** `git config` -  Tailor Git to Your Preferences

**Code Demo (`git config --list` & `git config --global user.name`):**

```bash
git config --list        #  <-- Run: List all current Git config settings
git config --global user.name "Your Name"   #  <-- Run: Set your global username
git config --global user.email "[email address removed]" # <-- Run: Set global email
git config --get user.name # <-- Run: Verify username setting
git config --get user.email# <-- Run: Verify email setting
```

> (Output of `git config --list` shows all settings. `git config --get` commands verify specific settings.)

---

## Your Turn: Explore Git Configuration

* **Exercise:**
    1. VS Code terminal.
    2. Run: `git config --list` - examine the output. Identify system, global, and local sections if present.
    3. Set your global `user.name` and `user.email` using `git config --global user.name "..."` and `git config --global user.email "..."`.  Use your actual name and email.
    4. Verify your settings with `git config --get user.name` and `git config --get user.email`.
    5. Try setting a *local* config value (e.g., `git config --local core.editor "code" ` - if you want VS Code as your Git editor for *this repo only*). Run `git config --list` again - see the local override.
---

### Git Deep Dive - `.gitignore`:  Tell Git What to Ignore

**Headline:** `.gitignore` -  Keep Untracked Files Out of Git's Sight

**Explanation:**

  * `.gitignore` file:  Plain text file in your repository that specifies intentionally untracked files that Git should ignore.
  * Prevents Git from adding these files to the staging area or tracking them.
  * Common use cases:
      * Temporary files (e.g., `.tmp` files).
      * Build artifacts (`/build/`, `/dist/`).
      * Log files (`*.log`).
      * Virtual environment folders (`venv/`, `env/`).
      * OS-specific files (`.DS_Store`, `Thumbs.db`).
      * IDE project files (`.idea/`, `.vscode/`).
---
layout: two-cols-header
---

### Git Deep Dive - `.gitignore`:  Tell Git What to Ignore
**`.gitignore` -  Keep Untracked Files Out of Git's Sight**

::left::
**`.gitignore` Syntax (Basic):**

  * Each line in `.gitignore` is a pattern.
  * `*` wildcard: matches anything.
  * `/` at beginning: relative to `.gitignore` file location.
  * `#` : comment.
::right::
**Example `.gitignore`:**
  * .tmp          # Ignore all files ending in .tmp
  * /build/         # Ignore 'build' directory at the root of the repo
  * logs/.log     # Ignore all .log files in 'logs' directory (any level)
  * venv/          # Ignore 'venv' directory at the root
  * .DS_Store       # Ignore .DS_Store files
---

### Git Deep Dive - `.gitignore`:  Tell Git What to Ignore
**`.gitignore` -  Keep Untracked Files Out of Git's Sight**

**Code Demo (Create `.gitignore` & Ignore File):**

```bash
touch temp.tmp        # Create a temp file
echo "temp file" > temp.tmp
git status            # 'temp.tmp' is untracked
echo "*.tmp" >> .gitignore # Add '*.tmp' pattern to .gitignore
git status            # 'temp.tmp' is now ignored (not shown as untracked)
```
(After adding `*.tmp to` `.gitignore`, `git status` will no longer show `temp.tmp` as untracked.)
---

## Your Turn: `Use .gitignore`

* **Exercise:**
    1. VS Code terminal, in your repo root directory.
    2. Create a file named `.gitignore` (no extension).
    3. Add the following lines to `.gitignore`:
       ```
       *.log
       temp_files/
       ```
    4. Create a file named `mylog.log` and a directory named `temp_files/`. Add some content to both.
    5. `git status` - are `mylog.log` and `temp_files/` listed as untracked? If not, `.gitignore` is working!
    6. Remove the lines from `.gitignore` and run `git status` again - are they now listed as untracked?
---
layout: two-cols-header
---

### Git Deep Dive - Rewriting History: Power with Responsibility
**Rewriting History -  Use with Extreme Caution!**
::left::
**Explanation:**

  * Git allows you to *alter* commit history *after* commits have been made.
  * Powerful, but **VERY DANGEROUS** in collaborative projects, especially after pushing to shared remotes!
  * **Rewriting history changes commit hashes.** This can cause serious problems for collaborators who have based work on the original history.
::right::
**Common History Rewriting Commands (Use Sparingly & Locally):**

  * `git commit --amend`: Modify the *last* commit (e.g., fix commit message, stage forgotten changes into last commit). *Generally safer than rebase if only modifying very recent, unpushed commits.*
  * `git rebase -i <commit>`:  Interactive rebase - powerful tool to rewrite history:
      * Combine commits (squash).
      * Reorder commits.
      * Edit commit messages of multiple commits.
      * Split commits.
---

### Git Deep Dive - Rewriting History: Power with Responsibility
**Rewriting History -  Use with Extreme Caution!**

**WHEN TO (CAREFULLY) REWRITE HISTORY (LOCAL, BEFORE PUSHING SHARED BRANCHES):**

  * Cleaning up *local* feature branch history *before* creating a Pull Request (squashing commits, improving messages - makes PR easier to review).
  * Fixing a mistake in the *very last* commit (`git commit --amend`).

**WHEN NEVER TO REWRITE HISTORY (AFTER PUSHING SHARED BRANCHES):**

  * **NEVER rewrite history on branches that are shared and collaborated on (like `main`, or shared feature branches) after they have been pushed to a remote repository!** This will cause major headaches for your team.

**Warning:** Rewriting history, especially after sharing branches, is advanced and should be done with extreme caution and only when you fully understand the implications. For beginners and in collaborative settings, it's often best to avoid rewriting shared history.
---

### Git Deep Dive - Rewriting History: Power with Responsibility
**Rewriting History -  Use with Extreme Caution!**

**Code Demo (`git commit --amend` - Example, use with caution!):**

```bash
# ...Make a commit...
# ...Realize you want to add a forgotten change to the LAST commit...
# ...Stage the forgotten change (git add)...
git commit --amend --no-edit  #  <-- Run: Amend last commit, keep original message
```

> (The last commit is now modified to include the newly staged changes. Commit hash has changed.)
---

### Git Deep Dive - Rewriting History: Power with Responsibility
**Rewriting History -  Use with Extreme Caution!**

Your Turn: Explore `git commit --amend` (CAREFULLY)
* **Exercise (CAUTION - local experiment only):**
    1. VS Code terminal, in your repo.
    2. Make a commit (e.g., "feat: Initial commit for amend test").
    3. Make a *small* change to `hello_script.py` (but don't stage or commit yet).
    4. Run: `git commit --amend --no-edit` (amend last commit).
    5. `git log --oneline` - has the hash of your last commit changed? Did your change get added to that commit?
    6. ***Important:* Do NOT push this amended commit to a shared remote branch in a real collaborative project if you are working with others, as it rewrites history!**

---

## Summary: Git Fundamentals & Next Steps

  * **Version Control Basics:** What is version control and why Git?
  * **Core Git Commands:** `init`, `clone`, `status`, `add`, `commit`, `log`, `diff`, `restore`, `branch`, `checkout`, `merge`, `stash`, `tag`, `remote`, `push`, `pull`.
  * **Branching & Merging:** Isolated development, feature branches, merging workflows, resolving conflicts.
  * **Remote Repositories & Collaboration:** GitHub, remotes, pushing, pulling, basic collaborative workflow with Pull Requests.
  * **Advanced Git Topics (Briefly Touched):** Aliases, config, `.gitignore`, history rewriting (caution!), tagging, stashing.

---

# What to do next?

**Takeaways:**

  * Git is essential for modern software development.
  * Understand the core Git workflow (add, commit, branch, merge, push, pull).
  * Branching is crucial for isolated and collaborative development.
  * Remote repositories (like GitHub) enable collaboration, backup, and sharing.
  * Commit messages are important for project history and communication.

**Next Steps & Further Learning:**

  * **PRACTICE, PRACTICE, PRACTICE:** The best way to learn Git is to use it regularly!
  * **Work on personal projects using Git.**
  * **Contribute to open-source projects on GitHub (start small).**
  * **Explore more advanced Git topics and workflows.**
  * **Refer to Git documentation and online resources.**
  * **Consider exploring Git GUI clients (optional).**
---
layout: end
---

# **The End.**

> At least for the time being.