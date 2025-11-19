import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionBottomLeftFilled = (props: IIcon) => {

  return (
    <Icon
      name='PositionBottomLeftFilled'

      short_name='PositionBottomLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h360v-120H240v120ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialPositionBottomLeftFilled.displayName = 'OnesyIconMaterialPositionBottomLeftFilled';

export default IconMaterialPositionBottomLeftFilled;
