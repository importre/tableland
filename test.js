'use strict';

import test from 'ava';
import {
  table
}
from './tinyblocks.js';

test('parse simple table', t => {
  const input = `
[cols="1,2",options="header"]
|===

>| a

굳

| b

^| 하

| 하

|===
`;
  const output = table.parse(input);
  const html = table.renderHtml(output.metadata, output.cells, '  ');
  const expected = `<table class="table" width="100%">
  <colgroup>
    <col style="width: 33%">
    <col style="width: 67%">
  </colgroup>
  <tr>
    <th align="right">a<br/><br/>굳</th>
    <th align="left">b</th>
  </tr>
  <tr>
    <td align="center">하</td>
    <td align="left">하</td>
  </tr>
</table>`;
  t.is(html, expected);
});


test('convert table to json', t => {
  const input = `
[cols="1,2",options="header"]
|===

>| a

굳

| b

^| 하

| 하

|===
`;
  const output = table.parse(input);
  const json = table.renderJson(output.metadata, output.cells, '  ');
  const expected = `{
  "metadata": {
    "cols": [
      33,
      67
    ],
    "options": [
      "header"
    ]
  },
  "cells": [
    {
      "align": "right",
      "text": "a\\n\\n굳\\n\\n"
    },
    {
      "align": "left",
      "text": "b\\n\\n"
    },
    {
      "align": "center",
      "text": "하\\n\\n"
    },
    {
      "align": "left",
      "text": "하"
    }
  ]
}`;
  t.is(json, expected);
});

