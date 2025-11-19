import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeepFilled = (props: IIcon) => {

  return (
    <Icon
      name='KeepFilled'

      short_name='Keep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z"/>
    </Icon>
  );
};

IconMaterialKeepFilled.displayName = 'OnesyIconMaterialKeepFilled';

export default IconMaterialKeepFilled;
