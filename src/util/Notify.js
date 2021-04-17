import { NotificationManager } from 'react-notifications';

export default class Notify {
    /**
     *
     * @param {String} message
     * @param {String} title
     */
    static error(message, title = "Error") {
        NotificationManager.error(message, title);
    }
    /**
     *
     * @param {String} message
     * @param {String} title
     */
    static success(message, title = "Success") {
        NotificationManager.success(message, title);
    }

    /**
     *
     * @param {String} message
     * @param {String} title
     */
    static warning(message, title = "Warning") {
        NotificationManager.warning(message, title);
    }

    /**
     *
     * @param {String} message
     * @param {String} title
     */
    static info(message, title = "Information") {
        NotificationManager.info(message, title);
    }

}
