import { LightningElement } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { api, wire } from 'lwc';

const CONTACT_FIELDS = ['Contact.Name', 'Contact.Email', 'Contact.Phone'];
const ACCOUNT_FIELDS = ['Account.Name', 'Account.Industry'];

export default class CustomerProfileViewer extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: CONTACT_FIELDS })
    contact;

    @wire(getRecord, { recordId: '$recordId', fields: ACCOUNT_FIELDS })
    account;

    connectedCallback() {
        console.log('Record ID:', this.recordId);
    }

    renderedCallback() {
        console.log('Contact Data:', this.contact.data);
        console.log('Contact Error:', this.contact.error);
    }
}