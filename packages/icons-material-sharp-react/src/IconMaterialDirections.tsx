import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirections = (props: IIcon) => {

  return (
    <Icon
      name='Directions'

      short_name='Directions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-360h80v-120h140v100l140-140-140-140v100H320v200ZM480-48 48-480l432-432 432 432L480-48Zm0-112 320-320-320-320-320 320 320 320Zm0-320Z"/>
    </Icon>
  );
};

IconMaterialDirections.displayName = 'OnesyIconMaterialDirections';

export default IconMaterialDirections;
