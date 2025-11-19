import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionBottomRight = (props: IIcon) => {

  return (
    <Icon
      name='PositionBottomRight'

      short_name='PositionBottomRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h360v-120H360v120ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
};

IconMaterialPositionBottomRight.displayName = 'OnesyIconMaterialPositionBottomRight';

export default IconMaterialPositionBottomRight;
