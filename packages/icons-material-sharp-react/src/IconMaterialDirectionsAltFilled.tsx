import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsAltFilled = (props: IIcon) => {

  return (
    <Icon
      name='DirectionsAltFilled'

      short_name='DirectionsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-48 48-480l432-432 432 432L480-48Zm0-232 200-200-200-200-56 56 102 104H280v80h246L424-336l56 56Z"/>
    </Icon>
  );
};

IconMaterialDirectionsAltFilled.displayName = 'OnesyIconMaterialDirectionsAltFilled';

export default IconMaterialDirectionsAltFilled;
