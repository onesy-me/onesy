import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNorthW100 = (props: IIcon) => {

  return (
    <Icon
      name='NorthW100'

      short_name='North'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-132v-645L253-564l-19-19 246-246 246 246-19 20-213-213v644h-28Z"/>
    </Icon>
  );
};

IconMaterialNorthW100.displayName = 'OnesyIconMaterialNorthW100';

export default IconMaterialNorthW100;
