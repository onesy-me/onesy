import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMaximizeW100 = (props: IIcon) => {

  return (
    <Icon
      name='MaximizeW100'

      short_name='Maximize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-760q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Z"/>
    </Icon>
  );
};

IconMaterialMaximizeW100.displayName = 'OnesyIconMaterialMaximizeW100';

export default IconMaterialMaximizeW100;
