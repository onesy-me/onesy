import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResponsiveLayout = (props: IIcon) => {

  return (
    <Icon
      name='ResponsiveLayout'

      short_name='ResponsiveLayout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-360q0-33 23.5-56.5T200-640h120v-120q0-33 23.5-56.5T400-840h360q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200Zm520 0h120v-560H400v120h160q33 0 56.5 23.5T640-560v360Zm-240 0h160v-360H400v360Zm-200 0h120v-360H200v360Z"/>
    </Icon>
  );
};

IconMaterialResponsiveLayout.displayName = 'OnesyIconMaterialResponsiveLayout';

export default IconMaterialResponsiveLayout;
