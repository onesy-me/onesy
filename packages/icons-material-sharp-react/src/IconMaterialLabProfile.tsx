import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabProfile = (props: IIcon) => {

  return (
    <Icon
      name='LabProfile'

      short_name='LabProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-480v-80h320v80H320Zm0-160v-80h320v80H320Zm-80 240h359l121 158v-558H240v400Zm0 240h442L560-320H240v160Zm560 80H160v-800h640v800Zm-560-80v-640 640Zm0-160v-80 80Z"/>
    </Icon>
  );
};

IconMaterialLabProfile.displayName = 'OnesyIconMaterialLabProfile';

export default IconMaterialLabProfile;
