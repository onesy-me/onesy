import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial2k = (props: IIcon) => {

  return (
    <Icon
      name='2k'

      short_name='2k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240Zm-260 0h180v-60H320v-40h120v-140H260v60h120v40H260v140ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterial2k.displayName = 'OnesyIconMaterial2k';

export default IconMaterial2k;
