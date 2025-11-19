import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallToActionFilled = (props: IIcon) => {

  return (
    <Icon
      name='CallToActionFilled'

      short_name='CallToAction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h480v-120H240v120ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialCallToActionFilled.displayName = 'OnesyIconMaterialCallToActionFilled';

export default IconMaterialCallToActionFilled;
