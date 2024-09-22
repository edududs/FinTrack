import {
  useFormField,
  Form as FormPrimitive,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "./Form";


const Form = { Form: FormPrimitive, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, useFormField };

export { useFormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, FormPrimitive as Form };

export default Form;
