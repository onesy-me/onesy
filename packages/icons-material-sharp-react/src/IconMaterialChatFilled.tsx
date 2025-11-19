import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatFilled = (props: IIcon) => {

  return (
    <Icon
      name='ChatFilled'

      short_name='Chat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v640H240L80-80Zm160-320h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80Z"/>
    </Icon>
  );
};

IconMaterialChatFilled.displayName = 'OnesyIconMaterialChatFilled';

export default IconMaterialChatFilled;
