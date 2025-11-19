import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionTopRightFilled = (props: IIcon) => {

  return (
    <Icon
      name='PositionTopRightFilled'

      short_name='PositionTopRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-560h360v-120H360v120ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialPositionTopRightFilled.displayName = 'OnesyIconMaterialPositionTopRightFilled';

export default IconMaterialPositionTopRightFilled;
