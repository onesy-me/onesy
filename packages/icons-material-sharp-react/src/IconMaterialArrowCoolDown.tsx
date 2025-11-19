import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCoolDown = (props: IIcon) => {

  return (
    <Icon
      name='ArrowCoolDown'

      short_name='ArrowCoolDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 200-360l56-57 184 184v-287h80v287l184-183 56 56L480-80Zm-40-520v-120h80v120h-80Zm0-200v-80h80v80h-80Z"/>
    </Icon>
  );
};

IconMaterialArrowCoolDown.displayName = 'OnesyIconMaterialArrowCoolDown';

export default IconMaterialArrowCoolDown;
