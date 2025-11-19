import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCharge = (props: IIcon) => {

  return (
    <Icon
      name='MobileCharge'

      short_name='MobileCharge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m460-280 120-240h-80v-160L380-440h80v160ZM200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
};

IconMaterialMobileCharge.displayName = 'OnesyIconMaterialMobileCharge';

export default IconMaterialMobileCharge;
