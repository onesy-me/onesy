import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackupTable = (props: IIcon) => {

  return (
    <Icon
      name='BackupTable'

      short_name='BackupTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h200v-200H320v200Zm0-280h480v-200H320v200Zm280 280h200v-200H600v200Zm-360 80v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
};

IconMaterialBackupTable.displayName = 'OnesyIconMaterialBackupTable';

export default IconMaterialBackupTable;
