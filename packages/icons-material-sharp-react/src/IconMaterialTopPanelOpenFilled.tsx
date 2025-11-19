import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelOpenFilled = (props: IIcon) => {

  return (
    <Icon
      name='TopPanelOpenFilled'

      short_name='TopPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-300 160-160H320l160 160ZM200-200h560v-360H200v360Zm-80 80v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialTopPanelOpenFilled.displayName = 'OnesyIconMaterialTopPanelOpenFilled';

export default IconMaterialTopPanelOpenFilled;
