import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChips = (props: IIcon) => {

  return (
    <Icon
      name='Chips'

      short_name='Chips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440h400v-80H280v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialChips.displayName = 'OnesyIconMaterialChips';

export default IconMaterialChips;
