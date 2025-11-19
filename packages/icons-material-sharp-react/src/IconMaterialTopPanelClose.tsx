import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelClose = (props: IIcon) => {

  return (
    <Icon
      name='TopPanelClose'

      short_name='TopPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-300h320L480-460 320-300ZM200-640h560v-120H200v120Zm0 440h560v-360H200v360Zm0-440v-120 120Zm-80 520v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialTopPanelClose.displayName = 'OnesyIconMaterialTopPanelClose';

export default IconMaterialTopPanelClose;
