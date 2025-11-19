import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCheck = (props: IIcon) => {

  return (
    <Icon
      name='FolderCheck'

      short_name='FolderCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m434-297 226-227-56-56-170 170-85-85-57 57 142 141ZM80-160v-640h320l80 80h400v560H80Zm80-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialFolderCheck.displayName = 'OnesyIconMaterialFolderCheck';

export default IconMaterialFolderCheck;
