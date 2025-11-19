import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIndeterminateCheckBox = (props: IIcon) => {

  return (
    <Icon
      name='IndeterminateCheckBox'

      short_name='IndeterminateCheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440h400v-80H280v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialIndeterminateCheckBox.displayName = 'OnesyIconMaterialIndeterminateCheckBox';

export default IconMaterialIndeterminateCheckBox;
