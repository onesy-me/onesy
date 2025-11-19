import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardMembershipFilled = (props: IIcon) => {

  return (
    <Icon
      name='CardMembershipFilled'

      short_name='CardMembership'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-880h800v600H640v200l-160-80-160 80v-200H80v-600Zm80 440h640v-120H160v120Z"/>
    </Icon>
  );
};

IconMaterialCardMembershipFilled.displayName = 'OnesyIconMaterialCardMembershipFilled';

export default IconMaterialCardMembershipFilled;
