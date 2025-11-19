import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendFilled = (props: IIcon) => {

  return (
    <Icon
      name='SendFilled'

      short_name='Send'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z"/>
    </Icon>
  );
};

IconMaterialSendFilled.displayName = 'OnesyIconMaterialSendFilled';

export default IconMaterialSendFilled;
