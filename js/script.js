// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function enterClicked() {
  // input
  const Streetnumber = document.getElementById("Street-number").value
  const Streetname = parseInt(document.getElementById("Street-name").value)
  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + Streetnumber + ", " + Streetname + "."
}
