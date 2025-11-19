import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteSweep = (props: IIcon) => {

  return (
    <Icon
      name='DeleteSweep'

      short_name='DeleteSweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-240v-80h160v80H600Zm0-320v-80h280v80H600Zm0 160v-80h240v80H600ZM120-640H80v-80h160v-60h160v60h160v80h-40v440H120v-440Zm80 0v360h240v-360H200Zm0 0v360-360Z"/>
    </Icon>
  );
};

IconMaterialDeleteSweep.displayName = 'OnesyIconMaterialDeleteSweep';

export default IconMaterialDeleteSweep;
