import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMissedOutgoing = (props: IIcon) => {

  return (
    <Icon
      name='CallMissedOutgoing'

      short_name='CallMissedOutgoing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z"/>
    </Icon>
  );
};

IconMaterialCallMissedOutgoing.displayName = 'OnesyIconMaterialCallMissedOutgoing';

export default IconMaterialCallMissedOutgoing;
