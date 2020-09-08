#!/usr/bin/evn bash
git push -f git@github.com:Rianico/books.git vuepress
git update-index --add --chmod=+x deploy.sh