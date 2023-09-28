import { Failure, Initialized, Success } from '@abraham/remotedata';
import { computed, customElement, property } from '@polymer/decorators';
import '@polymer/iron-icon';
import '@polymer/paper-button';
import '@polymer/paper-input/paper-input';
import { PaperInputElement } from '@polymer/paper-input/paper-input';
import { html, PolymerElement } from '@polymer/polymer';
import { RootState, store } from '../store';
import { ReduxMixin } from '../store/mixin';
import { subscribe } from '../store/subscribe/actions';
import { initialSubscribeState, SubscribeState } from '../store/subscribe/state';
import { subscribeBlock } from '../utils/data';
import '../utils/icons';
import './shared-styles';

@customElement('subscribe-form-footer')
export class SubscribeFormFooter extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles flex flex-alignment positioning">
        :host {
          --paper-input-container-color: var(--footer-text-color);
          --paper-input-container-focus-color: var(--default-primary-color);
          --paper-input-container-input-color: var(--footer-text-color);
        }

        paper-input {
          padding-bottom: 0;
        }

        paper-input,
        .form-content {
          width: 100%;
        }

        paper-input-container input,
        paper-input-container label {
          font-size: 14px;
        }

        iron-icon {
          margin-bottom: 5px;
        }

        paper-button {
          margin-top: 8px;
          color: var(--secondary-text-color);
        }

        paper-button:hover {
          cursor: pointer;
        }

        paper-button[disabled] {
          background: none;
          padding-right: 0;
        }
      </style>

    `;
  }

  private subscribeBlock = subscribeBlock;

  @property({ type: Object })
  subscribed: SubscribeState = initialSubscribeState;
  @property({ type: String })
  email = '';

  @property({ type: Boolean })
  private validate = false;

  override stateChanged(state: RootState) {
    this.subscribed = state.subscribed;
  }

  private subscribe() {
    this.validate = true;
    const emailInput = this.shadowRoot!.querySelector<PaperInputElement>('#emailInput');

    if ((this.initialized || this.failure) && emailInput?.validate()) {
      store.dispatch(subscribe({ email: this.email }));
    }
  }

  @computed('subscribed')
  private get ctaLabel() {
    return this.subscribed instanceof Success
      ? this.subscribeBlock.subscribed
      : this.subscribeBlock.subscribe;
  }

  @computed('email', 'subscribed')
  private get disabled() {
    return !this.email || this.subscribed instanceof Success;
  }

  @computed('subscribed')
  private get failure() {
    return this.subscribed instanceof Failure;
  }

  @computed('subscribed')
  private get initialized() {
    return this.subscribed instanceof Initialized;
  }
}
