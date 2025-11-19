import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryBooksFilled = (props: IIcon) => {

  return (
    <Icon
      name='LibraryBooksFilled'

      short_name='LibraryBooks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
};

IconMaterialLibraryBooksFilled.displayName = 'OnesyIconMaterialLibraryBooksFilled';

export default IconMaterialLibraryBooksFilled;
