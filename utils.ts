import * as R from 'ramda';
import * as React from 'react';
import useSWR from 'swr';

const useState = React.useState;
const useEffect = React.useEffect;
const useRef = React.useRef;

const log = (key) => R.tap((value) => console.log(key, value));

const _log = R.ifElse(
  () => !!window.sessionStorage.getItem('LOG'),
  log,
  R.always
);

const start = (key) => R.tap(() => console.time(key));

const stop = (key) => R.tap(() => console.timeEnd(key));

const clone = (data) => JSON.parse(JSON.stringify(data));

const classNames = (classes) => classes.filter(Boolean).join(' ');

const parseJSON = R.curry((fallback, json) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    _log('JSON PARSE ERROR')(e);
    return fallback;
  }
});

const fetchJSON = (...args) => fetch(...args).then((res) => res.json());

export {
  R,
  React,
  useState,
  useEffect,
  useRef,
  useSWR,
  log,
  _log,
  start,
  stop,
  clone,
  classNames,
  parseJSON,
  fetchJSON,
};
