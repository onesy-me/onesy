import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsAlt = (props: IIcon) => {

  return (
    <Icon
      name='DirectionsAlt'

      short_name='DirectionsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-48 48-480l432-432 432 432L480-48Zm0-112 320-320-320-320-320 320 320 320Zm0-120 200-200-200-200-56 56 102 104H280v80h246L424-336l56 56Zm0-200Z"/>
    </Icon>
  );
};

IconMaterialDirectionsAlt.displayName = 'OnesyIconMaterialDirectionsAlt';

export default IconMaterialDirectionsAlt;
