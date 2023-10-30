// TODO: enable imports
// import '@polymer/iron-icon';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { openVideoDialog } from '../store/ui/actions';
import { aboutBlock } from '../utils/data';
// TODO: enable imports
// import '../utils/icons';
import { ThemedElement } from './themed-element';

@customElement('about-block')
export class AboutBlock extends ThemedElement {
  static override get styles() {
    return [
      ...super.styles,
      css`
        .container {
          padding-top: 64px;
          display: grid;
          grid-gap: 32px;
          grid-template-columns: 1fr;
        }

        .statistics-block {
          width: 100%;
          display: grid;
          grid-gap: 32px 16px;
          grid-template-columns: repeat(2, 1fr);
        }

        .numbers {
          font-size: 40px;
        }

        .numbers::after {
          content: '';
          display: block;
          height: 2px;
          width: 64px;
          background-color: var(--default-primary-color);
        }

        .label {
          margin-top: 4px;
        }

        @media (min-width: 640px) {
          .content {
            grid-gap: 64px;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          }

          .statistics-block {
            grid-gap: 32px;
          }

          .numbers {
            font-size: 56px;
          }
        }
      `,
    ];
  }

  override render() {
    return html`
      <div class="container">
        <div>
          <h1 class="container-title">${aboutBlock.title}</h1>

          <p>DevFest Auckland 2023: a lively, not-for-profit conference organised by GDG and GDSC Auckland. DevFest is powered by a shared belief that when developers come together to exchange ideas, amazing things can happen! 🤓👩‍💻🧑‍💻</p>

          <b>With your DevFest ticket you get:</b><br/>

          <ul>
          <li>20+ talks across 2 streams covering Mobile, AI, Cloud, Web, Design, Software practices, and Career development 🧠👩‍💻🧑‍💻<br></li>
          <li>World class speakers from Google, industry and community speakers 🌏<br></li>
          <li>Full day conference and after party networking 🤓💃<br></li>
          <li>Fun swag to show off to your friends and colleagues! 😮<br></li>
          <li>Scrumptious lunch and after party pizza, as well as morning and afternoon nibbles catering to all diets 😋<br></li>
          <li>Multiple door prize giveaways during the day 🎁<br></li>
          <li>Use of environmentally conscious materials and packaging ♻️<br></li>
          <li>Plenty of spaces, breaks, and activities throughout the day so you can meet all sorts of new people, from budding students to seasoned professionals, and even the odd Googler! 🎉</li></p>
          </ul>
          
          <p>We’re so excited for you to be a part of our vibrant and diverse community, so what are you waiting for? Sign up now! 🎟️</p>

          <p>${aboutBlock.callToAction.howItWas.description}</p>
        </div>

        <div class="statistics-block">
          <div class="item">
            <div class="numbers">${aboutBlock.statisticsBlock.attendees.number}</div>
            <div class="label">${aboutBlock.statisticsBlock.attendees.label}</div>
          </div>

          <div class="item">
            <div class="numbers">${aboutBlock.statisticsBlock.days.number}</div>
            <div class="label">${aboutBlock.statisticsBlock.days.label}</div>
          </div>

          <div class="item">
            <div class="numbers">${aboutBlock.statisticsBlock.sessions.number}</div>
            <div class="label">${aboutBlock.statisticsBlock.sessions.label}</div>
          </div>

          <div class="item">
            <div class="numbers">${aboutBlock.statisticsBlock.tracks.number}</div>
            <div class="label">${aboutBlock.statisticsBlock.tracks.label}</div>
          </div>
        </div>
      </div>
    `;
  }

  private playVideo() {
    openVideoDialog({
      title: aboutBlock.callToAction.howItWas.label,
      youtubeId: aboutBlock.callToAction.howItWas.youtubeId,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'about-block': AboutBlock;
  }
}
