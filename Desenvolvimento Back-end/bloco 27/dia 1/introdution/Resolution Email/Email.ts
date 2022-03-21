class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor(
    from: string,
    to: string,
    subject: string,
    message: string,
  ) {
    this._from = from;
    this._to = to;
    this._message = message;
    this._subject = '';
    this._subject = subject;
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  get subject(): string {
    return this._subject;
  }

  get from(): string { return this._from; }

  get to(): string { return this._to; }

  get content(): string {
    return `
    From ${this._from} to ${this._to}
    ${this.subject}

    ${this._message}`;
  }
}

class MailList {
  constructor(private mailList: Email[] = []) { }

  get all(): Email[] { return this.mailList; }

  getByEmailFrom(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAddress);
  }

  getByEmailTo(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }

  getBySubject(searchString: string): Email[] {
    return this.mailList.filter(
      (mail) => mail.subject.indexOf(searchString) !== -1
    );
  }

  addEmail(newMail: Email): void { this.mailList.push(newMail); }

  removeEmail(mailToRemove: Email): void {
    this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
  }
}

// Para testar
const email1 = new Email(
  'me@personalmail.com',
  'friend@personalmail.com',
  'Car wash',
  'There\'s a new car wash in town. Did you know?'
);
const email2 = new Email(
  'friend@personalmail.com',
  'me@personalmail.com',
  'Reply - Car wash',
  'Great! My car is really dirty. How much do they charge?'
);
const email3 = new Email(
  'me@personalmail.com',
  'friend@personalmail.com',
  'Reply - Reply - Car wash',
  '$5.00, and you get a free polishing cloth'
);
const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  'Day off monday',
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`
);
const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'Reply - Day off monday',
  'The entire company will have a day off on monday =D'
);

const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);

console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getByEmailFrom('me@personalmail.com').forEach(
  (mail) => console.log(mail.content)
);

const email6 = new Email(
  'me@personalmail.com',
  'friend2@personalmail.com',
  'Day off monday',
  `Oh yes!
   My boss says we\'ll have Monday off.
   Want to go to the movies?`
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente

console.log('------ personalMailList.getBySubject(\'Day off\'):');
personalMailList.getBySubject('Day off').forEach(
  (mail) => console.log(mail.content)
);
personalMailList.removeEmail(email5);

console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(
  (mail) => console.log(mail.content)
);

console.log('------ personalMailList.all:');
personalMailList.all.forEach(
  (mail) => console.log(mail.content)
);