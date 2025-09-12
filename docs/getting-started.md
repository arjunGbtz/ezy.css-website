# Getting Started👀

## Installation

Currently, ezy.css is not available via npm or CDN.

### Manuell (recommended)
  
1. Donwload `ezy.zip` from the [GitHub Releases](https://github.com/arjungbtz/ezy.css/releases).
2. Extract the ZIP. You will get a folder named `ezy/` containing: `ezy/ezy.js`, `ezy/helper.js` and `ezy/ezy.min.css`
3. link `ezy/ezy.js` & `ezy/ezy.min.css` in your HTML:

```html
<link rel="stylesheet" href="ezy/ezy.min.css">
<script src="ezy/ezy.js"></script>
```

### Via Shell (advanced)

You can download the files directly with curl or wget

Unix:
```sh
curl -L -o ezy.zip https://github.com/arjunGbtz/ezy.css/releases/download/v1.0.0/ezy.zip
unzip ezy.zip

```

Powershell:
```sh
Invoke-WebRequest -Uri "https://github.com/arjunGbtz/ezy.css/releases/download/v1.0.0/ezy.zip" -OutFile "ezy.zip"
Expand-Archive -Path ezy.zip -DestinationPath .
```

After extraction, you'll have the same `ezy/` folder as in the manual method.


## Usage

Then you can start using ezy.css utilities:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Ezy Project</title>
    <link rel="stylesheet" href="ezy/ezy.min.css">
    <script src="ezy/ezy.js"></script>
</head>
<body>
    <button class="btn bg-blue text-white rounded">Click Me</button>
</body>
</html>
```

Continue reading with [utilities](utilities.md?id=utilities🛠️) or [components](components.md?id=components📦)