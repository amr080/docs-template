# XFT Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7118d58-bd34-4f3d-97bd-00b8dc1ad2bd/deploy-status)](https://app.netlify.com/sites/centrifuge-documentation/deploys)

## About

XFT develops blockchain-native investment products, liquidity provisions, and payment rails for the next finance frontier.

XFT is an open, decentralized operating system that provides a method to create, exchange, and use the data used in the financial supply chain. It creates transparent and shareable relationships between interacting companies.

This project documents the procedure to set up a XFT Node. For the step-by-step procedure, see [Docs](https://x-financial-technologies.replit.app/docs/hub).

For information on the XFT code, see our other repos.

To become a part of the XFT community, read the [Code of Conduct](#) and join [Discord](#).

## Contributing

### _Please_, feel free to make any contributions you think will make XFT Documentation better.

**Submit all pull requests to the develop branch**

The develop branch is continuously deployed to a preview site. [View dev site](#). You can submit a pull request to the repository to get a deploy preview built.

## Development

### Dev server

This repo uses yarn v4 to enable building on Cloudflare pages. If this is your first time using yarn v4 follow these steps:

1. clear all generated folders (`.cache`, `public`, `node_modules`)
2. install yarn v4: `corepack enable` and `yarn init -2`
3. ensure you're using the correct node version: `nvm use`. You should be using node v18.19.1
4. install dependencies: `yarn install`
5. start the dev server: `yarn develop`

### Images

Place all the static images under `docs/` folder close to the relevant content and
add the relative path of the image along with alt tag in the Markdown file like below

```md
![Tinlake UI](../../images/tinlake/tinlake-ui.png)
```

You can use styling attributes on images

```md
![Tinlake UI](../../images/tinlake/tinlake-ui.png#width=200px;float=right)
```

For more information and how to add custom attributes, refer to the [gatsby-remark-image-attributes](https://github.com/rbeer/gatsby-remark-image-attributes) plugin.

### LaTeX

We're using `KaTeX` to display Math formulas inside the Markdown like below:

```
$$
D = P \times (1 + \frac{r}{n})^{nt}
$$
```

# XFT 
Updated readme items. 

## Commands
1. tree /F | sls -NotMatch '\.yarn|\.cache|node_modules|public'
2. tree /F | Select-String -NotMatch '\.yarn|\.cache|node_modules|public'
3. $json = Get-Content -Path 'input.json' | ConvertFrom-Json
4. $mapping = $json.mapping
5. $mapping | ConvertTo-Json | Set-Content -Path 'mapping.json'
6. cd C:\Users\alexa\Desktop\Startup\documentation



## Development Server (codespaces)
1. npm uninstall -g yarn
2. corepack enable
3. corepack prepare yarn@4.1.1 --activate
4. corepack yarn --version
5. corepack yarn install
6. corepack yarn develop

## Development Server (locally)
1. run powershell as administrator
2. corepack enable
3. corepack prepare yarn@4.1.1 --activate
4. corepack yarn --version
5. corepack yarn install
6. corepack yarn develop
7. http://localhost:8001

## Project

[Github](https://github.com/amr080/docs-template)<br>
[Google Docs](https://docs.google.com/document/d/1sSnaxfrKAFVLvP2u78ANVq4DRnUyKTvByq3y6SJ4kf4/edit?tab=t.0)


| Name | Description                | Date       |
|-------------|----------------------------|------------|
| develop     | centrifuge template        | 2024-12-05 |
| xft-v1      | initial xft conversion     | 2024-12-05 |
| xft-v2      | local environment          | 2024-12-05 |

## v0 Dependencies
1. https://v0.dev/chat/projects/xqCXxQlT66O
2. Connected project: v0-documentation-xqcxxqlt66o
3. https://vercel.com/amr080s-projects/v0-documentation-xqcxxqlt66o

## ChatGPT Dependencies
1. https://chatgpt.com/share/675261dc-b0b4-8003-bc96-da98b7c56c0f
2. https://chat.openai.com/backend-api/conversation/[id]
3. https://chat.openai.com/backend-api/conversation/[675261dc-b0b4-8003-bc96-da98b7c56c0f]
4. [Tampermonkey](https://github.com/amr080/chatgpt-exporter) to convert conversations to files
    - Download [extension](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
    - Install ChatGPT exporter [script](https://github.com/amr080/chatgpt-exporter?tab=readme-ov-file#install)
    - F5 browser to refresh
    - Click export in side nav
5. [JSON Minify](https://codebeautify.org/jsonminifier) + powershell cmds for mapping


## Deployments
1. https://v0-documentation-xqcxxqlt66o.vercel.app/getting-started/introduction/welcome/
    *missing auto-redirect  
2. http://localhost:8000
3. http://localhost:8001
4. http://localhost:8001/getting-started/introduction/welcome/




## To-Do

-- = not done<br>
x = completed

| Name | Status                |
|-------------|----------------------------|
| unlink fork     | --        |
| push to XFT org github       | --     |
| new branch xft-v2      | x          |
