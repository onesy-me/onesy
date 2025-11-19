import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMmsFilled = (props: IIcon) => {

  return (
    <Icon
      name='MmsFilled'

      short_name='Mms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h480L570-600 450-440l-90-120-120 160ZM80-80v-800h800v640H240L80-80Z"/>
    </Icon>
  );
};

IconMaterialMmsFilled.displayName = 'OnesyIconMaterialMmsFilled';

export default IconMaterialMmsFilled;
