import is, { TIsType, IOptions as IIsOptions } from '@onesy/utils/is';
import isValid, { TIsValidType, IOptions as IIsValidOptions } from '@onesy/utils/isValid';
import { capitalize, cleanValue, equalDeep, merge, stringify } from '@onesy/utils';
import { ValidationError } from '@onesy/errors';

export type IValidateOptions = {
  message?: string;
  uriDecode?: boolean;
  parse?: boolean;
  l?: any;
};

export type IValidateModelValueIs = {
  // l('string') | l('number') | l('boolean') | l('array') | l('object') | 'object-like' | l('class') | l('function') | 'async' | 'map' | 'weakmap' | 'set' | 'weakset' | 'promise' | 'int8array' | 'uint8array' | 'uint8clampedarray' | 'int16array' | 'uint16array' | 'int32array' | 'uint32array' | 'float32array' | 'float64array' | 'bigint64array' | 'biguint64array' | 'typedarray' | 'dataview' | 'arraybuffer' | 'sharedarraybuffer' | 'symbol' | 'error' | 'date' | 'regexp' | 'arguments' | 'null' | 'undefined' | 'blob' | 'buffer' | 'element' | 'simple' | 'not-array-object'
  type?: TIsType;
  options?: IIsOptions;
};

export type IValidateModelValueIsValid = {
  // l('date') | 'unix' | 'timestamp' | 'uuid' | 'binary-string' | 'hexadecimal-string' | l('url') | 'url-path' | 'domain-name' | 'compare' | 'semver' | 'semver-compare' | l('mobile') | l('email') | l('password') | 'hash' | l('color') | 'color-rgb' | 'color-hex' | 'color-hsl' | 'json' | 'min' | 'max' | 'min-max' | 'same-origin' | 'js-chunk' | 'http-method' | 'base64' | 'datauri' | 'pascal-case' | 'camel-case'
  type?: TIsValidType;
  options?: IIsValidOptions;
};

export type IValidateModelValueMethodOptions = {
  form: IForm;
  property: string;
  object: IValidateModelValue;
  options: IValidateOptions;
};

export type IValidateModelValueMethod = (value: any, options: IValidateModelValueMethodOptions) => Promise<any> | any;

export type IValidateModelValueValidations = 'required' | 'is' | 'isValid' | 'of' | 'ofValid' | 'equal' | 'notEqual' | 'equalDeep' | 'notEqualDeep' | 'some' | 'in' | 'every' | 'properties' | 'notProperties' | 'min' | 'max' | 'length' | 'method';

export type IValidateModelMessages = {
  [p in IValidateModelValueValidations]?: string;
};

export type IValidateModelValue = {
  name?: string;

  value?: any;

  message?: string;

  messages?: IValidateModelMessages;

  // validation
  required?: boolean;

  // is
  is?: TIsType | TIsType[] | IValidateModelValueIs | IValidateModelValueIs[];
  isValid?: TIsValidType | TIsValidType[] | IValidateModelValueIsValid | IValidateModelValueIsValid[];

  // of
  // ie. array of strings
  of?: TIsType | TIsType[] | IValidateModelValueIs | IValidateModelValueIs[];
  ofValid?: TIsValidType | TIsValidType[] | IValidateModelValueIsValid | IValidateModelValueIsValid[];

  // equal
  equal?: any;
  notEqual?: any;

  equalDeep?: any;
  notEqualDeep?: any;

  // some
  some?: any[];

  // in, every
  in?: any[];
  every?: any[];

  // properties
  properties?: string[];
  notProperties?: string[];

  // length
  min?: number;
  max?: number;
  // exact
  length?: number;

  // method
  method?: IValidateModelValueMethod | IValidateModelValueMethod[];

  touched?: boolean;

  error?: string;

  capitalize?: boolean;

  propertyNameUpdate?: (value: any) => string;
};

export type IUseFormValues = Record<string, IValidateModelValue>;

export type IForm = {
  value: any;
  values: IUseFormValues;
  valid: boolean;
};

export type IValidateValidation = (property: IValidateModelValue, form: IForm) => void | Error | Promise<void | Error>;

export type IValidateVales = Record<string, IValidateModelValue>;

export const onValidateError = (options: IValidateOptions, model: IValidateModelValue, message?: any) => {
  const error = new ValidationError(message);

  // Entire model message
  if (options.message !== undefined) error.message = options.message;
  // model item message
  else if (model.message !== undefined) error.message = model.message;

  // error
  throw error;
};

const validate = async (model: IValidateModelValue, property: string, form: IForm, options_?: IValidateOptions) => {
  const options = merge((options_ && is('object', options_)) ? options_ : {}, { uriDecode: true, parse: true });

  const l = options?.l || (item => item);

  const name = is('function', model.propertyNameUpdate) ? model.propertyNameUpdate(model.name!) : model.capitalize !== false ? capitalize(model.name!) : model.name!;

  const value = model.value;

  // value validate
  // with options above

  // required
  if (model.required) {
    const response = value;

    if (response === undefined) onValidateError(options, model, model.messages?.required || `${name} ${l('is required')}`);
  }

  // only validate
  // if value is not undefined
  // as it is optional
  if (value === undefined) return;

  // is
  if (model.is !== undefined) {
    const is_ = ((is('array', model.is) ? model.is : [model.is]) as IValidateModelValueIs[]).filter(Boolean);

    for (const item of is_) {
      const itemType = item?.type || item;
      const itemOptions = item?.options || undefined;

      const response = is(itemType as TIsType, value, itemOptions);

      if (!response) onValidateError(options, model, model.messages?.is || `${name} ${l('has to be a valid')} ${cleanValue(l(itemType) as string)}`);
    }
  }

  // is valid
  if (model.isValid !== undefined) {
    const isValid_ = ((is('array', model.isValid) ? model.isValid : [model.isValid]) as IValidateModelValueIsValid[]).filter(Boolean);

    for (const item of isValid_) {
      const itemType = item?.type || item;
      const itemOptions = item?.options || undefined;

      const response = isValid(itemType as TIsValidType, value, itemOptions);

      if (!response) onValidateError(options, model, model.messages?.isValid || `${name} ${l('has to be a valid')} ${cleanValue(l(itemType) as string)}`);
    }
  }

  // of
  if (model.of !== undefined) {
    const of_ = ((is('array', model.of) ? model.of : [model.of]) as IValidateModelValueIs[]).filter(Boolean);

    if (is('array', value)) {
      const response = value.every(valueItem => {
        return of_.some(item => {
          const itemType = item?.type || item;
          const itemOptions = item?.options || undefined;

          return is(itemType as any, valueItem, itemOptions);
        });
      });

      if (!response) onValidateError(options, model, model.messages?.of || `${name} ${l('items have to be one of')} ${of_.map(item => l(item?.type || item)).join(', ')}`);
    }
  }

  // ofValid
  if (model.ofValid !== undefined) {
    const ofValid = ((is('array', model.ofValid) ? model.ofValid : [model.ofValid]) as IValidateModelValueIs[]).filter(Boolean);

    if (is('array', value)) {
      const response = value.every(valueItem => {
        return ofValid.some(item => {
          const itemType = item?.type || item;
          const itemOptions = item?.options || undefined;

          return isValid(itemType as any, valueItem, itemOptions);
        });
      });

      if (!response) onValidateError(options, model, model.messages?.ofValid || `${name} ${l('items have to be one of valid')} ${ofValid.map(item => l(item?.type || item)).join(', ')}`);
    }
  }

  // equal
  if (model.equal !== undefined) {
    const response = value === model.equal;

    if (!response) onValidateError(options, model, model.messages?.equal || `${name} ${l('has to be equal to')} ${stringify(model.equal)}`);
  }

  // not equal
  if (model.notEqual !== undefined) {
    const response = value !== model.equal;

    if (!response) onValidateError(options, model, model.messages?.notEqual || `${name} ${l('has to not be equal to')} ${stringify(model.equal)}`);
  }

  // equal deep
  if (model.equalDeep !== undefined) {
    const response = equalDeep(value, model.equalDeep);

    if (!response) onValidateError(options, model, model.messages?.equalDeep || `${name} ${l('has to be equal to')} ${stringify(model.equalDeep)}`);
  }

  // not equal deep
  if (model.notEqualDeep !== undefined) {
    const response = !equalDeep(value, model.notEqualDeep);

    if (!response) onValidateError(options, model, model.messages?.notEqualDeep || `${name} ${l('has to not be equal to')} ${stringify(model.notEqualDeep)}`);
  }

  // some
  if (is('array', model.some)) {
    let response: boolean;

    if (is('string', value)) {
      response = !!model.some.find(item => equalDeep(value, item));

      if (!response) onValidateError(options, model, model.messages?.some || `${name} ${l('has to be one of')} ${model.some.map(item => stringify(item)).join(', ')}`);
    }
    else if (is('array', value)) {
      response = value.some(item => !!model.some.find(item_ => equalDeep(item, item_)));

      if (!response) onValidateError(options, model, model.messages?.some || `${name} ${l('has to include some of')} ${model.some.map(item => stringify(item)).join(', ')}`);
    }
  }

  // in
  // every
  const every = model.in || model.every;

  if (is('array', every)) {
    let response: boolean;

    if (is('string', value)) {
      response = !!every.find(item => equalDeep(value, item));

      if (!response) onValidateError(options, model, model.messages?.in || model.messages?.every || `${name} ${l('has to be one of')} ${every.map(item => stringify(item)).join(', ')}`);
    }
    else if (is('array', value)) {
      response = value.every(item => !!every.find(item_ => equalDeep(item, item_)));

      if (!response) onValidateError(options, model, model.messages?.in || model.messages?.every || `${name} ${l('has to include one of')} ${every.map(item => stringify(item)).join(', ')}`);
    }
  }

  // properties
  if (is('array', model.properties)) {
    const allowed = model.properties;

    const keys = Object.keys(value);

    const response = keys.every(item => allowed.includes(item));

    if (!response) onValidateError(options, model, model.messages?.properties || `${name} ${l('allowed properties are')} ${allowed.join(', ')}`);
  }

  // not properties
  if (is('array', model.notProperties)) {
    const notAllowed = model.notProperties;

    const keys = Object.keys(value);

    const response = keys.every(item => !notAllowed.includes(item));

    if (!response) onValidateError(options, model, model.messages?.notProperties || `${name} ${l('includes not allowed property')}. ${l('Not allowed properties are')} ${notAllowed.join(', ')}`);
  }

  // min
  // max
  // length
  if (
    ![undefined, null].includes(value) &&
    (
      is('number', model.min) ||
      is('number', model.max) ||
      is('number', model.length)
    )
  ) {
    let length: number = value as number;

    // object
    if (is('object', value)) length = Object.keys(value).length;
    // number
    else if (is('number', value)) length = value;
    // string, array, map, etc.
    else {
      length = value?.length !== undefined ? value?.length : value?.size;
    }

    if (is('number', model.min)) {
      const response = length >= model.min;

      if (!response) onValidateError(options, model, model.messages?.min || `${name} ${l('has to be minimum')} ${model.min}`);
    }

    if (is('number', model.max)) {
      const response = length <= model.max;

      if (!response) onValidateError(options, model, model.messages?.max || `${name} ${l('can be maximum')} ${model.max}`);
    }

    if (is('number', model.length)) {
      const response = length === model.length;

      if (!response) onValidateError(options, model, model.messages?.length || `${name} ${l('has to be exactly')} ${model.length} ${l('in length/size')}`);
    }
  }

  // method
  const methods = ((is('array', model.method) ? model.method : [model.method]) as IValidateModelValueMethod[]).filter(Boolean);

  for (const method_ of methods) {
    try {
      // either throw error or Promise.reject or return false
      const response = await method_(
        value,
        {
          form,
          object: model,
          property,
          options
        }
      );

      if (response !== undefined) {
        if (!response) throw new ValidationError(`${name} ${l('is invalid')}`);
      }
    }
    catch (error) {
      const messageValue = error?.message !== undefined ? error.message : error;

      onValidateError(options, model, model.messages?.method || messageValue);
    }
  }
};

export default validate;
