import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooksOne = (props: IIcon) => {

  return (
    <Icon
      name='LooksOne'

      short_name='LooksOne'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280h80v-400H400v80h80v320Zm360 160H120v-720h720v720Zm-640-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
};

IconMaterialLooksOne.displayName = 'OnesyIconMaterialLooksOne';

export default IconMaterialLooksOne;
