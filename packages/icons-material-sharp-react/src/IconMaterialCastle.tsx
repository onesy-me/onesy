import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastle = (props: IIcon) => {

  return (
    <Icon
      name='Castle'

      short_name='Castle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-480h80v80h80v-320h80v80h80v-80h80v80h80v-80h80v80h80v-80h80v320h80v-80h80v480H560v-200H400v200H40Zm80-80h200v-200h320v200h200v-240H680v-240H280v240H120v240Zm240-280h80v-120h-80v120Zm160 0h80v-120h-80v120Zm-40 40Z"/>
    </Icon>
  );
};

IconMaterialCastle.displayName = 'OnesyIconMaterialCastle';

export default IconMaterialCastle;
