import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerFilled = (props: IIcon) => {

  return (
    <Icon
      name='PowerFilled'

      short_name='Power'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-120v-120L240-380v-300h80v-160h80v160h160v-160h80v160h80v300L580-240v120H380Z"/>
    </Icon>
  );
};

IconMaterialPowerFilled.displayName = 'OnesyIconMaterialPowerFilled';

export default IconMaterialPowerFilled;
