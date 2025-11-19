import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRightPanelCloseFilled = (props: IIcon) => {

  return (
    <Icon
      name='RightPanelCloseFilled'

      short_name='RightPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m300-320 160-160-160-160v320ZM200-200h360v-560H200v560Zm-80 80v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialRightPanelCloseFilled.displayName = 'OnesyIconMaterialRightPanelCloseFilled';

export default IconMaterialRightPanelCloseFilled;
