import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdGroupFilled = (props: IIcon) => {

  return (
    <Icon
      name='AdGroupFilled'

      short_name='AdGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm240-640h480v-80H320v80Z"/>
    </Icon>
  );
};

IconMaterialAdGroupFilled.displayName = 'OnesyIconMaterialAdGroupFilled';

export default IconMaterialAdGroupFilled;
