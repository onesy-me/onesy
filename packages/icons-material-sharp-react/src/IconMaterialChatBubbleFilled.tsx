import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatBubbleFilled = (props: IIcon) => {

  return (
    <Icon
      name='ChatBubbleFilled'

      short_name='ChatBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v640H240L80-80Z"/>
    </Icon>
  );
};

IconMaterialChatBubbleFilled.displayName = 'OnesyIconMaterialChatBubbleFilled';

export default IconMaterialChatBubbleFilled;
