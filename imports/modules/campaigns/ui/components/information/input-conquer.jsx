import React from 'react';
import Modal from 'react-modal';
import { Translate } from 'react-redux-i18n';
import ConquerMap from './conquer-map';

const countries = [{ code: 'BD', name: 'Bangladesh' }, { code: 'BE', name: 'Belgium' }, {
  code: 'BF',
  name: 'Burkina Faso',
}, { code: 'BG', name: 'Bulgaria' }, { code: 'BA', name: 'Bosnia and Herz.' }, {
  code: 'BN',
  name: 'Brunei',
}, { code: 'BO', name: 'Bolivia' }, { code: 'JP', name: 'Japan' }, {
  code: 'BI',
  name: 'Burundi',
}, { code: 'BJ', name: 'Benin' }, { code: 'BT', name: 'Bhutan' }, {
  code: 'JM',
  name: 'Jamaica',
}, { code: 'BW', name: 'Botswana' }, { code: 'BR', name: 'Brazil' }, {
  code: 'BS',
  name: 'Bahamas',
}, { code: 'BY', name: 'Belarus' }, { code: 'BZ', name: 'Belize' }, {
  code: 'RU',
  name: 'Russia',
}, { code: 'RW', name: 'Rwanda' }, { code: 'RS', name: 'Serbia' }, {
  code: 'TL',
  name: 'Timor-Leste',
}, { code: 'TM', name: 'Turkmenistan' }, { code: 'TJ', name: 'Tajikistan' }, {
  code: 'RO',
  name: 'Romania',
}, { code: 'GW', name: 'Guinea-Bissau' }, { code: 'GT', name: 'Guatemala' }, {
  code: 'GR',
  name: 'Greece',
}, { code: 'GQ', name: 'Eq. Guinea' }, { code: 'GY', name: 'Guyana' }, {
  code: 'GE',
  name: 'Georgia',
}, { code: 'GB', name: 'United Kingdom' }, { code: 'GA', name: 'Gabon' }, {
  code: 'GN',
  name: 'Guinea',
}, { code: 'GM', name: 'Gambia' }, { code: 'GL', name: 'Greenland' }, {
  code: 'GH',
  name: 'Ghana',
}, { code: 'OM', name: 'Oman' }, { code: 'TN', name: 'Tunisia' }, {
  code: 'JO',
  name: 'Jordan',
}, { code: 'HR', name: 'Croatia' }, { code: 'HT', name: 'Haiti' }, {
  code: 'HU',
  name: 'Hungary',
}, { code: 'HN', name: 'Honduras' }, { code: 'PR', name: 'Puerto Rico' }, {
  code: 'PS',
  name: 'Palestine',
}, { code: 'PT', name: 'Portugal' }, { code: 'PY', name: 'Paraguay' }, {
  code: 'PA',
  name: 'Panama',
}, { code: 'PG', name: 'Papua New Guinea' }, { code: 'PE', name: 'Peru' }, {
  code: 'PK',
  name: 'Pakistan',
}, { code: 'PH', name: 'Philippines' }, { code: 'PL', name: 'Poland' }, {
  code: 'ZM',
  name: 'Zambia',
}, { code: 'EH', name: 'W. Sahara' }, { code: 'EE', name: 'Estonia' }, {
  code: 'EG',
  name: 'Egypt',
}, { code: 'ZA', name: 'South Africa' }, { code: 'EC', name: 'Ecuador' }, {
  code: 'IT',
  name: 'Italy',
}, { code: 'VN', name: 'Vietnam' }, { code: 'SB', name: 'Solomon Is.' }, {
  code: 'ET',
  name: 'Ethiopia',
}, { code: 'SO', name: 'Somalia' }, { code: 'ZW', name: 'Zimbabwe' }, {
  code: 'ES',
  name: 'Spain',
}, { code: 'ER', name: 'Eritrea' }, { code: 'ME', name: 'Montenegro' }, {
  code: 'MD',
  name: 'Moldova',
}, { code: 'MG', name: 'Madagascar' }, { code: 'MA', name: 'Morocco' }, {
  code: 'UZ',
  name: 'Uzbekistan',
}, { code: 'MM', name: 'Myanmar' }, { code: 'ML', name: 'Mali' }, {
  code: 'MN',
  name: 'Mongolia',
}, { code: 'MK', name: 'Macedonia' }, { code: 'MW', name: 'Malawi' }, {
  code: 'MR',
  name: 'Mauritania',
}, { code: 'UG', name: 'Uganda' }, { code: 'MY', name: 'Malaysia' }, {
  code: 'MX',
  name: 'Mexico',
}, { code: 'IL', name: 'Israel' }, { code: 'FR', name: 'France' }, {
  code: 'XS',
  name: 'Somaliland',
}, { code: 'FI', name: 'Finland' }, { code: 'FJ', name: 'Fiji' }, {
  code: 'FK',
  name: 'Falkland Is.',
}, { code: 'NI', name: 'Nicaragua' }, { code: 'NL', name: 'Netherlands' }, {
  code: 'NO',
  name: 'Norway',
}, { code: 'NA', name: 'Namibia' }, { code: 'VU', name: 'Vanuatu' }, {
  code: 'NC',
  name: 'New Caledonia',
}, { code: 'NE', name: 'Niger' }, { code: 'NG', name: 'Nigeria' }, {
  code: 'NZ',
  name: 'New Zealand',
}, { code: 'NP', name: 'Nepal' }, { code: 'XK', name: 'Kosovo' }, {
  code: 'CI',
  name: 'Côte d\'Ivoire',
}, { code: 'CH', name: 'Switzerland' }, { code: 'CO', name: 'Colombia' }, {
  code: 'CN',
  name: 'China',
}, { code: 'CM', name: 'Cameroon' }, { code: 'CL', name: 'Chile' }, {
  code: 'XC',
  name: 'N. Cyprus',
}, { code: 'CA', name: 'Canada' }, { code: 'CG', name: 'Congo' }, {
  code: 'CF',
  name: 'Central African Rep.',
}, { code: 'CD', name: 'Dem. Rep. Congo' }, { code: 'CZ', name: 'Czech Rep.' }, {
  code: 'CY',
  name: 'Cyprus',
}, { code: 'CR', name: 'Costa Rica' }, { code: 'CU', name: 'Cuba' }, {
  code: 'SZ',
  name: 'Swaziland',
}, { code: 'SY', name: 'Syria' }, { code: 'KG', name: 'Kyrgyzstan' }, {
  code: 'KE',
  name: 'Kenya',
}, { code: 'SS', name: 'S. Sudan' }, { code: 'SR', name: 'Suriname' }, {
  code: 'KH',
  name: 'Cambodia',
}, { code: 'SV', name: 'El Salvador' }, { code: 'SK', name: 'Slovakia' }, {
  code: 'KR',
  name: 'Korea',
}, { code: 'SI', name: 'Slovenia' }, { code: 'KP', name: 'Dem. Rep. Korea' }, {
  code: 'KW',
  name: 'Kuwait',
}, { code: 'SN', name: 'Senegal' }, { code: 'SL', name: 'Sierra Leone' }, {
  code: 'KZ',
  name: 'Kazakhstan',
}, { code: 'SA', name: 'Saudi Arabia' }, { code: 'SE', name: 'Sweden' }, {
  code: 'SD',
  name: 'Sudan',
}, { code: 'DO', name: 'Dominican Rep.' }, { code: 'DJ', name: 'Djibouti' }, {
  code: 'DK',
  name: 'Denmark',
}, { code: 'DE', name: 'Germany' }, { code: 'YE', name: 'Yemen' }, {
  code: 'DZ',
  name: 'Algeria',
}, { code: 'US', name: 'United States' }, { code: 'UY', name: 'Uruguay' }, {
  code: 'LB',
  name: 'Lebanon',
}, { code: 'LA', name: 'Lao PDR' }, { code: 'TW', name: 'Taiwan' }, {
  code: 'TT',
  name: 'Trinidad and Tobago',
}, { code: 'TR', name: 'Turkey' }, { code: 'LK', name: 'Sri Lanka' }, {
  code: 'LV',
  name: 'Latvia',
}, { code: 'LT', name: 'Lithuania' }, { code: 'LU', name: 'Luxembourg' }, {
  code: 'LR',
  name: 'Liberia',
}, { code: 'LS', name: 'Lesotho' }, { code: 'TH', name: 'Thailand' }, {
  code: 'TF',
  name: 'Fr. S. Antarctic Lands',
}, { code: 'TG', name: 'Togo' }, { code: 'TD', name: 'Chad' }, {
  code: 'LY',
  name: 'Libya',
}, { code: 'AE', name: 'United Arab Emirates' }, { code: 'VE', name: 'Venezuela' }, {
  code: 'AF',
  name: 'Afghanistan',
}, { code: 'IQ', name: 'Iraq' }, { code: 'IS', name: 'Iceland' }, {
  code: 'IR',
  name: 'Iran',
}, { code: 'AM', name: 'Armenia' }, { code: 'AL', name: 'Albania' }, {
  code: 'AO',
  name: 'Angola',
}, { code: 'AR', name: 'Argentina' }, { code: 'AU', name: 'Australia' }, {
  code: 'AT',
  name: 'Austria',
}, { code: 'IN', name: 'India' }, { code: 'TZ', name: 'Tanzania' }, {
  code: 'AZ',
  name: 'Azerbaijan',
}, { code: 'IE', name: 'Ireland' }, { code: 'ID', name: 'Indonesia' }, {
  code: 'UA',
  name: 'Ukraine',
}, { code: 'QA', name: 'Qatar' }, { code: 'MZ', name: 'Mozambique' }];

class InputConquer extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.props.input.onBlur();
    this.setState({ modalIsOpen: false });
  }

  handleChange(tags) {
    let validatedTags = tags;
    if (this.props.validation) {
      validatedTags = this.props.validation(tags);
    }
    this.props.input.onChange(validatedTags);
  }

  render() {
    const getTranslation = key => `Campaigns.edit.tabs.information.${key}`;
    return (
      <div className="input-conquer">
        <input
          type="text"
          className="form-control"
          onClick={this.openModal}
          value={this.props.input.value ? this.props.input.value.join(', ') : ''}
          readOnly
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="app-modal"
          contentLabel="Conquer Map"
          ariaHideApp={false}
        >
          <button className="close" onClick={this.closeModal}>
            <i className="icon wb-close-mini" aria-hidden="true" />
          </button>
          <ConquerMap
            close={this.closeModal}
            onChange={this.props.input.onChange}
            value={this.props.input.value}
            countries={countries}
            title={<Translate value={getTranslation('form.conquer')} />}
            save={<Translate value={getTranslation('form.save')} />}
          />

        </Modal>
      </div>
    );
  }
}

export default InputConquer;
