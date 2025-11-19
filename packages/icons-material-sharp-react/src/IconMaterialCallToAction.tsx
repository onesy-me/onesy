import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallToAction = (props: IIcon) => {

  return (
    <Icon
      name='CallToAction'

      short_name='CallToAction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h480v-120H240v120ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialCallToAction.displayName = 'OnesyIconMaterialCallToAction';

export default IconMaterialCallToAction;
