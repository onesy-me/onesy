import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreateNewFolder = (props: IIcon) => {

  return (
    <Icon
      name='CreateNewFolder'

      short_name='CreateNewFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm80-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm400-80h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
};

IconMaterialCreateNewFolder.displayName = 'OnesyIconMaterialCreateNewFolder';

export default IconMaterialCreateNewFolder;
