import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan3Filled = (props: IIcon) => {

  return (
    <Icon
      name='Man3Filled'

      short_name='Man3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-70v-280h-80v-320h320v320h-80v280H400Zm80-630-90-90 90-90 90 90-90 90Z"/>
    </Icon>
  );
};

IconMaterialMan3Filled.displayName = 'OnesyIconMaterialMan3Filled';

export default IconMaterialMan3Filled;
