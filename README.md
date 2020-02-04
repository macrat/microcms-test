microCMS test
=============

My test site for [microCMS](https://microcms.io/).


## API schema in microCMS

### category

|field ID|type      |
|--------|----------|
|title   |text field|

### news

|field ID|type                   |
|--------|-----------------------|
|title   |text field             |
|category|reference to `category`|
|body    |rich editor            |
|eyecatch|picture                |

This example is supports screen preview in `http://localhost:3000/{CONTENT_ID}?draft={DRAFT_KEY}`.


## How to run

### 1. make API via [microCMS](https://microcms.io/)

Please follow above schema.

### 2. clone this repository

``` shell
$ git clone https://github.com/macrat/microcms-test.git
$ cd microcms-test
```

### 3. set environment variables

Copy `.env.example` to `.env` and edit this.


### 4. run!

```
$ npm install
$ npm start
```

Finally, access to http://localhost:3000 and try it!
