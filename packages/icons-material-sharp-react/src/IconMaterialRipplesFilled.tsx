import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRipplesFilled = (props: IIcon) => {

  return (
    <Icon
      name='RipplesFilled'

      short_name='Ripples'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M542-760q-11 18-16.5 38.5T520-680q0 66 47 113t113 47q21 0 41.5-5.5T760-542v-218H542ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialRipplesFilled.displayName = 'OnesyIconMaterialRipplesFilled';

export default IconMaterialRipplesFilled;
