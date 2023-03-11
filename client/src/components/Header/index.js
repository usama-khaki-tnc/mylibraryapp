import React, { useState, useEffect } from "react";

export default function Header() {
  return (
    <header className="header d-flex justify-content-between px-4">
      <div className="logo-container">
        <a href="/">
          <img src="/logo1.png" alt="" />
        </a>
      </div>
    </header>
  )
}