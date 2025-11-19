import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialButtonsAltFilled = (props: IIcon) => {

  return (
    <Icon
      name='ButtonsAltFilled'

      short_name='ButtonsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-480h800v480H80Zm210-120h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Z"/>
    </Icon>
  );
};

IconMaterialButtonsAltFilled.displayName = 'OnesyIconMaterialButtonsAltFilled';

export default IconMaterialButtonsAltFilled;
