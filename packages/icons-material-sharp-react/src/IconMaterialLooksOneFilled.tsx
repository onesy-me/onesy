import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooksOneFilled = (props: IIcon) => {

  return (
    <Icon
      name='LooksOneFilled'

      short_name='LooksOne'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280h80v-400H400v80h80v320Zm360 160H120v-720h720v720Z"/>
    </Icon>
  );
};

IconMaterialLooksOneFilled.displayName = 'OnesyIconMaterialLooksOneFilled';

export default IconMaterialLooksOneFilled;
