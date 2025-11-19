import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardFullW100 = (props: IIcon) => {

  return (
    <Icon
      name='KeyboardFullW100'

      short_name='KeyboardFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm-32-188h640v-288q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v288Z"/>
    </Icon>
  );
};

IconMaterialKeyboardFullW100.displayName = 'OnesyIconMaterialKeyboardFullW100';

export default IconMaterialKeyboardFullW100;
