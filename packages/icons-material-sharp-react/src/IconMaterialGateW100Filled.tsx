import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGateW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='GateW100Filled'

      short_name='Gate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M274-274v-302q0-46 32.31-78 32.32-32 77.69-32h82v192h-64v28h64v192H274Zm220 0v-192h64v-28h-64v-192h82q46 0 78 32t32 78v302H494Zm-316-64v-284h28v284h-28Zm576 0v-284h28v284h-28Z"/>
    </Icon>
  );
};

IconMaterialGateW100Filled.displayName = 'OnesyIconMaterialGateW100Filled';

export default IconMaterialGateW100Filled;
