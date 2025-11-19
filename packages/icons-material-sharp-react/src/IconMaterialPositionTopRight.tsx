import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionTopRight = (props: IIcon) => {

  return (
    <Icon
      name='PositionTopRight'

      short_name='PositionTopRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-560h360v-120H360v120ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
};

IconMaterialPositionTopRight.displayName = 'OnesyIconMaterialPositionTopRight';

export default IconMaterialPositionTopRight;
