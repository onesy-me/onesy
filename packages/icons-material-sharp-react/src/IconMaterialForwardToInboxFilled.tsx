import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForwardToInboxFilled = (props: IIcon) => {

  return (
    <Icon
      name='ForwardToInboxFilled'

      short_name='ForwardToInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m760-40-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM80-160v-640h800v392q-27-16-57.5-24t-62.5-8q-100 0-170 70t-70 170v40H80Zm400-280 320-200v-80L480-520 160-720v80l320 200Z"/>
    </Icon>
  );
};

IconMaterialForwardToInboxFilled.displayName = 'OnesyIconMaterialForwardToInboxFilled';

export default IconMaterialForwardToInboxFilled;
