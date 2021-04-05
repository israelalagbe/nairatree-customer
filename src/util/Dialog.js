import alertify from 'alertifyjs';

export default class Dialog {
  static confirm(message, title = 'Confirmation'){
    return new Promise((resolve, reject) => {
      alertify.confirm(title, message,
        function () {
          resolve(true)
        },
        function () {
          resolve(false)
        }).resizeTo(100, 100).set('labels', {ok:'Yes', cancel:'No'});
    })
  }
}
