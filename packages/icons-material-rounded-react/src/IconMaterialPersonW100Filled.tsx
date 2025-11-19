import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='PersonW100Filled'

      short_name='Person'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-512q-45 0-76.5-31.5T372-620q0-45 31.5-76.5T480-728q45 0 76.5 31.5T588-620q0 45-31.5 76.5T480-512ZM212-262v-22q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q54 0 108.5 13T698-356q23 11 36.5 30.5T748-284v22q0 13-8.5 21.5T718-232H242q-13 0-21.5-8.5T212-262Z"/>
    </Icon>
  );
};

IconMaterialPersonW100Filled.displayName = 'OnesyIconMaterialPersonW100Filled';

export default IconMaterialPersonW100Filled;
