import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='SquareW100Filled'

      short_name='Square'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Z"/>
    </Icon>
  );
};

IconMaterialSquareW100Filled.displayName = 'OnesyIconMaterialSquareW100Filled';

export default IconMaterialSquareW100Filled;
