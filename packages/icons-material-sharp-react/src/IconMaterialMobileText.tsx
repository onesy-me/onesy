import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileText = (props: IIcon) => {

  return (
    <Icon
      name='MobileText'

      short_name='MobileText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-480h320v-80H320v80ZM200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
};

IconMaterialMobileText.displayName = 'OnesyIconMaterialMobileText';

export default IconMaterialMobileText;
