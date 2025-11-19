import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartphoneFilled = (props: IIcon) => {

  return (
    <Icon
      name='SmartphoneFilled'

      short_name='Smartphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v880H200Zm80-200h400v-480H280v480Z"/>
    </Icon>
  );
};

IconMaterialSmartphoneFilled.displayName = 'OnesyIconMaterialSmartphoneFilled';

export default IconMaterialSmartphoneFilled;
