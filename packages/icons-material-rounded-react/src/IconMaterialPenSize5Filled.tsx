import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPenSize5Filled = (props: IIcon) => {

  return (
    <Icon
      name='PenSize5Filled'

      short_name='PenSize5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M235-235q-35-35-35-85t35-85l320-320q35-35 85-35t85 35q35 35 35 85t-35 85L405-235q-35 35-85 35t-85-35Z"/>
    </Icon>
  );
};

IconMaterialPenSize5Filled.displayName = 'OnesyIconMaterialPenSize5Filled';

export default IconMaterialPenSize5Filled;
