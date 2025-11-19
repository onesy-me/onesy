import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextFields = (props: IIcon) => {

  return (
    <Icon
      name='TextFields'

      short_name='TextFields'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-520H80v-120h520v120H400v520H280Zm360 0v-320H520v-120h360v120H760v320H640Z"/>
    </Icon>
  );
};

IconMaterialTextFields.displayName = 'OnesyIconMaterialTextFields';

export default IconMaterialTextFields;
