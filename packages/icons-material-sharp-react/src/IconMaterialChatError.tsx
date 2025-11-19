import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatError = (props: IIcon) => {

  return (
    <Icon
      name='ChatError'

      short_name='ChatError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-400 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialChatError.displayName = 'OnesyIconMaterialChatError';

export default IconMaterialChatError;
