import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoChatFilled = (props: IIcon) => {

  return (
    <Icon
      name='VideoChatFilled'

      short_name='VideoChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400h320v-120l80 80v-240l-80 80v-120H280v320ZM80-80v-800h800v640H240L80-80Z"/>
    </Icon>
  );
};

IconMaterialVideoChatFilled.displayName = 'OnesyIconMaterialVideoChatFilled';

export default IconMaterialVideoChatFilled;
