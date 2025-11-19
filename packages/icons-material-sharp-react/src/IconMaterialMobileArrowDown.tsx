import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileArrowDown = (props: IIcon) => {

  return (
    <Icon
      name='MobileArrowDown'

      short_name='MobileArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-320 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160ZM200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
};

IconMaterialMobileArrowDown.displayName = 'OnesyIconMaterialMobileArrowDown';

export default IconMaterialMobileArrowDown;
