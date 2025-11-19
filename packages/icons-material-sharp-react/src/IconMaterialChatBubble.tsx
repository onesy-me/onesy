import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatBubble = (props: IIcon) => {

  return (
    <Icon
      name='ChatBubble'

      short_name='ChatBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialChatBubble.displayName = 'OnesyIconMaterialChatBubble';

export default IconMaterialChatBubble;
