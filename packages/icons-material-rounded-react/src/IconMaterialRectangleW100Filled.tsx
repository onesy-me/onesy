import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRectangleW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='RectangleW100Filled'

      short_name='Rectangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-416q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688v416q0 24.75-17.62 42.37Q792.75-212 768-212H192Z"/>
    </Icon>
  );
};

IconMaterialRectangleW100Filled.displayName = 'OnesyIconMaterialRectangleW100Filled';

export default IconMaterialRectangleW100Filled;
