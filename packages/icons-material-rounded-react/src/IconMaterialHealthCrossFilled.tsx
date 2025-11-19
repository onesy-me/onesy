import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthCrossFilled = (props: IIcon) => {

  return (
    <Icon
      name='HealthCrossFilled'

      short_name='HealthCross'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-17 0-28.5-11.5T320-160v-160H160q-17 0-28.5-11.5T120-360v-240q0-17 11.5-28.5T160-640h160v-160q0-17 11.5-28.5T360-840h240q17 0 28.5 11.5T640-800v160h160q17 0 28.5 11.5T840-600v240q0 17-11.5 28.5T800-320H640v160q0 17-11.5 28.5T600-120H360Z"/>
    </Icon>
  );
};

IconMaterialHealthCrossFilled.displayName = 'OnesyIconMaterialHealthCrossFilled';

export default IconMaterialHealthCrossFilled;
