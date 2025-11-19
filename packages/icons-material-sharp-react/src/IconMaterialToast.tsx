import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToast = (props: IIcon) => {

  return (
    <Icon
      name='Toast'

      short_name='Toast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240h480v-80H240v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialToast.displayName = 'OnesyIconMaterialToast';

export default IconMaterialToast;
