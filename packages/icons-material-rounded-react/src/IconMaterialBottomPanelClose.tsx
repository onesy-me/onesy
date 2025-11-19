import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomPanelClose = (props: IIcon) => {

  return (
    <Icon
      name='BottomPanelClose'

      short_name='BottomPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m508-528 98-98q10-10 5-22t-19-12H368q-14 0-19 12t5 22l98 98q12 12 28 12t28-12Zm252-312q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560ZM200-320v120h560v-120H200Zm560-80v-360H200v360h560Zm-560 80v120-120Z"/>
    </Icon>
  );
};

IconMaterialBottomPanelClose.displayName = 'OnesyIconMaterialBottomPanelClose';

export default IconMaterialBottomPanelClose;
