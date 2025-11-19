import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerInput = (props: IIcon) => {

  return (
    <Icon
      name='PowerInput'

      short_name='PowerInput'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"/>
    </Icon>
  );
};

IconMaterialPowerInput.displayName = 'OnesyIconMaterialPowerInput';

export default IconMaterialPowerInput;
