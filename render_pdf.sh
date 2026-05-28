#!/usr/bin/env bash

chrome='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
"${chrome}" --headless=new --print-to-pdf=resume.pdf --no-pdf-header-footer resume.html
