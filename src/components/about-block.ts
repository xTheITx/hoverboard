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
          <p>Interested in VertexAI, Kotlin, GCP, Flutter, Angular, Big Query, Firebase, Machine learning, VR/AR, Material Design, SEO, DevOps, Browsers, Career development, or any number of other Google technologies?
          <br/><br/>
          Then don’t miss the 2023 Auckland DevFest: It’s a fun & welcoming not-for-profit conference, made for and run by developers and led by GDG Auckland. This year we are partnering with a range of local and international speakers to bring you a spectacular showcase of technologies, practices, and career advice that’ll leave you inspired.
          <br/><br/>
          The DevFest is powered by a shared belief that when developers come together to exchange ideas, amazing things can happen!  Join a vibrant and diverse community where everyone can network, share knowledge and enjoy the experience.
          <br/><br/>
          We also want to support our attendees who are experiencing hardship. If you need to access a reduced price ticket in order to attend please reach out to one of the GDG Auckland organisers on the GDG Slack to obtain a discount code.
          <br/><br/>
          <b>With your DevFest ticket you get:</b>
          <ul>
          <li>12+ talks across 2 streams covering Mobile, AI, Cloud, Web, Design, Testing, Software practices, and Career development</li>
          <li>World class speakers from Google, industry and community speakers</li>
          <li>Full day conference and after party networking</li>
          <li>Fun swag to show off to your friends and colleagues!</li>
          <li>Scrumptious lunch, morning and afternoon tea provided</li>
          <li>Multiple door prize giveaways during the day</li>
          <li>Expo booths during breaks so attendees can experience demos and talk to industry professionals</li>
          <li>Networking opportunities throughout the day and at the after party with potential clients or colleagues</li>
          </ul>
          </p>
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
