import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMissedOutgoing = (props: IIcon) => {

  return (
    <Icon
      name='CallMissedOutgoing'

      short_name='CallMissedOutgoing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-263 120-623l56-57 304 304 224-224H520v-80h320v320h-80v-183L480-263Z"/>
    </Icon>
  );
};

IconMaterialCallMissedOutgoing.displayName = 'OnesyIconMaterialCallMissedOutgoing';

export default IconMaterialCallMissedOutgoing;
