import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGradientFilled = (props: IIcon) => {

  return (
    <Icon
      name='GradientFilled'

      short_name='Gradient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm320-400v80h80v-80h-80Zm-160 0v80h80v-80h-80Zm80 80v80h80v-80h-80Zm160 0v80h80v-80h-80Zm-320 0v80h80v-80h-80Zm400-80v80h80v80h80v-80h-80v-80h-80ZM280-360v80h-80v80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h-80v80h-80v-80h-80v80h-80v-80h-80Zm480-160v80-80Zm0 160v80-80Z"/>
    </Icon>
  );
};

IconMaterialGradientFilled.displayName = 'OnesyIconMaterialGradientFilled';

export default IconMaterialGradientFilled;
