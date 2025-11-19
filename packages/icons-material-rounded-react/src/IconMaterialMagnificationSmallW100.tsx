import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnificationSmallW100 = (props: IIcon) => {

  return (
    <Icon
      name='MagnificationSmallW100'

      short_name='MagnificationSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Zm120-306q23 0 38.5-15.5T334-600q0-23-15.5-38.5T280-654q-23 0-38.5 15.5T226-600q0 23 15.5 38.5T280-546Z"/>
    </Icon>
  );
};

IconMaterialMagnificationSmallW100.displayName = 'OnesyIconMaterialMagnificationSmallW100';

export default IconMaterialMagnificationSmallW100;
