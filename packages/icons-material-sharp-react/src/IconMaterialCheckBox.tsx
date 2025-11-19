import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckBox = (props: IIcon) => {

  return (
    <Icon
      name='CheckBox'

      short_name='CheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialCheckBox.displayName = 'OnesyIconMaterialCheckBox';

export default IconMaterialCheckBox;
