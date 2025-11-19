import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkCellFilled = (props: IIcon) => {

  return (
    <Icon
      name='NetworkCellFilled'

      short_name='NetworkCell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v800H80Zm600-80h120v-526L680-566v406Z"/>
    </Icon>
  );
};

IconMaterialNetworkCellFilled.displayName = 'OnesyIconMaterialNetworkCellFilled';

export default IconMaterialNetworkCellFilled;
