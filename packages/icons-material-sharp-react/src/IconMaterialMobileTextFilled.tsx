import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileTextFilled = (props: IIcon) => {

  return (
    <Icon
      name='MobileTextFilled'

      short_name='MobileText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-480h320v-80H320v80ZM200-40v-880h560v204h40v192h-40v484H200Z"/>
    </Icon>
  );
};

IconMaterialMobileTextFilled.displayName = 'OnesyIconMaterialMobileTextFilled';

export default IconMaterialMobileTextFilled;
