import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDialogs = (props: IIcon) => {

  return (
    <Icon
      name='Dialogs'

      short_name='Dialogs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h320v-320H320v320ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialDialogs.displayName = 'OnesyIconMaterialDialogs';

export default IconMaterialDialogs;
