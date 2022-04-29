const express=require("express");
const app=express();

const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("d72eaa6e253d95441f1215c0cf9e4e5d449655178c1a1578bac8ac0cbd5fcb2e");

const params = {
  engine: "google_jobs",
  google_domain: "google.co.in",
  q: "software",
  hl: "hi",
  gl: "in",
  location: "Maharashtra, India",
  domain: "software"
};

const callback = function(data) {
  console.log(data);
};

// Show result as JSON
search.json(params, callback);