var cc = myform.cardcode;
var form = document.getElementById('form2');
events = [form, 'change', 'blur', 'keyup'];
for (var i in events) {
    cc.addEventListener(events[i], formatCardCode, false);
}
function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}