import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomPanelClose = (props: IIcon) => {

  return (
    <Icon
      name='BottomPanelClose'

      short_name='BottomPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-500 160-160H320l160 160ZM200-200h560v-120H200v120Zm0-200h560v-360H200v360Zm0 80v120-120Zm-80 200v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialBottomPanelClose.displayName = 'OnesyIconMaterialBottomPanelClose';

export default IconMaterialBottomPanelClose;
