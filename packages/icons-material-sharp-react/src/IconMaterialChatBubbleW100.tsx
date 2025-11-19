import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatBubbleW100 = (props: IIcon) => {

  return (
    <Icon
      name='ChatBubbleW100'

      short_name='ChatBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialChatBubbleW100.displayName = 'OnesyIconMaterialChatBubbleW100';

export default IconMaterialChatBubbleW100;
