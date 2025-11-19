import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchLeft = (props: IIcon) => {

  return (
    <Icon
      name='SwitchLeft'

      short_name='SwitchLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-200 120-480l280-280v560Zm-60-145v-270L205-480l135 135Zm220 145v-560l280 280-280 280Z"/>
    </Icon>
  );
};

IconMaterialSwitchLeft.displayName = 'OnesyIconMaterialSwitchLeft';

export default IconMaterialSwitchLeft;
