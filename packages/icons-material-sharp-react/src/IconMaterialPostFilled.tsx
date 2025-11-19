import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPostFilled = (props: IIcon) => {

  return (
    <Icon
      name='PostFilled'

      short_name='Post'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm120-280h480v-80H240v80Zm0 120h480v-60H240v60Z"/>
    </Icon>
  );
};

IconMaterialPostFilled.displayName = 'OnesyIconMaterialPostFilled';

export default IconMaterialPostFilled;
