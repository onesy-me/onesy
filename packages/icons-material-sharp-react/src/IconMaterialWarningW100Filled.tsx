import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarningW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='WarningW100Filled'

      short_name='Warning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m130-172 350-604 350 604H130Zm350-88q8.5 0 14.25-5.75T500-280q0-8.5-5.75-14.25T480-300q-8.5 0-14.25 5.75T460-280q0 8.5 5.75 14.25T480-260Zm-14-80h28v-200h-28v200Z"/>
    </Icon>
  );
};

IconMaterialWarningW100Filled.displayName = 'OnesyIconMaterialWarningW100Filled';

export default IconMaterialWarningW100Filled;
