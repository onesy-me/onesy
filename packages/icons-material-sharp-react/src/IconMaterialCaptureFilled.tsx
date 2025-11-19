import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCaptureFilled = (props: IIcon) => {

  return (
    <Icon
      name='CaptureFilled'

      short_name='Capture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h480v-320H240v320ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialCaptureFilled.displayName = 'OnesyIconMaterialCaptureFilled';

export default IconMaterialCaptureFilled;
