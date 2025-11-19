import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderFilled = (props: IIcon) => {

  return (
    <Icon
      name='FolderFilled'

      short_name='Folder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Z"/>
    </Icon>
  );
};

IconMaterialFolderFilled.displayName = 'OnesyIconMaterialFolderFilled';

export default IconMaterialFolderFilled;
