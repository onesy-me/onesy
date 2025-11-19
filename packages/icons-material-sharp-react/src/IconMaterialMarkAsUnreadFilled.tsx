import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkAsUnreadFilled = (props: IIcon) => {

  return (
    <Icon
      name='MarkAsUnreadFilled'

      short_name='MarkAsUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-280v-430l340-170 392 200H637L420-790 160-661v381H80Zm120 160v-520h680v520H200Zm340-226 260-134v-80L540-426 280-560v80l260 134Z"/>
    </Icon>
  );
};

IconMaterialMarkAsUnreadFilled.displayName = 'OnesyIconMaterialMarkAsUnreadFilled';

export default IconMaterialMarkAsUnreadFilled;
