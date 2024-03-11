import { LightningElement } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { api, wire } from 'lwc';
import { getFieldValue } from 'lightning/uiRecordApi';

const CONTACT_FIELDS = [
    'Name',
    'Email',
    'Phone',
    'Title', // Job Title
    'MailingStreet',
    'MailingCity',
    'MailingState',
    'MailingPostalCode',
    'MailingCountry',
    'Birthdate',
    'Description'
];

export default class CustomerProfileViewer extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: CONTACT_FIELDS })
    contact;

    get name() {
        //console.log('name record id ' + this.recordId);
        return this.contact.data.fields.Name.value;
    }

    get jobTitle() {
        return getFieldValue(this.contact.data, 'Title');
    }

    get mailingAddress() {
        const street = getFieldValue(this.contact.data, 'MailingStreet');
        const city = getFieldValue(this.contact.data, 'MailingCity');
        const state = getFieldValue(this.contact.data, 'MailingState');
        const postalCode = getFieldValue(this.contact.data, 'MailingPostalCode');
        const country = getFieldValue(this.contact.data, 'MailingCountry');
        return `${street}, ${city}, ${state}, ${postalCode}, ${country}`;
    }

    get birthdate() {
        return getFieldValue(this.contact.data, 'Birthdate');
    }

    get description() {
        return getFieldValue(this.contact.data, 'Description');
    }

    connectedCallback() {
        console.log('Record ID:', this.recordId);
    }

    renderedCallback() {
        console.log('Contact Data:', this.contact.data);
        console.log('Contact Error:', this.contact.error);
    }
}