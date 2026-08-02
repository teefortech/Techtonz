---
title: "Variables in Python"
category: python
tags: [python, beginners, variables]
excerpt: "Learn what variables are in Python, how to name them, and how to use them with short interactive examples you can run in your browser."
image: /assets/images/tonzpy.jpg
featured: true
---

Variables are one of the first ideas you meet in Python. They let you store values and reuse them later — numbers, text, lists, and more.

Think of a variable as a **labeled box**. You put something in the box, give it a name, and use that name whenever you need the value.

## Creating a variable

In Python you create a variable by writing a name, an equals sign, and a value:

```python
age = 25
name = "Ada"
```

- `age` stores the number `25`
- `name` stores the text `"Ada"`

You don’t need to declare a type. Python figures it out from the value.

## Try it: store and print values

Edit the code if you like, then click **Run**:

<div class="py-editor">
  <div class="py-editor-toolbar">
    <span class="py-editor-label">python</span>
    <span class="py-status"></span>
    <button type="button" class="py-run">Run ▶</button>
  </div>
  <textarea class="py-source">
name = "Techtonz"
year = 2026
print(name)
print(year)
print(f"{name} is teaching Python in {year}")
  </textarea>
  <pre class="py-output"></pre>
</div>

## Naming rules (keep these in mind)

Good variable names make your code easier to read.

**Do:**
- Use lowercase letters
- Separate words with underscores: `first_name`, `total_score`
- Choose names that describe the value

**Don’t:**
- Start with a number (`1name` is invalid)
- Use spaces (`first name` is invalid)
- Use Python keywords like `if`, `for`, `class`

Examples:

| Valid | Invalid |
|-------|---------|
| `score` | `2score` |
| `user_name` | `user-name` |
| `total` | `total amount` |

## Changing a variable

You can update a variable by assigning a new value:

```python
count = 1
count = count + 1
```

Or more briefly:

```python
count = 1
count += 1
```

## Try it: update a value

<div class="py-editor">
  <div class="py-editor-toolbar">
    <span class="py-editor-label">python</span>
    <span class="py-status"></span>
    <button type="button" class="py-run">Run ▶</button>
  </div>
  <textarea class="py-source">
score = 10
print("Starting score:", score)

score = score + 5
print("After bonus:", score)

score += 2
print("After extra points:", score)
  </textarea>
  <pre class="py-output"></pre>
</div>

## Common types you’ll use early

| Type | Example | Meaning |
|------|---------|---------|
| `int` | `age = 21` | Whole number |
| `float` | `price = 9.99` | Decimal number |
| `str` | `city = "Lagos"` | Text |
| `bool` | `is_active = True` | True or False |

Check a type with `type()`:

```python
x = 42
print(type(x))
```

## Try it: inspect types

<div class="py-editor">
  <div class="py-editor-toolbar">
    <span class="py-editor-label">python</span>
    <span class="py-status"></span>
    <button type="button" class="py-run">Run ▶</button>
  </div>
  <textarea class="py-source">
age = 21
price = 9.99
city = "Lagos"
is_student = True

print(type(age))
print(type(price))
print(type(city))
print(type(is_student))
  </textarea>
  <pre class="py-output"></pre>
</div>

## Quick practice

Before you move on, try changing the examples above:

1. Change `name` to your own name and run again  
2. Start `score` at `0` and add points in two steps  
3. Create a variable for your favorite language and print it  

## What’s next

Once variables feel comfortable, the next step is **working with strings and numbers** — combining text, doing math, and formatting output cleanly.

For a broader learning path, see [How to Learn Python Fast in 2026](https://techtonz.com/blog/how-to-learn-python-fast/).

---

*Questions or a topic you want covered next? [Get in touch](/contact/).*
