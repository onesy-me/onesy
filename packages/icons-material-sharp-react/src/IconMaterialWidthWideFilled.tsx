import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthWideFilled = (props: IIcon) => {

  return (
    <Icon
      name='WidthWideFilled'

      short_name='WidthWide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h80v-480h-80v480Zm560 0h80v-480h-80v480Z"/>
    </Icon>
  );
};

IconMaterialWidthWideFilled.displayName = 'OnesyIconMaterialWidthWideFilled';

export default IconMaterialWidthWideFilled;
