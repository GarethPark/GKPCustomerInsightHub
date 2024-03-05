import { LightningElement } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { api, wire } from 'lwc';
import { getFieldValue } from 'lightning/uiRecordApi';

const CONTACT_FIELDS = ['Contact.Name', 'Contact.Email', 'Contact.Phone'];

export default class CustomerProfileViewer extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: CONTACT_FIELDS })
    contact;

    get name() {
        //console.log('name record id ' + this.recordId);
        return this.contact.data.fields.Name.value;
    }

    connectedCallback() {
        console.log('Record ID:', this.recordId);
    }

    renderedCallback() {
        console.log('Contact Data:', this.contact.data);
        console.log('Contact Error:', this.contact.error);
    }
}