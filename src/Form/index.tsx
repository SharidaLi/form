import { attachPropertiesToComponent } from '../utils/utils';
import { Form } from './form';
import { FormItem } from './form-item';
import useForm from './useForm';

export default attachPropertiesToComponent(Form, {
  Item: FormItem,
  useForm,
});
