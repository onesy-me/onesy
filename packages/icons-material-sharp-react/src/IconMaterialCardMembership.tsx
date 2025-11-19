import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardMembership = (props: IIcon) => {

  return (
    <Icon
      name='CardMembership'

      short_name='CardMembership'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360h640v-80H160v80ZM320-80v-200H80v-600h800v600H640v200l-160-80-160 80ZM160-560h640v-240H160v240Zm0 200v-440 440Z"/>
    </Icon>
  );
};

IconMaterialCardMembership.displayName = 'OnesyIconMaterialCardMembership';

export default IconMaterialCardMembership;
