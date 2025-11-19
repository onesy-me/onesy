import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelCloseFilled = (props: IIcon) => {

  return (
    <Icon
      name='TopPanelCloseFilled'

      short_name='TopPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-300h320L480-460 320-300ZM200-200h560v-360H200v360Zm-80 80v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialTopPanelCloseFilled.displayName = 'OnesyIconMaterialTopPanelCloseFilled';

export default IconMaterialTopPanelCloseFilled;
