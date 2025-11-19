import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopMac = (props: IIcon) => {

  return (
    <Icon
      name='DesktopMac'

      short_name='DesktopMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240H160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H560l74 74q2 2 6 14v12q0 8-6 14t-14 6H334q-6 0-10-4t-4-10v-20q0-2 4-10l76-76ZM160-440h640v-320H160v320Zm0 0v-320 320Z"/>
    </Icon>
  );
};

IconMaterialDesktopMac.displayName = 'OnesyIconMaterialDesktopMac';

export default IconMaterialDesktopMac;
