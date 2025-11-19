import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatSize = (props: IIcon) => {

  return (
    <Icon
      name='FormatSize'

      short_name='FormatSize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z"/>
    </Icon>
  );
};

IconMaterialFormatSize.displayName = 'OnesyIconMaterialFormatSize';

export default IconMaterialFormatSize;
