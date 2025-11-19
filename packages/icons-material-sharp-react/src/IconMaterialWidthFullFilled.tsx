import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthFullFilled = (props: IIcon) => {

  return (
    <Icon
      name='WidthFullFilled'

      short_name='WidthFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h40v-480h-40v480Zm600 0h40v-480h-40v480Z"/>
    </Icon>
  );
};

IconMaterialWidthFullFilled.displayName = 'OnesyIconMaterialWidthFullFilled';

export default IconMaterialWidthFullFilled;
