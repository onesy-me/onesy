import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncAlt = (props: IIcon) => {

  return (
    <Icon
      name='SyncAlt'

      short_name='SyncAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z"/>
    </Icon>
  );
};

IconMaterialSyncAlt.displayName = 'OnesyIconMaterialSyncAlt';

export default IconMaterialSyncAlt;
