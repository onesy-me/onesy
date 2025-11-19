import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCheck = (props: IIcon) => {

  return (
    <Icon
      name='MobileCheck'

      short_name='MobileCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m442-360 198-198-56-56-142 142-56-56-56 56 112 112ZM200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
};

IconMaterialMobileCheck.displayName = 'OnesyIconMaterialMobileCheck';

export default IconMaterialMobileCheck;
