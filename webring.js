/* Modified from https://css-tricks.com/how-you-might-build-a-modern-day-webring/ */
const DATA_FOR_WEBRING = `https://gist.githubusercontent.com/skylar32/a88ca7013a6dee68a165d323844c12cb/raw`;

const template = document.createElement("template");
template.innerHTML = `
<style>
#tr-webring {
    width: max-content;
    background: white;
    border: 5px #96b879 solid;
    border-right-color: #668750;
    border-bottom-color: #668750;
    padding: 5px 15px;
}

#tr-webring > div {
    display: flex;
    align-items: center;
}

#tr-webring p {
    font-size: 0.8em;
    margin: 0;
}

#tr-webring h1 {
    font-size: 1em;
    margin: 0;
}

#tr-webring img {
    height: 3em;
    margin-right: 5px;
}

#tr-webring ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
}
</style>

<div id="tr-webring">
    <div>
        <a href="https://thousandroads.net" target="_blank">
            <img src="https://forums.thousandroads.net/styles/shaymin/shaymin_shuffle.png" />
        </a>
        <span>
            <p>This website is a member of the</p>
            <h1><a href="https://thousandroads.net" target=_blank>Thousand Roads</a> Webring</h1>
        </span>
    </div>
    <ul></ul>
</div>`;

class WebRing extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const thisSite = this.getAttribute("site");

    fetch(DATA_FOR_WEBRING)
      .then((response) => response.json())
      .then((sites) => {
        const matchedSiteIndex = sites.findIndex(
          (site) => site.url === thisSite
        );
        const matchedSite = sites[matchedSiteIndex];

        let prevSiteIndex = Math.max(matchedSiteIndex - 1, 0);
        let nextSiteIndex = (matchedSiteIndex + 1) % sites.length;

        const randomSiteIndex = this.getRandomInt(0, sites.length - 1);

        const nav = `
            <li><a href="${sites[prevSiteIndex].url}" target=_blank>&laquo; Prev</a></li>
            <li><a href="${sites[randomSiteIndex].url}" target=_blank>[Random]</a></li>
            <li><a href="${sites[nextSiteIndex].url}" target=_blank>Next &raquo;</a></li>
        `;

        this.shadowRoot
          .querySelector("ul")
          .insertAdjacentHTML("afterbegin", nav);
      });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

window.customElements.define("tr-webring", WebRing);