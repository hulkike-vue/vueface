import InputText from './components/inputtext/inputtext.vue';
import InputTextarea from './components/inputtextarea/inputtextarea.vue';
import Button from './components/button/button.vue';
import ProgressSpinner from './components/progressspinner/progressspinner.vue';
import ProgressBar from './components/progressbar/progressbar.vue';
import Checkbox from './components/checkbox/checkbox.vue';
import TristateCheckbox from './components/tristatecheckbox/tristatecheckbox.vue';
import Chart from './components/charts/charts.vue';
import Rating from './components/rating/rating.vue';
import ToggleButton from './components/togglebutton/togglebutton.vue';
import RadioButton from './components/radiobutton/radiobutton.vue';
import Captcha from './components/captcha/captcha.vue';
import Panel from './components/panel/panel.vue';
import Fieldset from './components/fieldset/fieldset.vue';
import Toolbar from './components/toolbar/toolbar.vue';
import Galleria from './components/galleria/galleria.vue';
import Message from './components/message/message.vue';
import Messages from './components/messages/messages.vue';
import Editor from './components/editor/editor.vue';
import Accordion from './components/accordion/accordion.vue';
import AccordionTab from './components/accordion/accordiontab.vue';
import Terminal from './components/terminal/terminal.vue';
import Growl from './components/growl/growl.vue';
import Gmap from './components/gmap/gmap.vue';
import InputSwitch from './components/inputswitch/inputswitch.vue';
import Spinner from './components/spinner/spinner.vue';
import Password from './components/password/password.vue';
import Inplace from './components/inplace/inplace.vue';
import BlockUI from './components/blockui/blockui.vue';
import SideBar from './components/sidebar/sidebar.vue';
import BackToTop from './components/backtotop/backtotop.vue';
import CodeHighlighter from './components/codehighlighter/codehighlighter.vue';
import SelectButton from './components/selectbutton/selectbutton.vue';
import ColorPicker from './components/colorpicker/colorpicker.vue';
import Badge from './components/badge/badge.vue';
import Card from './components/card/card.vue';
import QRCode from './components/qrcode/qrcode.vue';
import ScrollPanel from './components/scrollpanel/scrollpanel.vue';
import Avatar from './components/avatar/avatar.vue';

export const components = {
  InputText,
  InputTextarea,
  Button,
  ProgressSpinner,
  ProgressBar,
  Checkbox,
  TristateCheckbox,
  Chart,
  Rating,
  ToggleButton,
  RadioButton,
  Captcha,
  Panel,
  Fieldset,
  Toolbar,
  Galleria,
  Message,
  Messages,
  Editor,
  Accordion,
  AccordionTab,
  Terminal,
  Growl,
  Gmap,
  InputSwitch,
  Password,
  Spinner,
  Inplace,
  BlockUI,
  SideBar,
  BackToTop,
  SelectButton,
  ColorPicker,
  Badge,
  Card,
  QRCode,
  ScrollPanel,
  Avatar
};

export const directives = {
  CodeHighlighter
};

export default {
  install (Vue, options = {}) {
    for (const key in components) {
      const component = components[key];
      Vue.component(component.name, component);
    }
    for (const key in directives) {
      const directive = directives[key];
      Vue.directive(directive.name, directive);
    }
  }
};
