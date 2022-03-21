var Email = /** @class */ (function () {
    function Email(from, to, subject, message) {
        this._from = from;
        this._to = to;
        this._message = message;
        this._subject = '';
        this._subject = subject;
    }
    Object.defineProperty(Email.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (newSubject) {
            if (newSubject.length <= 40)
                this._subject = newSubject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "from", {
        get: function () { return this._from; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "to", {
        get: function () { return this._to; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "content", {
        get: function () {
            return "\n    From ".concat(this._from, " to ").concat(this._to, "\n    ").concat(this.subject, "\n\n    ").concat(this._message);
        },
        enumerable: false,
        configurable: true
    });
    return Email;
}());
var MailList = /** @class */ (function () {
    function MailList(mailList) {
        if (mailList === void 0) { mailList = []; }
        this.mailList = mailList;
    }
    Object.defineProperty(MailList.prototype, "all", {
        get: function () { return this.mailList; },
        enumerable: false,
        configurable: true
    });
    MailList.prototype.getByEmailFrom = function (mailAddress) {
        return this.mailList.filter(function (mail) { return mail.from === mailAddress; });
    };
    MailList.prototype.getByEmailTo = function (mailAddress) {
        return this.mailList.filter(function (mail) { return mail.to === mailAddress; });
    };
    MailList.prototype.getBySubject = function (searchString) {
        return this.mailList.filter(function (mail) { return mail.subject.indexOf(searchString) !== -1; });
    };
    MailList.prototype.addEmail = function (newMail) { this.mailList.push(newMail); };
    MailList.prototype.removeEmail = function (mailToRemove) {
        this.mailList = this.mailList.filter(function (mail) { return mail !== mailToRemove; });
    };
    return MailList;
}());
// Para testar
var email1 = new Email('me@personalmail.com', 'friend@personalmail.com', 'Car wash', 'There\'s a new car wash in town. Did you know?');
var email2 = new Email('friend@personalmail.com', 'me@personalmail.com', 'Reply - Car wash', 'Great! My car is really dirty. How much do they charge?');
var email3 = new Email('me@personalmail.com', 'friend@personalmail.com', 'Reply - Reply - Car wash', '$5.00, and you get a free polishing cloth');
var email4 = new Email('me@companymail.com', 'ceo@companymail.com', 'Day off monday', "Next Tuesday is a holiday.\n  Are we going to work on Monday?");
var email5 = new Email('ceo@companymail.com', 'me@companymail.com', 'Reply - Day off monday', 'The entire company will have a day off on monday =D');
var personalMailList = new MailList([email1, email2, email3]);
var professionalMailList = new MailList([email4, email5]);
console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getByEmailFrom('me@personalmail.com').forEach(function (mail) { return console.log(mail.content); });
var email6 = new Email('me@personalmail.com', 'friend2@personalmail.com', 'Day off monday', "Oh yes!\n   My boss says we'll have Monday off.\n   Want to go to the movies?");
personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente
console.log('------ personalMailList.getBySubject(\'Day off\'):');
personalMailList.getBySubject('Day off').forEach(function (mail) { return console.log(mail.content); });
personalMailList.removeEmail(email5);
console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(function (mail) { return console.log(mail.content); });
console.log('------ personalMailList.all:');
personalMailList.all.forEach(function (mail) { return console.log(mail.content); });
