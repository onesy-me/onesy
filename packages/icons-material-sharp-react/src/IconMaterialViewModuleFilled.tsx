import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewModuleFilled = (props: IIcon) => {

  return (
    <Icon
      name='ViewModuleFilled'

      short_name='ViewModule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M627-500v-260h213v260H627Zm-253 0v-260h213v260H374Zm-253 0v-260h213v260H121Zm0 300v-260h213v260H121Zm253 0v-260h213v260H374Zm253 0v-260h213v260H627Z"/>
    </Icon>
  );
};

IconMaterialViewModuleFilled.displayName = 'OnesyIconMaterialViewModuleFilled';

export default IconMaterialViewModuleFilled;
