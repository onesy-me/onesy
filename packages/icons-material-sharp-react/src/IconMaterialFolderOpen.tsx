import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOpen = (props: IIcon) => {

  return (
    <Icon
      name='FolderOpen'

      short_name='FolderOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v80H447l-80-80H160v480l96-320h684L820-160H80Zm164-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z"/>
    </Icon>
  );
};

IconMaterialFolderOpen.displayName = 'OnesyIconMaterialFolderOpen';

export default IconMaterialFolderOpen;
