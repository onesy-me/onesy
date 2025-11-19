import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolbar = (props: IIcon) => {

  return (
    <Icon
      name='Toolbar'

      short_name='Toolbar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-520h560v-120H200v120Zm560 80H200v360h560v-360Zm-560-80v80-80Zm0 0v-120 120Zm0 80v360-360Z"/>
    </Icon>
  );
};

IconMaterialToolbar.displayName = 'OnesyIconMaterialToolbar';

export default IconMaterialToolbar;
