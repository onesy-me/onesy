import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInbox = (props: IIcon) => {

  return (
    <Icon
      name='Inbox'

      short_name='Inbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z"/>
    </Icon>
  );
};

IconMaterialInbox.displayName = 'OnesyIconMaterialInbox';

export default IconMaterialInbox;
