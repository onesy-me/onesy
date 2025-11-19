import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryAdd = (props: IIcon) => {

  return (
    <Icon
      name='LibraryAdd'

      short_name='LibraryAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-400h80v-120h120v-80H600v-120h-80v120H400v80h120v120ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Z"/>
    </Icon>
  );
};

IconMaterialLibraryAdd.displayName = 'OnesyIconMaterialLibraryAdd';

export default IconMaterialLibraryAdd;
