import { attachPropertiesToComponent } from '../utils';
import { Form } from './form';
import { FormItem } from './form-item';

export default attachPropertiesToComponent(Form, {
  Item: FormItem,
  // useForm,
});
