import {Popup, Toast} from 'popup-ui';
import {colors} from '../../constants';

export const showErrorPopop = (message, description, buttonText, onPress) => {
  Popup.show({
    type: 'Danger',
    title: message,
    textBody: description,
    buttonText: buttonText,
    callback: () => {
      onPress && onPress();
      Popup.hide();
    },
  });
};

export const showSuccessPopop = (message, description, buttonText, onPress) => {
  Popup.show({
    type: 'Success',
    title: message,
    textBody: description,
    buttonText: buttonText,
    callback: () => {
      onPress && onPress();
      Popup.hide();
    },
  });
};

export const showInfoPopop = (message, description, buttonText, onPress) => {
  Popup.show({
    type: 'Warning',
    title: message,
    textBody: description,
    buttonText: buttonText,
    callback: () => {
      onPress && onPress();
      Popup.hide();
    },
  });
};

export const showSuccessToas = (title, text) => {
  Toast.show({
    title: title,
    text: text,
    color: colors.green,
    timing: 3000,
  });
};

export const showErrorToas = (title, text) => {
  Toast.show({
    title: title,
    text: text,
    color: colors.red,
    timing: 3000,
  });
};

export const showInfoToas = (title, text) => {
  Toast.show({
    title: title,
    text: text,
    color: colors.blue,
    timing: 3000,
  });
};
