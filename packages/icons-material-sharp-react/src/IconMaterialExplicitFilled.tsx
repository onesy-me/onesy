import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExplicitFilled = (props: IIcon) => {

  return (
    <Icon
      name='ExplicitFilled'

      short_name='Explicit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h240v-80H440v-80h160v-80H440v-80h160v-80H360v400ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialExplicitFilled.displayName = 'OnesyIconMaterialExplicitFilled';

export default IconMaterialExplicitFilled;
