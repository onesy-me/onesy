import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDensityLarge = (props: IIcon) => {

  return (
    <Icon
      name='DensityLarge'

      short_name='DensityLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm0-640v-80h720v80H120Z"/>
    </Icon>
  );
};

IconMaterialDensityLarge.displayName = 'OnesyIconMaterialDensityLarge';

export default IconMaterialDensityLarge;
