import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1k = (props: IIcon) => {

  return (
    <Icon
      name='1k'

      short_name='1k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240Zm-140 0h60v-240H280v60h60v180ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterial1k.displayName = 'OnesyIconMaterial1k';

export default IconMaterial1k;
