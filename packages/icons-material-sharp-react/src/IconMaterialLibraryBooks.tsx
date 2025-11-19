import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryBooks = (props: IIcon) => {

  return (
    <Icon
      name='LibraryBooks'

      short_name='LibraryBooks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Z"/>
    </Icon>
  );
};

IconMaterialLibraryBooks.displayName = 'OnesyIconMaterialLibraryBooks';

export default IconMaterialLibraryBooks;
