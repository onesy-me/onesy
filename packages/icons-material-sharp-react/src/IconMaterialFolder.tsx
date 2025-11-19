import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolder = (props: IIcon) => {

  return (
    <Icon
      name='Folder'

      short_name='Folder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm80-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialFolder.displayName = 'OnesyIconMaterialFolder';

export default IconMaterialFolder;
