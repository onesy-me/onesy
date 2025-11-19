import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareW100 = (props: IIcon) => {

  return (
    <Icon
      name='SquareW100'

      short_name='Square'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialSquareW100.displayName = 'OnesyIconMaterialSquareW100';

export default IconMaterialSquareW100;
