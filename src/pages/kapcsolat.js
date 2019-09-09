import React from "react"

import Layout from "../components/layout"
import "../components/form.css"

const About = () => {
  return (
    <Layout>
      <div className="article">
        <header>
          <h1>Kapcsolat</h1>
          <div style={{ marginTop: "10px" }}>
            <p>Köszönöm, hogy az oldalamra látogattál!</p>
            <p>
              Minden véleményt és hozzászólást szívesen fogadok, melyeket az
              alábbi űrlap segítségével tudtok eljuttatni hozzám.
            </p>
          </div>
        </header>
        <section>
          <form
            method="post"
            action="https://formspree.io/schmidtjudit@ymail.com"
            className="form"
          >
            <div className="form-group">
              <input
                type="text"
                name="Név"
                id="name"
                className="form-control"
                placeholder="Név"
                required
              />
              <label className="form-control-placeholder" for="name">
                Név
              </label>
            </div>
            <div className="form-group">
              <input
                id="email"
                type="email"
                name="_replyto"
                className="form-control"
                placeholder="E-mail cím"
                required
              />
              <label className="form-control-placeholder" for="email">
                E-mail cím
              </label>
            </div>
            <div className="form-group">
              <textarea
                name="Üzenet"
                placeholder="Üzenet"
                id="message"
                rows="5"
                className="form-control"
                required
              />
              <label className="form-control-placeholder" for="message">
                Üzenet
              </label>
            </div>
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <input type="submit" value="Küldés" />
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default About
