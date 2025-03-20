---
layout: section
transition: zoom
---

## Virtual Environments

An important yet widely neglected topic
---

### What is a Virtual Environment?
> A virtual environment is a self-contained Python environment that allows you to isolate your project's dependencies.
---

## Why Use Virtual Environments?
**Dependency Management**
> Virtual environments help manage project-specific dependencies.
---

## Why Use Virtual Environments?
**Reproducibility** 
> Virtual environments ensure consistent behavior across different environments.
---

## Why Use Virtual Environments?

**Collaboration** 
> Virtual environments facilitate collaboration among developers.

---

## Why Use Virtual Environments?
### Reasons 

- Dependency Management
- Reproducibility
- Reproducibility 
---

## Virtual Environment Managers
| Name | Brief Description |
| :-------  | :------ |
|**Pyenv**  |Manage multiple Python versions.|
|**Venv**: |Create isolated Python environments (built-in).|
|**Virtualenv**: |Similar to venv, supports older Python versions.|
|**Conda**: |Manage packages, environments, and dependencies.|


---

# Folder Trees and Purposes
## *Pyenv Folder Tree*

```shell
~/.pyenv/
|-- versions/
|   |-- 3.9.0/
|   |-- 3.10.0/
|-- shims/
|   |-- python
|   |-- pip
|-- plugins/
```
---

# Folder Trees and Purposes
## *Purpose:*

- **versions/**: Installed Python versions.

- **shims/**: Shim executables for Python and pip (explained below).

- **plugins/** : Pyenv plugins.

---
# Shims
#### Another IMPORTANT concept that NO ONE talks about
---
<!-- # Shims -->

## *But what exactly are Shims?*

> Shims are small executable files that act as intermediaries between the virtual environment and the system Python.
---

## *and...What do they do??*


 1. Intercept commands
>    Shims intercept commands like `python` and `pip`.

 2. Redirect to virtual environment
>    Shims redirect these commands to the virtual environment's executables.

---

#### So..........

Suppose you run `python` in a Pyenv-managed environment. The shim intercepts the command and redirects it to the virtual environment's Python executable.

---

### *Venv Folder Tree*

```
bash
project_name/
|-- env/
|   |-- bin/
|   |   |-- python
|   |   |-- pip
|   |-- lib/
|   |   |-- python3.9/
|   |   |-- site-packages/
|-- src/
|   |-- main.py
```
---

|Folder Name |
|:---------- |
|**env/**   : Virtual environment directory.
|**bin/**   : Executable files.
|**lib/**   : Python libraries.
|**src/**   : Project source code.

---

### *Virtualenv Folder Tree*
```
bash
project_name/
|-- virtualenv/
|   |-- bin/
|   |   |-- python
|   |   |-- pip
|   |-- lib/
|   |   |-- python3.9/
|   |   |-- site-packages/
|-- src/
|   |-- main.py
```
---

|Folder Name |
|:---------- |
|**virtualenv/**: Virtual environment directory.|
|**bin/**: Executable files.|
|**lib/**: Python libraries.|
|**src/**: Project source code.|
---

### *Conda Folder Tree*
```
bash
project_name/
|-- envs/
|   |-- env_name/
|   |   |-- bin/
|   |   |   |-- python
|   |   |   |-- pip
|   |   |-- lib/
|   |   |   |-- python3.9/
|   |   |   |-- site-packages/
|-- src/
|   |-- main.py
```
---

|Folder Name |
|:---------- |
|**envs/**      : Environment configurations.|
|**env_name/**  : Environment directory.|
|**bin/**       : Executable files.|
|**lib/**       : Python libraries.|
|**src/**       : Project source code.|

---

# Conclusion

> Virtual environments help manage project-specific dependencies, ensuring reproducibility and collaboration. By understanding the folder trees and purposes, you'll be able to effectively use virtual environments in your projects.

