import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopMac = (props: IIcon) => {

  return (
    <Icon
      name='DesktopMac'

      short_name='DesktopMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-40l80-80H80v-600h800v600H560l80 80v40H320ZM160-440h640v-320H160v320Zm0 0v-320 320Z"/>
    </Icon>
  );
};

IconMaterialDesktopMac.displayName = 'OnesyIconMaterialDesktopMac';

export default IconMaterialDesktopMac;
