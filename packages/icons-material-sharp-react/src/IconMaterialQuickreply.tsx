import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickreply = (props: IIcon) => {

  return (
    <Icon
      name='Quickreply'

      short_name='Quickreply'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v320h-80v-240H160v525l46-45h394v80H240L80-80Zm80-240v-480 480ZM760-40v-200h-80v-240h200l-68 160h88L760-40Z"/>
    </Icon>
  );
};

IconMaterialQuickreply.displayName = 'OnesyIconMaterialQuickreply';

export default IconMaterialQuickreply;
