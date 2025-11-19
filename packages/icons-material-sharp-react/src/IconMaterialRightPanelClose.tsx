import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRightPanelClose = (props: IIcon) => {

  return (
    <Icon
      name='RightPanelClose'

      short_name='RightPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m300-320 160-160-160-160v320Zm340 120h120v-560H640v560Zm-440 0h360v-560H200v560Zm440 0h120-120Zm-520 80v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialRightPanelClose.displayName = 'OnesyIconMaterialRightPanelClose';

export default IconMaterialRightPanelClose;
